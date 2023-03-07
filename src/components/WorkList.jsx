import React from 'react';
import Post from './Post';

function WorkList(props) {
  return (
    <div>
      {props.posts.map((post, index) => (
        <div className="pp">
        <Post 
          key={index} 
          title={post.title} 
          description={post.description} 
          galleryImages={post.galleryImages}
        />
        </div>
      ))}
    </div>
  );
}

export default WorkList;
