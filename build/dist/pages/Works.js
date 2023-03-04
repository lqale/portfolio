import React from "../../web_modules/react.js";
import {Link} from "../../web_modules/react-router-dom.js";
import photoGir from "../assets/gir.png.proxy.js";
import lll from "../assets/lll.png.proxy.js";
import cover2D from "../assets/2D/Digital/GirlintheSuburbs.png.proxy.js";
import cover3D from "../assets/3D/mothbear/mothbear_model01.png.proxy.js";
import coverSB from "../assets/Sketchbook/Sketchbook-03.jpg.proxy.js";
import "../style/index.css.proxy.js";
export function Works() {
  return /* @__PURE__ */ React.createElement("h1", null, "Works"), /* @__PURE__ */ React.createElement("div", {
    className: "wNaviContainer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "naviCover"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "./Sketchbook",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: cover2D,
    alt: lll
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "naviCover"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "./Sketchbook",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: cover3D,
    alt: lll
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "naviCover"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "./Sketchbook",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: photoGir,
    alt: lll
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "naviCover"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "./Sketchbook",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: coverSB,
    alt: lll
  }))));
}
;
