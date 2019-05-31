import React, { Component } from 'react';
import config from '../../config/config';
import uploadIcon from '../../assets/images/upload.png';

class App extends Component {
 
  uploadImage =()=> {
    const r = new XMLHttpRequest()
    const d = new FormData()
    const e = document.getElementsByClassName('input-image')[1].files[0]
    var u
    d.append('image', e)
    r.open('POST', 'https://api.imgur.com/3/image/')
    r.setRequestHeader('Authorization', `Client-ID ${config.client}`)
    r.onreadystatechange = function () {
      if(r.status === 200 && r.readyState === 4) {
        let res = JSON.parse(r.responseText)
        u = `https://i.imgur.com/${res.data.id}.png`

        const d = document.createElement('div')
        d.className = 'image'
        document.getElementsByTagName('body')[0].appendChild(d)
        const i = document.createElement('img')
        i.className = 'image-src'
        i.src = u
        i.width=100
        i.height=100
        document.getElementsByClassName('image')[0].appendChild(i)

        const a = document.createElement('a')
        a.className= 'image-link'
        a.href = u
        document.getElementsByClassName('image')[0].appendChild(a)

        const p = document.createElement('p')
        p.className = 'image-url'
        p.innerHTML = u
        p.style.fontSize=15
        document.getElementsByClassName('image-link')[0].appendChild(p)
        document.getElementById('selected-overlay').appendChild(i)
        document.getElementById('selected-overlay').appendChild(p)
      
      }
      
    }
    r.onload =()=>{
    this.props.onImageUpload(u);
    }
    r.send(d)
    this.props.onImageUpload(u);
  }
  render() {
    return (
      <div className="App" style={{ marginTop: 25, marginLeft: 8, display:'inline-flex'}}>
       <form className='inputform'>
        <label for="uploader"><img src={uploadIcon} height={45} /></label>
          <input type="file" id='uploader' className="input-image" onChange={this.uploadImage.bind(this)} /> 
         </form>
      </div>
    );
  }
}

export default App;