import { defineComponent, ref, getCurrentInstance, inject, h, withDirectives } from 'vue';

const UPDATE_VALUE_EVENT = "update:modelValue";
const MODEL_VALUE = "modelValue";
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
  if (defineCustomElement !== void 0) {
    defineCustomElement();
  }
  const Container = defineComponent((props, { attrs, slots, emit }) => {
    let modelPropValue = props[modelProp];
    const containerRef = ref();
    const classes = new Set(getComponentClasses(attrs.class));
    const vModelDirective = {
      created: (el) => {
        const eventsNames = Array.isArray(modelUpdateEvent) ? modelUpdateEvent : [modelUpdateEvent];
        eventsNames.forEach((eventName) => {
          el.addEventListener(eventName.toLowerCase(), (e) => {
            modelPropValue = (e?.target)[modelProp];
            emit(UPDATE_VALUE_EVENT, modelPropValue);
          });
        });
      }
    };
    const currentInstance = getCurrentInstance();
    const hasRouter = currentInstance?.appContext?.provides[NAV_MANAGER];
    const navManager = hasRouter ? inject(NAV_MANAGER) : void 0;
    const handleRouterLink = (ev) => {
      const { routerLink } = props;
      if (routerLink === EMPTY_PROP)
        return;
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
      modelPropValue = props[modelProp];
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
      if (modelProp) {
        if (props[MODEL_VALUE] !== EMPTY_PROP) {
          propsToAdd = {
            ...propsToAdd,
            [modelProp]: props[MODEL_VALUE]
          };
        } else if (modelPropValue !== EMPTY_PROP) {
          propsToAdd = {
            ...propsToAdd,
            [modelProp]: modelPropValue
          };
        }
      }
      const node = h(name, propsToAdd, slots.default && slots.default());
      return modelProp === void 0 ? node : withDirectives(node, [[vModelDirective]]);
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
    if (modelProp) {
      Container.props[MODEL_VALUE] = DEFAULT_EMPTY_PROP;
      Container.emits = [UPDATE_VALUE_EVENT];
    }
  }
  return Container;
};

const DemoButton = /* @__PURE__ */ defineContainer("demo-button", void 0);

export { DemoButton };
