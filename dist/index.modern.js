import React, { createContext, useContext, useState, useEffect, useLayoutEffect, useRef, forwardRef, Children, cloneElement, Fragment as Fragment$1, useMemo } from 'react';
import styled, { ThemeContext, ThemeProvider, StyleSheetManager, css, createGlobalStyle, withTheme, keyframes } from 'styled-components';
import { get, space as space$1, margin, size, layout, compose, color, flexbox, border, typography, boxShadow, position, variant as variant$1, buttonStyle, width, height as height$1, display, background, shadow, padding } from 'styled-system';
import { props } from '@styled-system/should-forward-prop';
import deepmerge from 'deepmerge';
import stylisRTLPlugin from 'stylis-plugin-rtl';
import css$1, { get as get$1, css as css$2 } from '@styled-system/css';
import { useIntersection } from 'react-use';
import { motion, useViewportScroll, useTransform, useAnimation } from 'framer-motion';
import ReactDOM, { createPortal } from 'react-dom';
import IcoMoon from 'react-icomoon';
import Headroom from 'react-headroom';
import RCPagination from 'rc-pagination';
import frFR from 'rc-pagination/lib/locale/fr_FR';
import { themeGet } from '@styled-system/theme-get';
import SlickSlider from 'react-slick';
import YouTube from 'react-youtube';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
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

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var AccordionContext = createContext({});

var VactoryThemeContext = React.createContext({
  colorMode: null,
  setColorMode: null
});
var useVactoryTheme = function useVactoryTheme() {
  return React.useContext(VactoryThemeContext);
};

var STORAGE_KEY = 'vactory-ui-color-mode';
var storage = {
  get: function get(init) {
    try {
      return window.localStorage.getItem(STORAGE_KEY) || init;
    } catch (e) {
      console.warn('localStorage is disabled and color mode might not work as expected.', 'Please check your Site Settings.', e);
    }
  },
  set: function set(value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      console.warn('localStorage is disabled and color mode might not work as expected.', 'Please check your Site Settings.', e);
    }
  }
};

var getColorsByMode = function getColorsByMode(theme, mode) {
  var themeColors = theme.colors || {};
  if (!mode) return themeColors;
  var modes = get(theme, 'colors.modes', {});
  return deepmerge.all([{}, _extends({}, theme.colors), _extends({}, get(modes, mode, {}))]);
};

var useColorModeState = function useColorModeState(theme) {

  var stored = storage.get();

  var _useState = useState(stored || 'default'),
      mode = _useState[0],
      setMode = _useState[1];

  useEffect(function () {
    if (!mode) return;
    storage.set(mode);
  }, [mode]);
  return [mode, setMode];
};

var useColorMode = function useColorMode() {
  var _useVactoryTheme = useVactoryTheme(),
      colorMode = _useVactoryTheme.colorMode,
      setColorMode = _useVactoryTheme.setColorMode;

  if (typeof setColorMode !== 'function') {
    throw new Error("[useColorMode] requires the ColorModeProvider component");
  }

  return [colorMode, setColorMode];
};
var ColorModeProvider = function ColorModeProvider(_ref) {
  var children = _ref.children;
  var styledComponentTheme = useContext(ThemeContext);

  var _useColorModeState = useColorModeState(),
      colorMode = _useColorModeState[0],
      setColorMode = _useColorModeState[1];

  var colors = getColorsByMode(styledComponentTheme || {}, colorMode);

  var theme = _extends(_extends({}, styledComponentTheme), {}, {
    colors: colors
  });

  var context = {
    colorMode: colorMode,
    setColorMode: setColorMode
  };
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(VactoryThemeContext.Provider, {
    value: context
  }, children));
};

var DirectionManagerContext = React.createContext("ltr");
var DirectionManager = function DirectionManager(_ref) {
  var _ref$dir = _ref.dir,
      dir = _ref$dir === void 0 ? "ltr" : _ref$dir,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(DirectionManagerContext.Provider, {
    value: dir
  }, /*#__PURE__*/React.createElement(StyleSheetManager, {
    stylisPlugins: dir === 'rtl' ? [stylisRTLPlugin] : []
  }, /*#__PURE__*/React.createElement("div", {
    dir: dir
  }, children)));
};

var classnames = function classnames() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.join(' ');
};

var getClassName = function getClassName(el) {
  return el.props && el.props.className || '';
};

var StyledChildren = function StyledChildren(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "children"]);

  var styledChildren = React.Children.toArray(children).map(function (child) {
    return React.cloneElement(child, {
      className: classnames(getClassName(child), className)
    });
  });
  return /*#__PURE__*/React.createElement(Fragment, null, styledChildren);
};
var Space = styled(StyledChildren)(space$1);

function _templateObject9() {
  var data = _taggedTemplateLiteralLoose(["\n      @media (min-width: ", ") and\n        (max-width: ", ") {\n        ", "\n      }\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteralLoose(["\n        @media (min-width: ", ") {\n          ", "\n        }\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n      @media (max-width: ", ") {\n        ", "\n      }\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n                  @media (min-width: ", ") and (max-width: ", ") {\n                    ", "\n                  }\n                "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n    ", "\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n                  @media (min-width: ", ") {\n                    ", "\n                  }\n                "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n    ", "\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n                  @media (max-width: ", ") {\n                    ", "\n                  }\n                "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var DEFAULT_BREAKPOINTS = {
  xs: '0',
  sm: '500px',
  md: '960px',
  lg: '1280px',
  xl: '1920px'
};

var getSizeFromBreakpoint = function getSizeFromBreakpoint(breakpointValue, breakpoints) {
  if (breakpoints === void 0) {
    breakpoints = {};
  }

  if (breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue];
  } else if (parseInt(breakpointValue)) {
    return breakpointValue;
  } else {
    console.error('No valid breakpoint or size specified for media.');
    return '0';
  }
};

var lessThan = function lessThan(breakpoint) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return css(_templateObject(), function (props) {
      var breakpoints = props ? props.theme.breakpoints : DEFAULT_BREAKPOINTS;
      return css(_templateObject2(), getSizeFromBreakpoint(breakpoint, breakpoints), css.apply(void 0, args));
    });
  };
};
var greaterThan = function greaterThan(breakpoint) {
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return css(_templateObject3(), function (props) {
      var breakpoints = props ? props.theme.breakpoints : DEFAULT_BREAKPOINTS;
      return css(_templateObject4(), getSizeFromBreakpoint(breakpoint, breakpoints), css.apply(void 0, args));
    });
  };
};
var between = function between(firstBreakpoint, secondBreakpoint) {
  return function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return css(_templateObject5(), function (props) {
      var breakpoints = props ? props.theme.breakpoints : DEFAULT_BREAKPOINTS;
      return css(_templateObject6(), getSizeFromBreakpoint(firstBreakpoint, breakpoints), getSizeFromBreakpoint(secondBreakpoint, breakpoints), css.apply(void 0, args));
    });
  };
};
var generateMedia = function generateMedia(props) {
  var breakpoints = props ? props.theme.breakpoints : DEFAULT_BREAKPOINTS;

  var lessThan = function lessThan(breakpoint) {
    return function () {
      console.warn("[vactory-ui] generateMedia(props).lessThan(" + breakpoint + ") ne sera pas prise en charge dans les versions à venir, utiliser plutot lessThan(" + breakpoint + ")");
      return css(_templateObject7(), getSizeFromBreakpoint(breakpoint, breakpoints), css.apply(void 0, arguments));
    };
  };

  var greaterThan = function greaterThan(breakpoint) {
    return function () {
      console.warn("[vactory-ui] generateMedia(props).greaterThan(" + breakpoint + ") ne sera pas prise en charge dans les versions à venir, utiliser plutot greaterThan(" + breakpoint + ")");
      return css(_templateObject8(), getSizeFromBreakpoint(breakpoint, breakpoints), css.apply(void 0, arguments));
    };
  };

  var between = function between(firstBreakpoint, secondBreakpoint) {
    return function () {
      console.warn("[vactory-ui] generateMedia(props).between(" + firstBreakpoint + ", " + secondBreakpoint + ") ne sera pas prise en charge dans les versions à venir, utiliser plutot greaterThan(" + firstBreakpoint + ", " + secondBreakpoint + ")");
      return css(_templateObject9(), getSizeFromBreakpoint(firstBreakpoint, breakpoints), getSizeFromBreakpoint(secondBreakpoint, breakpoints), css.apply(void 0, arguments));
    };
  };

  return {
    lessThan: lessThan,
    greaterThan: greaterThan,
    between: between
  };
};

var PRE = new RegExp("^(" + props.join('|') + ")$");

var _getProps = function _getProps(test) {
  return function (props) {
    var next = {};

    for (var key in props) {
      if (test(key || '')) next[key] = props[key];
    }

    return next;
  };
};

var MRE = new RegExp("^(" + margin.propNames.join('|') + ")$");
var getMarginProps = _getProps(function (k) {
  return MRE.test(k);
});
var omitMarginProps = _getProps(function (k) {
  return !MRE.test(k);
});
var getSystemProps = _getProps(function (k) {
  return PRE.test(k);
});
var SizePropsRegExp = new RegExp("^(" + size.propNames.join('|') + ")$");
var omitSizeProps = _getProps(function (k) {
  return !SizePropsRegExp.test(k);
});
var getSizeProps = _getProps(function (k) {
  return SizePropsRegExp.test(k);
});
var LayoutPropsRegExp = new RegExp("^(" + layout.propNames.join('|') + ")$");
var omitLayoutProps = _getProps(function (k) {
  return !LayoutPropsRegExp.test(k);
});
var getLayoutProps = _getProps(function (k) {
  return LayoutPropsRegExp.test(k);
});
var SpacePRopsRegExp = new RegExp("^(" + space$1.propNames.join('|') + ")$");
var omitSpaceProps = _getProps(function (k) {
  return !SpacePRopsRegExp.test(k);
});
var getSpaceProps = _getProps(function (k) {
  return SpacePRopsRegExp.test(k);
});
var omitProps = function omitProps(propsToOmit) {
  return _getProps(function (k) {
    var exp = new RegExp("^(" + propsToOmit.join('|') + ")$");
    return !exp.test(k);
  });
};
var getProps = function getProps(propsToGet) {
  return _getProps(function (k) {
    var exp = new RegExp("^(" + propsToGet.join('|') + ")$");
    return !exp.test(k);
  });
};
var sx = function sx(props) {
  return css$1(props.sx)(props.theme);
};
var base = function base(props) {
  return css$1(props.__css)(props.theme);
};
var variant = function variant(_ref) {
  var theme = _ref.theme,
      variant = _ref.variant;
  return css$1(get$1(theme, variant))(theme);
};
var variantReducer = function variantReducer(accumulator, currentValue) {
  return currentValue ? accumulator + '.' + currentValue : accumulator;
};
var getVariant = function getVariant(variant) {
  if (variant === void 0) {
    variant = [];
  }

  if (typeof variant === 'string') {
    return variant;
  }

  return variant.reduce(variantReducer);
};

var findParentByMatchedQuery = function findParentByMatchedQuery(element, className) {
  if (element) {
    var offsetParent = element.parentNode;

    if (offsetParent && offsetParent.classList && offsetParent.classList.contains(className)) {
      return offsetParent;
    } else {
      return findParentByMatchedQuery(offsetParent, className);
    }
  }

  return undefined;
};
var findVisibleParent = function findVisibleParent(element) {
  if (element) {
    return element.offsetParent ? element : findVisibleParent(element.parentElement) || element;
  }

  return undefined;
};
var getNewContainer = function getNewContainer(rootNode) {
  if (rootNode === void 0) {
    rootNode = document.body;
  }

  var container = document.createElement('div');
  rootNode.appendChild(container);
  return container;
};
var getBodyChildElements = function getBodyChildElements() {
  var excludeMatch = /^(script|link)$/i;
  var children = [];
  [].forEach.call(document.body.children, function (node) {
    if (!excludeMatch.test(node.tagName)) {
      children.push(node);
    }
  });
  return children;
};
var TABINDEX = 'tabindex';
var TABINDEX_STATE = 'data-g-tabindex';
var makeNodeFocusable = function makeNodeFocusable(node) {
  if (!node.hasAttribute('aria-live')) {
    node.setAttribute('aria-hidden', false);
    var elements = node.getElementsByTagName('*');
    Array.prototype.filter.call(elements || [], function (element) {
      return element.hasAttribute(TABINDEX_STATE);
    }).forEach(function (element) {
      var prior = element.getAttribute(TABINDEX_STATE);

      if (prior >= 0) {
        element.setAttribute(TABINDEX, element.getAttribute(TABINDEX_STATE));
      } else if (prior === 'none') {
        element.removeAttribute(TABINDEX);
      }

      element.removeAttribute(TABINDEX_STATE);
    });
  }
};
var autoFocusingTags = /(a|area|input|select|textarea|button|iframe)$/;
var makeNodeUnfocusable = function makeNodeUnfocusable(node) {
  if (!node.hasAttribute('aria-live')) {
    node.setAttribute('aria-hidden', true);
    var elements = node.getElementsByTagName('*');
    Array.prototype.filter.call(elements || [], function (element) {
      return element.getAttribute(TABINDEX) !== null;
    }).forEach(function (element) {
      element.setAttribute(TABINDEX_STATE, element.getAttribute(TABINDEX));
      element.setAttribute(TABINDEX, -1);
    });
    Array.prototype.filter.call(elements || [], function (element) {
      var currentTag = element.tagName.toLowerCase();
      return currentTag.match(autoFocusingTags) && element.focus && element.getAttribute(TABINDEX_STATE) === null;
    }).forEach(function (element) {
      element.setAttribute(TABINDEX_STATE, 'none');
      element.setAttribute(TABINDEX, -1);
    });
  }
};
var isNotAncestorOf = function isNotAncestorOf(child) {
  return function (parent) {
    return !parent.contains(child);
  };
};
var setFocusWithoutScroll = function setFocusWithoutScroll(element) {
  var x = window.scrollX;
  var y = window.scrollY;
  element.focus();
  window.scrollTo(x, y);
};
var findScrollParents = function findScrollParents(element, horizontal) {
  var result = [];

  if (element) {
    var parent = element.parentNode;

    while (parent && parent.getBoundingClientRect) {
      var rect = parent.getBoundingClientRect();

      if (horizontal) {
        if (rect.width && parent.scrollWidth > rect.width + 10) {
          result.push(parent);
        }
      } else if (rect.height && parent.scrollHeight > rect.height + 10) {
        result.push(parent);
      }

      parent = parent.parentNode;
    }

    if (result.length === 0) {
      result.push(document);
    } else if (result[0].tagName.toLowerCase() === 'body') {
      result.length = 0;
      result.push(document);
    }
  }

  return result;
};
var parseMetricToNum = function parseMetricToNum(fontAsString) {
  if (fontAsString.match(/\s/) && process.env.NODE_ENV !== 'production') {
    console.warn("Invalid single measurement value: \"" + fontAsString + "\"");
  }

  return parseFloat(fontAsString.match(/\d+(\.\d+)?/), 10);
};

var IntersectionContext = React.createContext({
  inView: true
});
var IntersectionObserver = function IntersectionObserver(_ref) {
  var children = _ref.children,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 0 : _ref$threshold,
      _ref$reset = _ref.reset,
      reset = _ref$reset === void 0 ? false : _ref$reset;

  var _useState = useState(false),
      inView = _useState[0],
      setInView = _useState[1];

  var intersectionRef = React.useRef(null);
  var intersection = useIntersection(intersectionRef, {
    threshold: threshold
  });
  useEffect(function () {
    var inViewNow = intersection && intersection.intersectionRatio > 0;

    if (inViewNow) {
      return setInView(inViewNow);
    } else if (reset) {
      return setInView(false);
    }
  }, [intersection, reset]);
  return /*#__PURE__*/React.createElement(IntersectionContext.Provider, {
    value: {
      inView: inView
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: intersectionRef
  }, children));
};

var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
var isBrowser = typeof window !== "undefined";

function getScrollPosition(_ref) {
  var element = _ref.element,
      useWindow = _ref.useWindow;
  if (!isBrowser) return {
    x: 0,
    y: 0
  };
  var target = element ? element.current : document.body;
  var position = target.getBoundingClientRect();
  return useWindow ? {
    x: window.scrollX,
    y: window.scrollY
  } : {
    x: position.left,
    y: position.top
  };
}

function useScrollPosition(effect, deps, element, useWindow, wait) {
  var position = useRef(getScrollPosition({
    useWindow: useWindow
  }));
  var throttleTimeout = null;

  var callBack = function callBack() {
    var currPos = getScrollPosition({
      element: element,
      useWindow: useWindow
    });
    effect({
      prevPos: position.current,
      currPos: currPos
    });
    position.current = currPos;
    throttleTimeout = null;
  };

  useIsomorphicLayoutEffect(function () {
    if (!isBrowser) {
      return;
    }

    var handleScroll = function handleScroll() {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, deps);
}
useScrollPosition.defaultProps = {
  deps: [],
  element: false,
  useWindow: false,
  wait: null
};

var cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
/**
 * Returns a given CSS value minus its unit of measure.
 *
 * @deprecated - stripUnit's unitReturn functionality has been marked for deprecation in polished 4.0. It's functionality has been been moved to getValueAndUnit.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': stripUnit('100px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${stripUnit('100px')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100
 * }
 */

function stripUnit(value, unitReturn) {
  if (typeof value !== 'string') return unitReturn ? [value, undefined] : value;
  var matchedValue = value.match(cssRegex);

  if (unitReturn) {
    // eslint-disable-next-line no-console
    console.warn("stripUnit's unitReturn functionality has been marked for deprecation in polished 4.0. It's functionality has been been moved to getValueAndUnit.");
    if (matchedValue) return [parseFloat(value), matchedValue[2]];
    return [value, undefined];
  }

  if (matchedValue) return parseFloat(value);
  return value;
}

var getClosestValue = function getClosestValue(val, arr) {
  var index = arr.sort(function (a, b) {
    return a - b;
  }).findIndex(function (el) {
    return val < el;
  });
  return index > 0 ? arr[index] : null;
};

var useMediaLessThan = function useMediaLessThan(breakpoint) {
  return useMedia([breakpoint], 'max-width');
};
var useMediaGreaterThan = function useMediaGreaterThan(breakpoint) {
  return useMedia([breakpoint], 'min-width');
};
var useMediaBetween = function useMediaBetween(bp1, bp2) {
  return useMedia([bp1, bp2], 'between');
};
var useMedia = function useMedia(bp, mediaQuery) {
  if (mediaQuery === void 0) {
    mediaQuery = 'default';
  }

  if (!(bp instanceof Array)) {
    bp = [bp];
  }

  var _useState = useState(false),
      doesMatch = _useState[0],
      onSetDoesMatch = _useState[1];

  var _ref = useContext(ThemeContext) || {},
      breakpoints = _ref.breakpoints;

  var breakpointsKeys = Object.keys(breakpoints).map(function (_bp) {
    return isNaN(_bp) ? _bp : +_bp;
  });
  var _query = bp[0];

  if (breakpointsKeys.includes(bp[0])) {
    var sortedBreakpointsValues = breakpoints.map(function (e) {
      return stripUnit(e);
    });
    var maxWidth = getClosestValue(stripUnit(breakpoints[bp[0]]), sortedBreakpointsValues);

    switch (mediaQuery) {
      case 'max-width':
        _query = "(max-width: " + breakpoints[bp[0]] + ")";
        break;

      case 'min-width':
        _query = "(min-width: " + breakpoints[bp[0]] + ")";
        break;

      case 'between':
        _query = "(min-width: " + breakpoints[bp[0]] + ") and (max-width: " + breakpoints[bp[1]] + ")";
        break;

      default:
        console.warn("[vactory-ui] useMedia(" + bp + ")  ne sera pas prise en charge dans les versions à venir, utiliser plutot useMediaLessThan(), useMediaGreaterThan() ou useMediaBetween()");
        _query = "(min-width: " + breakpoints[bp[0]] + ")" + (maxWidth !== null ? "and (max-width: " + maxWidth + "px)" : '');
        break;
    }
  }

  useEffect(function () {
    var onUpdateMatch = function onUpdateMatch(_ref2) {
      var matches = _ref2.matches;
      onSetDoesMatch(matches);
    };

    var matcher = window.matchMedia(_query);
    var isModern = ('addEventListener' in matcher);

    if (isModern) {
      matcher.addEventListener('change', onUpdateMatch);
    } else {
      matcher.addListener(onUpdateMatch);
    }

    onUpdateMatch(matcher);
    return function () {
      if (isModern) {
        matcher.removeEventListener('change', onUpdateMatch);
      } else {
        matcher.removeListener(onUpdateMatch);
      }
    };
  }, [_query, onSetDoesMatch]);
  return doesMatch;
};

var BoxWithoutConfig = styled("div")({
  boxSizing: "border-box",
  margin: 0,
  minWidth: 0
}, base, sx, function (props) {
  return props.css;
}, function (props) {
  return props.styledCss;
}, compose(space$1, color, layout, flexbox, border, typography, boxShadow, position), variant);
var Box = styled(BoxWithoutConfig).withConfig({
  shouldForwardProp: function shouldForwardProp(prop, defaultValidatorFn) {
    return defaultValidatorFn(prop) && !props.includes(prop);
  }
})({});
Box.WithoutConfig = BoxWithoutConfig;
var Flex = styled(Box)({
  display: "flex"
});
Flex.WithoutConfig = styled(BoxWithoutConfig)({
  display: "flex"
});

var activeAsArray = function activeAsArray(active) {
  return typeof active === 'number' ? [active] : active;
};

var Accordion = forwardRef(function (_ref, ref) {
  var activeIndex = _ref.activeIndex,
      children = _ref.children,
      multiple = _ref.multiple,
      onChange = _ref.onChange,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'accordion' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["activeIndex", "children", "multiple", "onChange", "variant"]);

  var _useState = useState([]),
      activeIndexes = _useState[0],
      setActiveIndexes = _useState[1];

  var _useState2 = useState(),
      stateActiveIndex = _useState2[0],
      setStateActiveIndex = _useState2[1];

  var derivedActiveIndexes = activeAsArray(activeIndex) || [];

  if ((typeof activeIndex !== 'undefined' || activeIndex !== stateActiveIndex) && derivedActiveIndexes.join() !== activeIndexes.join()) {
    setActiveIndexes(derivedActiveIndexes);
    setStateActiveIndex(activeIndex);
  }

  var _onPanelChange = function onPanelChange(index) {
    var nextActiveIndexes = [].concat(activeIndexes || []);
    var nextActiveIndex = nextActiveIndexes.indexOf(index);

    if (nextActiveIndex > -1) {
      nextActiveIndexes.splice(nextActiveIndex, 1);
    } else if (multiple) {
      nextActiveIndexes.push(index);
    } else {
      nextActiveIndexes = [index];
    }

    setActiveIndexes(nextActiveIndexes);

    if (onChange) {
      onChange(nextActiveIndexes);
    }
  };

  var panels = Children.toArray(children).filter(function (child) {
    return child;
  }).map(function (child, index) {
    var key = child.props.panelKey || index;
    return /*#__PURE__*/React.createElement(AccordionContext.Provider, {
      key: index,
      value: {
        active: activeIndexes.indexOf(key) > -1,
        onPanelChange: function onPanelChange() {
          return _onPanelChange(key);
        },
        variant: variant
      }
    }, child);
  });
  return /*#__PURE__*/React.createElement(Box, _extends({
    className: "vf-accordion",
    ref: ref,
    variant: getVariant([variant])
  }, rest), panels);
});

var MotionBox = motion.custom(Box.WithoutConfig);
var MotionFlex = motion.custom(Flex.WithoutConfig);

var ParallaxBox = function ParallaxBox(_ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? MotionBox : _ref$as,
      children = _ref.children,
      _ref$easing = _ref.easing,
      easing = _ref$easing === void 0 ? [0.42, 0, 0.58, 1] : _ref$easing,
      rest = _objectWithoutPropertiesLoose(_ref, ["as", "children", "easing"]);

  var _React$useState = React.useState(0),
      elementTop = _React$useState[0],
      setElementTop = _React$useState[1];

  var ref = React.useRef(null);

  var _useViewportScroll = useViewportScroll(),
      scrollY = _useViewportScroll.scrollY;

  React.useEffect(function () {
    if (!ref.current) return;

    var setValues = function setValues() {
      setElementTop(ref.current.offsetTop);
    };

    setValues();
    document.addEventListener("load", setValues);
    window.addEventListener("resize", setValues);
    return function () {
      document.removeEventListener("load", setValues);
      window.removeEventListener("resize", setValues);
    };
  }, [ref]);
  var transformInitialValue = elementTop - 1;
  var transformFinalValue = elementTop + 1;
  var yRange = [transformInitialValue, transformFinalValue];
  var y = useTransform(scrollY, yRange, [0, -1], {
    clamp: false,
    easing: easing
  });
  return /*#__PURE__*/React.createElement(Box.WithoutConfig, _extends({
    as: as,
    ref: ref,
    style: {
      y: y
    }
  }, rest), children);
};

var defaultHidden = {
  opacity: 0
};
var defaultVisible = {
  opacity: 1
};
var RevealBox = React.forwardRef(function (_ref, ref) {
  var delayOrder = _ref.delayOrder,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 0.4 : _ref$duration,
      _ref$easing = _ref.easing,
      easing = _ref$easing === void 0 ? [0.42, 0, 0.58, 1] : _ref$easing,
      children = _ref.children,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 0.04 : _ref$threshold,
      _ref$hidden = _ref.hidden,
      hidden = _ref$hidden === void 0 ? defaultHidden : _ref$hidden,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? defaultVisible : _ref$visible,
      _ref$reset = _ref.reset,
      reset = _ref$reset === void 0 ? false : _ref$reset,
      rest = _objectWithoutPropertiesLoose(_ref, ["delayOrder", "duration", "easing", "children", "threshold", "hidden", "visible", "reset"]);

  var _React$useState = React.useState(false),
      inView = _React$useState[0],
      setInView = _React$useState[1];

  var intersectionRef = React.useRef(null);
  var intersection = useIntersection(intersectionRef, {
    threshold: threshold
  });
  React.useEffect(function () {
    var inViewNow = intersection && intersection.intersectionRatio > 0;

    if (inViewNow) {
      return setInView(inViewNow);
    } else if (reset) {
      return setInView(false);
    }
  }, [intersection, reset]);
  var transition = React.useMemo(function () {
    return {
      duration: duration,
      delay: delayOrder / 5,
      ease: easing
    };
  }, [duration, delayOrder, easing]);
  var variants = {
    hidden: _extends(_extends({}, hidden), {}, {
      transition: transition
    }),
    show: _extends(_extends({}, visible), {}, {
      transition: transition
    })
  };
  return /*#__PURE__*/React.createElement(Box, {
    ref: intersectionRef
  }, /*#__PURE__*/React.createElement(Box.WithoutConfig, _extends({
    initial: "hidden",
    animate: inView ? "show" : "hidden",
    exit: "hidden",
    variants: variants,
    ref: ref
  }, rest, {
    as: MotionBox
  }), children));
});

var PanelHeaderBaseStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderBottom: '2px solid',
  borderColor: 'gray300',
  marginBottom: '-1px',
  backgroundColor: 'transparent',
  py: ['medium', null, 'large'],
  px: 0
};
var AccordionPanel = forwardRef(function (_ref, ref) {
  var children = _ref.children,
      title = _ref.title,
      variant = _ref.variant,
      sx = _ref.sx,
      _ref$animationTransit = _ref.animationTransition,
      animationTransition = _ref$animationTransit === void 0 ? {
    ease: "easeInOut",
    duration: 0.3
  } : _ref$animationTransit,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "header", "title", "variant", "key", "sx", "animationTransition"]);

  var _useContext = useContext(AccordionContext),
      active = _useContext.active,
      variantAccordion = _useContext.variant,
      onPanelChange = _useContext.onPanelChange;

  var motionVariantsContent = {
    active: {
      height: "unset",
      display: "block",
      transition: animationTransition
    },
    inactive: {
      height: "0px",
      transitionEnd: {
        display: "none"
      }
    }
  };

  if (variant === undefined) {
    variant = variantAccordion;
  }

  return /*#__PURE__*/React.createElement(MotionBox, _extends({
    className: "vf-accordion-panel " + (active ? 'vf-accordion-panel--active' : ''),
    ref: ref,
    __css: {
      border: 0,
      '&:not(:last-of-type)': {
        borderBottom: 0
      }
    },
    sx: sx
  }, getSystemProps(rest)), /*#__PURE__*/React.createElement(MotionBox, {
    className: "vf-accordion-panel__title-container",
    role: "tab",
    "aria-selected": active,
    "aria-expanded": active,
    onClick: onPanelChange,
    __css: {
      width: '100%',
      backgroundColor: 'transparent',
      border: 0,
      padding: 0,
      margin: 0,
      '&:hover, &:focus': {
        outline: 'none',
        cursor: 'pointer'
      }
    }
  }, typeof title === 'string' ? /*#__PURE__*/React.createElement(Box, {
    className: "vf-accordion-panel__title",
    __css: PanelHeaderBaseStyle
  }, title) : cloneElement(title, {
    __css: PanelHeaderBaseStyle,
    className: 'vf-accordion-panel__title'
  })), /*#__PURE__*/React.createElement(MotionBox, {
    initial: "inactive",
    animate: active ? 'active' : 'inactive',
    variants: motionVariantsContent,
    __css: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Box, {
    __css: {
      py: ['medium', null, 'large'],
      px: 0
    },
    className: "vf-accordion__panel-content",
    variant: getVariant([variant, 'content'])
  }, children)));
});

var Anchor = React.forwardRef(function (_ref, ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "anchor.default" : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  return /*#__PURE__*/React.createElement(Box, _extends({
    as: "a",
    ref: ref,
    variant: variant
  }, rest, {
    __css: {
      boxSizing: 'border-box',
      cursor: 'pointer',
      outline: 'none',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      color: 'inherit',
      textDecoration: 'none'
    },
    className: "vf-anchor"
  }));
});

var renderBreadcrumbItems = function renderBreadcrumbItems(children, variant, separator) {
  return Children.toArray(children).filter(function (child) {
    return child;
  }).map(function (child, index) {
    var childrenCount = Children.count(children);
    var isLastItem = childrenCount === index + 1;
    return /*#__PURE__*/React.createElement(Fragment$1, {
      key: index
    }, child, isLastItem || (typeof separator === 'string' ? /*#__PURE__*/React.createElement(Box, {
      mx: "medium",
      variant: getVariant([variant, 'separator']),
      className: "vf-breadcrumb__separator"
    }, separator) : cloneElement(separator, {
      className: 'vf-breadcrumb__separator',
      variant: getVariant([variant, 'separator'])
    })));
  });
};

var Breadcrumb = forwardRef(function (_ref, ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'breadcrumb.default' : _ref$variant,
      children = _ref.children,
      _ref$separator = _ref.separator,
      separator = _ref$separator === void 0 ? '/' : _ref$separator,
      sx = _ref.sx,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant", "children", "separator", "sx"]);

  var items = renderBreadcrumbItems(children, variant, separator);
  return /*#__PURE__*/React.createElement(Box, _extends({
    className: "vf-breadcrumb",
    ref: ref,
    sx: sx
  }, getSystemProps(rest), {
    variant: getVariant([variant]),
    __css: {
      padding: 'small',
      backgroundColor: 'gray200',
      display: 'flex',
      color: 'primary500',
      alignItems: 'center'
    }
  }), items);
});

var BreadcrumbItem = React.forwardRef(function (_ref, ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'breadcrumb.default' : _ref$variant,
      children = _ref.children,
      href = _ref.href,
      active = _ref.active,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'a' : _ref$as,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant", "children", "href", "active", "as", "key"]);

  return /*#__PURE__*/React.createElement(Box.WithoutConfig, _extends({
    className: "vf-breadcrumb__item " + (active && 'vf-breadcrumb__item--active'),
    as: as,
    ref: ref,
    href: href,
    variant: getVariant([variant, 'item', active && 'active'])
  }, rest, {
    __css: {
      color: active ? 'gray900' : 'primary500',
      textDecoration: 'none',
      ':hover': {
        cursor: 'pointer',
        color: active ? 'gray900' : 'primary700'
      }
    }
  }, rest), children);
});

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n\n    display: inline-flex;\n    align-items: center;\n    flex-direction: row;\n    box-sizing: border-box;\n    cursor: pointer;\n    outline: none;\n    font: inherit;\n    text-decoration: none;\n    margin: 0;\n    background: transparent;\n    overflow: visible;\n    text-transform: none;\n    border-style: solid;\n    ", "\n\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n\n    &:disabled {\n       cursor: not-allowed;\n       pointer-events: all;\n    }\n\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var fillVariants = variant$1({
  scale: 'buttons.fill',
  prop: 'fill',
  variants: {
    primary: {}
  }
});
var sizeVariants = variant$1({
  scale: 'buttons.size',
  prop: 'size',
  variants: {
    medium: {}
  }
});
var outlineVariants = variant$1({
  scale: 'buttons.outline',
  prop: 'outline',
  variants: {
    primary: {}
  }
});
var Button = styled('button').withConfig({
  shouldForwardProp: function shouldForwardProp(prop, defaultValidatorFn) {
    return defaultValidatorFn(prop) && ![].concat(props, ["fill", "outline"]).includes(prop);
  }
})(_templateObject$1(), css$2({
  borderRadius: 'small'
}), function (_ref) {
  var stretch = _ref.stretch;
  return stretch && {
    '&::after': {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1,
      pointerEvents: 'auto',
      content: '""',
      backgroundColor: '#0000'
    }
  };
}, buttonStyle, fillVariants, outlineVariants, sizeVariants, variant, base, sx, compose(width, height$1, display, space$1, color, typography, flexbox, background, border, position, shadow));
Button.defaultProps = {
  fill: 'primary',
  size: 'medium'
};

var Link = function Link(_ref) {
  var href = _ref.href,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["href", "children"]);

  return /*#__PURE__*/React.createElement(Button, _extends({
    as: "a",
    href: href
  }, rest), children);
};

var PortalContext = createContext(undefined);
var ContainerTargetContext = React.createContext(typeof document === 'object' ? document.body : undefined);

var getTransformOriginStyle = function getTransformOriginStyle(align) {
  var vertical = 'top';

  if (align.bottom) {
    vertical = 'bottom';
  }

  var horizontal = 'left';

  if (align.right) {
    horizontal = 'right';
  }

  return vertical + " " + horizontal;
};

var DropContent = forwardRef(function (_ref, ref) {
  var children = _ref.children,
      _ref$alignProp = _ref.alignProp,
      alignProp = _ref$alignProp === void 0 ? {
    bottom: true,
    right: true
  } : _ref$alignProp,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "alignProp"]);

  return /*#__PURE__*/React.createElement(Box, _extends({
    ref: ref
  }, rest, {
    __css: {
      position: 'fixed',
      zIndex: 1000,
      outline: 'none',
      overflow: 'auto',
      transformOrigin: getTransformOriginStyle(alignProp)
    }
  }), children);
});
var DropContainer = forwardRef(function (_ref2, ref) {
  var _ref2$align = _ref2.align,
      align = _ref2$align === void 0 ? {
    top: 'top',
    left: 'left'
  } : _ref2$align,
      children = _ref2.children,
      dropTarget = _ref2.dropTarget,
      onClickOutside = _ref2.onClickOutside,
      plain = _ref2.plain,
      responsive = _ref2.responsive,
      restrictFocus = _ref2.restrictFocus,
      _ref2$stretch = _ref2.stretch,
      stretch = _ref2$stretch === void 0 ? true : _ref2$stretch,
      sx = _ref2.sx,
      rest = _objectWithoutPropertiesLoose(_ref2, ["align", "children", "dropTarget", "onClickOutside", "plain", "responsive", "restrictFocus", "stretch", "sx"]);

  var theme = useContext(ThemeContext) || {};
  var portalContext = useContext(PortalContext) || [];
  var portalId = useMemo(function () {
    return portalContext.length;
  }, [portalContext]);
  var nextPortalContext = useMemo(function () {
    return [].concat(portalContext, [portalId]);
  }, [portalContext, portalId]);
  var dropRef = useRef();
  useEffect(function () {
    var place = function place(preserveHeight) {
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      var target = dropTarget;
      var container = (ref || dropRef).current;

      if (container && target) {
        container.style.left = '';
        container.style.top = '';
        container.style.bottom = '';
        container.style.width = '';

        if (!preserveHeight) {
          container.style.maxHeight = '';
        }

        var targetRect = findVisibleParent(target).getBoundingClientRect();
        var containerRect = container.getBoundingClientRect();
        var width = Math.min(stretch ? Math.max(targetRect.width, containerRect.width) : containerRect.width, windowWidth);
        var left;

        if (align.left) {
          if (align.left === 'left') {
            left = targetRect.left;
          } else if (align.left === 'right') {
            left = targetRect.left + targetRect.width;
          }
        } else if (align.right) {
          if (align.right === 'left') {
            left = targetRect.left - width;
          } else if (align.right === 'right') {
            left = targetRect.left + targetRect.width - width;
          }
        } else {
          left = targetRect.left + targetRect.width / 2 - width / 2;
        }

        if (left + width > windowWidth) {
          left -= left + width - windowWidth;
        } else if (left < 0) {
          left = 0;
        }

        var top;
        var bottom;
        var maxHeight = containerRect.height;

        if (align.top) {
          if (align.top === 'top') {
            top = targetRect.top;
          } else {
            top = targetRect.bottom;
          }

          var percentVisibleAreaBelow = 100 - targetRect.bottom / windowHeight * 100;

          if (windowHeight === top || percentVisibleAreaBelow <= 20) {
            top = '';

            if (align.top === 'bottom') {
              bottom = targetRect.top;
            } else {
              bottom = targetRect.bottom;
            }

            maxHeight = bottom;
            container.style.maxHeight = maxHeight + "px";
          } else if (top > 0) {
            maxHeight = windowHeight - top;
            container.style.maxHeight = maxHeight + "px";
          } else {
            maxHeight = windowHeight - top;
          }
        } else if (align.bottom) {
          if (align.bottom === 'bottom') {
            bottom = targetRect.bottom;
          } else {
            bottom = targetRect.top;
          }

          maxHeight = bottom;
          container.style.maxHeight = maxHeight + "px";
        } else {
          top = targetRect.top + targetRect.height / 2 - containerRect.height / 2;
          maxHeight = windowHeight - top;
        }

        if (responsive && (containerRect.height > maxHeight || maxHeight < windowHeight / 10)) {
          if (align.top && top > windowHeight / 2) {
            top = '';

            if (align.top === 'bottom') {
              bottom = targetRect.top;
            } else {
              bottom = targetRect.bottom;
            }

            maxHeight = bottom;
          } else if (align.bottom && maxHeight < windowHeight / 2) {
            bottom = '';

            if (align.bottom === 'bottom') {
              top = targetRect.top;
            } else {
              top = targetRect.bottom;
            }

            maxHeight = windowHeight - top;
          }
        }

        container.style.left = left + "px";

        if (stretch) {
          container.style.width = width + 0.1 + "px";
        }

        if (top !== '') {
          container.style.top = top + "px";
        }

        if (bottom !== '') {
          container.style.bottom = windowHeight - bottom + "px";
        }

        if (!preserveHeight) {
          if (theme.drop && theme.drop.maxHeight) {
            maxHeight = Math.min(maxHeight, parseMetricToNum(theme.drop.maxHeight));
          }

          container.style.maxHeight = maxHeight + "px";
        }
      }
    };

    var scrollParents;

    var addScrollListeners = function addScrollListeners() {
      scrollParents = findScrollParents(dropTarget);
      scrollParents.forEach(function (scrollParent) {
        return scrollParent.addEventListener('scroll', place);
      });
    };

    var removeScrollListeners = function removeScrollListeners() {
      scrollParents.forEach(function (scrollParent) {
        return scrollParent.removeEventListener('scroll', place);
      });
      scrollParents = [];
    };

    var onClickDocument = function onClickDocument(event) {
      var clickedPortalId = null;
      var node = event.target;

      while (clickedPortalId === null && node !== document) {
        var attr = node.getAttribute('data-g-portal-id');
        if (attr !== null) clickedPortalId = parseInt(attr, 10);
        node = node.parentNode;
      }

      if (clickedPortalId === null || portalContext.indexOf(clickedPortalId) !== -1) {
        onClickOutside(event);
      }
    };

    var onResize = function onResize() {
      removeScrollListeners();
      addScrollListeners();
      place(false);
    };

    addScrollListeners();
    window.addEventListener('resize', onResize);

    if (onClickOutside) {
      document.addEventListener('mousedown', onClickDocument);
    }

    place(false);
    return function () {
      removeScrollListeners();
      window.removeEventListener('resize', onResize);

      if (onClickOutside) {
        document.removeEventListener('mousedown', onClickDocument);
      }
    };
  }, [align, dropTarget, onClickOutside, portalContext, portalId, ref, responsive, restrictFocus, stretch, theme.drop]);
  useEffect(function () {
    if (restrictFocus) {
      (ref || dropRef).current.focus();
    }
  }, [ref, restrictFocus]);
  var content = /*#__PURE__*/React.createElement(DropContent, _extends({
    sx: sx,
    ref: ref || dropRef,
    plain: plain,
    tabIndex: "-1",
    alignProp: align,
    "data-g-portal-id": portalId
  }, rest), children);
  return /*#__PURE__*/React.createElement(PortalContext.Provider, {
    value: nextPortalContext
  }, content);
});
var Drop = forwardRef(function (_ref3, ref) {
  var restrictFocus = _ref3.restrictFocus,
      dropTarget = _ref3.target,
      sx = _ref3.sx,
      rest = _objectWithoutPropertiesLoose(_ref3, ["restrictFocus", "target", "sx"]);

  var theme = useContext(ThemeContext) || {};

  var _useState = useState(),
      originalFocusedElement = _useState[0],
      setOriginalFocusedElement = _useState[1];

  useEffect(function () {
    return setOriginalFocusedElement(document.activeElement);
  }, []);

  var _useState2 = useState(),
      dropContainer = _useState2[0],
      setDropContainer = _useState2[1];

  var containerTarget = useContext(ContainerTargetContext);
  useEffect(function () {
    return setDropContainer(getNewContainer(containerTarget));
  }, [containerTarget]);
  useEffect(function () {
    return function () {
      if (restrictFocus && originalFocusedElement) {
        if (originalFocusedElement.focus) {
          setFocusWithoutScroll(originalFocusedElement);
        } else if (originalFocusedElement.parentNode && originalFocusedElement.parentNode.focus) {
          setFocusWithoutScroll(originalFocusedElement.parentNode);
        }
      }

      if (dropContainer) {
        containerTarget.removeChild(dropContainer);
      }
    };
  }, [containerTarget, dropContainer, originalFocusedElement, restrictFocus]);
  return dropContainer ? ReactDOM.createPortal( /*#__PURE__*/React.createElement(DropContainer, _extends({
    ref: ref,
    dir: theme && theme.dir,
    dropTarget: dropTarget,
    restrictFocus: restrictFocus,
    sx: sx
  }, rest)), dropContainer) : null;
});

var Footer = function Footer(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'footer' : _ref$variant,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant", "children"]);

  return /*#__PURE__*/React.createElement(Box, _extends({
    as: "footer",
    variant: getVariant([variant]),
    __css: {
      display: 'flex',
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '100%',
      minWidth: '0px',
      minHeight: '0px',
      outline: 'none'
    }
  }, rest), children);
};

var IcoMoonType = "selection";
var icons = [
	{
		icon: {
			paths: [
				"M968.372 987.782c4.929 0 9.792-2.142 13.159-6.222 5.949-7.242 4.929-17.952-2.345-23.936l-462.508-379.853c-6.291-5.168-15.3-5.168-21.59 0l-460.773 378.118c-7.242 5.949-8.296 16.695-2.313 23.936s16.627 8.331 23.903 2.347l449.963-369.211 451.73 370.978c3.128 2.584 6.969 3.841 10.778 3.841zM102.075 1022.53h807.511c56.645 0 114.379-55.796 114.379-110.5v-595.006c0-5.303-2.482-10.302-6.664-13.499l-316.102-241.572c-50.186-38.964-117.981-60.486-190.776-60.486s-140.624 21.522-190.912 60.589l-308.996 241.607c-4.114 3.263-6.495 8.194-6.495 13.431v595.006c-0.034 53.244 39.408 110.434 98.059 110.434zM989.995 325.419v586.609c0 36.45-42.060 76.501-80.378 76.501h-807.511c-37.774 0-64.125-40.324-64.125-76.501v-586.71l302.4-236.507c43.689-33.931 105.673-53.379 170.037-53.379s126.312 19.482 170.037 53.449l309.54 236.541zM607.628 691.604c4.148 0 8.262-1.462 11.527-4.522l386.993-357.582c6.867-6.391 7.311-17.135 0.952-24.038s-17.135-7.309-24.038-0.952l-386.993 357.616c-6.901 6.393-7.309 17.135-0.952 24.038 3.401 3.604 7.957 5.441 12.511 5.441zM403.897 691.604c4.59 0 9.18-1.869 12.479-5.508 6.393-6.901 5.949-17.647-0.952-24.038l-386.824-357.582c-6.867-6.357-17.613-5.983-24.038 0.952-6.393 6.901-5.951 17.645 0.952 24.038l386.824 357.582c3.333 3.026 7.447 4.556 11.561 4.556zM224.986 529.525c9.385 0 17.002-7.616 17.002-17.002v-272.005h510.006v272.005c0 9.385 7.616 17.002 17.002 17.002s17.002-7.616 17.002-17.002v-289.004c0-9.383-7.616-17.002-17.002-17.002h-544.007c-9.385 0-17.002 7.616-17.002 17.002v289.004c0 9.385 7.582 17.002 17.002 17.002zM343.987 376.521h340.005c9.383 0 17.002-7.616 17.002-17.002s-7.616-17.002-17.002-17.002h-340.005c-9.385 0-17.002 7.616-17.002 17.002s7.582 17.002 17.002 17.002zM343.987 512.524h340.005c9.383 0 17.002-7.616 17.002-17.002s-7.616-17.002-17.002-17.002h-340.005c-9.385 0-17.002 7.616-17.002 17.002s7.582 17.002 17.002 17.002z"
			],
			attrs: [
				{
				}
			],
			isMulticolor: false,
			isMulticolor2: false,
			grid: 16,
			tags: [
				"mail letter envelope opened"
			]
		},
		attrs: [
			{
			}
		],
		properties: {
			order: 37,
			id: 458,
			name: "opened-envelope",
			prevSize: 24,
			code: 59658
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 0
	},
	{
		icon: {
			paths: [
				"M102.407 887.459h819.166c56.456 0 102.396-45.94 102.396-102.396v-546.112c0-56.454-45.94-102.396-102.396-102.396h-819.166c-56.454 0-102.396 45.94-102.396 102.396v546.112c0 56.454 45.94 102.396 102.396 102.396zM921.573 170.69c37.68 0 68.263 30.617 68.263 68.263v546.112c0 37.68-30.581 68.265-68.263 68.265h-819.166c-37.68 0-68.263-30.581-68.263-68.265v-546.112c0-37.648 30.581-68.265 68.265-68.265h819.166zM503.832 632.733c42.016 0 81.371-17.613 110.759-49.526l264.831-289.608c6.348-6.964 5.872-17.749-1.092-24.131-6.93-6.35-17.747-5.872-24.131 1.092l-264.795 289.574c-45.6 49.594-125.605 49.594-171.239-0.034l-264.317-289.2c-6.384-6.964-17.133-7.408-24.131-1.058-6.962 6.382-7.442 17.167-1.092 24.131l264.385 289.234c29.455 31.913 68.775 49.526 110.827 49.526zM866.825 768.68c4.608 0 9.25-1.91 12.593-5.598 6.384-6.928 5.872-17.749-1.092-24.063l-232.848-212.641c-6.964-6.35-17.783-5.87-24.131 1.092s-5.87 17.783 1.092 24.097l232.848 212.641c3.312 3.004 7.442 4.472 11.538 4.472zM140.703 768.68c4.13 0 8.226-1.468 11.504-4.472l232.984-212.643c6.962-6.35 7.476-17.133 1.058-24.097-6.384-6.996-17.133-7.442-24.063-1.092l-232.984 212.641c-6.962 6.35-7.476 17.133-1.092 24.063 3.38 3.686 7.986 5.598 12.595 5.598z"
			],
			attrs: [
				{
				}
			],
			isMulticolor: false,
			isMulticolor2: false,
			grid: 16,
			tags: [
				"mail letter envelope"
			]
		},
		attrs: [
			{
			}
		],
		properties: {
			order: 36,
			id: 457,
			name: "envelope",
			prevSize: 24,
			code: 59659
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 1
	},
	{
		icon: {
			paths: [
				"M472.592 845.256c-12.185 0-24.058-2.444-35.247-7.402l-64.297-28.499c-92.933-41.029-100.298-221.351-16.727-410.42 70.871-160.259 183.662-272.19 274.427-272.19 14.317 0 27.914 2.789 40.34 8.261l64.261 28.396c21.376 9.43 37.792 26.64 46.261 48.429 8.398 21.787 7.883 45.573-1.617 66.913l-18.897 42.887c-18.966 42.852-72.213 63.746-115.374 44.712l-64.329-28.362c-22.235-9.913-73.417 34.832-107.871 112.758-16.796 37.966-26.228 76.206-26.571 107.597-0.276 25.23 5.748 43.714 15.763 48.084l64.295 28.328c44.127 19.551 64.16 71.351 44.676 115.444l-18.931 42.887c-14.079 31.702-45.502 52.18-80.165 52.18zM630.717 161.129c-75.105 0-179.531 108.182-242.935 251.712-73.211 165.696-73.623 332.907-0.861 365.020l64.297 28.499c26.194 11.496 58.513-1.206 69.976-27.158l18.897-42.887c11.875-26.708-0.345-58.099-27.089-69.976l-64.261-28.362c-23.853-10.568-36.76-38.93-36.278-79.991 0.413-35.967 10.876-78.993 29.497-121.158 41.304-93.449 108.388-150.207 153.271-130.348l64.295 28.362c26.297 11.598 58.48-1.135 69.976-27.122l18.966-42.887c5.713-12.976 6.093-27.364 0.93-40.582-5.060-13.216-15.075-23.681-27.983-29.394l-64.226-28.396c-8.121-3.58-16.969-5.334-26.47-5.334zM512.073 1023.994c-80.885 0-130.314-17.312-151.24-52.971-28.981-49.425 7.367-114.375 33.902-161.842l3.925-6.986c4.612-8.295 15.075-11.324 23.407-6.678s11.324 15.075 6.678 23.441l-3.959 7.089c-21.202 37.932-53.247 95.272-34.283 127.628 13.803 23.508 55.828 35.933 121.501 35.933 263.345 0 477.573-214.262 477.573-477.573 0-263.345-214.262-477.573-477.573-477.573-263.31-0.034-477.538 214.194-477.538 477.538 0 137.437 59.305 268.37 162.736 359.202 7.16 6.298 7.883 17.141 1.549 24.266-6.264 7.194-17.141 7.883-24.3 1.617-110.864-97.372-174.439-237.703-174.439-385.087 0-282.31 229.683-511.993 511.993-511.993 282.276 0 511.991 229.683 511.991 511.993s-229.612 511.993-511.922 511.993z"
			],
			attrs: [
				{
				}
			],
			isMulticolor: false,
			isMulticolor2: false,
			grid: 16,
			tags: [
				"headset circled"
			]
		},
		attrs: [
			{
			}
		],
		properties: {
			order: 35,
			id: 456,
			name: "headset",
			prevSize: 24,
			code: 59660
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 2
	},
	{
		icon: {
			paths: [
				"M512.009 1023.805c-205.792 0-511.986-33.8-511.986-127.042 0-90.762 282.134-116.647 368.595-122.429 9.191-0.653 17.657 6.575 18.345 16.005 0.585 9.465-6.606 17.657-16.073 18.345-229.508 15.35-336.449 61.572-336.449 88.078 0 32.318 164.009 92.622 477.568 92.622s477.568-60.302 477.568-92.622c0-25.71-103.395-71.213-325.297-87.287-9.467-0.689-16.59-8.948-15.903-18.414s8.882-16.521 18.416-15.936c83.778 6.091 357.203 32.834 357.203 121.636 0 93.239-306.195 127.042-511.988 127.042zM512.009 895.144c2.684 0 5.368-0.655 7.847-1.893 14.869-7.608 364.327-189.307 364.327-517.288 0-210.68-163.493-375.755-372.175-375.755s-372.175 165.039-372.175 375.755c0 327.981 349.458 509.714 364.327 517.288 2.479 1.239 5.197 1.893 7.847 1.893zM512.009 34.63c189.375 0 337.755 149.929 337.755 341.334 0 281-286.367 453.678-337.755 482.388-51.355-28.738-337.722-201.732-337.722-482.388-0.036-191.404 148.349-341.334 337.722-341.334zM512.009 480.496c87.769 0 159.188-71.42 159.188-159.19s-71.418-159.188-159.188-159.188-159.188 71.418-159.188 159.188c0 87.803 71.388 159.188 159.188 159.188zM512.009 196.536c68.804 0 124.77 55.965 124.77 124.768s-55.965 124.768-124.77 124.768c-68.84 0-124.768-55.965-124.768-124.768s55.93-124.768 124.77-124.768z"
			],
			attrs: [
				{
				}
			],
			isMulticolor: false,
			isMulticolor2: false,
			grid: 16,
			tags: [
				"position pin location"
			]
		},
		attrs: [
			{
			}
		],
		properties: {
			order: 34,
			id: 455,
			name: "position-pin",
			prevSize: 24,
			code: 59662
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 3
	},
	{
		icon: {
			paths: [
				"M485.053-0.001c27.782-0.139 51.117 20.863 53.895 48.506l-0.001 382.651 382.654 0.001c29.765 0 53.895 24.129 53.895 53.895s-24.129 53.895-53.895 53.895l-382.654-0.001 0.001 382.654c0 29.765-24.129 53.895-53.895 53.895s-53.895-24.129-53.895-53.895l-0.001-382.654-382.651 0.001c-27.643-2.778-48.644-26.113-48.506-53.895-0.139-27.782 20.863-51.117 48.506-53.895l382.651-0.001 0.001-382.651c2.778-27.643 26.113-48.644 53.895-48.506z"
			],
			attrs: [
			],
			grid: 16,
			tags: [
				"actions"
			]
		},
		attrs: [
		],
		properties: {
			order: 7,
			id: 4,
			name: "add-simple",
			prevSize: 24,
			code: 59648
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 9
	},
	{
		icon: {
			paths: [
				"M794.531 338.851c15.962 18.768 14.534 46.724-3.258 63.767l-341.644 319.767c-22.746 19.688-57.048 17.622-77.265-4.655l-139.636-124.742c-19.28-17.095-21.051-46.582-3.956-65.862s46.582-21.051 65.862-3.956l124.276 105.193 310.924-293.236c19.031-16.441 47.68-14.792 64.698 3.724z",
				"M512 93.091c-231.357 0-418.909 187.552-418.909 418.909s187.552 418.909 418.909 418.909c231.357 0 418.909-187.552 418.909-418.909s-187.552-418.909-418.909-418.909zM0 512c0-282.77 229.23-512 512-512s512 229.23 512 512c0 282.77-229.23 512-512 512-135.791 0-266.020-53.943-362.039-149.961s-149.961-226.248-149.961-362.039z"
			],
			attrs: [
			],
			grid: 16,
			tags: [
				"actions"
			]
		},
		attrs: [
		],
		properties: {
			order: 5,
			id: 3,
			name: "actions-check",
			prevSize: 24,
			code: 59649
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 10
	},
	{
		icon: {
			paths: [
				"M231.538 787.342c19.539 24.4 55.104 28.465 79.644 9.102 11.889-9.399 19.536-23.154 21.244-38.212s-2.662-30.177-12.142-42.001l-109.796-136.533h726.471c31.419 0 56.889-25.47 56.889-56.889s-25.47-56.889-56.889-56.889h-743.538l126.862-158.151c9.48-11.824 13.851-26.942 12.142-42.001s-9.356-28.813-21.244-38.212c-24.54-19.363-60.106-15.298-79.644 9.102l-186.596 232.676c-19.968 24.94-19.968 60.393 0 85.333l186.596 232.676z"
			],
			attrs: [
			],
			grid: 16,
			tags: [
				"arrows"
			]
		},
		attrs: [
		],
		properties: {
			order: 4,
			id: 2,
			name: "arrows-left",
			prevSize: 24,
			code: 59650
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 11
	},
	{
		icon: {
			paths: [
				"M463.36 754.347c39.282 35.398 98.958 35.398 138.24 0l375.467-357.547c33.086-33.283 33.086-87.037 0-120.32-16.023-16.155-37.834-25.241-60.587-25.241s-44.564 9.087-60.587 25.241l-313.173 295.253c-8.053 7.075-20.107 7.075-28.16 0l-352.427-306.347c-35.582-31.105-89.642-27.475-120.747 8.107s-27.475 89.642 8.107 120.747l413.867 360.107z"
			],
			attrs: [
			],
			grid: 16,
			tags: [
				"chevron"
			]
		},
		attrs: [
		],
		properties: {
			order: 3,
			id: 1,
			name: "chevron-down",
			prevSize: 24,
			code: 59651
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 12
	},
	{
		icon: {
			paths: [
				"M164.693 753.493l316.587-301.227c8.053-7.075 20.107-7.075 28.16 0l352.427 307.2c35.582 31.105 89.642 27.475 120.747-8.107s27.475-89.642-8.107-120.747l-413.867-360.96c-39.282-35.398-98.958-35.398-138.24 0l-375.467 357.547c-33.086 33.283-33.086 87.037 0 120.32 31.345 33.151 83.221 35.783 117.76 5.973z"
			],
			attrs: [
			],
			grid: 16,
			tags: [
				"chevron"
			]
		},
		attrs: [
		],
		properties: {
			order: 2,
			id: 0,
			name: "chevron-top",
			prevSize: 24,
			code: 59652
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 13
	},
	{
		icon: {
			paths: [
				"M959.884 128c0.040 0.034 0.082 0.076 0.116 0.116v767.77c-0.034 0.040-0.076 0.082-0.116 0.116h-895.77c-0.040-0.034-0.082-0.076-0.114-0.116v-767.772c0.034-0.040 0.076-0.082 0.114-0.114h895.77zM960 64h-896c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64v-768c0-35.2-28.8-64-64-64v0z",
				"M832 288c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.98 96 96z",
				"M896 832h-768v-128l224-384 256 320h64l224-192z"
			],
			tags: [
				"image",
				"picture",
				"photo",
				"graphic"
			],
			defaultCode: 59661,
			grid: 16,
			attrs: [
			]
		},
		attrs: [
		],
		properties: {
			ligatures: "image, picture",
			name: "image",
			order: 21,
			id: 14,
			prevSize: 24,
			code: 59661
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 14
	},
	{
		icon: {
			paths: [
				"M288 576h-64v448h64c17.6 0 32-14.4 32-32v-384c0-17.6-14.4-32-32-32z",
				"M736 576c-17.602 0-32 14.4-32 32v384c0 17.6 14.398 32 32 32h64v-448h-64z",
				"M1024 512c0-282.77-229.23-512-512-512s-512 229.23-512 512c0 61.412 10.83 120.29 30.656 174.848-19.478 33.206-30.656 71.87-30.656 113.152 0 112.846 83.448 206.188 192 221.716v-443.418c-31.914 4.566-61.664 15.842-87.754 32.378-5.392-26.718-8.246-54.364-8.246-82.676 0-229.75 186.25-416 416-416s416 186.25 416 416c0 28.314-2.83 55.968-8.22 82.696-26.1-16.546-55.854-27.848-87.78-32.418v443.44c108.548-15.532 192-108.874 192-221.714 0-41.274-11.178-79.934-30.648-113.138 19.828-54.566 30.648-113.452 30.648-174.866z"
			],
			tags: [
				"headphones",
				"headset",
				"music",
				"audio"
			],
			defaultCode: 59664,
			grid: 16,
			attrs: [
			]
		},
		attrs: [
		],
		properties: {
			ligatures: "headphones, headset",
			name: "headphones",
			order: 25,
			id: 17,
			prevSize: 24,
			code: 59664
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 15
	},
	{
		icon: {
			paths: [
				"M960 0h64v736c0 88.366-100.29 160-224 160s-224-71.634-224-160c0-88.368 100.29-160 224-160 62.684 0 119.342 18.4 160 48.040v-368.040l-512 113.778v494.222c0 88.366-100.288 160-224 160s-224-71.634-224-160c0-88.368 100.288-160 224-160 62.684 0 119.342 18.4 160 48.040v-624.040l576-128z"
			],
			tags: [
				"music",
				"song",
				"audio",
				"sound",
				"note"
			],
			defaultCode: 59665,
			grid: 16,
			attrs: [
			]
		},
		attrs: [
		],
		properties: {
			ligatures: "music, song",
			name: "music",
			order: 22,
			id: 18,
			prevSize: 24,
			code: 59665
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 16
	},
	{
		icon: {
			paths: [
				"M981.188 160.108c-143.632-20.65-302.332-32.108-469.186-32.108-166.86 0-325.556 11.458-469.194 32.108-27.53 107.726-42.808 226.75-42.808 351.892 0 125.14 15.278 244.166 42.808 351.89 143.638 20.652 302.336 32.11 469.194 32.11 166.854 0 325.552-11.458 469.186-32.11 27.532-107.724 42.812-226.75 42.812-351.89 0-125.142-15.28-244.166-42.812-351.892zM384.002 704v-384l320 192-320 192z"
			],
			tags: [
				"play",
				"video",
				"movie"
			],
			defaultCode: 59666,
			grid: 16,
			attrs: [
			]
		},
		attrs: [
		],
		properties: {
			ligatures: "play, video",
			name: "play",
			order: 24,
			id: 19,
			prevSize: 24,
			code: 59666
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 17
	},
	{
		icon: {
			paths: [
				"M0 128v768h1024v-768h-1024zM192 832h-128v-128h128v128zM192 576h-128v-128h128v128zM192 320h-128v-128h128v128zM768 832h-512v-640h512v640zM960 832h-128v-128h128v128zM960 576h-128v-128h128v128zM960 320h-128v-128h128v128zM384 320v384l256-192z"
			],
			tags: [
				"film",
				"video",
				"movie",
				"tape",
				"play"
			],
			defaultCode: 59667,
			grid: 16,
			attrs: [
			]
		},
		attrs: [
		],
		properties: {
			ligatures: "film, video2",
			name: "film",
			order: 23,
			id: 20,
			prevSize: 24,
			code: 59667
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 18
	},
	{
		icon: {
			paths: [
				"M917.806 357.076c-22.21-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-368c-44.114 0-80 35.888-80 80v736c0 44.112 35.886 80 80 80h608c44.112 0 80-35.888 80-80v-496c0-14.332-4.372-39.35-42.194-90.924zM785.374 302.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.982 17.78 50.678 41.878 81.374 72.572v0zM896 944c0 8.672-7.328 16-16 16h-608c-8.672 0-16-7.328-16-16v-736c0-8.672 7.328-16 16-16 0 0 367.956-0.002 368 0v224c0 17.672 14.324 32 32 32h224v496z",
				"M602.924 42.196c-51.574-37.822-76.592-42.196-90.924-42.196h-368c-44.112 0-80 35.888-80 80v736c0 38.632 27.528 70.958 64 78.39v-814.39c0-8.672 7.328-16 16-16h486.876c-9.646-7.92-19.028-15.26-27.952-21.804z"
			],
			tags: [
				"files-empty",
				"files",
				"documents",
				"papers",
				"pages"
			],
			defaultCode: 59685,
			grid: 16,
			attrs: [
			]
		},
		attrs: [
		],
		properties: {
			ligatures: "files-empty, files",
			name: "files-empty",
			order: 14,
			id: 38,
			prevSize: 24,
			code: 59685
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 19
	},
	{
		icon: {
			paths: [
				"M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z",
				"M736 832h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z",
				"M736 704h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z",
				"M736 576h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"
			],
			tags: [
				"file-text",
				"file",
				"document",
				"list",
				"paper",
				"page"
			],
			defaultCode: 59686,
			grid: 16,
			attrs: [
			]
		},
		attrs: [
		],
		properties: {
			ligatures: "file-text2, file4",
			name: "file-text2",
			order: 20,
			id: 39,
			prevSize: 24,
			code: 59686
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 20
	},
	{
		icon: {
			paths: [
				"M832 960l192-512h-832l-192 512zM128 384l-128 576v-832h288l128 128h416v128z"
			],
			tags: [
				"folder-open",
				"directory",
				"category",
				"browse"
			],
			defaultCode: 59696,
			grid: 16,
			attrs: [
			]
		},
		attrs: [
		],
		properties: {
			ligatures: "folder-open, directory2",
			name: "folder-open",
			order: 19,
			id: 49,
			prevSize: 24,
			code: 59696
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 21
	},
	{
		icon: {
			paths: [
				"M928 128h-832c-52.8 0-96 43.2-96 96v640c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-640c0-52.8-43.2-96-96-96zM398.74 550.372l-270.74 210.892v-501.642l270.74 290.75zM176.38 256h671.24l-335.62 252-335.62-252zM409.288 561.698l102.712 110.302 102.71-110.302 210.554 270.302h-626.528l210.552-270.302zM625.26 550.372l270.74-290.75v501.642l-270.74-210.892z"
			],
			tags: [
				"envelop",
				"mail",
				"email",
				"contact",
				"letter"
			],
			defaultCode: 59717,
			grid: 16,
			attrs: [
			]
		},
		attrs: [
		],
		properties: {
			ligatures: "envelop, mail",
			name: "envelop",
			order: 18,
			id: 70,
			prevSize: 24,
			code: 59717
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 22
	},
	{
		icon: {
			paths: [
				"M896 0h-896v1024h1024v-896l-128-128zM512 128h128v256h-128v-256zM896 896h-768v-768h64v320h576v-320h74.978l53.022 53.018v714.982z"
			],
			tags: [
				"floppy-disk",
				"save"
			],
			defaultCode: 59746,
			grid: 16,
			attrs: [
			]
		},
		attrs: [
		],
		properties: {
			ligatures: "floppy-disk, save2",
			name: "floppy-disk",
			order: 17,
			id: 99,
			prevSize: 24,
			code: 59746
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 23
	},
	{
		icon: {
			paths: [
				"M512 192c-54.932 0-107.988 8.662-157.694 25.742-46.712 16.054-88.306 38.744-123.628 67.444-66.214 53.798-102.678 122.984-102.678 194.814 0 40.298 11.188 79.378 33.252 116.152 22.752 37.92 56.982 72.586 98.988 100.252 30.356 19.992 50.78 51.948 56.176 87.894 1.8 11.984 2.928 24.088 3.37 36.124 7.47-6.194 14.75-12.846 21.88-19.976 24.154-24.152 56.78-37.49 90.502-37.49 5.368 0 10.762 0.336 16.156 1.024 20.974 2.666 42.398 4.020 63.676 4.020 54.934 0 107.988-8.66 157.694-25.742 46.712-16.054 88.306-38.744 123.628-67.444 66.214-53.796 102.678-122.984 102.678-194.814s-36.464-141.016-102.678-194.814c-35.322-28.698-76.916-51.39-123.628-67.444-49.706-17.080-102.76-25.742-157.694-25.742zM512 64v0c282.77 0 512 186.25 512 416 0 229.752-229.23 416-512 416-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"
			],
			tags: [
				"bubble",
				"comment",
				"chat",
				"talk"
			],
			defaultCode: 59758,
			grid: 16,
			attrs: [
			]
		},
		attrs: [
		],
		properties: {
			ligatures: "bubble2, comment2",
			name: "bubble2",
			order: 16,
			id: 111,
			prevSize: 24,
			code: 59758
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 24
	},
	{
		icon: {
			paths: [
				"M933.79 610.25c-53.726-93.054-21.416-212.304 72.152-266.488l-100.626-174.292c-28.75 16.854-62.176 26.518-97.846 26.518-107.536 0-194.708-87.746-194.708-195.99h-201.258c0.266 33.41-8.074 67.282-25.958 98.252-53.724 93.056-173.156 124.702-266.862 70.758l-100.624 174.292c28.97 16.472 54.050 40.588 71.886 71.478 53.638 92.908 21.512 211.92-71.708 266.224l100.626 174.292c28.65-16.696 61.916-26.254 97.4-26.254 107.196 0 194.144 87.192 194.7 194.958h201.254c-0.086-33.074 8.272-66.57 25.966-97.218 53.636-92.906 172.776-124.594 266.414-71.012l100.626-174.29c-28.78-16.466-53.692-40.498-71.434-71.228zM512 719.332c-114.508 0-207.336-92.824-207.336-207.334 0-114.508 92.826-207.334 207.336-207.334 114.508 0 207.332 92.826 207.332 207.334-0.002 114.51-92.824 207.334-207.332 207.334z"
			],
			tags: [
				"cog",
				"gear",
				"preferences",
				"settings",
				"generate",
				"control",
				"options"
			],
			defaultCode: 59796,
			grid: 16,
			attrs: [
			]
		},
		attrs: [
		],
		properties: {
			ligatures: "cog, gear",
			name: "cog",
			order: 15,
			id: 149,
			prevSize: 24,
			code: 59796
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 25
	},
	{
		icon: {
			paths: [
				"M512 1024c282.77 0 512-229.23 512-512s-229.23-512-512-512-512 229.23-512 512 229.23 512 512 512zM512 96c229.75 0 416 186.25 416 416s-186.25 416-416 416-416-186.25-416-416 186.25-416 416-416zM512 598.76c115.95 0 226.23-30.806 320-84.92-14.574 178.438-153.128 318.16-320 318.16-166.868 0-305.422-139.872-320-318.304 93.77 54.112 204.050 85.064 320 85.064zM256 352c0-53.019 28.654-96 64-96s64 42.981 64 96c0 53.019-28.654 96-64 96s-64-42.981-64-96zM640 352c0-53.019 28.654-96 64-96s64 42.981 64 96c0 53.019-28.654 96-64 96s-64-42.981-64-96z"
			],
			tags: [
				"happy",
				"emoticon",
				"smiley",
				"face"
			],
			defaultCode: 59871,
			grid: 16,
			attrs: [
			]
		},
		attrs: [
		],
		properties: {
			ligatures: "happy, emoticon",
			name: "happy",
			order: 11,
			id: 224,
			prevSize: 24,
			code: 59871
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 26
	},
	{
		icon: {
			paths: [
				"M512 1024c282.77 0 512-229.23 512-512s-229.23-512-512-512-512 229.23-512 512 229.23 512 512 512zM512 96c229.75 0 416 186.25 416 416s-186.25 416-416 416-416-186.25-416-416 186.25-416 416-416zM256 320c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64s-64-28.654-64-64zM640 320c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64s-64-28.654-64-64zM704.098 627.26l82.328 49.396c-55.962 93.070-157.916 155.344-274.426 155.344s-218.464-62.274-274.426-155.344l82.328-49.396c39.174 65.148 110.542 108.74 192.098 108.74s152.924-43.592 192.098-108.74z"
			],
			tags: [
				"smile",
				"emoticon",
				"smiley",
				"face"
			],
			defaultCode: 59873,
			grid: 16,
			attrs: [
			]
		},
		attrs: [
		],
		properties: {
			ligatures: "smile, emoticon3",
			name: "smile",
			order: 10,
			id: 226,
			prevSize: 24,
			code: 59873
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 27
	},
	{
		icon: {
			paths: [
				"M992 384h-352v-352c0-17.672-14.328-32-32-32h-192c-17.672 0-32 14.328-32 32v352h-352c-17.672 0-32 14.328-32 32v192c0 17.672 14.328 32 32 32h352v352c0 17.672 14.328 32 32 32h192c17.672 0 32-14.328 32-32v-352h352c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32z"
			],
			tags: [
				"plus",
				"add",
				"sum"
			],
			defaultCode: 59914,
			grid: 16,
			attrs: [
			]
		},
		attrs: [
		],
		properties: {
			ligatures: "plus, add",
			name: "plus",
			order: 9,
			id: 267,
			prevSize: 24,
			code: 59914
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 28
	},
	{
		icon: {
			paths: [
				"M0 416v192c0 17.672 14.328 32 32 32h960c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32h-960c-17.672 0-32 14.328-32 32z"
			],
			tags: [
				"minus",
				"subtract",
				"minimize",
				"line"
			],
			defaultCode: 59915,
			grid: 16,
			attrs: [
			]
		},
		attrs: [
		],
		properties: {
			ligatures: "minus, subtract",
			name: "minus",
			order: 8,
			id: 268,
			prevSize: 24,
			code: 59915
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 29
	},
	{
		icon: {
			paths: [
				"M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z"
			],
			tags: [
				"facebook",
				"brand",
				"social"
			],
			defaultCode: 60048,
			grid: 16,
			attrs: [
			]
		},
		attrs: [
		],
		properties: {
			ligatures: "facebook, brand10",
			name: "facebook",
			order: 26,
			id: 401,
			prevSize: 24,
			code: 60048
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 30
	},
	{
		icon: {
			paths: [
				"M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z",
				"M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z",
				"M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"
			],
			tags: [
				"instagram",
				"brand",
				"social"
			],
			defaultCode: 60050,
			grid: 16,
			attrs: [
			]
		},
		attrs: [
		],
		properties: {
			ligatures: "instagram, brand12",
			name: "instagram",
			order: 27,
			id: 403,
			prevSize: 24,
			code: 60050
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 31
	},
	{
		icon: {
			paths: [
				"M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z"
			],
			tags: [
				"twitter",
				"brand",
				"tweet",
				"social"
			],
			defaultCode: 60054,
			grid: 16,
			attrs: [
			]
		},
		attrs: [
		],
		properties: {
			ligatures: "twitter, brand16",
			name: "twitter",
			order: 28,
			id: 407,
			prevSize: 24,
			code: 60054
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 32
	},
	{
		icon: {
			paths: [
				"M425.6 37.4c-1.6-1-3.4-1.8-5-2.6-1.8 0.4-3.4 0.6-5.2 1l10.2 1.6z",
				"M36.8 421c-0.4 1.8-0.6 3.6-0.8 5.2 1 1.6 1.6 3.2 2.6 4.8l-1.8-10z",
				"M986.8 602.6c0.4-1.8 0.6-3.6 1-5.4-1-1.6-1.6-3.2-2.6-4.8l1.6 10.2z",
				"M592 983c1.6 1 3.4 1.8 5 2.6 1.8-0.4 3.6-0.6 5.4-0.8l-10.4-1.8z",
				"M987.8 597.2c-0.4 1.8-0.6 3.6-1 5.4l-1.8-10.4c1 1.8 1.8 3.4 2.8 5 5.2-28.8 8-58.2 8-87.6 0-65.2-12.8-128.6-38-188.2-24.4-57.6-59.2-109.4-103.6-153.8s-96.2-79.2-153.6-103.6c-59.6-25.2-123-38-188.2-38-30.8 0-61.6 2.8-91.6 8.6 0 0-0.2 0-0.2 0 1.6 0.8 3.4 1.6 5 2.6l-10.2-1.6c1.8-0.4 3.4-0.6 5.2-1-41.2-21.8-87.4-33.6-134.2-33.6-76.4 0-148.4 29.8-202.4 83.8s-83.8 126-83.8 202.4c0 48.6 12.6 96.6 36 138.8 0.4-1.8 0.6-3.6 0.8-5.2l1.8 10.2c-1-1.6-1.8-3.2-2.6-4.8-4.8 27.4-7.2 55.4-7.2 83.4 0 65.2 12.8 128.6 38 188.2 24.4 57.6 59.2 109.2 103.6 153.6s96.2 79.2 153.8 103.6c59.6 25.2 123 38 188.2 38 28.4 0 56.8-2.6 84.6-7.6-1.6-1-3.2-1.8-5-2.6l10.4 1.8c-1.8 0.4-3.6 0.6-5.4 0.8 42.8 24.2 91.4 37.2 140.8 37.2 76.4 0 148.4-29.8 202.4-83.8s83.8-126 83.8-202.4c-0.2-48.6-12.8-96.6-36.4-139.2zM514.2 805.8c-171.8 0-248.6-84.4-248.6-147.8 0-32.4 24-55.2 57-55.2 73.6 0 54.4 105.6 191.6 105.6 70.2 0 109-38.2 109-77.2 0-23.4-11.6-49.4-57.8-60.8l-152.8-38.2c-123-30.8-145.4-97.4-145.4-160 0-129.8 122.2-178.6 237-178.6 105.8 0 230.4 58.4 230.4 136.4 0 33.4-29 52.8-62 52.8-62.8 0-51.2-86.8-177.6-86.8-62.8 0-97.4 28.4-97.4 69s49.6 53.6 92.6 63.4l113.2 25.2c123.8 27.6 155.2 100 155.2 168 0 105.4-81 184.2-244.4 184.2z"
			],
			tags: [
				"skype",
				"brand",
				"social"
			],
			defaultCode: 60101,
			grid: 16,
			attrs: [
			]
		},
		attrs: [
		],
		properties: {
			ligatures: "skype, brand60",
			name: "skype",
			order: 29,
			id: 454,
			prevSize: 24,
			code: 60101
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 33
	},
	{
		icon: {
			paths: [
				"M670.165 737.835l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
			],
			attrs: [
			],
			isMulticolor: false,
			isMulticolor2: false,
			tags: [
				"chevron-left"
			],
			grid: 24
		},
		attrs: [
		],
		properties: {
			id: 48,
			order: 31,
			prevSize: 24,
			code: 59654,
			name: "chevron-left"
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 4
	},
	{
		icon: {
			paths: [
				"M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"
			],
			attrs: [
			],
			isMulticolor: false,
			isMulticolor2: false,
			tags: [
				"chevron-right"
			],
			grid: 24
		},
		attrs: [
		],
		properties: {
			id: 49,
			order: 30,
			prevSize: 24,
			code: 59655,
			name: "chevron-right"
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 5
	},
	{
		icon: {
			paths: [
				"M499.499 695.168l-183.168-183.168 183.168-183.168c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-213.333 213.333c-16.683 16.683-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331zM798.165 695.168l-183.168-183.168 183.168-183.168c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-213.333 213.333c-16.683 16.683-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
			],
			attrs: [
			],
			isMulticolor: false,
			isMulticolor2: false,
			tags: [
				"chevrons-left"
			],
			grid: 24
		},
		attrs: [
		],
		properties: {
			id: 52,
			order: 33,
			prevSize: 24,
			code: 59656,
			name: "chevrons-left"
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 6
	},
	{
		icon: {
			paths: [
				"M584.832 755.499l213.333-213.333c16.683-16.683 16.683-43.691 0-60.331l-213.333-213.333c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l183.168 183.168-183.168 183.168c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0zM286.165 755.499l213.333-213.333c16.683-16.683 16.683-43.691 0-60.331l-213.333-213.333c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l183.168 183.168-183.168 183.168c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"
			],
			attrs: [
			],
			isMulticolor: false,
			isMulticolor2: false,
			tags: [
				"chevrons-right"
			],
			grid: 24
		},
		attrs: [
		],
		properties: {
			id: 53,
			order: 32,
			prevSize: 24,
			code: 59657,
			name: "chevrons-right"
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 7
	},
	{
		icon: {
			paths: [
				"M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
			],
			attrs: [
				{
				}
			],
			isMulticolor: false,
			isMulticolor2: false,
			tags: [
				"menu"
			],
			grid: 24
		},
		attrs: [
			{
			}
		],
		properties: {
			order: 1,
			id: 0,
			name: "menu",
			prevSize: 24,
			code: 59653
		},
		setIdx: 0,
		setId: 1,
		iconIdx: 8
	}
];
var height = 1024;
var metadata = {
	name: "icomoon"
};
var preferences = {
	showGlyphs: true,
	showQuickUse: true,
	showQuickUse2: true,
	showSVGs: true,
	fontPref: {
		prefix: "icon-",
		metadata: {
			fontFamily: "icomoon",
			majorVersion: 1,
			minorVersion: 1
		},
		metrics: {
			emSize: 1024,
			baseline: 6.25,
			whitespace: 50
		},
		embed: false,
		showVersion: true
	},
	imagePref: {
		prefix: "icon-",
		png: true,
		useClassSelector: true,
		color: 0,
		bgColor: 16777215,
		classSelector: ".icon",
		name: "icomoon"
	},
	historySize: 50,
	showCodes: true,
	gridSize: 16
};
var iconSet = {
	IcoMoonType: IcoMoonType,
	icons: icons,
	height: height,
	metadata: metadata,
	preferences: preferences
};

var VactoryIconContext = React.createContext(iconSet);
var VactoryIconProvider = VactoryIconContext.Provider;
var VactoryIconConsumer = VactoryIconContext.Consumer;
var useVactoryIcon = function useVactoryIcon() {
  return React.useContext(VactoryIconContext);
};

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n    display: inline-block;\n    stroke: currentcolor;\n    fill: currentcolor;\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n  "]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var mergeIcons = function mergeIcons(source, target) {
  return _extends(_extends({}, source), {}, {
    icons: source.icons.concat(target.icons)
  });
};
var WrapperIcon = function WrapperIcon(_ref) {
  var rest = _extends({}, _ref);

  var icons = useVactoryIcon();
  return /*#__PURE__*/React.createElement(IcoMoon, _extends({
    iconSet: icons
  }, rest));
};
var Icon = styled(WrapperIcon).withConfig({
  shouldForwardProp: function shouldForwardProp(prop, defaultValidatorFn) {
    return !['sx', '__css'].concat(props).includes(prop);
  }
}).attrs(function (props) {
  return {
    removeInlineStyle: true,
    icon: props.name || props.icon
  };
})(_templateObject$2(), color, size, space$1, base, sx);

var SVG = function SVG(_ref) {
  var props = _objectWithoutPropertiesLoose(_ref, ["size"]);

  return /*#__PURE__*/React.createElement(Box, _extends({
    as: "svg",
    xmlns: "http://www.w3.org/2000/svg",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    fill: "currentcolor"
  }, props));
};

var CheckboxChecked = function CheckboxChecked(props) {
  return /*#__PURE__*/React.createElement(SVG, props, /*#__PURE__*/React.createElement("path", {
    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }));
};

var CheckboxUnchecked = function CheckboxUnchecked(props) {
  return /*#__PURE__*/React.createElement(SVG, props, /*#__PURE__*/React.createElement("path", {
    d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
  }));
};

var CheckboxIcon = function CheckboxIcon(_ref2) {
  var iconName = _ref2.iconName,
      checkedIconName = _ref2.checkedIconName,
      uncheckedIconName = _ref2.uncheckedIconName,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? '24px' : _ref2$size,
      props = _objectWithoutPropertiesLoose(_ref2, ["iconName", "checkedIconName", "uncheckedIconName", "size"]);

  return /*#__PURE__*/React.createElement(React.Fragment, null, iconName || checkedIconName ? /*#__PURE__*/React.createElement(Icon, _extends({
    size: size,
    name: iconName || checkedIconName
  }, props, {
    __css: {
      display: 'none',
      'input:checked ~ &&': {
        display: 'block'
      }
    }
  })) : /*#__PURE__*/React.createElement(CheckboxChecked, _extends({
    size: size
  }, props, {
    __css: {
      display: 'none',
      'input:checked ~ &&': {
        display: 'block'
      }
    }
  })), iconName || uncheckedIconName ? /*#__PURE__*/React.createElement(Icon, _extends({
    size: size,
    name: iconName || uncheckedIconName
  }, props, {
    __css: {
      display: 'block',
      'input:checked ~ &&': {
        display: 'none'
      }
    }
  })) : /*#__PURE__*/React.createElement(CheckboxUnchecked, _extends({
    size: size
  }, props, {
    __css: {
      display: 'block',
      'input:checked ~ &&': {
        display: 'none'
      }
    }
  })));
};

var Checkbox = forwardRef(function (_ref3, ref) {
  var className = _ref3.className,
      sx = _ref3.sx,
      iconName = _ref3.iconName,
      checkedIconName = _ref3.checkedIconName,
      uncheckedIconName = _ref3.uncheckedIconName,
      variant = _ref3.variant,
      props = _objectWithoutPropertiesLoose(_ref3, ["className", "sx", "iconName", "checkedIconName", "uncheckedIconName", "variant"]);

  return /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Box, _extends({
    ref: ref,
    as: "input",
    type: "checkbox"
  }, props, {
    sx: {
      position: 'absolute',
      opacity: 0,
      zIndex: -1,
      width: 1,
      height: 1,
      overflow: 'hidden'
    }
  })), /*#__PURE__*/React.createElement(Box.WithoutConfig, _extends({
    as: CheckboxIcon,
    "aria-hidden": "true",
    variant: "checkbox" + (variant ? '.' + variant : ''),
    className: className,
    uncheckedIconName: uncheckedIconName,
    checkedIconName: checkedIconName,
    iconName: iconName,
    sx: sx
  }, getSystemProps(props), {
    __css: {
      mr: 'small',
      borderRadius: 4,
      color: 'gray500',
      'input:checked ~ &&': {
        color: 'primary500'
      },
      'input:focus ~ &&': {
        bg: 'primary100'
      },
      'input:disabled ~ &&': {
        bg: 'gray300',
        color: 'gray200'
      }
    }
  })));
});

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n    display: block;\n    padding: 2px;\n    appearance: none;\n    font-size: inherit;\n    line-height: inherit;\n    border: 1px solid;\n    color: inherit;\n    background: transparent;\n    width: auto;\n    &:focus {\n        outline: none;\n        box-shadow: 0 0 0 2px;\n    }\n\n    ", "\n    ", "\n    ", "\n\n\n    ", "\n    ", "\n    ", "\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var variantVariants = variant$1({
  scale: 'inputs.variants',
  prop: 'variant',
  variants: {
    primary: {}
  }
});
var variantStatus = variant$1({
  scale: 'inputs.status',
  prop: 'status',
  variants: {
    primary: {}
  }
});
var variantSizes = variant$1({
  scale: 'inputs.sizes',
  prop: 'size',
  variants: {
    medium: {
      padding: 'xsmall',
      fontSize: '16px',
      lineHeight: '24px'
    }
  }
});
var StyledInput = styled('input').withConfig({
  shouldForwardProp: function shouldForwardProp(prop, defaultValidatorFn) {
    return defaultValidatorFn(prop) && ![].concat(props).includes(prop);
  }
})(_templateObject$3(), variantVariants, variantStatus, variantSizes, variant, sx, compose(padding, color, typography, background, border, position, shadow, width, height$1, display));
StyledInput.defaultProps = {
  type: 'text',
  variant: 'default',
  size: 'medium'
};
var Input = React.forwardRef(function (_ref, ref) {
  var as = _ref.as,
      size = _ref.size,
      reverse = _ref.reverse,
      props = _objectWithoutPropertiesLoose(_ref, ["as", "size", "reverse"]);

  return /*#__PURE__*/React.createElement(Flex, _extends({
    __css: {
      position: 'relative',
      width: 'fit-content'
    }
  }, getMarginProps(props), getLayoutProps(props)), props.icon && /*#__PURE__*/React.createElement(Flex, {
    __css: {
      color: 'inherit',
      position: 'absolute',
      width: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
      bottom: 0,
      right: reverse ? 0 : null,
      left: reverse ? null : 0
    }
  }, props.icon), /*#__PURE__*/React.createElement(StyledInput, _extends({
    as: as,
    reverse: reverse,
    size: size
  }, props, {
    ref: ref
  })));
});
Input.defaultProps = {
  as: 'input',
  type: 'text',
  variant: 'default',
  size: 'medium'
};

var Label = function Label(_ref) {
  var children = _ref.children,
      variant = _ref.variant,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "variant"]);

  return /*#__PURE__*/React.createElement(Flex, _extends({
    as: "label"
  }, props, {
    variant: variant
  }), children);
};

var RadioProps = [].concat(props, ['sx', 'variant', 'iconName', 'checkedIconName', 'uncheckedIconName']);
var PRE$1 = new RegExp("^(" + RadioProps.join('|') + ")$");

var getProps$1 = function getProps(test) {
  return function (props) {
    var next = {};

    for (var key in props) {
      if (test(key || '')) next[key] = props[key];
    }

    return next;
  };
};

var getSystemProps$1 = getProps$1(function (k) {
  return PRE$1.test(k);
});

var SVG$1 = function SVG(_ref) {
  var props = _objectWithoutPropertiesLoose(_ref, ["size"]);

  return /*#__PURE__*/React.createElement(Box, _extends({
    as: "svg",
    xmlns: "http://www.w3.org/2000/svg",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    fill: "currentcolor"
  }, props));
};

var RadioChecked = function RadioChecked(props) {
  return /*#__PURE__*/React.createElement(SVG$1, props, /*#__PURE__*/React.createElement("path", {
    d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }));
};

var RadioUnchecked = function RadioUnchecked(props) {
  return /*#__PURE__*/React.createElement(SVG$1, props, /*#__PURE__*/React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }));
};

var RadioIcon = function RadioIcon(_ref2) {
  var iconName = _ref2.iconName,
      checkedIconName = _ref2.checkedIconName,
      uncheckedIconName = _ref2.uncheckedIconName,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? '24px' : _ref2$size,
      props = _objectWithoutPropertiesLoose(_ref2, ["iconName", "checkedIconName", "uncheckedIconName", "size"]);

  return /*#__PURE__*/React.createElement(React.Fragment, null, iconName || checkedIconName ? /*#__PURE__*/React.createElement(Icon, _extends({
    size: size,
    name: iconName || checkedIconName
  }, props, {
    __css: {
      display: 'none',
      'input:checked ~ &&': {
        display: 'block'
      }
    }
  })) : /*#__PURE__*/React.createElement(RadioChecked, _extends({
    size: size
  }, props, {
    __css: {
      display: 'none',
      'input:checked ~ &&': {
        display: 'block'
      }
    }
  })), iconName || uncheckedIconName ? /*#__PURE__*/React.createElement(Icon, _extends({
    size: size,
    name: iconName || uncheckedIconName
  }, props, {
    __css: {
      display: 'block',
      'input:checked ~ &&': {
        display: 'none'
      }
    }
  })) : /*#__PURE__*/React.createElement(RadioUnchecked, _extends({
    size: size
  }, props, {
    __css: {
      display: 'block',
      'input:checked ~ &&': {
        display: 'none'
      }
    }
  })));
};

var Radio = forwardRef(function (_ref3, ref) {
  var className = _ref3.className,
      sx = _ref3.sx,
      variant = _ref3.variant,
      props = _objectWithoutPropertiesLoose(_ref3, ["className", "sx", "variant"]);

  return /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Box, _extends({
    ref: ref,
    as: "input",
    type: "radio"
  }, props, {
    sx: {
      position: 'absolute',
      opacity: 0,
      zIndex: -1,
      width: 1,
      height: 1,
      overflow: 'hidden'
    }
  })), /*#__PURE__*/React.createElement(Box.WithoutConfig, _extends({
    as: RadioIcon,
    "aria-hidden": "true",
    variant: "radio" + (variant ? '.' + variant : ''),
    className: className,
    sx: sx
  }, getSystemProps$1(props), {
    __css: {
      mr: 'small',
      borderRadius: 9999,
      color: 'gray500',
      'input:checked ~ &&': {
        color: 'primary500'
      },
      'input:focus ~ &&': {
        bg: 'primary100'
      },
      'input:disabled ~ &&': {
        bg: 'gray300',
        color: 'gray200'
      }
    }
  })));
});

var SVG$2 = function SVG(_ref) {
  var props = _objectWithoutPropertiesLoose(_ref, ["size"]);

  return /*#__PURE__*/React.createElement(Box, _extends({
    as: "svg",
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "currentcolor"
  }, props));
};

var DownArrow = function DownArrow(props) {
  return /*#__PURE__*/React.createElement(SVG$2, props, /*#__PURE__*/React.createElement("path", {
    d: "M7 10l5 5 5-5z"
  }));
};

var SelectIcon = function SelectIcon(_ref2) {
  var icon = _ref2.icon;
  return /*#__PURE__*/React.createElement(Flex, {
    sx: {
      ml: -28,
      alignSelf: 'center',
      alignItems: 'center',
      pointerEvents: 'none',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0
    }
  }, icon || /*#__PURE__*/React.createElement(DownArrow, null));
};

var Select = forwardRef(function (_ref3, ref) {
  var variant = _ref3.variant,
      children = _ref3.children,
      options = _ref3.options,
      props = _objectWithoutPropertiesLoose(_ref3, ["variant", "children", "options"]);

  var selectRef = ref || useRef();
  return /*#__PURE__*/React.createElement(Flex, _extends({}, getMarginProps(props), getLayoutProps(props), {
    __css: {
      width: 'fit-content',
      position: 'relative'
    }
  }), /*#__PURE__*/React.createElement(Box, _extends({
    ref: selectRef,
    as: "select",
    variant: "select" + (variant ? '.' + variant : '')
  }, omitMarginProps(props), {
    __css: {
      display: 'block',
      width: 'auto',
      p: 'small',
      appearance: 'none',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      border: '1px solid',
      borderColor: 'gray500',
      borderRadius: 'medium',
      color: 'inherit',
      pr: '32px',
      bg: 'transparent',
      ':focus': {
        borderColor: 'primary500',
        outline: 'none',
        boxShadow: function boxShadow(t) {
          return "0 0 0 2px " + t.colors.primary500;
        }
      }
    }
  }), options ? Object.entries(options).map(function (_ref4, i) {
    var option = _ref4[0],
        attrs = _ref4[1];
    return /*#__PURE__*/React.createElement("option", _extends({
      key: i
    }, attrs), option);
  }) : children), /*#__PURE__*/React.createElement(SelectIcon, null));
});

Select.Option = function (_ref5) {
  var children = _ref5.children,
      props = _objectWithoutPropertiesLoose(_ref5, ["children"]);

  return /*#__PURE__*/React.createElement("option", props, children);
};

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n\n    *,\n    *::before,\n    *::after {\n        box-sizing: border-box;\n    }\n\n    body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n        margin: 0;\n        padding: 0;\n        font-weight: normal;\n    }\n\n    ol, ul {\n        list-style: none;\n    }\n\n\n    html, body {\n        font-family: ", ";\n        font-size: ", ";;\n        box-sizing: border-box;\n\n        -webkit-font-smoothing: antialiased;\n    }\n\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var GlobalStyle = createGlobalStyle(_templateObject$4(), function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.sans;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.body;
});

var DEFAULT_CONFIG = {
  gridSize: 12,
  gutterWidth: 16,
  outerMargin: 8,
  container: {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px'
  }
};

var THEME_CONF = 'gridSystem';
var configCache = [];

var generateConfigCacheId = function generateConfigCacheId(theme) {
  return JSON.stringify(theme && theme[THEME_CONF] || {});
};

var resolveConfig = function resolveConfig(theme) {
  var themeConf = theme && theme[THEME_CONF] || {};

  var conf = _extends(_extends(_extends({}, DEFAULT_CONFIG), themeConf), {}, {
    container: _extends(_extends({}, DEFAULT_CONFIG.container), themeConf.container)
  });

  return conf;
};

var getConfig = function getConfig(_ref) {
  var theme = _ref.theme;
  var cacheId = generateConfigCacheId(theme);

  if (configCache[0] === cacheId) {
    return configCache[1];
  }

  var conf = resolveConfig(theme);
  configCache[0] = cacheId;
  configCache[1] = conf;
  return conf;
};

var sortBreakpointProps = function sortBreakpointProps(props) {
  var propsArr = Object.keys(props);
  var breakpointNames = Object.keys(props.theme.breakpoints);
  var breakpoints = propsArr.filter(function (_prop) {
    return ~breakpointNames.indexOf(_prop);
  });
  var sortedBreakpoints = breakpoints.sort(function (bp1, bp2) {
    var valueBp1 = stripUnit(props.theme.breakpoints[bp1]);
    var valueBp2 = stripUnit(props.theme.breakpoints[bp2]);
    return valueBp1 - valueBp2;
  });
  return sortedBreakpoints;
};
var getGridSize = function getGridSize(props) {
  return getConfig(props).gridSize;
};
var getGutterWidth = function getGutterWidth(props) {
  return getConfig(props).gutterWidth;
};
var getOuterMargin = function getOuterMargin(props) {
  return getConfig(props).outerMargin;
};
var getContainer = function getContainer(props) {
  return function (breakpoint) {
    return getConfig(props).container[breakpoint];
  };
};

function _templateObject3$1() {
  var data = _taggedTemplateLiteralLoose(["\n    box-sizing: border-box;\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: ", "px;\n    padding-right: ", "px;\n    width: 100%;\n    ", "\n    ", "\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n                        max-width: ", ";\n                    "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["\n            ", "\n        "]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}

var generateMediaforContainer = function generateMediaforContainer(props) {
  var breakpointsName = Object.keys(props.theme.breakpoints);

  if (!props.fluid) {
    return css(_templateObject$5(), breakpointsName.map(function (breakpoint) {
      if (getContainer(props)(breakpoint)) {
        return greaterThan(breakpoint)(_templateObject2$1(), function (props) {
          return getContainer(props)(breakpoint);
        });
      } else {
        return null;
      }
    }));
  }
};

var StyledContainer = styled.div(_templateObject3$1(), function (props) {
  return getOuterMargin(props);
}, function (props) {
  return getOuterMargin(props);
}, generateMediaforContainer, compose(space$1, layout, flexbox));

var Container = function Container(_ref) {
  var _ref$fluid = _ref.fluid,
      fluid = _ref$fluid === void 0 ? false : _ref$fluid,
      rest = _objectWithoutPropertiesLoose(_ref, ["fluid"]);

  return /*#__PURE__*/React.createElement(Box.WithoutConfig, _extends({
    as: StyledContainer,
    fluid: fluid
  }, rest));
};

Container.defaultProps = {
  fluid: false
};

function _templateObject$6() {
  var data = _taggedTemplateLiteralLoose(["\n    box-sizing: border-box;\n    display: flex;\n    flex: 0 1 auto;\n    flex-wrap: wrap;\n    margin-right: ", "px;\n    margin-left: ", "px;\n    ", "\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledRow = styled.div(_templateObject$6(), function (props) {
  return getOuterMargin(props) * -1;
}, function (props) {
  return getOuterMargin(props) * -1;
}, compose(space$1, layout, flexbox));

var Row = function Row(props) {
  return /*#__PURE__*/React.createElement(Box.WithoutConfig, _extends({
    as: StyledRow
  }, props));
};

function _templateObject2$2() {
  var data = _taggedTemplateLiteralLoose(["\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: ", "px;\n    padding-left: ", "px;\n    flex-grow: 1;\n    flex-basis:0;\n    max-width: 100%;\n    ", "\n    ", "\n    ", "\n    \n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteralLoose(["\n           ", "\n        "]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}

var generateMediaForCol = function generateMediaForCol(props) {
  return sortBreakpointProps(props).map(function (bp) {
    return greaterThan(bp)(_templateObject$7(), props[bp] >= 0 ? "\n                    flex-basis: " + 100 / getGridSize(props) * props[bp] + "%;\n                    max-width: " + 100 / getGridSize(props) * props[bp] + "%;\n                    display: block;\n               " : props[bp] ? "\n               flex-grow: 1;\n               flex-basis: 0;\n               max-width: 100%;\n               display: block;\n           " : "\n               display: none;\n           ");
  });
};

var StyledCol = styled.div(_templateObject2$2(), function (props) {
  return getGutterWidth(props) / 2;
}, function (props) {
  return getGutterWidth(props) / 2;
}, function (p) {
  return p.reverse && "\n        flex-direction: column-reverse;\n    ";
}, generateMediaForCol, compose(space$1, layout, flexbox));

var Col = function Col(props) {
  return /*#__PURE__*/React.createElement(Box.WithoutConfig, _extends({
    as: StyledCol
  }, props));
};

var Header = React.forwardRef(function (_ref, ref) {
  var _ref$fixed = _ref.fixed,
      fixed = _ref$fixed === void 0 ? false : _ref$fixed,
      _ref$sticky = _ref.sticky,
      sticky = _ref$sticky === void 0 ? false : _ref$sticky,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'header' : _ref$variant,
      _ref$stickyOptions = _ref.stickyOptions,
      stickyOptions = _ref$stickyOptions === void 0 ? {} : _ref$stickyOptions,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["fixed", "sticky", "variant", "stickyOptions", "children"]);

  var fixedStyle = {};

  if (fixed) {
    fixedStyle = {
      position: 'fixed',
      top: '0px',
      left: '0px',
      right: '0px'
    };
  }

  var Wrapper = sticky ? Headroom : 'div';
  return /*#__PURE__*/React.createElement(Wrapper, _extends({}, stickyOptions, {
    style: {
      zIndex: 10
    }
  }), /*#__PURE__*/React.createElement(Box, _extends({
    ref: ref,
    as: "header",
    variant: getVariant([variant]),
    __css: _extends({
      display: 'flex',
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '100%',
      minWidth: '0px',
      minHeight: '0px',
      outline: 'none'
    }, fixedStyle)
  }, rest), children));
});

var Image = forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Box.WithoutConfig, _extends({
    ref: ref,
    as: "img"
  }, props, {
    __css: {
      maxWidth: '100%',
      height: 'auto'
    }
  }));
});

var Navs = forwardRef(function (_ref, ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "navs" : _ref$variant,
      children = _ref.children,
      sx = _ref.sx,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant", "children", "sx"]);

  var navs = Children.toArray(children).filter(function (child) {
    return child;
  }).map(function (child, index) {
    var nav = cloneElement(child, {
      variant: child.props.variant || variant
    });
    return /*#__PURE__*/React.createElement(Fragment$1, {
      key: index
    }, nav);
  });
  return /*#__PURE__*/React.createElement(Box, _extends({
    ref: ref,
    sx: sx
  }, getSystemProps(rest), {
    variant: variant,
    __css: {
      padding: 'small',
      display: 'flex',
      alignItems: 'center',
      flexDirection: ['column', 'row']
    }
  }), navs);
});

var Nav = React.forwardRef(function (_ref, ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'navs' : _ref$variant,
      children = _ref.children,
      href = _ref.href,
      _ref$active = _ref.active,
      active = _ref$active === void 0 ? false : _ref$active,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'a' : _ref$as,
      rest = _objectWithoutPropertiesLoose(_ref, ["variant", "children", "href", "active", "as", "key"]);

  return /*#__PURE__*/React.createElement(Box.WithoutConfig, _extends({
    as: as,
    ref: ref,
    href: href
  }, rest, {
    variant: getVariant([variant, active ? 'activeNav' : 'nav']),
    __css: {
      color: 'primary500',
      textDecoration: 'none',
      padding: '12px',
      ':hover': {
        cursor: 'pointer',
        color: 'primary700'
      }
    }
  }, rest), children);
});

var PaginationPageButton = function PaginationPageButton(props) {
  return /*#__PURE__*/React.createElement(Box, {
    __css: {
      backgroundColor: '#fff',
      border: '1px solid',
      borderColor: 'gray400',
      padding: 'small',
      fontSize: '14px',
      borderRadius: '4px',
      minWidth: '42px',
      height: '42px',
      mx: '8px',
      textAlign: 'center',
      ':hover': {
        cursor: 'pointer',
        borderColor: 'primary500',
        color: 'primary500'
      },
      '.rc-pagination-item-active &': {
        color: '#fff',
        backgroundColor: 'primary500',
        borderColor: 'primary500'
      }
    }
  }, props.children);
};

var PaginationPrevNextButton = function PaginationPrevNextButton(props) {
  return /*#__PURE__*/React.createElement(Box, {
    __css: {
      backgroundColor: 'gray200',
      border: '1px solid',
      borderColor: 'gray400',
      padding: 'small',
      fontSize: '14px',
      borderRadius: '4px',
      minWidth: '42px',
      height: '42px',
      mx: '8px',
      textAlign: 'center',
      ':hover': {
        cursor: 'pointer'
      },
      '.rc-pagination-next[aria-disabled=true] &': {
        cursor: 'not-allowed',
        color: 'gray500'
      },
      '.rc-pagination-prev[aria-disabled=true] &': {
        cursor: 'not-allowed',
        color: 'gray500'
      }
    }
  }, props.children);
};

var PaginationJumpButton = function PaginationJumpButton(props) {
  return /*#__PURE__*/React.createElement(Box, {
    __css: {
      backgroundColor: 'transparent',
      border: '1px solid',
      borderColor: 'transparent',
      padding: 'small',
      fontSize: '14px',
      borderRadius: '4px',
      minWidth: '42px',
      height: '42px',
      mx: '8px',
      textAlign: 'center',
      ':hover': {
        cursor: 'pointer',
        color: 'primary500'
      }
    }
  }, props.children);
};

var itemRender = function itemRender(current, type, element) {
  if (type === 'page') {
    return /*#__PURE__*/React.createElement(PaginationPageButton, null, current);
  }

  if (type === 'prev') {
    return /*#__PURE__*/React.createElement(PaginationPrevNextButton, null, /*#__PURE__*/React.createElement(Icon, {
      size: "14px",
      name: "chevron-left"
    }));
  }

  if (type === 'next') {
    return /*#__PURE__*/React.createElement(PaginationPrevNextButton, null, /*#__PURE__*/React.createElement(Icon, {
      size: "14px",
      name: "chevron-right"
    }));
  }

  if (type === 'jump-prev') {
    return /*#__PURE__*/React.createElement(PaginationJumpButton, null, /*#__PURE__*/React.createElement(Icon, {
      size: "14px",
      name: "chevrons-left"
    }));
  }

  if (type === 'jump-next') {
    return /*#__PURE__*/React.createElement(PaginationJumpButton, null, /*#__PURE__*/React.createElement(Icon, {
      size: "14px",
      name: "chevrons-right"
    }));
  }

  return element;
};

var Pagination = function Pagination(_ref) {
  var sx = _ref.sx,
      props = _objectWithoutPropertiesLoose(_ref, ["sx"]);

  var theme = useContext(ThemeContext);
  return /*#__PURE__*/React.createElement(Box.WithoutConfig, _extends({
    __css: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      '& [class^="rc-pagination"]': {
        marginBottom: ['8px', null, 0]
      },
      '& [class^="rc-pagination"]:focus': {
        outline: 'none'
      },
      '.rc-pagination-options': {
        display: 'flex',
        alignItems: 'center'
      },
      '.rc-pagination-options-quick-jumper > input': _extends(_extends({
        display: 'inline-block',
        padding: '2px',
        appearance: 'none',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        border: '1px solid',
        color: 'inherit',
        background: 'transparent',
        mx: '8px'
      }, get(theme, 'inputs.variants.default', {})), get(theme, 'inputs.sizes.medium', {}))
    },
    as: RCPagination,
    locale: frFR
  }, props, {
    sx: sx,
    itemRender: itemRender
  }));
};

var Tab = forwardRef(function (_ref, ref) {
  var title = _ref.title,
      isActive = _ref.isActive,
      onClickTab = _ref.onClickTab,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'tabs' : _ref$variant,
      sx = _ref.sx,
      props = _objectWithoutPropertiesLoose(_ref, ["title", "index", "isActive", "onClickTab", "variant", "header", "sx"]);

  var handleOnClickTab = function handleOnClickTab(event) {
    if (event) {
      event.preventDefault();
    }

    onClickTab();
  };

  return /*#__PURE__*/React.createElement(Box, _extends({
    ref: ref
  }, props, {
    sx: sx,
    variant: getVariant([variant, isActive ? 'activeTab' : 'tab']),
    className: "vf-tabs__tab " + (isActive ? 'vf-tabs__tab--active' : ''),
    __css: {
      cursor: 'pointer',
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      backgroundColor: isActive ? 'gray400' : 'gray100',
      padding: 'medium',
      "&:focus, &:active": {
        outline: 'none'
      }
    },
    onClick: handleOnClickTab
  }), title);
});

var Tabs = forwardRef(function (_ref, ref) {
  var children = _ref.children,
      propsActiveKey = _ref.activeTab,
      sx = _ref.sx,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'tabs' : _ref$variant,
      _ref$showBar = _ref.showBar,
      showBar = _ref$showBar === void 0 ? false : _ref$showBar,
      onChange = _ref.onChange,
      onTabClick = _ref.onTabClick,
      onNextClick = _ref.onNextClick,
      onPrevClick = _ref.onPrevClick,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "theme", "activeTab", "sx", "variant", "showBar", "onChange", "onTabClick", "onNextClick", "onPrevClick"]);

  var _useState = useState(rest.activeTab || 0),
      activeKey = _useState[0],
      setActiveKey = _useState[1];

  var tabRefs = [];
  var headerAnimationCtrls = useAnimation();
  var inkBarAnimationCtrls = useAnimation();
  var motionVariantsContent = {
    active: {
      opacity: [0, 1]
    }
  };
  var headerTabRef = useRef(null);

  var animateInkBar = function animateInkBar(key) {
    var currentTabBCR = tabRefs[key].current.getBoundingClientRect();
    var headerTabBCR = headerTabRef.current.getBoundingClientRect();
    inkBarAnimationCtrls.start({
      left: currentTabBCR.x - headerTabBCR.x,
      width: currentTabBCR.width
    });
  };

  if (activeKey !== propsActiveKey && propsActiveKey !== undefined) {
    setActiveKey(propsActiveKey);
  }

  useEffect(function () {
    if (showBar) {
      animateInkBar(activeKey);
    }
  }, [activeKey, showBar]);

  var handleClickTab = function handleClickTab(key) {
    headerAnimationCtrls.start('active');

    if (propsActiveKey === undefined) {
      setActiveKey(key);
    }

    if (onTabClick) {
      onTabClick(key);
    }

    if (onChange && activeKey !== key) {
      onChange(key);
    }

    if (onNextClick && activeKey + 1 === key) {
      onNextClick();
    }

    if (onPrevClick && activeKey - 1 === key) {
      onPrevClick();
    }
  };

  delete rest.activeIndex;
  delete rest.onActive;
  var activeContent;
  var tabs = Children.map(children, function (tab, index) {
    if (!tab) return undefined;
    var tabProps = tab.props || {};
    var isTabActive = index === activeKey;
    var ref = useRef();
    var key = tab.props.tabKey || index;
    tabRefs[key] = ref;

    if (isTabActive) {
      activeContent = tabProps.children;
    }

    return cloneElement(tab, {
      index: index,
      isActive: isTabActive,
      variant: variant,
      onClickTab: function onClickTab() {
        return handleClickTab(key);
      },
      ref: ref
    });
  });
  return /*#__PURE__*/React.createElement(Box, _extends({
    className: "vf-tabs-container",
    sx: sx
  }, rest, {
    variant: getVariant([variant]),
    __css: {
      display: 'flex',
      flexDirection: 'column',
      border: "1px solid",
      borderColor: "gray500"
    }
  }), /*#__PURE__*/React.createElement(Flex, {
    className: "vf-tabs__header-container",
    ref: headerTabRef,
    __css: {
      position: 'relative',
      backgroundColor: 'gray100'
    },
    variant: getVariant([variant, 'header'])
  }, tabs, showBar && /*#__PURE__*/React.createElement(MotionBox, {
    transition: {
      ease: 'easeInOut'
    },
    animate: inkBarAnimationCtrls,
    className: "vf-tabs__ink-bar",
    sx: {
      backgroundColor: 'primary500',
      position: 'absolute',
      bottom: '0',
      pointerEvents: 'none',
      width: "0",
      height: '2px',
      m: 0,
      p: 0
    }
  })), /*#__PURE__*/React.createElement(Box, {
    className: "vf-tabs__content-container",
    __css: {
      flexGrow: 1
    },
    variant: getVariant([variant, 'content'])
  }, /*#__PURE__*/React.createElement(MotionBox, {
    className: "vf-tabs__animated-content-container",
    initial: "active",
    animate: headerAnimationCtrls,
    variants: motionVariantsContent
  }, activeContent)));
});

var Text = function Text(_ref) {
  var children = _ref.children,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'p' : _ref$as,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "as"]);

  return /*#__PURE__*/React.createElement(Box, _extends({}, rest, {
    as: as,
    __css: _extends({
      fontSize: 'inherit',
      fontWeight: 'inherit',
      lineHeight: 'inherit'
    }, rest.__css)
  }), children);
};
var Paragraph = function Paragraph(_ref2) {
  var children = _ref2.children,
      _ref2$variant = _ref2.variant,
      variant = _ref2$variant === void 0 ? "paragraph.default" : _ref2$variant,
      rest = _objectWithoutPropertiesLoose(_ref2, ["children", "variant"]);

  return /*#__PURE__*/React.createElement(Text, _extends({
    variant: variant
  }, rest), children);
};
var Heading = withTheme(function (_ref3) {
  var children = _ref3.children,
      _ref3$level = _ref3.level,
      level = _ref3$level === void 0 ? '1' : _ref3$level,
      _ref3$variant = _ref3.variant,
      variant = _ref3$variant === void 0 ? "heading.default" : _ref3$variant,
      rest = _objectWithoutPropertiesLoose(_ref3, ["children", "level", "variant"]);

  var variantName = themeGet(variant + '.h' + level)(rest) ? variant + '.h' + level : variant;
  return /*#__PURE__*/React.createElement(Text, _extends({
    variant: variantName
  }, rest, {
    as: "h" + level
  }), children);
});

var List_ = function List_(_ref, ref) {
  var horizontal = _ref.horizontal,
      ordered = _ref.ordered,
      rest = _objectWithoutPropertiesLoose(_ref, ["horizontal", "ordered"]);

  return /*#__PURE__*/React.createElement(Box, _extends({
    ref: ref,
    as: ordered ? "ol" : "ul",
    variant: "lists.default",
    __css: {
      display: 'flex',
      flexDirection: horizontal ? "row" : "column",
      listStyle: ordered ? 'decimal inside' : null
    }
  }, rest));
};

var List = forwardRef(List_);

var Item_ = function Item_(props, ref) {
  return /*#__PURE__*/React.createElement(Box, _extends({
    ref: ref,
    as: "li"
  }, props));
};

var Item = forwardRef(Item_);

function _templateObject76() {
  var data = _taggedTemplateLiteralLoose(["\n                position: relative;\n                max-height: none;\n                max-width: none;\n                border-radius: 0;\n                top: 0;\n                bottom: 0;\n                left: 0;\n                right: 0;\n                transform: none;\n                animation: none;\n                height: 100vh;\n                width: 100vw;\n            "]);

  _templateObject76 = function _templateObject76() {
    return data;
  };

  return data;
}

function _templateObject75() {
  var data = _taggedTemplateLiteralLoose(["\n    display: flex;\n    min-height: ", ";\n    flex-direction: column;\n    outline: none;\n    align-items: baseline;\n    pointer-events: all;\n    z-index: ", ";\n\n    position: ", ";\n    max-height: ", ";\n    max-width: ", ";\n    border-radius: ", ";\n    ", ";\n    ", "\n\n"]);

  _templateObject75 = function _templateObject75() {
    return data;
  };

  return data;
}

function _templateObject74() {
  var data = _taggedTemplateLiteralLoose(["\n        bottom: ", "px;\n        left: ", "px;\n        transform: translateY(0);\n        ", "\n      "]);

  _templateObject74 = function _templateObject74() {
    return data;
  };

  return data;
}

function _templateObject73() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        bottom: ", "px;\n        left: ", "px;\n        right: ", "px;\n        transform: translateX(0);\n        ", "\n      "]);

  _templateObject73 = function _templateObject73() {
    return data;
  };

  return data;
}

function _templateObject72() {
  var data = _taggedTemplateLiteralLoose(["\n        left: ", "px;\n        right: ", "px;\n        bottom: ", "px;\n        transform: translateY(0);\n        ", "\n      "]);

  _templateObject72 = function _templateObject72() {
    return data;
  };

  return data;
}

function _templateObject71() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        bottom: ", "px;\n        left: ", "px;\n        transform: translateX(0);\n        ", "\n      "]);

  _templateObject71 = function _templateObject71() {
    return data;
  };

  return data;
}

function _templateObject70() {
  var data = _taggedTemplateLiteralLoose(["\n        bottom: ", "px;\n        right: ", "px;\n        transform: translateY(0);\n        ", "\n      "]);

  _templateObject70 = function _templateObject70() {
    return data;
  };

  return data;
}

function _templateObject69() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        bottom: ", "px;\n        left: ", "px;\n        right: ", "px;\n        transform: translateX(0);\n        ", "\n      "]);

  _templateObject69 = function _templateObject69() {
    return data;
  };

  return data;
}

function _templateObject68() {
  var data = _taggedTemplateLiteralLoose(["\n        left: ", "px;\n        right: ", "px;\n        bottom: ", "px;\n        transform: translateY(0);\n        ", "\n      "]);

  _templateObject68 = function _templateObject68() {
    return data;
  };

  return data;
}

function _templateObject67() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        bottom: ", "px;\n        right: ", "px;\n        transform: translateX(0);\n        ", "\n      "]);

  _templateObject67 = function _templateObject67() {
    return data;
  };

  return data;
}

function _templateObject66() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        left: ", "px;\n        transform: translateY(0);\n        ", "\n      "]);

  _templateObject66 = function _templateObject66() {
    return data;
  };

  return data;
}

function _templateObject65() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        bottom: ", "px;\n        left: ", "px;\n        right: ", "px;\n        transform: translateX(0);\n        ", "\n      "]);

  _templateObject65 = function _templateObject65() {
    return data;
  };

  return data;
}

function _templateObject64() {
  var data = _taggedTemplateLiteralLoose(["\n        left: ", "px;\n        right: ", "px;\n        top: 0;\n        transform: translateX(0);\n        ", " \n      "]);

  _templateObject64 = function _templateObject64() {
    return data;
  };

  return data;
}

function _templateObject63() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        bottom: ", "px;\n        left: ", "px;\n        transform: translateX(0);\n        ", "\n      "]);

  _templateObject63 = function _templateObject63() {
    return data;
  };

  return data;
}

function _templateObject62() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        right: ", "px;\n        transform: translateY(0);\n        ", ";\n      "]);

  _templateObject62 = function _templateObject62() {
    return data;
  };

  return data;
}

function _templateObject61() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        bottom: ", "px;\n        left: ", "px;\n        right: ", "px;\n        transform: translateX(0);\n        ", ";\n      "]);

  _templateObject61 = function _templateObject61() {
    return data;
  };

  return data;
}

function _templateObject60() {
  var data = _taggedTemplateLiteralLoose(["\n        left: ", "px;\n        right: ", "px;\n        top: 0;\n        transform: translateX(0);\n        ", ";\n      "]);

  _templateObject60 = function _templateObject60() {
    return data;
  };

  return data;
}

function _templateObject59() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        bottom: ", "px;\n        right: ", "px;\n        transform: translateX(0);\n        ", ";\n      "]);

  _templateObject59 = function _templateObject59() {
    return data;
  };

  return data;
}

function _templateObject58() {
  var data = _taggedTemplateLiteralLoose(["\n        inset-inline-end: ", "px;\n        top: 50%;\n        transform: translate(0, -50%);\n        ", "\n      "]);

  _templateObject58 = function _templateObject58() {
    return data;
  };

  return data;
}

function _templateObject57() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        bottom: ", "px;\n        inset-inline-start: ", "px;\n        inset-inline-end: ", "px;\n        transform: translateX(0);\n        ", "\n      "]);

  _templateObject57 = function _templateObject57() {
    return data;
  };

  return data;
}

function _templateObject56() {
  var data = _taggedTemplateLiteralLoose(["\n        inset-inline-start: ", "px;\n        inset-inline-end: ", "px;\n        top: 50%;\n        transform: translate(0, -50%);\n        ", "\n      "]);

  _templateObject56 = function _templateObject56() {
    return data;
  };

  return data;
}

function _templateObject55() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        bottom: ", "px;\n        inset-inline-end: ", "px;\n        transform: translateX(0);\n        ", "\n      "]);

  _templateObject55 = function _templateObject55() {
    return data;
  };

  return data;
}

function _templateObject54() {
  var data = _taggedTemplateLiteralLoose(["\n        inset-inline-start: ", "px;\n        top: 50%;\n        transform: translate(0, -50%);\n        ", "\n      "]);

  _templateObject54 = function _templateObject54() {
    return data;
  };

  return data;
}

function _templateObject53() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        bottom: ", "px;\n        inset-inline-start: ", "px;\n        inset-inline-end: ", "px;\n        transform: translateX(0);\n        ", "\n      "]);

  _templateObject53 = function _templateObject53() {
    return data;
  };

  return data;
}

function _templateObject52() {
  var data = _taggedTemplateLiteralLoose(["\n        inset-inline-start: ", "px;\n        inset-inline-end: ", "px;\n        top: 50%;\n        transform: translate(0, -50%);\n        ", "\n      "]);

  _templateObject52 = function _templateObject52() {
    return data;
  };

  return data;
}

function _templateObject51() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        bottom: ", "px;\n        inset-inline-start: ", "px;\n        transform: translateX(0);\n        ", "\n      "]);

  _templateObject51 = function _templateObject51() {
    return data;
  };

  return data;
}

function _templateObject50() {
  var data = _taggedTemplateLiteralLoose(["\n        right: ", "px;\n        top: 50%;\n        transform: translate(0, -50%);\n        ", "\n      "]);

  _templateObject50 = function _templateObject50() {
    return data;
  };

  return data;
}

function _templateObject49() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        bottom: ", "px;\n        left: ", "px;\n        right: ", "px;\n        transform: translateX(0);\n        ", "\n      "]);

  _templateObject49 = function _templateObject49() {
    return data;
  };

  return data;
}

function _templateObject48() {
  var data = _taggedTemplateLiteralLoose(["\n        left: ", "px;\n        right: ", "px;\n        top: 50%;\n        transform: translate(0, -50%);\n        ", "\n      "]);

  _templateObject48 = function _templateObject48() {
    return data;
  };

  return data;
}

function _templateObject47() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        bottom: ", "px;\n        right: ", "px;\n        transform: translateX(0);\n        ", "\n      "]);

  _templateObject47 = function _templateObject47() {
    return data;
  };

  return data;
}

function _templateObject46() {
  var data = _taggedTemplateLiteralLoose(["\n        left: ", "px;\n        top: 50%;\n        transform: translate(0, -50%);\n        ", "\n      "]);

  _templateObject46 = function _templateObject46() {
    return data;
  };

  return data;
}

function _templateObject45() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        bottom: ", "px;\n        left: ", "px;\n        right: ", "px;\n        transform: translateX(0);\n        ", "\n      "]);

  _templateObject45 = function _templateObject45() {
    return data;
  };

  return data;
}

function _templateObject44() {
  var data = _taggedTemplateLiteralLoose(["\n        left: ", "px;\n        right: ", "px;\n        top: 50%;\n        transform: translate(0, -50%);\n        ", "\n      "]);

  _templateObject44 = function _templateObject44() {
    return data;
  };

  return data;
}

function _templateObject43() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        bottom: ", "px;\n        left: ", "px;\n        transform: translateX(0);\n        ", "\n      "]);

  _templateObject43 = function _templateObject43() {
    return data;
  };

  return data;
}

function _templateObject42() {
  var data = _taggedTemplateLiteralLoose(["\n        bottom: ", "px;\n        left: 50%;\n        transform: translate(-50%, 0);\n        ", "\n      "]);

  _templateObject42 = function _templateObject42() {
    return data;
  };

  return data;
}

function _templateObject41() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        bottom: ", "px;\n        left: ", "px;\n        right: ", "px;\n        transform: translateY(0);\n        ", "\n      "]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = _taggedTemplateLiteralLoose(["\n        left: ", "px;\n        right: ", "px;\n        bottom: ", "px;\n        transform: translateY(0);\n        ", "\n      "]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        bottom: ", "px;\n        left: 50%;\n        transform: translate(-50%, 0);\n        ", "\n      "]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        left: 50%;\n        transform: translate(-50%, 0);\n        ", "\n      "]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        bottom: ", "px;\n        left: ", "px;\n        right: ", "px;\n        transform: translateY(0);\n        ", "\n      "]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteralLoose(["\n        left: ", "px;\n        right: ", "px;\n        top: ", "px;\n        transform: translateY(0);\n        ", "\n      "]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        bottom: ", "px;\n        left: 50%;\n        transform: translate(-50%, 0%);\n        ", "\n      "]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteralLoose(["\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        ", "\n      "]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        bottom: ", "px;\n        left: ", "px;\n        right: ", "px;\n        ", "\n      "]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteralLoose(["\n        left: ", "px;\n        right: ", "px;\n        top: 50%;\n        transform: translateY(-50%);\n        ", "\n      "]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteralLoose(["\n        top: ", "px;\n        bottom: ", "px;\n        left: 50%;\n        transform: translateX(-50%);\n        ", "\n      "]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteralLoose(["\n        animation: ", " ", "s ease-in-out forwards;\n      "]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteralLoose(["0% { opacity: 0 } 100% { opacity: 1 }"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(100%, -50%); }\n      100% { transform: translate(0, -50%); }\n    "]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translateX(100%); }\n      100% { transform: translateX(0); }\n    "]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(100%, -50%); }\n      100% { transform: translate(0, -50%); }\n    "]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translateX(100%); }\n      100% { transform: translateX(0); }\n    "]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(-100%, -50%); }\n      100% { transform: translate(0, -50%); }\n    "]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translateX(-100%); }\n      100% { transform: translateX(0); }\n    "]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(-100%, -50%); }\n      100% { transform: translate(0, -50%); }\n    "]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translateX(-100%); }\n      100% { transform: translateX(0); }\n    "]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(100%, -50%); }\n      100% { transform: translate(0, -50%); }\n    "]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translateX(100%); }\n      100% { transform: translateX(0); }\n    "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(100%, -50%); }\n      100% { transform: translate(0, -50%); }\n    "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translateX(100%); }\n      100% { transform: translateX(0); }\n    "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(-100%, -50%); }\n      100% { transform: translate(0, -50%); }\n    "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translateX(-100%); }\n      100% { transform: translateX(0); }\n    "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(-100%, -50%); }\n      100% { transform: translate(0, -50%); }\n    "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translateX(-100%); }\n      100% { transform: translateX(0); }\n    "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(-50%, 100%); }\n      100% { transform: translate(-50%, 0); }\n    "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translateY(100%); }\n      100% { transform: translateY(0); }\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translateY(100%); }\n      100% { transform: translateY(0); }\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9$1() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(-50%, 100%); }\n      100% { transform: translate(-50%, 0); }\n    "]);

  _templateObject9$1 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$1() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(-50%, -100%); }\n      100% { transform: translate(-50%, 0); }\n    "]);

  _templateObject8$1 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$1() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translateY(-100%); }\n      100% { transform: translateY(0); }\n    "]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translateY(-100%); }\n      100% { transform: translateY(0); }\n    "]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(-50%, -100%); }\n      100% { transform: translate(-50%, 0); }\n    "]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translate(-50%, -50%) scale(0.8); }\n      100% { transform: translate(-50%, -50%) scale(1); }\n    "]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: scale(0.8); }\n      100% { transform: scale(1); }\n    "]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translateY(-50%) scale(0.8); }\n      100% { transform: translateY(-50) scale(1); }\n    "]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteralLoose(["\n      0% { transform: translateX(-50%) scale(0.8); }\n      100% { transform: translateX(-50%) scale(1); }\n    "]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledLayer = forwardRef(function (_ref, ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      props = _objectWithoutPropertiesLoose(_ref, ["variant"]);

  var theme = useContext(ThemeContext);
  var responsiveBreakpoint = themeGet('layer.responsiveBreakpoint', false)({
    theme: theme
  });
  var mediaStyle = {};
  var hidenStyle = {};
  var boundsStyle = {
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px'
  };

  if (props.position === 'hidden') {
    hidenStyle = {
      left: '-100%',
      right: '100%',
      zIndex: '-1',
      position: 'fixed'
    };
  }

  if (props.targetBounds) {
    var _props$targetBounds = props.targetBounds,
        left = _props$targetBounds.left,
        right = _props$targetBounds.right,
        top = _props$targetBounds.top,
        bottom = _props$targetBounds.bottom;
    boundsStyle = {
      position: 'fixed',
      top: top + "px",
      left: left + "px",
      right: right + "px",
      bottom: bottom + "px"
    };
  }

  if (props.responsive && responsiveBreakpoint) {
    mediaStyle["@media (max-width: " + themeGet("breakpoints." + responsiveBreakpoint, 0)({
      theme: theme
    }) + " )"] = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      minHeight: '100%'
    };
  }

  return /*#__PURE__*/React.createElement(Box, _extends({}, props, {
    ref: ref,
    variant: "layer" + (variant ? '.' + variant : ''),
    sx: _extends(_extends(_extends({
      position: 'relative',
      zIndex: themeGet('layer.zIndex')({
        theme: theme
      }),
      pointerEvents: 'none',
      outline: 'none'
    }, hidenStyle), boundsStyle), mediaStyle)
  }), props.children);
});
var StyledOverlay = function StyledOverlay(props) {
  var theme = useContext(ThemeContext);
  var responsiveBreakpoint = themeGet('layer.responsiveBreakpoint', false)({
    theme: theme
  });
  var mediaStyle = {};

  if (props.responsive && responsiveBreakpoint) {
    mediaStyle["@media (max-width: " + themeGet("breakpoints." + responsiveBreakpoint, 0)({
      theme: theme
    }) + " )"] = {
      position: 'relative'
    };
  }

  return /*#__PURE__*/React.createElement(Box, _extends({
    "data-s": "overlay"
  }, props, {
    variant: "layer.overlay",
    sx: _extends(_extends({
      position: 'absolute',
      backgroundColor: !props.plain ? themeGet('layer.overlay.backgroundColor')({
        theme: theme
      }) : 'transparent',
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px'
    }, mediaStyle), {}, {
      pointerEvents: 'all'
    })
  }), props.children);
};

var parseMetricToNum$1 = function parseMetricToNum(fontAsString) {
  if (fontAsString.match(/\s/) && process.env.NODE_ENV !== 'production') {
    console.warn("Invalid single measurement value: \"" + fontAsString + "\"");
  }

  return parseFloat(fontAsString.match(/\d+(\.\d+)?/), 10);
};

var getMargin = function getMargin(margin, theme, position) {
  var axis = position.indexOf('top') !== -1 || position.indexOf('bottom') !== -1 ? 'vertical' : 'horizontal';
  var marginValue = margin[position] || margin[axis] || margin;
  var marginApplied = theme.space[marginValue] || marginValue;
  var marginInTheme = !!theme.space[marginValue];
  return !marginInTheme && typeof marginValue !== 'string' ? 0 : parseMetricToNum$1(marginApplied);
};

var getBounds = function getBounds(bounds, margin, theme, position) {
  if (position === void 0) {
    position = undefined;
  }

  if (position) {
    return bounds[position] + getMargin(margin, theme, position);
  }

  return {
    bottom: bounds.bottom + getMargin(margin, theme, 'bottom'),
    end: bounds.right + getMargin(margin, theme, 'end'),
    left: bounds.left + getMargin(margin, theme, 'left'),
    right: bounds.right + getMargin(margin, theme, 'right'),
    start: bounds.left + getMargin(margin, theme, 'start'),
    top: bounds.top + getMargin(margin, theme, 'top')
  };
};

var KEYFRAMES = {
  center: {
    vertical: keyframes(_templateObject$8()),
    horizontal: keyframes(_templateObject2$3()),
    "true": keyframes(_templateObject3$2()),
    "false": keyframes(_templateObject4$1())
  },
  top: {
    vertical: keyframes(_templateObject5$1()),
    horizontal: keyframes(_templateObject6$1()),
    "true": keyframes(_templateObject7$1()),
    "false": keyframes(_templateObject8$1())
  },
  bottom: {
    vertical: keyframes(_templateObject9$1()),
    horizontal: keyframes(_templateObject10()),
    "true": keyframes(_templateObject11()),
    "false": keyframes(_templateObject12())
  },
  left: {
    vertical: keyframes(_templateObject13()),
    horizontal: keyframes(_templateObject14()),
    "true": keyframes(_templateObject15()),
    "false": keyframes(_templateObject16())
  },
  right: {
    vertical: keyframes(_templateObject17()),
    horizontal: keyframes(_templateObject18()),
    "true": keyframes(_templateObject19()),
    "false": keyframes(_templateObject20())
  },
  start: {
    vertical: keyframes(_templateObject21()),
    horizontal: keyframes(_templateObject22()),
    "true": keyframes(_templateObject23()),
    "false": keyframes(_templateObject24())
  },
  end: {
    vertical: keyframes(_templateObject25()),
    horizontal: keyframes(_templateObject26()),
    "true": keyframes(_templateObject27()),
    "false": keyframes(_templateObject28())
  }
};
var animationDuration = 200;
var getAnimationStyle = function getAnimationStyle(props, position, full) {
  var animation = props.animation !== undefined ? props.animation : props.animate;
  if (animation === undefined) animation = 'slide';
  var keys;

  if (animation === 'slide' || animation === true) {
    keys = KEYFRAMES[position][full];
  } else if (animation === 'fadeIn') {
    keys = keyframes(_templateObject29());
  }

  return keys ? css(_templateObject30(), keys, animationDuration / 1000.0) : '';
};
var POSITIONS = {
  center: {
    vertical: function vertical(bounds) {
      return css(_templateObject31(), bounds.top, bounds.bottom, function (props) {
        return getAnimationStyle(props, 'center', 'vertical');
      });
    },
    horizontal: function horizontal(bounds) {
      return css(_templateObject32(), bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'center', 'horizontal');
      });
    },
    "true": function _true(bounds) {
      return css(_templateObject33(), bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'center', 'true');
      });
    },
    "false": function _false() {
      return css(_templateObject34(), function (props) {
        return getAnimationStyle(props, 'center', 'false');
      });
    }
  },
  top: {
    vertical: function vertical(bounds) {
      return css(_templateObject35(), bounds.top, bounds.bottom, function (props) {
        return getAnimationStyle(props, 'top', 'vertical');
      });
    },
    horizontal: function horizontal(bounds) {
      return css(_templateObject36(), bounds.left, bounds.right, bounds.top, function (props) {
        return getAnimationStyle(props, 'top', 'horizontal');
      });
    },
    "true": function _true(bounds) {
      return css(_templateObject37(), bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    },
    "false": function _false(bounds) {
      return css(_templateObject38(), bounds.top, function (props) {
        return getAnimationStyle(props, 'top', 'false');
      });
    }
  },
  bottom: {
    vertical: function vertical(bounds) {
      return css(_templateObject39(), bounds.top, bounds.bottom, function (props) {
        return getAnimationStyle(props, 'bottom', 'vertical');
      });
    },
    horizontal: function horizontal(bounds) {
      return css(_templateObject40(), bounds.left, bounds.top, bounds.bottom, function (props) {
        return getAnimationStyle(props, 'bottom', 'horizontal');
      });
    },
    "true": function _true(bounds) {
      return css(_templateObject41(), bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    },
    "false": function _false(bounds) {
      return css(_templateObject42(), bounds.bottom, function (props) {
        return getAnimationStyle(props, 'bottom', 'false');
      });
    }
  },
  left: {
    vertical: function vertical(bounds) {
      return css(_templateObject43(), bounds.top, bounds.bottom, bounds.left, function (props) {
        return getAnimationStyle(props, 'left', 'vertical');
      });
    },
    horizontal: function horizontal(bounds) {
      return css(_templateObject44(), bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'left', 'horizontal');
      });
    },
    "true": function _true(bounds) {
      return css(_templateObject45(), bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'left', 'true');
      });
    },
    "false": function _false(bounds) {
      return css(_templateObject46(), bounds.left, function (props) {
        return getAnimationStyle(props, 'left', 'false');
      });
    }
  },
  right: {
    vertical: function vertical(bounds) {
      return css(_templateObject47(), bounds.top, bounds.bottom, bounds.right, function (props) {
        return getAnimationStyle(props, 'right', 'vertical');
      });
    },
    horizontal: function horizontal(bounds) {
      return css(_templateObject48(), bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'right', 'horizontal');
      });
    },
    "true": function _true(bounds) {
      return css(_templateObject49(), bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'right', 'true');
      });
    },
    "false": function _false(bounds) {
      return css(_templateObject50(), bounds.right, function (props) {
        return getAnimationStyle(props, 'right', 'false');
      });
    }
  },
  start: {
    vertical: function vertical(bounds) {
      return css(_templateObject51(), bounds.top, bounds.bottom, bounds.start, function (props) {
        return getAnimationStyle(props, 'start', 'vertical');
      });
    },
    horizontal: function horizontal(bounds) {
      return css(_templateObject52(), bounds.start, bounds.end, function (props) {
        return getAnimationStyle(props, 'start', 'horizontal');
      });
    },
    "true": function _true(bounds) {
      return css(_templateObject53(), bounds.top, bounds.bottom, bounds.start, bounds.end, function (props) {
        return getAnimationStyle(props, 'start', 'true');
      });
    },
    "false": function _false(bounds) {
      return css(_templateObject54(), bounds.start, function (props) {
        return getAnimationStyle(props, 'start', 'false');
      });
    }
  },
  end: {
    vertical: function vertical(bounds) {
      return css(_templateObject55(), bounds.top, bounds.bottom, bounds.end, function (props) {
        return getAnimationStyle(props, 'end', 'vertical');
      });
    },
    horizontal: function horizontal(bounds) {
      return css(_templateObject56(), bounds.start, bounds.end, function (props) {
        return getAnimationStyle(props, 'end', 'horizontal');
      });
    },
    "true": function _true(bounds) {
      return css(_templateObject57(), bounds.top, bounds.bottom, bounds.start, bounds.end, function (props) {
        return getAnimationStyle(props, 'end', 'true');
      });
    },
    "false": function _false(bounds) {
      return css(_templateObject58(), bounds.end, function (props) {
        return getAnimationStyle(props, 'end', 'false');
      });
    }
  },
  'top-right': {
    vertical: function vertical(bounds) {
      return css(_templateObject59(), bounds.top, bounds.bottom, bounds.right, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    },
    horizontal: function horizontal(bounds) {
      return css(_templateObject60(), bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    },
    "true": function _true(bounds) {
      return css(_templateObject61(), bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    },
    "false": function _false(bounds) {
      return css(_templateObject62(), bounds.top, bounds.right, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    }
  },
  'top-left': {
    vertical: function vertical(bounds) {
      return css(_templateObject63(), bounds.top, bounds.bottom, bounds.left, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    },
    horizontal: function horizontal(bounds) {
      return css(_templateObject64(), bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    },
    "true": function _true(bounds) {
      return css(_templateObject65(), bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    },
    "false": function _false(bounds) {
      return css(_templateObject66(), bounds.top, bounds.left, function (props) {
        return getAnimationStyle(props, 'top', 'true');
      });
    }
  },
  'bottom-right': {
    vertical: function vertical(bounds) {
      return css(_templateObject67(), bounds.top, bounds.bottom, bounds.right, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    },
    horizontal: function horizontal(bounds) {
      return css(_templateObject68(), bounds.left, bounds.right, bounds.bottom, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    },
    "true": function _true(bounds) {
      return css(_templateObject69(), bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    },
    "false": function _false(bounds) {
      return css(_templateObject70(), bounds.bottom, bounds.right, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    }
  },
  'bottom-left': {
    vertical: function vertical(bounds) {
      return css(_templateObject71(), bounds.top, bounds.bottom, bounds.left, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    },
    horizontal: function horizontal(bounds) {
      return css(_templateObject72(), bounds.left, bounds.right, bounds.bottom, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    },
    "true": function _true(bounds) {
      return css(_templateObject73(), bounds.top, bounds.bottom, bounds.left, bounds.right, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    },
    "false": function _false(bounds) {
      return css(_templateObject74(), bounds.bottom, bounds.left, function (props) {
        return getAnimationStyle(props, 'bottom', 'true');
      });
    }
  }
};
var StyledContainer$1 = styled.div.attrs({
  'data-s': 'StyledContainer'
})(_templateObject75(), themeGet('sizes.xsmall'), themeGet('layer.container.zIndex'), function (props) {
  return props.modal ? 'absolute' : 'fixed';
}, function (props) {
  return "calc(100% - " + getBounds(props.targetBounds, props.margin, props.theme, 'top') + "px - " + getBounds(props.targetBounds, props.margin, props.theme, 'bottom') + "px)";
}, function (props) {
  return "calc(100% - " + getBounds(props.targetBounds, props.margin, props.theme, 'left') + "px - " + getBounds(props.targetBounds, props.margin, props.theme, 'right') + "px)";
}, function (props) {
  return props.plain ? 0 : themeGet('layer.borderRadius', 0);
}, function (props) {
  return props.position !== 'hidden' && POSITIONS[props.position][props.full](getBounds(props.targetBounds, props.margin, props.theme), props.targetBounds) || '';
}, function (props) {
  var responsiveBreakpoint = themeGet('layer.responsiveBreakpoint', false)(props);

  if (props.responsive && responsiveBreakpoint) {
    return generateMedia(props).lessThan(responsiveBreakpoint)(_templateObject76());
  } else {
    return null;
  }
});

var FocusedContainer = function FocusedContainer(_ref) {
  var _ref$hidden = _ref.hidden,
      hidden = _ref$hidden === void 0 ? false : _ref$hidden,
      _ref$restrictScroll = _ref.restrictScroll,
      restrictScroll = _ref$restrictScroll === void 0 ? false : _ref$restrictScroll,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["hidden", "restrictScroll", "children"]);

  var _useState = useState(''),
      bodyOverflowStyle = _useState[0],
      setBodyOverflowStyle = _useState[1];

  var ref = useRef(null);
  useEffect(function () {
    var removeTrap = function removeTrap() {
      var child = ref.current;
      getBodyChildElements().filter(isNotAncestorOf(child)).forEach(makeNodeFocusable);

      if (restrictScroll) {
        document.body.style.overflow = bodyOverflowStyle;
      }
    };

    var trapFocus = function trapFocus() {
      var child = ref.current;
      getBodyChildElements().filter(isNotAncestorOf(child)).forEach(makeNodeUnfocusable);

      if (restrictScroll) {
        setBodyOverflowStyle(document.body.style.overflow);
        document.body.style.overflow = 'hidden';
      }
    };

    var timer = setTimeout(function () {
      if (!hidden) {
        trapFocus();
      }
    }, 0);
    return function () {
      removeTrap();
      clearTimeout(timer);
    };
  }, [hidden, bodyOverflowStyle, restrictScroll]);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    "aria-hidden": hidden
  }, rest), children);
};

function _templateObject$9() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  position: absolute;\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var HiddenAnchor = styled.a(_templateObject$9());
var fullBounds = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
var LayerContainer = forwardRef(function (_ref, ref) {
  var children = _ref.children,
      _ref$full = _ref.full,
      full = _ref$full === void 0 ? false : _ref$full,
      id = _ref.id,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? 'none' : _ref$margin,
      _ref$modal = _ref.modal,
      modal = _ref$modal === void 0 ? true : _ref$modal,
      onClickOutside = _ref.onClickOutside,
      onEsc = _ref.onEsc,
      plain = _ref.plain,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'center' : _ref$position,
      responsive = _ref.responsive,
      layerTarget = _ref.target,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "full", "id", "margin", "modal", "onClickOutside", "onEsc", "plain", "position", "responsive", "target"]);

  var theme = useContext(ThemeContext);

  var _useState = useState(fullBounds),
      targetBounds = _useState[0],
      setTargetBounds = _useState[1];

  var anchorRef = useRef();
  var containerRef = useRef();
  var layerRef = useRef();
  useEffect(function () {
    if (position !== 'hidden') {
      var node = layerRef.current || containerRef.current || ref.current;
      if (node && node.scrollIntoView) node.scrollIntoView();
      var element = document.activeElement;

      while (element) {
        if (element === containerRef.current) {
          break;
        }

        element = element.parentElement;
      }

      if (modal && !element && anchorRef.current) {
        anchorRef.current.focus();
      }
    }
  }, [modal, position, ref]);
  useEffect(function () {
    if (position !== 'hidden') {
      var node = layerRef.current || containerRef.current || ref.current;
      if (node && node.scrollIntoView) node.scrollIntoView();
    }
  }, [position, ref]);
  useEffect(function () {
    if (layerTarget) {
      var updateBounds = function updateBounds() {
        var rect = findVisibleParent(layerTarget).getBoundingClientRect();
        setTargetBounds({
          left: rect.left,
          right: window.innerWidth - rect.right,
          top: rect.top,
          bottom: window.innerHeight - rect.bottom
        });
      };

      updateBounds();
      window.addEventListener('resize', updateBounds);
      return function () {
        return window.removeEventListener('resize', updateBounds);
      };
    }

    setTargetBounds(fullBounds);
    return undefined;
  }, [layerTarget]);
  var content = /*#__PURE__*/React.createElement(StyledContainer$1, _extends({
    ref: ref || containerRef,
    id: id,
    full: full,
    margin: margin,
    modal: modal,
    targetBounds: !modal ? targetBounds : fullBounds
  }, rest, {
    position: position,
    plain: plain,
    responsive: responsive,
    dir: theme.dir
  }), /*#__PURE__*/React.createElement(HiddenAnchor, {
    ref: anchorRef,
    tabIndex: "-1",
    "aria-hidden": "true"
  }), children);

  if (modal) {
    content = /*#__PURE__*/React.createElement(StyledLayer, {
      ref: layerRef,
      id: id,
      targetBounds: targetBounds,
      plain: plain,
      position: position,
      responsive: responsive,
      tabIndex: "-1",
      dir: theme.dir
    }, /*#__PURE__*/React.createElement(StyledOverlay, {
      plain: plain,
      onMouseDown: onClickOutside,
      responsive: responsive
    }), content);
  }

  if (onEsc) {
    console.warn("onEsc is not yet implemented");
  }

  if (modal) {
    content = /*#__PURE__*/React.createElement(FocusedContainer, {
      hidden: position === 'hidden',
      restrictScroll: true
    }, content);
  }

  return content;
});

var ContainerTargetContext$1 = React.createContext(typeof document === 'object' ? document.body : undefined);
var Layer = forwardRef(function (props, ref) {
  var animate = props.animate,
      animation = props.animation;

  var _useState = useState(),
      originalFocusedElement = _useState[0],
      setOriginalFocusedElement = _useState[1];

  useEffect(function () {
    return setOriginalFocusedElement(document.activeElement);
  }, []);

  var _useState2 = useState(),
      layerContainer = _useState2[0],
      setLayerContainer = _useState2[1];

  var containerTarget = useContext(ContainerTargetContext$1);
  useEffect(function () {
    return setLayerContainer(getNewContainer(containerTarget));
  }, [containerTarget]);
  useEffect(function () {
    return function () {
      if (originalFocusedElement) {
        if (originalFocusedElement.focus) {
          setTimeout(function () {
            return originalFocusedElement.focus();
          }, 0);
        } else if (originalFocusedElement.parentNode && originalFocusedElement.parentNode.focus) {
          originalFocusedElement.parentNode.focus();
        }
      }

      if (layerContainer) {
        var activeAnimation = animation !== undefined ? animation : animate;

        if (activeAnimation !== false) {
          var layerClone = layerContainer.cloneNode(true);
          layerClone.id = 'layerClone';
          containerTarget.appendChild(layerClone);
          var clonedContainer = layerClone.querySelector('[data-s="StyledContainer"]');

          if (clonedContainer && clonedContainer.style) {
            clonedContainer.style.animationDirection = 'reverse';
          }

          setTimeout(function () {
            var clone = document.getElementById('layerClone');

            if (clone) {
              containerTarget.removeChild(clone);
              layerContainer.remove();
            }
          }, animationDuration);
        } else {
          containerTarget.removeChild(layerContainer);
        }
      }
    };
  }, [animate, animation, containerTarget, layerContainer, originalFocusedElement]);
  return layerContainer ? createPortal( /*#__PURE__*/React.createElement(LayerContainer, _extends({
    ref: ref
  }, props)), layerContainer) : null;
});
Layer.displayName = 'Layer';

function _templateObject$a() {
  var data = _taggedTemplateLiteralLoose(["\n.slick-list,\n.slick-slider,\n.slick-track {\n    position: relative;\n    display: block;\n}\n.slick-loading .slick-slide,\n.slick-loading .slick-track {\n    visibility: hidden;\n}\n.slick-slider {\n    box-sizing: border-box;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    -ms-touch-action: pan-y;\n    touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n.slick-list {\n    overflow: hidden;\n    margin: 0;\n    padding: 0;\n}\n.slick-list:focus {\n    outline: 0;\n}\n.slick-list.dragging {\n    cursor: pointer;\n    cursor: hand;\n}\n.slick-slider .slick-list,\n.slick-slider .slick-track {\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    -o-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n}\n.slick-track {\n    top: 0;\n    left: 0;\n}\n.slick-track:after,\n.slick-track:before {\n    display: table;\n    content: \"\";\n}\n.slick-track:after {\n    clear: both;\n}\n.slick-slide {\n    display: none;\n    float: left;\n    height: 100%;\n    min-height: 1px;\n}\n[dir=\"rtl\"] .slick-slide {\n    float: right;\n}\n.slick-slide img {\n    display: block;\n}\n.slick-slide.slick-loading img {\n    display: none;\n}\n.slick-slide.dragging img {\n    pointer-events: none;\n}\n.slick-initialized .slick-slide {\n    display: block;\n}\n.slick-vertical .slick-slide {\n    display: block;\n    height: auto;\n    border: 1px solid transparent;\n}\n.slick-arrow.slick-hidden {\n    display: none;\n}\n\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var SliderWrapper = styled.div(_templateObject$a());
var Arrow = function Arrow(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return /*#__PURE__*/React.createElement(Box, _extends({
    as: "button",
    __css: {
      fontSize: 0,
      lineHeight: 0,
      position: 'absolute',
      top: '50%',
      display: 'block',
      padding: 0,
      transform: ' translate(0,-50%)',
      cursor: 'pointer',
      color: '#fff',
      border: '0 solid transparent',
      width: '64px',
      height: '64px',
      outline: 0,
      background: 'transparent',
      zIndex: 1
    }
  }, rest), children);
};
var PrevArrow = function PrevArrow(props) {
  return /*#__PURE__*/React.createElement(Arrow, _extends({
    sx: {
      left: ['calc((100% - 960px)/2 + 10px)', null, 'calc((100% - 760px)/2 + 10px)', 'calc((100% - 960px)/2 + 10px)', 'calc((100% - 1140px)/2 + 10px)']
    }
  }, props), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: "xxlarge"
  }));
};
var NextArrow = function NextArrow(props) {
  return /*#__PURE__*/React.createElement(Arrow, _extends({
    sx: {
      right: ['calc((100% - 960px)/2 + 10px)', null, 'calc((100% - 760px)/2 + 10px)', 'calc((100% - 960px)/2 + 10px)', 'calc((100% - 1140px)/2 + 10px)']
    }
  }, props), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: "xxlarge"
  }));
};
var appendDots = function appendDots(dots) {
  return /*#__PURE__*/React.createElement(Box, {
    as: "ul",
    __css: {
      bottom: 'auto',
      display: 'block',
      listStyle: 'none',
      textAlign: 'center',
      padding: 0,
      margin: '1rem auto 0',
      '& > li': {
        position: 'relative',
        display: 'inline-block',
        margin: '0 5px',
        width: '12px',
        height: '12px',
        cursor: 'pointer'
      },
      '& > li > button': {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        outline: 0,
        borderRadius: '50%',
        backgroundColor: 'transparent',
        textIndent: '-999em',
        cursor: 'pointer',
        position: 'absolute',
        border: '1px solid',
        borderColor: 'primary500',
        padding: 0
      },
      '& > li > button::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: ' 100%',
        height: '100%',
        visibility: 'hidden',
        background: 'primary500',
        borderRadius: '50%',
        boxShadow: '0 0 1px #02afbc',
        opacity: 0,
        transform: ' scale(2.5)',
        transition: 'opacity .3s ease, transform .3s ease, visibility 0s .3s'
      },
      '& > li.slick-active > button::after': {
        visibility: 'visible',
        opacity: 1,
        transform: 'scale(1.5)',
        transition: 'opacity .3s ease,transform .3s ease'
      }
    }
  }, dots);
};
var Slider = React.forwardRef(function (_ref2, ref) {
  var children = _ref2.children,
      rest = _objectWithoutPropertiesLoose(_ref2, ["children"]);

  return /*#__PURE__*/React.createElement(SliderWrapper, null, /*#__PURE__*/React.createElement(Box.WithoutConfig, _extends({
    ref: ref,
    as: SlickSlider,
    __css: {
      '& .slick-slide': {
        px: ['8px', null, '0px']
      }
    }
  }, rest), children));
});

var SlideSubtitle = function SlideSubtitle(_ref) {
  var subtitle = _ref.subtitle;

  if (typeof subtitle === 'string') {
    return /*#__PURE__*/React.createElement(Box, null, subtitle);
  } else {
    return subtitle;
  }
};

var SlideIamge = function SlideIamge(_ref2) {
  var imageSrc = _ref2.imageSrc,
      rest = _objectWithoutPropertiesLoose(_ref2, ["imageSrc"]);

  return /*#__PURE__*/React.createElement(Box, _extends({
    __css: {
      height: '100%',
      width: '100%',
      objectFit: 'cover'
    },
    as: "img",
    src: imageSrc
  }, rest));
};

var SlideVideo = function SlideVideo(_ref3) {
  var videoId = _ref3.videoId,
      variant = _ref3.variant,
      opt = _ref3.opt,
      rest = _objectWithoutPropertiesLoose(_ref3, ["videoId", "sx", "variant", "opt"]);

  var options = _extends({
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      loop: 1
    }
  }, opt);

  return /*#__PURE__*/React.createElement(Box, {
    __css: {
      width: '100%',
      height: '100%',
      background: '0 0',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      overflow: 'hidden',
      '& > div:first-child, & iframe': {
        height: '100%',
        width: '100%'
      }
    },
    variant: variant,
    sx: variant
  }, /*#__PURE__*/React.createElement(YouTube, _extends({}, rest, {
    opt: options,
    videoId: videoId
  })));
};

var Slide = function Slide(_ref4) {
  var _ref4$isActive = _ref4.isActive,
      isActive = _ref4$isActive === void 0 ? false : _ref4$isActive,
      _ref4$subtitle = _ref4.subtitle,
      subtitle = _ref4$subtitle === void 0 ? null : _ref4$subtitle,
      _ref4$content = _ref4.content,
      content = _ref4$content === void 0 ? null : _ref4$content,
      _ref4$bgImage = _ref4.bgImage,
      bgImage = _ref4$bgImage === void 0 ? null : _ref4$bgImage,
      _ref4$videoId = _ref4.videoId,
      videoId = _ref4$videoId === void 0 ? null : _ref4$videoId,
      rest = _objectWithoutPropertiesLoose(_ref4, ["children", "isActive", "subtitle", "content", "bgImage", "videoId"]);

  var ref = useRef(null);
  var refVideo = useRef(null);

  var toggleVideo = function toggleVideo(_isActive) {
    if (refVideo.current) {
      if (_isActive) {
        var el = findParentByMatchedQuery(ref.current, 'slick-slide');

        if (el.classList && !el.classList.contains('slick-cloned')) {
          refVideo.current.playVideo();
        }
      } else {
        refVideo.current.pauseVideo();
      }
    }
  };

  useEffect(function () {
    toggleVideo(isActive);
  }, [isActive]);

  var onVideoReady = function onVideoReady(e) {
    refVideo.current = e.target;
    toggleVideo(isActive);
  };

  return /*#__PURE__*/React.createElement(Box, _extends({
    ref: ref,
    __css: {
      minHeight: '1px',
      height: ['300px', null, '500px'],
      width: '100%',
      display: 'flex',
      position: 'relative',
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.25)'
      }
    }
  }, rest), videoId && /*#__PURE__*/React.createElement(SlideVideo, {
    videoId: videoId,
    onReady: onVideoReady
  }), subtitle && /*#__PURE__*/React.createElement(SlideSubtitle, {
    subtitle: subtitle
  }), bgImage && /*#__PURE__*/React.createElement(SlideIamge, {
    imageSrc: bgImage
  }), content && /*#__PURE__*/React.createElement(Box, {
    sx: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0
    }
  }, content));
};

var SearchOverlayTop = function SearchOverlayTop(_ref) {
  var closeIcon = _ref.closeIcon,
      topContent = _ref.topContent,
      variant = _ref.variant,
      onClose = _ref.onClose;
  return /*#__PURE__*/React.createElement(Flex, {
    className: "vf-search-overlay__top-wrapper",
    __css: {
      padding: "16px",
      justifyContent: 'space-between',
      width: "100%",
      alignItems: "center"
    },
    variant: getVariant([variant])
  }, topContent ? topContent : /*#__PURE__*/React.createElement(Button, {
    variant: getVariant([variant, 'closeBtn']),
    className: "vf-search-overlay__close-btn",
    onClick: onClose,
    sx: {
      marginLeft: 'auto',
      backgroundColor: 'transparent',
      padding: "8px",
      border: 0,
      '&:hover, &:focus': {
        backgroundColor: 'transparent',
        border: 0
      }
    }
  }, closeIcon ? closeIcon : /*#__PURE__*/React.createElement(Icon, {
    className: "vf-search-overlay__close-icon",
    icon: "close-mobile",
    size: "32px"
  })));
};

var SearchOverlayForm = function SearchOverlayForm(_ref2) {
  var onSubmit = _ref2.onSubmit,
      inputRef = _ref2.inputRef,
      inputPlaceholder = _ref2.inputPlaceholder,
      variant = _ref2.variant,
      inputTitle = _ref2.inputTitle;
  return /*#__PURE__*/React.createElement(Box, {
    variant: getVariant([variant]),
    className: "vf-search-overlay__form-wrapper",
    __css: {
      padding: ['50px 10px', null, '100px 100px 20px']
    }
  }, /*#__PURE__*/React.createElement("form", {
    className: "vf-search-overlay__form",
    onSubmit: onSubmit
  }, /*#__PURE__*/React.createElement(Input, {
    className: "vf-search-overlay__form-input",
    variant: getVariant([variant, 'input']),
    sx: {
      backgroud: 'transparent',
      border: 0,
      padding: ['1rem 2.5rem .125rem 0', null, '1rem 5rem 1rem 0'],
      lineHeight: ['1', null, '36px'],
      fontSize: ['20px', null, '2.25rem'],
      color: 'white',
      borderRadius: 0,
      borderBottom: '3px solid #fff',
      '&:focus,&:hover': {
        backgroundColor: 'transparent',
        border: 0,
        borderBottom: '3px solid #fff',
        boxShadow: 0
      },
      '&::placeholder': {
        color: 'black100',
        opacity: 1
      }
    },
    ref: inputRef,
    icon: /*#__PURE__*/React.createElement(Button, {
      variant: getVariant([variant, 'searchBtn']),
      onClick: onSubmit,
      sx: {
        backgroundColor: 'transparent',
        padding: 'small',
        border: 0,
        '&:hover,&:focus': {
          backgroundColor: 'transparent',
          border: 0
        }
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      color: "white",
      name: "recherche",
      size: "large"
    })),
    reverse: true,
    width: "100%",
    placeholder: inputPlaceholder,
    title: inputTitle
  })));
};

var SearchOverlayInfo = function SearchOverlayInfo(_ref3) {
  var searchInfo = _ref3.searchInfo,
      variant = _ref3.variant;
  return /*#__PURE__*/React.createElement(Box, {
    variant: variant,
    className: "vf-search-overlay__info-wrapper",
    __css: {
      color: 'white',
      margin: '5px 0',
      padding: [0, null, '10px 100px'],
      fontSize: ['.8rem', null, '1rem'],
      lineHeight: '18px',
      textAlign: 'right'
    }
  }, searchInfo);
};

var SearchOverlayContainer = function SearchOverlayContainer(_ref4) {
  var _ref4$open = _ref4.open,
      open = _ref4$open === void 0 ? false : _ref4$open,
      onClose = _ref4.onClose,
      onSubmit = _ref4.onSubmit,
      _ref4$inputTitle = _ref4.inputTitle,
      inputTitle = _ref4$inputTitle === void 0 ? "Veuillez tapez quelques chose" : _ref4$inputTitle,
      _ref4$inputPlaceholde = _ref4.inputPlaceholder,
      inputPlaceholder = _ref4$inputPlaceholde === void 0 ? "Que recherchez-vous ?" : _ref4$inputPlaceholde,
      _ref4$searchInfo = _ref4.searchInfo,
      searchInfo = _ref4$searchInfo === void 0 ? "Appuyer sur la touche \"Entrée\" du clavier pour lancer la recherche" : _ref4$searchInfo,
      _ref4$topContent = _ref4.topContent,
      topContent = _ref4$topContent === void 0 ? null : _ref4$topContent,
      _ref4$closeIcon = _ref4.closeIcon,
      closeIcon = _ref4$closeIcon === void 0 ? null : _ref4$closeIcon,
      _ref4$variant = _ref4.variant,
      variant = _ref4$variant === void 0 ? "searchOverlay" : _ref4$variant,
      rest = _objectWithoutPropertiesLoose(_ref4, ["children", "open", "onClose", "onSubmit", "inputTitle", "inputPlaceholder", "searchInfo", "topContent", "closeIcon", "variant"]);

  var dir = React.useContext(DirectionManagerContext);
  var motionVariants = {
    visible: {
      opacity: 1
    },
    hidden: {
      opacity: 0
    }
  };
  var inputRef = React.createRef();
  React.useEffect(function () {
    if (open) {
      inputRef.current.value = '';
    }
  });

  var handleSubmitForm = function handleSubmitForm(e) {
    e.preventDefault();
    onSubmit(inputRef.current.value || null);
  };

  return /*#__PURE__*/React.createElement(MotionFlex, _extends({
    dir: dir,
    className: "vf-search-overlay " + (open ? 'vf-search-overlay--open' : 'vf-search-overlay--close'),
    __css: {
      position: 'fixed',
      top: 0,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      opacity: 0,
      pointerEvents: open ? 'auto' : 'none',
      visible: open ? 'visible' : 'hidden',
      backgroundColor: 'black500',
      zIndex: 20
    }
  }, rest, {
    initial: "hidden",
    variants: motionVariants,
    variant: getVariant([variant]),
    animate: open ? 'visible' : 'hidden'
  }), /*#__PURE__*/React.createElement(Flex, {
    className: "vf-search-overlay__content-wrapper",
    variant: getVariant([variant, 'wrapper']),
    __css: {
      flexDirection: "column",
      position: 'relative',
      color: 'white',
      width: ['90%', null, '75%']
    }
  }, /*#__PURE__*/React.createElement(SearchOverlayTop, {
    variant: getVariant([variant, 'top']),
    topContent: topContent,
    closeIcon: closeIcon,
    onClose: onClose
  }), /*#__PURE__*/React.createElement(SearchOverlayForm, {
    onSubmit: handleSubmitForm,
    variant: getVariant([variant, 'form']),
    inputRef: inputRef,
    inputPlaceholder: inputPlaceholder,
    inputTitle: inputTitle
  }), /*#__PURE__*/React.createElement(SearchOverlayInfo, {
    searchInfo: searchInfo,
    variant: getVariant([variant, 'info'])
  })));
};

var SearchOverlay = function SearchOverlay(_ref5) {
  var _ref5$open = _ref5.open,
      open = _ref5$open === void 0 ? false : _ref5$open,
      rest = _objectWithoutPropertiesLoose(_ref5, ["open", "children"]);

  return ReactDOM.createPortal( /*#__PURE__*/React.createElement(SearchOverlayContainer, _extends({}, rest, {
    open: open
  })), document.body);
};

var colors = {
  black: '#000',
  white: '#fff',
  transparent: 'transparent',
  light: '',
  disabled: '',
  text: '#0a1f44',
  primary100: '#f2f6ff',
  primary200: '#d9e4ff',
  primary300: '#a6c1ff',
  primary400: '#598bff',
  primary500: '#3366ff',
  primary600: '#274bdb',
  primary700: '#1a34b8',
  primary800: '#102694',
  primary900: '#091c7a',
  black100: '#707d91',
  black200: '#626f88',
  black300: '#596680',
  black400: '#4e5c78',
  black500: '#455571',
  black600: '#374766',
  black700: '#293a5b',
  black800: '#13284b',
  black900: '#0a1f44',
  gray100: '#f7f8f9',
  gray200: '#f7f8f9',
  gray300: '#f1f2f4',
  gray400: '#e1e4e8',
  gray500: '#c9ced6',
  gray600: '#afb7c3',
  gray700: '#a6aebb',
  gray800: '#98a1b1',
  gray900: '#8a94a6',
  success100: '#f0fff5',
  success200: '#ccfce3',
  success300: '#8cfac7',
  success400: '#2ce69b',
  success500: '#00d68f',
  success600: '#00b887',
  success700: '#00997a',
  success800: '#007d6c',
  success900: '#004a45',
  info100: '#f2f8ff',
  info200: '#c7e2ff',
  info300: '#94cbff',
  info400: '#42aaff',
  info500: '#0095ff',
  info600: '#006fd6',
  info700: '#0057c2',
  info800: '#0041a8',
  info900: '#002885',
  warning100: '#fffdf2',
  warning200: '#fff1c2',
  warning300: '#ffe59e',
  warning400: '#ffc94d',
  warning500: '#ffaa00',
  warning600: '#db8b00',
  warning700: '#b86e00',
  warning800: '#945400',
  warning900: '#703c00',
  danger100: '#fff2f2',
  danger200: '#ffd6d9',
  danger300: '#ffa8b4',
  danger400: '#ff708d',
  danger500: '#ff3d71',
  danger600: '#db2c66',
  danger700: '#b81d5b',
  danger800: '#94124e',
  danger900: '#700940',
  btnPrimary: '#3366ff',
  backgroundBasic100: '#fff',
  backgroundBasic200: '#f7f8f9',
  textBasic500: '#30435c',
  textBasic900: '#30435c',
  skeletonBackground: 'rgba(0, 0, 0, 0.08)',
  modes: {
    dark: {
      text: 'warning400',
      background: '#0a1f44',
      btnPrimary: '#ff3d71',
      backgroundBasic100: '#000',
      backgroundBasic200: '#303030',
      skeletonBackground: 'rgba(255, 255, 255, 0.25)',
      textBasic500: '#fff',
      textBasic900: '#fff'
    }
  }
};
var defaultColorVariants = {
  primary: colors.primary500,
  black: colors.black500,
  gray: colors.gray500,
  success: colors.success500,
  info: colors.info500,
  warning: colors.warning500,
  danger: colors.danger500
};
var colors$1 = _extends(_extends({}, colors), defaultColorVariants);

var breakpoints = ['576px', '768px', '992px', '1200px'];
breakpoints.xs = '0px';
breakpoints.sm = '576px';
breakpoints.md = '768px';
breakpoints.lg = '992px';
breakpoints.xl = '1200px';
var gridSystem = {
  gridSize: 12,
  gutterWidth: 16,
  outerMargin: 8,
  container: {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px'
  }
};

var space = {
  none: '0px',
  xxxsmall: '2px',
  xxsmall: '4px',
  xsmall: '8px',
  small: '12px',
  medium: '16px',
  large: '24px',
  xlarge: '32px',
  xxlarge: '40px',
  xxxlarge: '64px'
};

var shadows = {
  0: '0 1px 1px 0 rgba(8, 11, 14, 0.1)',
  1: '0 3px 3px -1px rgba(8, 11, 14, 0.1)',
  2: '0 6px 6px -1px rgba(8, 11, 14, 0.1)',
  3: '0 16px 16px -1px rgba(8, 11, 14, 0.1)',
  4: '0 32px 40px -1px rgba(8, 11, 14, 0.1)'
};

var sizes = {
  xxxsmall: '2px',
  xxsmall: '4px',
  xsmall: '8px',
  small: '12px',
  medium: '16px',
  large: '24px',
  xlarge: '32px',
  xxlarge: '64px',
  xxxlarge: '128px'
};

var fonts = {
  sans: 'Roboto, sans-serif',
  serif: '\'Roboto Slab\', serif',
  monospace: '\'Roboto Mono\', monospace',
  montserrat: "'Montserrat', sans-serif"
};

var fontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900
};

var fontSizes = {
  tiny: '10px',
  caption: '12px',
  body: '14px',
  paragraph: '16px',
  subheader: '17px',
  title: '22px',
  heading6: '16px',
  heading5: '20px',
  heading4: '24px',
  heading3: '28px',
  heading2: '40px',
  heading1: '48px',
  heading1x: '74px'
};

var lineHeights = {
  tiny: '17px',
  caption: '20px',
  body: '24px',
  paragraph: '26px',
  subheader: '30px',
  title: '32px',
  heading6: '26px',
  heading5: '32px',
  heading4: '38px',
  heading3: '44px',
  heading2: '62px',
  heading1: '62px'
};

var borders = {
  primary: "1px solid " + colors$1.primary500,
  success: "1px solid " + colors$1.success500,
  danger: "1px solid " + colors$1.danger500,
  info: "1px solid " + colors$1.info500,
  warning: "1px solid " + colors$1.warning500,
  black: "1px solid " + colors$1.black500,
  gray: "1px solid " + colors$1.gray500
};
var radii = {
  none: '0px',
  xsmall: '2px',
  small: '4px',
  medium: '6px',
  large: '8px',
  xlarge: '12px',
  rounded: '1000rem'
};
var borderWidths = {
  none: 'Opx',
  xsmall: '1px',
  small: '2px',
  medium: '4px',
  large: '8px'
};
var borderStyles = {};

var buttons = {
  fill: {
    primary: {
      backgroundColor: 'primary500',
      color: 'white',
      fontSize: 'paragraph',
      lineHeight: 'paragraph',
      borderWidth: '2px',
      borderColor: 'transparent',
      ':hover': {
        backgroundColor: 'primary600',
        color: 'white',
        borderColor: 'primary600'
      },
      ':disabled': {
        backgroundColor: 'primary100',
        color: 'primary300',
        borderColor: 'primary200'
      }
    },
    danger: {
      backgroundColor: 'danger500',
      color: 'white',
      fontSize: 'paragraph',
      lineHeight: 'paragraph',
      borderWidth: '2px',
      borderColor: 'transparent',
      ':hover': {
        backgroundColor: 'danger600',
        color: 'white',
        borderColor: 'danger600'
      },
      ':disabled': {
        backgroundColor: 'danger100',
        color: 'danger300',
        borderColor: 'danger200'
      }
    },
    success: {
      backgroundColor: 'success500',
      color: 'white',
      fontSize: 'paragraph',
      lineHeight: 'paragraph',
      borderWidth: '2px',
      borderColor: 'transparent',
      ':hover': {
        backgroundColor: 'success600',
        color: 'white',
        borderColor: 'success600'
      },
      ':disabled': {
        backgroundColor: 'success100',
        color: 'success300',
        borderColor: 'success200'
      }
    },
    info: {
      backgroundColor: 'info500',
      color: 'white',
      fontSize: 'paragraph',
      lineHeight: 'paragraph',
      borderWidth: '2px',
      borderColor: 'transparent',
      ':hover': {
        backgroundColor: 'info600',
        color: 'white',
        borderColor: 'info600'
      },
      ':disabled': {
        backgroundColor: 'info100',
        color: 'info300',
        borderColor: 'info200'
      }
    },
    warning: {
      backgroundColor: 'warning500',
      color: 'white',
      fontSize: 'paragraph',
      lineHeight: 'paragraph',
      borderWidth: '2px',
      borderColor: 'transparent',
      ':hover': {
        backgroundColor: 'warning600',
        color: 'white',
        borderColor: 'warning600'
      },
      ':disabled': {
        backgroundColor: 'warning100',
        color: 'warning300',
        borderColor: 'warning200'
      }
    }
  },
  size: {
    small: {
      paddingTop: 'xxsmall',
      paddingBottom: 'xxsmall',
      paddingLeft: 'large',
      paddingRight: 'large',
      fontSize: '14px',
      lineHeight: '20px'
    },
    medium: {
      paddingTop: 'xxsmall',
      paddingBottom: 'xxsmall',
      paddingLeft: 'large',
      paddingRight: 'large',
      fontSize: '16px',
      lineHeight: '24px'
    },
    large: {
      paddingTop: 'xxsmall',
      paddingBottom: 'xxsmall',
      paddingLeft: 'large',
      paddingRight: 'large',
      fontSize: '22px',
      lineHeight: '28px'
    }
  },
  outline: {
    primary: {
      border: 'primary',
      color: 'primary500',
      borderWidth: 'small',
      backgroundColor: 'transparent',
      ':hover': {
        backgroundColor: 'primary500',
        color: 'white',
        borderColor: 'primary500'
      }
    },
    danger: {
      border: 'danger',
      color: 'danger500',
      borderWidth: 'small',
      backgroundColor: 'transparent',
      ':hover': {
        backgroundColor: 'danger500',
        color: 'white',
        borderColor: 'danger500'
      }
    },
    success: {
      border: 'success',
      color: 'success500',
      borderWidth: 'small',
      backgroundColor: 'transparent',
      ':hover': {
        backgroundColor: 'success500',
        color: 'white',
        borderColor: 'success500'
      }
    },
    warning: {
      border: 'warning',
      color: 'warning500',
      borderWidth: 'small',
      backgroundColor: 'transparent',
      ':hover': {
        backgroundColor: 'warning500',
        color: 'white',
        borderColor: 'warning500'
      }
    },
    info: {
      border: 'info',
      color: 'info500',
      borderWidth: 'small',
      backgroundColor: 'transparent',
      ':hover': {
        backgroundColor: 'info500',
        color: 'white',
        borderColor: 'info500'
      }
    }
  }
};

var anchors = {
  variants: {
    primary: {
      color: 'primary500',
      textDecoration: 'none',
      '&:hover': {
        color: 'primary600',
        textDecoration: 'underline'
      },
      '&:disabled': {
        color: 'gray300'
      }
    },
    danger: {
      color: 'danger500',
      textDecoration: 'none',
      '&:hover': {
        color: 'danger600',
        textDecoration: 'underline'
      },
      '&:disabled': {
        color: 'danger300'
      }
    },
    success: {
      color: 'success500',
      textDecoration: 'none',
      '&:hover': {
        color: 'success600',
        textDecoration: 'underline'
      },
      '&:disabled': {
        color: 'success300'
      }
    },
    info: {
      color: 'info500',
      textDecoration: 'none',
      '&:hover': {
        color: 'info600',
        textDecoration: 'underline'
      },
      '&:disabled': {
        color: 'info300'
      }
    },
    warning: {
      color: 'warning500',
      textDecoration: 'none',
      '&:hover': {
        color: 'warning600',
        textDecoration: 'underline'
      },
      '&:disabled': {
        color: 'warning300'
      }
    }
  }
};

var inputs = {
  iconContainer: {
    width: '30px'
  },
  variants: {
    "default": {
      color: 'black800',
      borderColor: 'gray500',
      borderWidth: '1px',
      borderRadius: 'small',
      ':hover,:active': {
        boxShadow: 'none'
      },
      ':focus': {
        borderColor: 'primary600',
        boxShadow: "0 0 0 2px " + colors$1.primary600
      },
      ':disabled': {
        backgroundColor: 'gray200',
        boxShadow: 'none',
        color: 'gray800',
        borderColor: 'gray500'
      }
    },
    dam: {
      color: '#707070',
      borderColor: '#dfdfdf',
      borderWidth: '1px',
      borderRadius: 'rounded',
      lineHeight: '30px',
      fontSize: '16px',
      width: '100%',
      ':hover,:active': {
        boxShadow: 'none'
      },
      ':focus': {
        borderColor: '#dfdfdf',
        boxShadow: 'none'
      },
      ':disabled': {
        backgroundColor: 'gray200',
        boxShadow: 'none',
        color: 'gray800',
        borderColor: 'gray500'
      }
    },
    awb: {
      color: '#000',
      border: '2px solid #f5c000',
      backgroundColor: '#fff',
      fontWeight: 700,
      borderRadius: 'none',
      boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
      transition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
      ':hover,:active': {
        boxShadow: 'none'
      },
      ':focus': {
        borderColor: '#f5c001',
        outline: '0',
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(245,192,1,.6)'
      },
      ':disabled': {
        backgroundColor: 'gray200',
        boxShadow: 'none',
        color: 'gray800',
        borderColor: 'gray500'
      }
    }
  },
  status: {
    primary: {
      borderColor: 'primary500',
      ':hover,:active': {
        boxShadow: "0 0 0 3px " + colors$1.primary200
      },
      ':focus': {
        borderColor: 'primary600',
        boxShadow: "0 0 0 3px " + colors$1.primary200
      }
    },
    danger: {
      borderColor: 'danger500',
      ':hover,:active': {
        boxShadow: "0 0 0 3px " + colors$1.danger200
      },
      ':focus': {
        borderColor: 'danger600',
        boxShadow: "0 0 0 3px " + colors$1.danger200
      }
    },
    success: {
      borderColor: 'success500',
      ':hover,:active': {
        boxShadow: "0 0 0 3px " + colors$1.success200
      },
      ':focus': {
        borderColor: 'success600',
        boxShadow: "0 0 0 3px " + colors$1.success200
      }
    },
    info: {
      borderColor: 'info500',
      ':hover,:active': {
        boxShadow: "0 0 0 3px " + colors$1.info200
      },
      ':focus': {
        borderColor: 'info600',
        boxShadow: "0 0 0 3px " + colors$1.info200
      }
    },
    warning: {
      borderColor: 'warning500',
      ':hover,:active': {
        boxShadow: "0 0 0 3px " + colors$1.warning200
      },
      ':focus': {
        borderColor: 'warning600',
        boxShadow: "0 0 0 3px " + colors$1.warning200
      }
    }
  },
  sizes: {
    small: {
      paddingY: 'xxsmall',
      paddingX: 'xsmall',
      fontSize: '14px',
      lineHeight: '20px'
    },
    medium: {
      paddingY: 'xsmall',
      paddingX: 'xsmall',
      fontSize: '16px',
      lineHeight: '24px'
    },
    large: {
      paddingY: 'small',
      paddingX: 'small',
      fontSize: '18px',
      lineHeight: '26px'
    },
    dam: {
      paddingX: '14px',
      fontSize: '16px',
      lineHeight: '30px'
    },
    awb: {
      padding: '7px 25px',
      fontSize: '18px',
      lineHeight: '1.33337',
      fontWeight: 700,
      height: '60px',
      width: '100%'
    }
  }
};

var labels = {
  variants: {
    "default": {
      color: 'gray500',
      fontSize: '14px',
      lineHeight: '24px',
      fontWeight: 400
    },
    dam: {
      color: '#707070',
      fontSize: '16px',
      lineHeight: '27px',
      fontWeight: 400
    },
    awb: {
      color: '#000000',
      fontSize: '20px',
      lineHeight: '2.7rem',
      fontWeight: 300,
      margin: '0 0 10px 0'
    }
  }
};

var radio = {
  primary: {
    color: 'gray300',
    'input:checked ~ &': {
      color: 'primary500'
    }
  },
  danger: {
    color: 'danger300',
    'input:checked ~ &': {
      color: 'danger500'
    }
  }
};

var checkbox = {
  primary: {
    color: 'gray300',
    'input:checked ~ &': {
      color: 'primary500'
    }
  },
  danger: {
    color: 'danger300',
    'input:checked ~ &': {
      color: 'danger500'
    }
  }
};

var select = {};

var layer = {
  responsiveBreakpoint: 'md',
  zIndex: 1000,
  backgroundColor: 'primary200',
  container: {
    zIndex: 1001
  },
  overlay: {
    backgroundColor: 'gray700',
    opacity: 0.5
  },
  "default": {}
};

var tabs = {
  header: {},
  tab: {},
  activeTab: {},
  content: {},
  cardType: {
    border: 0,
    header: {
      backgroundColor: 'transparent',
      borderBottom: '1px solid',
      borderColor: 'gray400'
    },
    tab: {
      border: '1px solid',
      borderColor: 'gray400',
      borderRadius: "4px",
      borderBottomLeftRadius: "0px",
      borderBottomRightRadius: "0px",
      marginBottom: '-1px',
      mx: '3px',
      '&:not(first-of-type)': {
        marginLeft: '0'
      }
    },
    activeTab: {
      border: '1px solid',
      borderColor: 'gray400',
      borderBottom: 0,
      backgroundColor: 'white',
      borderRadius: "4px",
      borderBottomLeftRadius: "0px",
      borderBottomRightRadius: "0px",
      marginBottom: '-1px',
      mx: '3px',
      '&:not(first-of-type)': {
        marginLeft: '0'
      }
    },
    content: {
      py: 'large',
      px: 'small',
      border: '1px solid',
      borderColor: 'gray400',
      borderTop: 0
    }
  },
  cardContainerType: {
    border: 0,
    header: {
      backgroundColor: 'transparent'
    },
    tab: {
      backgroundColor: 'transparent',
      mx: '-1px',
      marginBottom: '-1px'
    },
    activeTab: {
      backgroundColor: 'white',
      marginBottom: '-1px'
    },
    content: {
      py: 'large',
      px: 'small',
      backgroundColor: 'white'
    }
  }
};

var accordion = {
  panel: {
    borderColor: 'gray400'
  },
  header: {
    backgroundColor: 'gray100',
    borderColor: 'gray400',
    p: ['medium', null, 'large']
  },
  primary: {
    panel: {
      borderColor: 'primary900',
      borderWidth: '3px'
    }
  },
  danger: {
    margin: 0,
    panel: {
      borderColor: 'danger500',
      borderWidth: '3px'
    },
    header: {
      borderColor: 'danger500',
      p: ['medium', null, 'large']
    },
    primary: {
      panel: {
        borderColor: 'danger500',
        borderWidth: '3px'
      }
    }
  }
};

var breadcrumb = {
  saber: {
    backgroundColor: 'transparent',
    padding: 'small',
    fontFamily: 'montserrat',
    fontSize: '16px',
    item: {
      color: 'primary900',
      active: {
        color: 'primary500'
      }
    },
    separator: {},
    '& .vf-breadcrumb__item': {},
    '& vf-breadcrumb__item.vf-breadcrumb__item--active': {
      ':hover': {}
    }
  }
};

var navs = {
  nav: {},
  activeNav: {},
  capitalazur: {
    padding: '0px',
    fontFamily: 'montserrat',
    backgroundColor: 'white',
    boxShadow: 1,
    py: 'large',
    alignItems: 'start',
    nav: {
      padding: '0px',
      fontSize: '14px',
      fontWeight: 500,
      color: '#000000',
      textTransform: 'uppercase',
      px: '16px',
      py: ['16px', '0'],
      borderWidth: ['0', '2px'],
      borderStyle: 'solid',
      borderColor: 'gray500',
      borderTop: '0px',
      borderBottom: '0px',
      '&:first-of-type': {
        border: '0px'
      },
      '&:last-of-type': {
        border: '0px'
      },
      ':hover': {
        color: '#017CFE'
      }
    },
    activeNav: {
      padding: '0px',
      color: '#017CFE',
      px: '16px',
      py: ['16px', '0'],
      fontWeight: 600,
      ':hover': {
        color: '#017CFE'
      }
    }
  }
};

var heading = {
  "default": {
    color: 'black500',
    h1: {
      fontSize: ["28px", null, "50px", 'heading1', 'heading1'],
      lineHeight: ['28px', "37px", "heading1"],
      marginBottom: ['15px', null, '20px']
    },
    h2: {
      fontSize: ["22px", null, "heading2"],
      lineHeight: ['27px', null, "heading2"],
      marginBottom: ['15px', null, '20px']
    },
    h3: {
      fontSize: ["18px", null, "heading3"],
      lineHeight: ['27px', null, "heading3"],
      marginBottom: ['15px', null, '20px']
    },
    h4: {
      fontSize: ["18px", null, "heading4"],
      lineHeight: ['21px', null, "heading4"],
      marginBottom: ['15px', null, '20px']
    },
    h5: {
      fontSize: ["16px", null, "heading5"],
      lineHeight: ['19px', null, "heading5"],
      marginBottom: ['15px', null, '20px']
    },
    h6: {
      fontSize: ["16px", null, "heading6"],
      lineHeight: ['20px', null, "heading6"],
      marginBottom: ['15px', null, '20px']
    }
  }
};
var paragraph = {
  "default": {
    fontSize: ['15px', null, 'paragraph'],
    lineHeight: 'paragraph',
    marginBottom: 'xsmall'
  }
};

var searchOverlay = {
  "default": {
    wrapper: {},
    top: {
      closeBtn: {}
    },
    form: {
      wrapper: {},
      input: {},
      searchBtn: {}
    },
    info: {},
    '&.vf-search-overlay--open': {},
    '&.vf-search-overlay--close': {},
    '& .vf-search-overlay__content-wrapper': {}
  }
};

var baseTheme = {
  colors: colors$1,
  breakpoints: breakpoints,
  space: space,
  shadows: shadows,
  fonts: fonts,
  fontWeights: fontWeights,
  fontSizes: fontSizes,
  lineHeights: lineHeights,
  sizes: sizes,
  borders: borders,
  radii: radii,
  borderWidths: borderWidths,
  borderStyles: borderStyles,
  gridSystem: gridSystem
};
var componentsTheme = {
  buttons: buttons,
  anchors: anchors,
  inputs: inputs,
  labels: labels,
  radio: radio,
  checkbox: checkbox,
  select: select,
  layer: layer,
  tabs: tabs,
  accordion: accordion,
  breadcrumb: breadcrumb,
  navs: navs,
  heading: heading,
  paragraph: paragraph,
  searchOverlay: searchOverlay
};
var theme = _extends(_extends({}, baseTheme), componentsTheme);

export { Accordion, AccordionContext, AccordionPanel, Anchor, Arrow, Box, BoxWithoutConfig, Breadcrumb, BreadcrumbItem, Button, Checkbox, Col, ColorModeProvider, Container, DEFAULT_BREAKPOINTS, DirectionManager, DirectionManagerContext, Drop, Flex, Footer, GlobalStyle, Header, Heading, Icon, Image, Input, IntersectionContext, IntersectionObserver, Item, Label, Layer, Link, List, MotionBox, MotionFlex, Nav, Navs, NextArrow, Pagination, Paragraph, ParallaxBox, PrevArrow, Radio, RevealBox, Row, SearchOverlay, Select, Slide, Slider, StyledChildren, TABINDEX, TABINDEX_STATE, Tab, Tabs, Text, VactoryIconConsumer, VactoryIconContext, VactoryIconProvider, VactoryThemeContext, WrapperIcon, appendDots, base, between, findParentByMatchedQuery, findScrollParents, findVisibleParent, generateMedia, getBodyChildElements, getLayoutProps, getMarginProps, getNewContainer, getProps, getSizeProps, getSpaceProps, getSystemProps, getVariant, greaterThan, iconSet, isNotAncestorOf, lessThan, makeNodeFocusable, makeNodeUnfocusable, mergeIcons, omitLayoutProps, omitMarginProps, omitProps, omitSizeProps, omitSpaceProps, parseMetricToNum, setFocusWithoutScroll, sx, theme, useColorMode, useIsomorphicLayoutEffect, useMedia, useMediaBetween, useMediaGreaterThan, useMediaLessThan, useScrollPosition, useVactoryIcon, useVactoryTheme, theme as vactoryTheme, variant, variantReducer };
//# sourceMappingURL=index.modern.js.map
