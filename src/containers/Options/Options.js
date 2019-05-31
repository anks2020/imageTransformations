import React from 'react';
import { Link } from "react-router-dom";
import '../../assets/custom.css';
import Resize from '../../assets/images/resize.png';
import Header from '../../assets/images/header.png';
import GIF from '../../assets/images/icons-animation.gif';
import Footer from '../../assets/images/footer.png';
 const options=()=>{
    return(
        <div className='optionrapper'>
            <div class="divSquare" style={{background:'tomato'}}>
                <Link style={{color:"black", textDecoration:"none"}} to={`/imageresize`}>
                    <img  src={Resize} alt="resize" />
                    </Link>
                </div>
            <div class="divSquare" style={{background:'turquoise'}}>
                <Link to={`/imageheader`} style={{color:"black", textDecoration:"none"}}>
                    <img  src={Header} alt="header" style={{width:145}} />
                </Link></div>
            <div style={{clear:'both'}}></div>
            <div class="divSquare"  style={{background:'#ffff00c9'}}>
                <Link to={`/imagefooter`} style={{color:"black", textDecoration:"none"}}>
                    <img src={Footer} alt="footer" />
                </Link>
            </div>
            <div class="divSquare" style={{background:'seagreen'}} >
                <Link to={`/imagegif`} style={{color:"black", textDecoration:"none"}}>
                    <img width="80% !important" src={GIF} alt="gif"  style={{width:'80%'}}/>
                    </Link>
           </div>
        </div>)

}
export default options;