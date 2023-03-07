import React from "react";
import { Link } from 'react-router-dom';

import cover2D from '../assets/2D/Digital/GirlintheSuburbs.png';
import cover3D from '../assets/3D/mothbear/mothbear_model01.png';
import coverSB from '../assets/Sketchbook/Sketchbook-03.jpg';
import coverCo from '../assets/Programming/WebsitePortfolio.png';
import '../style/index.css';


function Works () {
  const pages = [
    { id: 1, imageSrc: cover2D, title: "2D", altText: "2D", path: "/2D" },
    { id: 2, imageSrc: cover3D, title:"3D",altText: "3D", path: "/3D" },
    { id: 3, imageSrc: coverCo, title: "Code", altText: "Code", path: "/code" },
    { id: 4, imageSrc: coverSB, title: "Sketchbook", altText: "Sketchbook", path: "/sketchbook" }
  ];

  return (
    <div>
      <div className="wNaviContainer">
        {pages.map(page => (
          <Link key={page.id} to={page.path}>
            <img src={page.imageSrc} alt={page.altText} />
            <p>{page.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Works;

