import React from "../../web_modules/react.js";
function LeHeader() {
  const head = {
    title: "al\xE9jandra",
    subhead: "Al\xE9jandra. A digital space for my creative endeavors."
  };
  const navi = [
    {title: "home", route: "/"},
    {title: "works", route: "/works"},
    {title: "about", route: "/about"},
    {title: "github", route: "https://github.com/lqale"}
  ];
  return /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "ale-title"
  }, head.title), /* @__PURE__ */ React.createElement("div", {
    className: "subhead"
  }, " ", head.subhead), /* @__PURE__ */ React.createElement("div", {
    className: "ale-links"
  }, navi.map((x) => /* @__PURE__ */ React.createElement("a", {
    href: x.route
  }, x.title))));
}
;
export default LeHeader;
