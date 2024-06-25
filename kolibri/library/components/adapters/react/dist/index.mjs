import React, { createElement } from 'react';

const dashToPascalCase = (str) => str.toLowerCase().split("-").map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1)).join("");
const camelToDashCase = (str) => str.replace(/([A-Z])/g, (m) => `-${m[0].toLowerCase()}`);

const attachProps = (node, newProps, oldProps = {}) => {
  if (node instanceof Element) {
    const className = getClassName(node.classList, newProps, oldProps);
    if (className !== "") {
      node.className = className;
    }
    Object.keys(newProps).forEach((name) => {
      if (name === "children" || name === "style" || name === "ref" || name === "class" || name === "className" || name === "forwardedRef") {
        return;
      }
      if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()) {
        const eventName = name.substring(2);
        const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);
        if (!isCoveredByReact(eventNameLc)) {
          syncEvent(node, eventNameLc, newProps[name]);
        }
      } else {
        node[name] = newProps[name];
        const propType = typeof newProps[name];
        if (propType === "string") {
          node.setAttribute(camelToDashCase(name), newProps[name]);
        }
      }
    });
  }
};
const getClassName = (classList, newProps, oldProps) => {
  const newClassProp = newProps.className || newProps.class;
  const oldClassProp = oldProps.className || oldProps.class;
  const currentClasses = arrayToMap(classList);
  const incomingPropClasses = arrayToMap(newClassProp ? newClassProp.split(" ") : []);
  const oldPropClasses = arrayToMap(oldClassProp ? oldClassProp.split(" ") : []);
  const finalClassNames = [];
  currentClasses.forEach((currentClass) => {
    if (incomingPropClasses.has(currentClass)) {
      finalClassNames.push(currentClass);
      incomingPropClasses.delete(currentClass);
    } else if (!oldPropClasses.has(currentClass)) {
      finalClassNames.push(currentClass);
    }
  });
  incomingPropClasses.forEach((s) => finalClassNames.push(s));
  return finalClassNames.join(" ");
};
const transformReactEventName = (eventNameSuffix) => {
  switch (eventNameSuffix) {
    case "doubleclick":
      return "dblclick";
  }
  return eventNameSuffix;
};
/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
const isCoveredByReact = (eventNameSuffix) => {
  if (typeof document === "undefined") {
    return true;
  } else {
    const eventName = "on" + transformReactEventName(eventNameSuffix);
    let isSupported = eventName in document;
    if (!isSupported) {
      const element = document.createElement("div");
      element.setAttribute(eventName, "return;");
      isSupported = typeof element[eventName] === "function";
    }
    return isSupported;
  }
};
const syncEvent = (node, eventName, newEventHandler) => {
  const eventStore = node.__events || (node.__events = {});
  const oldEventHandler = eventStore[eventName];
  if (oldEventHandler) {
    node.removeEventListener(eventName, oldEventHandler);
  }
  node.addEventListener(
    eventName,
    eventStore[eventName] = function handler(e) {
      if (newEventHandler) {
        newEventHandler.call(this, e);
      }
    }
  );
};
const arrayToMap = (arr) => {
  const map = /* @__PURE__ */ new Map();
  arr.forEach((s) => map.set(s, s));
  return map;
};

const setRef = (ref, value) => {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref != null) {
    ref.current = value;
  }
};
const mergeRefs = (...refs) => {
  return (value) => {
    refs.forEach((ref) => {
      setRef(ref, value);
    });
  };
};
const createForwardRef = (ReactComponent, displayName) => {
  const forwardRef = (props, ref) => {
    return /* @__PURE__ */ React.createElement(ReactComponent, { ...props, forwardedRef: ref });
  };
  forwardRef.displayName = displayName;
  return React.forwardRef(forwardRef);
};

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const createReactComponent = (tagName, ReactComponentContext, manipulatePropsFunction, defineCustomElement) => {
  if (defineCustomElement !== void 0) {
    defineCustomElement();
  }
  const displayName = dashToPascalCase(tagName);
  const ReactComponent = class extends React.Component {
    constructor(props) {
      super(props);
      __publicField(this, "componentEl");
      __publicField(this, "setComponentElRef", (element) => {
        this.componentEl = element;
      });
    }
    componentDidMount() {
      this.componentDidUpdate(this.props);
    }
    componentDidUpdate(prevProps) {
      attachProps(this.componentEl, this.props, prevProps);
    }
    render() {
      const { children, forwardedRef, style, className, ref, ...cProps } = this.props;
      let propsToPass = Object.keys(cProps).reduce((acc, name) => {
        const value = cProps[name];
        if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()) {
          const eventName = name.substring(2).toLowerCase();
          if (typeof document !== "undefined" && isCoveredByReact(eventName)) {
            acc[name] = value;
          }
        } else {
          const type = typeof value;
          if (type === "string" || type === "boolean" || type === "number") {
            acc[camelToDashCase(name)] = value;
          }
        }
        return acc;
      }, {});
      if (manipulatePropsFunction) {
        propsToPass = manipulatePropsFunction(this.props, propsToPass);
      }
      const newProps = {
        ...propsToPass,
        ref: mergeRefs(forwardedRef, this.setComponentElRef),
        style
      };
      return createElement(tagName, newProps, children);
    }
    static get displayName() {
      return displayName;
    }
  };
  if (ReactComponentContext) {
    ReactComponent.contextType = ReactComponentContext;
  }
  return createForwardRef(ReactComponent, displayName);
};

const DemoButton = /* @__PURE__ */ createReactComponent("demo-button");

export { DemoButton };
