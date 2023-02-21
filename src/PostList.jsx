import React from 'react';
import Post from './post';

function PostList(props) {
  return (
    <div>
      {props.posts.map((post, index) => (
       <div className="pp">
       <Post 
          key={index} 
          image={post.image} 
          
          title={post.title} 
          description={post.description} 
          
        />
        </div>
      ))}
    </div>
  );
}

export default PostList;