import { c as createCommonjsModule, r as react } from '../common/index-2ddba930.js';

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$1(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var _excluded$1 = ["width", "height", "viewBox"],
    _excluded2$1 = ["tabindex"];

/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  // Reference:
  // https://github.com/IBM/carbon-components-react/issues/1392
  // https://github.com/PolymerElements/iron-iconset-svg/pull/47
  // `focusable` is a string attribute which is why we do not use a boolean here
  focusable: 'false',
  preserveAspectRatio: 'xMidYMid meet'
};
/**
 * Get supplementary HTML attributes for a given <svg> element based on existing
 * attributes.
 */

function getAttributes() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      width = _ref.width,
      height = _ref.height,
      _ref$viewBox = _ref.viewBox,
      viewBox = _ref$viewBox === void 0 ? "0 0 ".concat(width, " ").concat(height) : _ref$viewBox,
      attributes = _objectWithoutProperties$1(_ref, _excluded$1);

  var tabindex = attributes.tabindex,
      rest = _objectWithoutProperties$1(attributes, _excluded2$1);

  var iconAttributes = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, defaultAttributes), rest), {}, {
    width: width,
    height: height,
    viewBox: viewBox
  }); // TODO: attributes.title assumes that the consumer will implement <title> and
  // correctly set `aria-labelledby`.


  if (iconAttributes['aria-label'] || iconAttributes['aria-labelledby'] || iconAttributes.title) {
    iconAttributes.role = 'img'; // Reference:
    // https://allyjs.io/tutorials/focusing-in-svg.html

    if (tabindex !== undefined && tabindex !== null) {
      iconAttributes.focusable = 'true';
      iconAttributes.tabindex = tabindex;
    }
  } else {
    iconAttributes['aria-hidden'] = true;
  }

  return iconAttributes;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var require$$0 = factoryWithThrowingShims;

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require$$0();
}
});

var PropTypes = propTypes;

/**
 * Copyright IBM Corp. 2016, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Code generated by @carbon/icon-build-helpers. DO NOT EDIT.
 */

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var _excluded = ["className", "children", "tabIndex"],
    _excluded2 = ["tabindex"];
var Icon = /*#__PURE__*/react.forwardRef(function Icon(_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      tabIndex = _ref.tabIndex,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _getAttributes = getAttributes(_objectSpread2(_objectSpread2({}, rest), {}, {
    tabindex: tabIndex
  })),
      tabindex = _getAttributes.tabindex,
      props = _objectWithoutProperties(_getAttributes, _excluded2);

  if (className) {
    props.className = className;
  }

  if (tabindex !== undefined && tabindex !== null) {
    props.tabIndex = tabindex;
  }

  if (ref) {
    props.ref = ref;
  }

  return /*#__PURE__*/react.createElement('svg', props, children);
});
Icon.displayName = 'Icon';
Icon.propTypes = {
  'aria-hidden': PropTypes.string,
  'aria-label': PropTypes.string,
  'aria-labelledby': PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  preserveAspectRatio: PropTypes.string,
  tabIndex: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  xmlns: PropTypes.string
};
Icon.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  preserveAspectRatio: 'xMidYMid meet'
};

({
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
});

/**
 * Copyright IBM Corp. 2016, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Code generated by @carbon/icon-build-helpers. DO NOT EDIT.
 */

var _path35;

var _excluded23 = ["children", "size"];
var Add = /*#__PURE__*/react.forwardRef(function Add(_ref23, ref) {
  var children = _ref23.children,
      _ref23$size = _ref23.size,
      size = _ref23$size === void 0 ? 16 : _ref23$size,
      rest = _objectWithoutProperties(_ref23, _excluded23);

  return /*#__PURE__*/react.createElement(Icon, _objectSpread2({
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor"
  }, rest), _path35 || (_path35 = /*#__PURE__*/react.createElement("path", {
    d: "M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"
  })), children);
});

/**
 * Copyright IBM Corp. 2016, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Code generated by @carbon/icon-build-helpers. DO NOT EDIT.
 */

var _path202, _path203, _path204, _path205;

var _excluded94 = ["children", "size"],
    _excluded95 = ["children", "size"];
var CaretLeft = /*#__PURE__*/react.forwardRef(function CaretLeft(_ref94, ref) {
  var children = _ref94.children,
      _ref94$size = _ref94.size,
      size = _ref94$size === void 0 ? 16 : _ref94$size,
      rest = _objectWithoutProperties(_ref94, _excluded94);

  if (size === "glyph" || size === "glyph" || size === "glyphpx") {
    return /*#__PURE__*/react.createElement(Icon, _objectSpread2({
      width: size,
      height: size,
      ref: ref,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 5 8",
      fill: "currentColor"
    }, rest), _path202 || (_path202 = /*#__PURE__*/react.createElement("path", {
      d: "M5 8L0 4 5 0z"
    })), children);
  }

  return /*#__PURE__*/react.createElement(Icon, _objectSpread2({
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor"
  }, rest), _path203 || (_path203 = /*#__PURE__*/react.createElement("path", {
    d: "M20 24L10 16 20 8z"
  })), children);
});
var CaretRight = /*#__PURE__*/react.forwardRef(function CaretRight(_ref95, ref) {
  var children = _ref95.children,
      _ref95$size = _ref95.size,
      size = _ref95$size === void 0 ? 16 : _ref95$size,
      rest = _objectWithoutProperties(_ref95, _excluded95);

  if (size === "glyph" || size === "glyph" || size === "glyphpx") {
    return /*#__PURE__*/react.createElement(Icon, _objectSpread2({
      width: size,
      height: size,
      ref: ref,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 5 8",
      fill: "currentColor"
    }, rest), _path204 || (_path204 = /*#__PURE__*/react.createElement("path", {
      d: "M0 0L5 4 0 8z"
    })), children);
  }

  return /*#__PURE__*/react.createElement(Icon, _objectSpread2({
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor"
  }, rest), _path205 || (_path205 = /*#__PURE__*/react.createElement("path", {
    d: "M12 8L22 16 12 24z"
  })), children);
});

/**
 * Copyright IBM Corp. 2016, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Code generated by @carbon/icon-build-helpers. DO NOT EDIT.
 */

var _path221, _path222;

var _excluded125 = ["children", "size"];
var CloseOutline = /*#__PURE__*/react.forwardRef(function CloseOutline(_ref125, ref) {
  var children = _ref125.children,
      _ref125$size = _ref125.size,
      size = _ref125$size === void 0 ? 16 : _ref125$size,
      rest = _objectWithoutProperties(_ref125, _excluded125);

  return /*#__PURE__*/react.createElement(Icon, _objectSpread2({
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor"
  }, rest), _path221 || (_path221 = /*#__PURE__*/react.createElement("path", {
    d: "M16,2C8.2,2,2,8.2,2,16s6.2,14,14,14s14-6.2,14-14S23.8,2,16,2z M16,28C9.4,28,4,22.6,4,16S9.4,4,16,4s12,5.4,12,12 S22.6,28,16,28z"
  })), _path222 || (_path222 = /*#__PURE__*/react.createElement("path", {
    d: "M21.4 23L16 17.6 10.6 23 9 21.4 14.4 16 9 10.6 10.6 9 16 14.4 21.4 9 23 10.6 17.6 16 23 21.4z"
  })), children);
});

export { Add, CaretLeft, CaretRight, CloseOutline };
