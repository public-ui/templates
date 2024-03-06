import { Theme } from 'adopted-style-sheets';

var KeyEnum = /* @__PURE__ */ ((KeyEnum2) => {
})();

var TagEnum = /* @__PURE__ */ ((TagEnum2) => {
  TagEnum2[TagEnum2["button"] = 0] = "button";
  return TagEnum2;
})(TagEnum || {});

const Demo = new Theme("demo", KeyEnum, TagEnum);

export { Demo };
