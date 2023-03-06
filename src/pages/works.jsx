import React from "react";
import { Link } from 'react-router-dom';

import photoGir from '../assets/gir.png';
import lll from '../assets/lll.png';
import cover2D from '../assets/2D/Digital/GirlintheSuburbs.png';
import cover3D from '../assets/3D/mothbear/mothbear_model01.png';
import coverSB from '../assets/Sketchbook/Sketchbook-03.jpg';
import coverCo from '../assets/Programming/WebsitePortfolio.png';
import '../style/index.css';


export function Works(){
    
    return (
    <h1>Works</h1>,
    
    
    <div className="wNaviContainer">
      
      <div className="naviCover">
      <Link to="./Sketchbook" target="_blank" rel="noreferrer">
        <img src = {cover2D} alt= {lll}></img>
        <p>2D</p>
      </Link>
      
      </div>
      <div className="naviCoverRight">
      <Link to="./Sketchbook" target="_blank" rel="noreferrer">
        <img src = {cover3D} alt= {lll}></img>
        <p>3D</p>
      </Link>
    
      </div>
      <div className="naviCover">
      <Link to="./Sketchbook" target="_blank" rel="noreferrer">
        <img src = {coverCo} alt= {lll}></img>
        <p>code</p>
      </Link>
      </div>
      <div className="naviCoverRight">
      <Link to="./Sketchbook" target="_blank" rel="noreferrer">
        <img src = {coverSB} alt= {lll}></img>
        <p>sketchbook</p>
      </Link>
      </div>
</div>
    )
};

