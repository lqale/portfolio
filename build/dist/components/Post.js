import React from "../../web_modules/react.js";
export function Post(props) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: props.image,
    alt: props.title
  }), /* @__PURE__ */ React.createElement("h3", null, props.title), /* @__PURE__ */ React.createElement("p", null, props.description));
}
export default Post;
