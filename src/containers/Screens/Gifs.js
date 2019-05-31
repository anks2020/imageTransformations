import React,{Component} from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/Header/Header';
import '../../assets/custom.css';
import Button from '../../components/Buttons/Buttons';

class App extends Component{
    
render()
{
    return(<div>
        <Header />
        <div style={{overflow: "hidden", position: "relative", width: '100%' }}>
            <h2 style={{ left: '18px',position: 'relative'}}>Create GIFs</h2>
            <div id="notfound">
            <div className='Oops'>
            <h1 style={{fontSize:70}}>Coming Soon...</h1>
                    <Link to={`/`} style={{color:"black", textDecoration:"none"}}>
                        <Button label="Finish" color='palegoldenrod' onClick={this.onFinish}/>
                        </Link>
                        </div>
        </div>
        </div>
        
        
    </div>)
}
}

export default App;
