import React from "react";
import { Link } from 'react-router-dom';

import photoGir from '../assets/gir.png';
import lll from '../assets/lll.png';
import '../style/index.css';


export function Works(){
    
    return (
    <h1>Works</h1>,
    
    
    <div className="wNaviContainer">
      <div className="naviCover">
      <Link to="./Sketchbook" target="_blank" rel="noreferrer">
        <img src = {photoGir} alt= {lll}></img>
      </Link>
      </div>
      <div className="naviCover">
      <Link to="./Sketchbook" target="_blank" rel="noreferrer">
        <img src = {photoGir} alt= {lll}></img>
      </Link>
      </div>
      <div className="naviCover">
      <Link to="./Sketchbook" target="_blank" rel="noreferrer">
        <img src = {photoGir} alt= {lll}></img>
      </Link>
      </div>
      <div className="naviCover">
      <Link to="./Sketchbook" target="_blank" rel="noreferrer">
        <img src = {photoGir} alt= {lll}></img>
      </Link>
      </div>
</div>
    )
};

