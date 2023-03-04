import React from "../../web_modules/react.js";
import Post from "./Post.js";
function PostList(props) {
  return /* @__PURE__ */ React.createElement("div", null, props.posts.map((post, index) => /* @__PURE__ */ React.createElement("div", {
    className: "pp"
  }, /* @__PURE__ */ React.createElement(Post, {
    key: index,
    image: post.image,
    title: post.title,
    description: post.description
  }))));
}
export default PostList;
