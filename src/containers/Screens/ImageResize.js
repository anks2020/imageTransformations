import React,{Component} from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/Header/Header';
import '../../assets/custom.css';
import ImageUploader from '../../components/inputs/imageUploader';
import Button from '../../components/Buttons/Buttons';
import MuTextField from '../../components/inputs/TextField';
import Image from 'react-image-resizer';

class App extends Component{
    constructor(props)
{
    super(props);
    this.state={
        uploadedImage:[],
        width:0,
        hieght:0,
        resize:false
    }
    this.setuploadedIMG = this.setuploadedIMG.bind(this);
    this.resize= this.resize.bind(this);
    this.onHeightChanged = this.onHeightChanged.bind(this);
    this.onWidthChanged = this.onWidthChanged.bind(this);
}
onHeightChanged=(value)=>{
    this.setState({height:value})
}
onWidthChanged=(value)=>{
    this.setState({width:value})
}
setuploadedIMG =(image) =>{
    let imgarr=[...this.state.uploadedImage]
    imgarr.push(image)
    this.setState({
        uploadedImage:imgarr})
}
resize =()=>{
    this.setState({resize:true});
 }
render()
{
    return(<div>
        <Header />
        <div style={{overflow: "hidden", position: "relative", width: '100%' }}>
            <div style={{position:"relative", float:"left", width:"50%" }}>
            <h2 style={{ left: '18px',position: 'relative'}}>Resize Image</h2>
            <div id="left">
                <div className="Details">
                <h3>Upload Image</h3>
                    <div><span className="dims">Width </span><MuTextField  label="Width" name="Width" valueChanged={this.onWidthChanged}/></div>
                    <div><span className="dims">Height </span><MuTextField  label="Height" name="Height" valueChanged={this.onHeightChanged}/></div>
                    <div className="uploader"><span>Upload Image</span><ImageUploader onImageUpload={this.setuploadedIMG} />                    </div><div id="selected-image" ></div>
                    <Button label="Transform" color='yellowgreen' mleft='22%'  onClick={this.resize}/>
                    <Link to={`/`} style={{color:"black", textDecoration:"none"}}>
                        <Button label="Finish" color='salmon' onClick={this.onFinish}/>
                        </Link>
                    </div>
                </div>
            </div>
            <div id="right" >
            {this.state.resize?
            <div className="ImageResult">
            <Image
                src={this.state.uploadedImage.slice(1)}
                height={this.state.height}
                width={this.state.width}
                />
            </div>
            :null}
            </div>
        </div>
    </div>)
}
}

export default App;
