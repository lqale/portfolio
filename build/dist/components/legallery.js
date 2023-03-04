import {useState} from "../../web_modules/react.js";
import React from "../../web_modules/react.js";
import {
  CaretRight,
  CaretLeft,
  CloseOutline,
  Add
} from "../../web_modules/@carbon/icons-react.js";
import "../style/legallery.css.proxy.js";
const LeGallery = ({galleryImages}) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const prevSlide = () => {
    slideNumber === 0 ? setSlideNumber(galleryImages.length - 1) : setSlideNumber(slideNumber - 1);
  };
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1);
  };
  return /* @__PURE__ */ React.createElement("div", null, openModal && /* @__PURE__ */ React.createElement("div", {
    className: "sliderWrap"
  }, /* @__PURE__ */ React.createElement(Add, {
    icon: CloseOutline,
    className: "btnClose",
    onClick: handleCloseModal
  }), /* @__PURE__ */ React.createElement(Add, {
    icon: CaretLeft,
    className: "btnPrev",
    onClick: prevSlide
  }), /* @__PURE__ */ React.createElement(Add, {
    icon: CaretRight,
    className: "btnNext",
    onClick: nextSlide
  }), /* @__PURE__ */ React.createElement("div", {
    className: "fullScreenImage"
  }, /* @__PURE__ */ React.createElement("img", {
    src: galleryImages[slideNumber].img,
    alt: ""
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "galleryWrap"
  }, galleryImages && galleryImages.map((slide, index) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "single",
      key: index,
      onClick: () => handleOpenModal(index)
    }, /* @__PURE__ */ React.createElement("img", {
      src: slide.img,
      alt: ""
    }));
  })));
};
export default LeGallery;
