import React, { useState } from "react";
import Post from "../components/Post";
import PostList from "../components/PostList";

function FrontPage (){
    const [posts, setPosts] = useState([
        {
          image:
            "https://cdn.discordapp.com/attachments/795146886558122007/1072116287033053304/image.png",
          title: "Azula",
          description: "azula and flouride stare.",
        },
        {
          image: "https://via.placeholder.com/400x300",
          title: "Post 2",
          description: "Description for post 2",
        },
        {
          image: "https://via.placeholder.com/400x300",
          title: "Post 3",
          description: "Description for post 3",
        },
      ]);

    return(

<div className="container">
        <Post
          title={posts.title}
          image={posts.image}
          description={posts.description}
        />

        {/* <div className="post"> */}
        <PostList posts={posts} />
        {/* </div> */}
      </div>




    )
}
export default FrontPage;