import styled from 'styled-components';
import { compose, space as space$1, color, layout, flexbox, border, typography, boxShadow } from 'styled-system';
import css, { get } from '@styled-system/css';
import shouldForwardProp from '@styled-system/should-forward-prop';
import React from 'react';

var sx = function sx(props) {
  return css(props.sx)(props.theme);
};

var base = function base(props) {
  return css(props.__css)(props.theme);
};

var variant = function variant(_ref) {
  var theme = _ref.theme,
      variant = _ref.variant;
  return css(get(theme, variant))(theme);
};

var Box = styled('div', {
  shouldForwardProp: shouldForwardProp
})({
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0
}, base, variant, sx, function (props) {
  return props.css;
}, function (props) {
  return props.styledCss;
}, compose(space$1, color, layout, flexbox, border, typography, boxShadow));
var Flex = styled(Box)({
  display: 'flex'
});

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

var colors = {
  black: '#000',
  white: '#fff',
  transparent: 'transparent',
  light: '',
  disabled: '',
  text: '#0a1f44',
  background: 'white',
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
  modes: {
    dark: {
      text: 'warning400',
      background: '#0a1f44',
      btnPrimary: '#ff3d71'
    }
  }
};

var breakpoints = ['500px', '960px', '1280px', '1920px'];
breakpoints.xs = '0px';
breakpoints.sm = '500px';
breakpoints.md = '960px';
breakpoints.lg = '1280px';
breakpoints.xl = '1920px';

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

var shadows = ['0 1px 1px 0 rgba(8, 11, 14, 0.1)', '0 3px 3px -1px rgba(8, 11, 14, 0.1)', '0 6px 6px -1px rgba(8, 11, 14, 0.1)', '0 16px 16px -1px rgba(8, 11, 14, 0.1)', '0 32px 40px -1px rgba(8, 11, 14, 0.1)'];

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
  sans: 'Robot, sans-serif',
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
  primary: "1px solid " + colors.primary500,
  success: "1px solid " + colors.success500,
  danger: "1px solid " + colors.danger500,
  info: "1px solid " + colors.info500,
  warning: "1px solid " + colors.warning500,
  black: "1px solid " + colors.black500,
  gray: "1px solid " + colors.gray500
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
  variants: {
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
  sizes: {
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
    default: {
      color: 'black800',
      borderColor: 'gray500',
      borderWidth: '1px',
      borderRadius: 'small',
      ':hover,:active': {
        boxShadow: 'none'
      },
      ':focus': {
        borderColor: 'primary600',
        boxShadow: "0 0 0 2px " + colors.primary600
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
        boxShadow: "0 0 0 3px " + colors.primary200
      },
      ':focus': {
        borderColor: 'primary600',
        boxShadow: "0 0 0 3px " + colors.primary200
      }
    },
    danger: {
      borderColor: 'danger500',
      ':hover,:active': {
        boxShadow: "0 0 0 3px " + colors.danger200
      },
      ':focus': {
        borderColor: 'danger600',
        boxShadow: "0 0 0 3px " + colors.danger200
      }
    },
    success: {
      borderColor: 'success500',
      ':hover,:active': {
        boxShadow: "0 0 0 3px " + colors.success200
      },
      ':focus': {
        borderColor: 'success600',
        boxShadow: "0 0 0 3px " + colors.success200
      }
    },
    info: {
      borderColor: 'info500',
      ':hover,:active': {
        boxShadow: "0 0 0 3px " + colors.info200
      },
      ':focus': {
        borderColor: 'info600',
        boxShadow: "0 0 0 3px " + colors.info200
      }
    },
    warning: {
      borderColor: 'warning500',
      ':hover,:active': {
        boxShadow: "0 0 0 3px " + colors.warning200
      },
      ':focus': {
        borderColor: 'warning600',
        boxShadow: "0 0 0 3px " + colors.warning200
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
    default: {
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
  default: {}
};

var _tab;

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
    tab: (_tab = {
      border: '1px solid',
      borderColor: 'gray400',
      mx: '-1px',
      borderRadius: "4px",
      borderBottomLeftRadius: "0px",
      borderBottomRightRadius: "0px",
      marginBottom: '-1px'
    }, _tab["mx"] = '3px', _tab['&:not(first-of-type)'] = {
      marginLeft: '0'
    }, _tab),
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
  item: {},
  activeItem: {},
  capitalazur: {
    backgroundColor: 'transparent',
    padding: 'small',
    fontFamily: 'montserrat',
    fontSize: '16px',
    item: {},
    activeItem: {
      color: 'primary900',
      ':hover': {
        color: 'primary500'
      }
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
      color: '#017CFE',
      fontWeight: 600,
      ':hover': {
        color: '#017CFE'
      }
    }
  }
};

var baseTheme = {
  colors: colors,
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
  borderStyles: borderStyles
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
  navs: navs
};
var theme = _extends(_extends({}, baseTheme), componentsTheme);

var VactoryThemeContext = React.createContext({
  theme: null
});
var useVactoryTheme = function useVactoryTheme() {
  return React.useContext(VactoryThemeContext);
};

export { Box, Flex, VactoryThemeContext, theme, useVactoryTheme };
//# sourceMappingURL=index.modern.js.map
