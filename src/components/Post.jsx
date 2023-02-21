import React from 'react';

export function Post(props) {  
  return (
    <div>
      <img src={props.image} alt={props.title} />
      
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      
    </div>
  );
}

export default Post;


