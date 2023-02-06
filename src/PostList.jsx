import React from 'react';
import Post from './Post';

function PostList(props) {
  return (
    <div>
      {props.posts.map((post, index) => (
        <Post 
          key={index} 
          image={post.image} 
          title={post.title} 
          description={post.description} 
        />
      ))}
    </div>
  );
}

export default PostList;
