import React from "react";
import LeGallery from '../components/legallery';
// import "/assets/gir.png";
import photoGir from '../assets/gir.png';
export function Works(){

    const galleryImages = [
        {
          img: photoGir
        },{
            img: photoGir
          },{
            img: photoGir
          },{
            img: photoGir
          },{
            img: photoGir
          }
      ];
    

    return (
    <h1>Works</h1>,
    
    <div className="container">
    <LeGallery
        galleryImages={galleryImages}
      />
</div>
    )






}

