'use strict';

const vue = require('vue');

const ROUTER_LINK_VALUE = "routerLink";
const NAV_MANAGER = "navManager";
const ROUTER_PROP_PREFIX = "router";
const ARIA_PROP_PREFIX = "aria";
const EMPTY_PROP = Symbol();
const DEFAULT_EMPTY_PROP = { default: EMPTY_PROP };
const getComponentClasses = (classes) => {
  return classes?.split(" ") || [];
};
const getElementClasses = (ref2, componentClasses, defaultClasses = []) => {
  return [...Array.from(ref2.value?.classList || []), ...defaultClasses].filter(
    (c, i, self) => !componentClasses.has(c) && self.indexOf(c) === i
  );
};
const defineContainer = (name, defineCustomElement, componentProps = [], modelProp, modelUpdateEvent) => {
  const Container = vue.defineComponent((props, { attrs, slots, emit }) => {
    props[modelProp];
    const containerRef = vue.ref();
    const classes = new Set(getComponentClasses(attrs.class));
    const currentInstance = vue.getCurrentInstance();
    const hasRouter = currentInstance?.appContext?.provides[NAV_MANAGER];
    const navManager = hasRouter ? vue.inject(NAV_MANAGER) : void 0;
    const handleRouterLink = (ev) => {
      const { routerLink } = props;
      if (routerLink === EMPTY_PROP) return;
      if (navManager !== void 0) {
        let navigationPayload = { event: ev };
        for (const key in props) {
          const value = props[key];
          if (props.hasOwnProperty(key) && key.startsWith(ROUTER_PROP_PREFIX) && value !== EMPTY_PROP) {
            navigationPayload[key] = value;
          }
        }
        navManager.navigate(navigationPayload);
      } else {
        console.warn("Tried to navigate, but no router was found. Make sure you have mounted Vue Router.");
      }
    };
    return () => {
      props[modelProp];
      getComponentClasses(attrs.class).forEach((value) => {
        classes.add(value);
      });
      const oldClick = props.onClick;
      const handleClick = (ev) => {
        if (oldClick !== void 0) {
          oldClick(ev);
        }
        if (!ev.defaultPrevented) {
          handleRouterLink(ev);
        }
      };
      let propsToAdd = {
        ref: containerRef,
        class: getElementClasses(containerRef, classes),
        onClick: handleClick
      };
      for (const key in props) {
        const value = props[key];
        if (props.hasOwnProperty(key) && value !== EMPTY_PROP || key.startsWith(ARIA_PROP_PREFIX)) {
          propsToAdd[key] = value;
        }
      }
      const node = vue.h(name, propsToAdd, slots.default && slots.default());
      return node ;
    };
  });
  if (typeof Container !== "function") {
    Container.name = name;
    Container.props = {
      [ROUTER_LINK_VALUE]: DEFAULT_EMPTY_PROP
    };
    componentProps.forEach((componentProp) => {
      Container.props[componentProp] = DEFAULT_EMPTY_PROP;
    });
  }
  return Container;
};

const DemoButton = /* @__PURE__ */ defineContainer("demo-button");

exports.DemoButton = DemoButton;
