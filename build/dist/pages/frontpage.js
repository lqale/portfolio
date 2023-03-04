import React, {useState} from "../../web_modules/react.js";
import Post from "../components/Post.js";
import PostList from "../components/PostList.js";
function FrontPage() {
  const [posts, setPosts] = useState([
    {
      image: "https://cdn.discordapp.com/attachments/795146886558122007/1072116287033053304/image.png",
      title: "Azula",
      description: "azula and flouride stare."
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "Post 2",
      description: "Description for post 2"
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "Post 3",
      description: "Description for post 3"
    }
  ]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement(Post, {
    title: posts.title,
    image: posts.image,
    description: posts.description
  }), /* @__PURE__ */ React.createElement(PostList, {
    posts
  }));
}
export default FrontPage;
