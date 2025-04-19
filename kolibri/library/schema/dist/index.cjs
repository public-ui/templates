'use strict';

const adoptedStyleSheets = require('adopted-style-sheets');

var KeyEnum = /* @__PURE__ */ ((KeyEnum2) => {
  return KeyEnum2;
})(KeyEnum || {});

var TagEnum = /* @__PURE__ */ ((TagEnum2) => {
  TagEnum2[TagEnum2["button"] = 0] = "button";
  return TagEnum2;
})(TagEnum || {});

const Demo = new adoptedStyleSheets.Theme("demo", KeyEnum, TagEnum);

exports.Demo = Demo;
