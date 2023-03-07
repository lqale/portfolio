import React from 'react';
import LeGallery from './legallery';


function WorkPost(props) {
  return (
    <div>
      <LeGallery galleryImages={props.galleryImages} />
      <p>{props.title}</p>
      <p>{props.description}</p>
    </div>
  );
}

export default WorkPost;
