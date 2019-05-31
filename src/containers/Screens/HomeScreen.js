import React,{Component} from 'react';
import Header from '../../components/Header/Header';
import Options from '../Options/Options';
import '../../assets/custom.css';
class Home extends Component{
render()
{
    return(<div>
        <Header />
        <div style={{overflow: "hidden", position: "relative", width: '100%' }}>
            <div  className="optionWrapper" style={{overflow:'auto',position:"relative", float:"left", width:"50%" }}><Options /></div>
            <div id="intro">
            <p>We provide you with an easy way to perform operations on images .<br/>
                    Select an option and get started.</p></div>
        </div>
    </div>)
}
}

export default Home;