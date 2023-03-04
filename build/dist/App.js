import React from "../web_modules/react.js";
import "./style/index.css.proxy.js";
import LeHeader from "./components/header.js";
import {About} from "./pages/about.js";
import {Works} from "./pages/works.js";
import FrontPage from "./pages/frontpage.js";
import {BrowserRouter, Routes, Route} from "../web_modules/react-router-dom.js";
function App() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "page"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "header"
  }, /* @__PURE__ */ React.createElement(LeHeader, null)), /* @__PURE__ */ React.createElement(BrowserRouter, null, /* @__PURE__ */ React.createElement(Routes, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    element: /* @__PURE__ */ React.createElement(App, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    index: true,
    element: /* @__PURE__ */ React.createElement(FrontPage, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/about",
    element: /* @__PURE__ */ React.createElement(About, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/works",
    element: /* @__PURE__ */ React.createElement(Works, null)
  }))));
}
export default App;
