import React, {useState} from "react";
import WorkPost from "../components/WorkPost";
import WorkList from "../components/WorkList";

import GITS from '../assets/2D/Digital/GirlintheSuburbs.png';
import IMR from '../assets/2D/Digital/InMyRoom.png';
import LVL from '../assets/2D/Digital/literalyVibinLuv.jpg';
import PF from '../assets/2D/Digital/PaulDrawing.JPG';
import SE from '../assets/2D/Digital/SerialExperiments.png';


function Twodee (){

  const [posts] = useState([  
  {title: 'Girl in the Suburbs',    
  description: '',    
  galleryImages: [ GITS, IMR]
},
{title: 'In my room',    
  description: '',    
  galleryImages: [ IMR ]
},
{title: 'literally vibing luv',    
  description: '',    
  galleryImages: [ LVL ]
},
{title: 'Opium',    
  description: '',    
  galleryImages: [ PF ]
},
{title: 'Serial Experiements',    
  description: '',    
  galleryImages: [  SE  ]
}



// {
//   title: 'Post 2',
//   description: 'This is the second post',
//   images: ['image4.jpg', 'image5.jpg', 'image6.jpg']
// }

]);

  return (
    <div className="container">
    <WorkPost 
    title={posts.title}
    description={posts.description}
    galleryImages={posts.galleryImages}
    />
    <WorkList posts={posts}/>
    
    </div>
 );
};

export default Twodee;
