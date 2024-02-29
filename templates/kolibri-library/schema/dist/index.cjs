'use strict';

const adoptedStyleSheets = require('adopted-style-sheets');

var KeyEnum = /* @__PURE__ */ ((KeyEnum2) => {
})();

var TagEnum = /* @__PURE__ */ ((TagEnum2) => {
  TagEnum2[TagEnum2["button"] = 0] = "button";
  return TagEnum2;
})(TagEnum || {});

const Demo = new adoptedStyleSheets.Theme("demo", KeyEnum, TagEnum);

exports.Demo = Demo;
