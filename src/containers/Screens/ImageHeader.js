import React,{Component} from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/Header/Header';
import '../../assets/custom.css';
import ImageUploader from '../../components/inputs/imageUploader';
import HeaderImageUploader from '../../components/inputs/imageUploader1';
import Button from '../../components/Buttons/Buttons';
import MuTextField from '../../components/inputs/TextField';
import Overlay from 'react-image-overlay';
class App extends Component{
    constructor(props)
{
    super(props);
    this.state={
        uploadedImage:'',
        uploadedHeader:'',
        width:0,
        hieght:0,
        transform:false,
    }
    this.setuploadedIMG = this.setuploadedIMG.bind(this);
    this.setuploadedHeader = this.setuploadedHeader.bind(this);
    this.setHeader= this.setHeader.bind(this);
    this.onHeightChanged = this.onHeightChanged.bind(this);
    this.onWidthChanged = this.onWidthChanged.bind(this);
}
setuploadedHeader=(image)=>{
    this.setState({uploadedHeader:image})
}
onHeightChanged=(value)=>{
    this.setState({height:value})
}
onWidthChanged=(value)=>{
    this.setState({width:value})
}
setuploadedIMG =(image) =>{
    this.setState({uploadedImage:image})
}
setHeader =()=>{
    this.setState({transform:true});
 }
render()
{
    return(<div>
        <Header />
        <div style={{overflow: "hidden", position: "relative", width: '100%' }}>
            <div style={{position:"relative", float:"left", width:"50%" }}>
            <h2 style={{ left: '18px',position: 'relative'}}>Add Header to Image</h2>
            <div id="left">
                <div className="Details">
                    <h3>Upload Images</h3>
                    <div><span className="dims">Width </span><MuTextField  label="Width" name="Width" valueChanged={this.onWidthChanged}/></div>
                    <div><span className="dims">Height </span><MuTextField  label="Height" name="Height" valueChanged={this.onHeightChanged}/></div>
                    <div className="uploader"><span>Upload Image</span><ImageUploader onImageUpload={this.setuploadedIMG} /></div>
                    <div id="selected-image" style={{display:'inline-flex'}} ></div>
                    <div className="uploader"><span>Upload Header Image</span><HeaderImageUploader onImageUpload={this.setuploadedHeader} /></div>
                    <div id="selected-overlay" style={{display:'inline-flex'}} ></div>
                    <Button label="Transform" color='yellowgreen' mleft='22%' onClick={this.setHeader}/>
                    <Link to={`/`} style={{color:"black", textDecoration:"none"}}>
                        <Button label="Finish" color='salmon' onClick={this.onFinish}/>
                        </Link>
                    </div>
                </div>
            </div>
            <div id="right" >
            {this.state.transform?
            <div className="ImageResult">
                <Overlay 
                    url={this.state.uploadedImage} // required
                    overlayUrl={this.state.uploadedHeader} // required
                      imageHeight={'100%'}
                      imageWidth={'100%'}
                    position={'topLeft'}
                    overlayWidth={this.state.width?this.state.width+'px' : '100%'}
                    overlayHeight={this.state.height?this.state.height+'px' :'10%'}
                    overlayPadding={0}
                    watermark={false}
                />
            </div>
            :null}
            </div>
        </div>
        
        
    </div>)
}
}

export default App;
