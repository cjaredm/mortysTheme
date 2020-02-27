(this["webpackJsonpreact-wptheme"] = this["webpackJsonpreact-wptheme"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _pages_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Page */ "./src/pages/Page.js");
/* harmony import */ var _components_StyleGuide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/StyleGuide */ "./src/components/StyleGuide.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/cjm/Code/react_wptheme/wp-content/themes/reacttheme/react-src/src/App.js";










function buildRoutes(pages = []) {
  return pages.map(page => {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
      key: page.id,
      component: _pages_Page__WEBPACK_IMPORTED_MODULE_6__["default"],
      path: page.uri,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (() => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
  client: client,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  id: "App",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
  query: META_QUERY,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, ({
  data
}) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Content, Object.assign({}, data, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}))))));

function Content({
  pages,
  ...props
}) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    component: _components_StyleGuide__WEBPACK_IMPORTED_MODULE_7__["default"],
    path: "/style-guide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), buildRoutes((pages === null || pages === void 0 ? void 0 : pages.nodes) || []))));
}

const client = new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["default"]({
  uri: `/graphql`
}); // https://docs.wpgraphql.com/getting-started/

const META_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  query META_QUERY {
    pages {
      nodes {
        id
        isFrontPage
        uri
      }
    }
    menus(where: {slug: "header"}) {
      nodes {
        id
        menuId
        name
        menuItems {
          nodes {
            id
            menuItemId
            title
            url
            description
            label
            target
          }
        }
      }
    }
    generalSettings {
      url
      description
      title
    }
  }
`;

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/cjm/Code/react_wptheme/wp-content/themes/reacttheme/react-src/src/components/Header.js";



/* harmony default export */ __webpack_exports__["default"] = (function ({
  menus,
  generalSettings
}) {
  var _menus$nodes$, _menus$nodes$$menuIte;

  const menuItems = (menus === null || menus === void 0 ? void 0 : (_menus$nodes$ = menus.nodes[0]) === null || _menus$nodes$ === void 0 ? void 0 : (_menus$nodes$$menuIte = _menus$nodes$.menuItems) === null || _menus$nodes$$menuIte === void 0 ? void 0 : _menus$nodes$$menuIte.nodes) || [];

  const getSlug = link => link.replace(generalSettings.url, '');

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TitleWrapper, {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, generalSettings === null || generalSettings === void 0 ? void 0 : generalSettings.title), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, generalSettings === null || generalSettings === void 0 ? void 0 : generalSettings.description)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Nav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, menuItems.map(item => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NavItem, {
    key: item.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: getSlug(item.url),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, item.label))))));
});
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header.attrs({
  className: 'has-secondary-background-color'
})`
  display: flex;
  padding: 0 25px;
  min-height: 50px;

  a {
    text-decoration: none;
  }
`;
const TitleWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"])`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  padding: 15px 0;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1`
  margin: 0;
  padding: 0;
`;
const Description = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
  margin: 0;
  padding: 0;
`;
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav``;
const List = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const NavItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li`
  height: 100%;
  padding: 30px;
  a {
    color: white;
    font-weight: bold;
  }
`;

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/Header.js");
var _jsxFileName = "/Users/cjm/Code/react_wptheme/wp-content/themes/reacttheme/react-src/src/components/Layout.js";



/* harmony default export */ __webpack_exports__["default"] = (function ({
  children,
  ...props
}) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Header__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, children));
});
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  max-width: 1110px;
  margin: 0 auto;
  padding: 0 40px;
`;

/***/ }),

/***/ "./src/components/StyleGuide.js":
/*!**************************************!*\
  !*** ./src/components/StyleGuide.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/cjm/Code/react_wptheme/wp-content/themes/reacttheme/react-src/src/components/StyleGuide.js";

/* harmony default export */ __webpack_exports__["default"] = (() => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "g-row style-guide h-global-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "wysiwyg-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
  className: "style-guide__heading",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "Colors"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "style-guide__colors-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "style-guide__colors-group",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Primary"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
  className: "style-guide__colors",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
  className: "style-guide__color has-primary-color",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Primary"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
  className: "style-guide__color has-secondary-color",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Secondary"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
  className: "style-guide__color has-tertiary-color",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "Tertiary")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
  className: "style-guide__heading",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "Headings"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, "Heading - h1"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, "Heading - h2"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, "Heading - h3"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, "Heading - h4"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, "Heading - h5"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, "Heading - h6")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
  className: "style-guide__heading",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, "Buttons"), ['fill', 'outline', 'text'].map(variant => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  key: variant,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, ['primary', 'secondary', 'tertiary', 'disabled'].map(color => color === 'disabled' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
  key: color,
  className: `button button-${variant}-primary`,
  disabled: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, "Button-", variant, "-", color) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
  style: {
    marginRight: 10
  },
  key: color,
  className: `button button-${variant}-${color}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, "Button-", variant, "-", color)))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, "Anchor Buttons"), ['fill', 'outline', 'text'].map(variant => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  key: variant,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}, ['primary', 'secondary', 'tertiary', 'disabled'].map(color => color === 'disabled' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
  href: "#",
  onClick: e => e.preventDefault(),
  key: color,
  className: `button button-${variant}-primary`,
  disabled: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, "Button-", variant, "-", color) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
  href: "#",
  onClick: e => e.preventDefault(),
  style: {
    marginRight: 10
  },
  key: color,
  className: `button button-${variant}-${color}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}, "Button-", variant, "-", color))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
  className: "style-guide__heading",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
}, "Text"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99
  },
  __self: undefined
}, "Heading - h1"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}, "He is here... Obi-Wan Kenobi! What makes you think so? A tremor in the Force. The last time I felt it was in the presence of my old master. Surely he must be dead by now. Don't underestimate the power of the Force. The Jedi are extinct, their fire has gone out of the universe. You, my friend, are all that's left of their religion. Yes. Governor Tarkin, we have an emergency alert in detention block A A-twenty-three. The princess! Put all sections on alert!"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108
  },
  __self: undefined
}, "Heading - h2"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109
  },
  __self: undefined
}, "Where could they be? Close the blast doors! Open the blast doors! Open the blast doors! I've been waiting for you, Obi-Wan. We meet again, at last. The circle is now complete. When I left you, I was but the learner, now I am the master. Only a master of evil, Darth. Your powers are weak, old man. You can't win, Darth. If you strike me down, I shall become more powerful than you can possibly imagine."), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116
  },
  __self: undefined
}, "Heading - h3"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117
  },
  __self: undefined
}, "Did you find any droids? No, sir. If there were any on board, they must also have jettisoned. Send a scanning crew on board. I want every part of this ship checked. Yes, sir. I sense something...a presence I haven't felt since... Get me a scanning crew in here on the double."), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 123
  },
  __self: undefined
}, "Heading - h4"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124
  },
  __self: undefined
}, "The ship's all yours. If the scanners pick up anything, report it immediately. All right, let's go. Hey down there, could you give us a hand with this? TX-four-one-two. Why aren't you at your post? TX-four-one-two, do you copy?"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 130
  },
  __self: undefined
}, "Heading - h5"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 131
  },
  __self: undefined
}, "Take over. We've got a bad transmitter. I'll see what I can do. You know, between his howling and your blasting everything in sight, it's a wonder the whole station doesn't know we're here. Bring them on!"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136
  },
  __self: undefined
}, "Heading - h6"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137
  },
  __self: undefined
}, "I prefer a straight fight to all this sneaking around. We found the computer outlet, sir. Plug in. He should be able to interpret the entire Imperial computer network."), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 142
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143
  },
  __self: undefined
}, "Text - Bold - <b>")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 145
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146
  },
  __self: undefined
}, "Text - Bold - <strong>"), " - SEO"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 148
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("em", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 149
  },
  __self: undefined
}, "Text - Italicized - <em>"), " - SEO"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 151
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("s", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 152
  },
  __self: undefined
}, "Text - Strike - <s>")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 154
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
  style: {
    textDecoration: 'underline'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 155
  },
  __self: undefined
}, "Text - Underlined")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 157
  },
  __self: undefined
}, "Text -", ' ', react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
  href: "#",
  target: "_blank",
  rel: "noopener noreferrer",
  title: "Example",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 159
  },
  __self: undefined
}, "Hyperlink")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("blockquote", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 163
  },
  __self: undefined
}, "\"Text - Blockquote\" - Author", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("cite", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 165
  },
  __self: undefined
}, "Cite"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 168
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
  className: "style-guide__heading",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 169
  },
  __self: undefined
}, "Lists"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 170
  },
  __self: undefined
}, "Un-ordered List"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 171
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 172
  },
  __self: undefined
}, "List item 1"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 173
  },
  __self: undefined
}, "List item 2"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 174
  },
  __self: undefined
}, "List item 3")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 177
  },
  __self: undefined
}, "Ordered List"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ol", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 178
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 179
  },
  __self: undefined
}, "List item 1"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 180
  },
  __self: undefined
}, "List item 2"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 181
  },
  __self: undefined
}, "List item 3"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 184
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
  className: "style-guide__heading",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 185
  },
  __self: undefined
}, "Table"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 186
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("caption", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 187
  },
  __self: undefined
}, "Star Wars Table Caption"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 188
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 189
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 190
  },
  __self: undefined
}, "Name"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 191
  },
  __self: undefined
}, "Side"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 192
  },
  __self: undefined
}, "Role"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 196
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 197
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 198
  },
  __self: undefined
}, "Darth Vader"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 199
  },
  __self: undefined
}, "Dark"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 200
  },
  __self: undefined
}, "Sith")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 203
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 204
  },
  __self: undefined
}, "Obi Wan Kenobi"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 205
  },
  __self: undefined
}, "Light"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 206
  },
  __self: undefined
}, "Jedi")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 209
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 210
  },
  __self: undefined
}, "Greedo"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 211
  },
  __self: undefined
}, "South"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 212
  },
  __self: undefined
}, "Scumbag"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tfoot", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 216
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 217
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 218
  },
  __self: undefined
}, "Name"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 219
  },
  __self: undefined
}, "Side"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 220
  },
  __self: undefined
}, "Role"))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 226
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
  className: "style-guide__heading",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 227
  },
  __self: undefined
}, "Form"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
  action: "#",
  method: "post",
  className: "form",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 228
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "form__section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 229
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
  htmlFor: "label-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 230
  },
  __self: undefined
}, "Label - Text"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
  type: "text",
  name: "label-text",
  id: "label-text",
  placeholder: "Placeholder",
  value: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 231
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "form__section form__radio",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 234
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "form__group",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 235
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
  type: "radio",
  name: "label-radio",
  id: "label-radio",
  value: "label-radio",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 236
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
  htmlFor: "label-radio",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 237
  },
  __self: undefined
}, "Label - Radio Checked")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "form__group",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 240
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
  type: "radio",
  name: "label-radio",
  id: "label-radio-1",
  value: "label-radio-1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 241
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
  htmlFor: "label-radio-1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 242
  },
  __self: undefined
}, "Label - Radio 1"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "form__section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 246
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "form__group",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 247
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
  type: "radio",
  name: "custom-radio",
  id: "custom-radio",
  className: "h-visual-hide input-custom-radio",
  value: "custom-radio",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 248
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
  htmlFor: "custom-radio",
  className: "label-custom-radio",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 255
  },
  __self: undefined
}, "Label - Custom Radio Checked")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "form__group",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 260
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
  type: "radio",
  name: "custom-radio",
  id: "custom-radio-1",
  className: "h-visual-hide input-custom-radio",
  value: "custom-radio-1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 261
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
  htmlFor: "custom-radio-1",
  className: "label-custom-radio",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 268
  },
  __self: undefined
}, "Label - Custom Radio 1"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("fieldset", {
  className: "form__section form__checkbox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 274
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("legend", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 275
  },
  __self: undefined
}, "Legend - Description of Checkbox Options"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "form__group",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 276
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
  type: "checkbox",
  name: "label-checkbox",
  id: "label-checkbox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 277
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
  htmlFor: "label-checkbox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 278
  },
  __self: undefined
}, "Label - Checkbox Checked")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "form__group",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 281
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
  type: "checkbox",
  name: "label-checkbox",
  id: "label-checkbox-1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 282
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
  htmlFor: "label-checkbox-1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 283
  },
  __self: undefined
}, "Label - Checkbox 1"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("fieldset", {
  className: "form__section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 287
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("legend", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 288
  },
  __self: undefined
}, "Custom Checkbox"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "form__group",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 289
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
  type: "checkbox",
  name: "custom-checkbox",
  id: "custom-checkbox",
  className: "h-visual-hide input-custom-checkbox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 290
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
  htmlFor: "custom-checkbox",
  className: "label-custom-checkbox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 296
  },
  __self: undefined
}, "Custom Checkbox Checked")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "form__group",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 301
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
  type: "checkbox",
  name: "custom-checkbox",
  id: "custom-checkbox-1",
  className: "h-visual-hide input-custom-checkbox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 302
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
  htmlFor: "custom-checkbox-1",
  className: "label-custom-checkbox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 308
  },
  __self: undefined
}, "Custom Checkbox 1"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "form__section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 314
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
  htmlFor: "label-select",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 315
  },
  __self: undefined
}, "Label - Select"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", {
  name: "label-select",
  id: "label-select",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 316
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
  value: "Select 1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 317
  },
  __self: undefined
}, "Select 1"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
  value: "Select 2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 318
  },
  __self: undefined
}, "Select 2"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
  value: "Select 3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 319
  },
  __self: undefined
}, "Select 3"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "form__section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 323
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
  htmlFor: "label-textarea",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 324
  },
  __self: undefined
}, "Label - Textarea"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("textarea", {
  name: "label-textarea",
  id: "label-textarea",
  placeholder: "Textarea",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 325
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
  type: "submit",
  className: "button",
  value: "Submit",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 328
  },
  __self: undefined
}))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 332
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
  className: "style-guide__heading",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 333
  },
  __self: undefined
}, "Accordion"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "faqs",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 334
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("details", {
  className: "faqs__question",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 335
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("summary", {
  className: "faqs__title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 336
  },
  __self: undefined
}, "Question Title 1"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "faqs__content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 337
  },
  __self: undefined
}, "Are they away? They have just made the jump into hyperspace. You're sure the homing beacon is secure aboard their ship? I'm taking an awful risk, Vader. This had better work.")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("details", {
  className: "faqs__question",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 343
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("summary", {
  className: "faqs__title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 344
  },
  __self: undefined
}, "Question Title 2"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "faqs__content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 345
  },
  __self: undefined
}, "Are they away? They have just made the jump into hyperspace. You're sure the homing beacon is secure aboard their ship? I'm taking an awful risk, Vader. This had better work.")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 353
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
  className: "style-guide__heading",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 354
  },
  __self: undefined
}, "Images"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 355
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 356
  },
  __self: undefined
}, "Thumbnail (150x150)")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 358
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
  src: "https://unsplash.it/150/150/?random",
  alt: "",
  width: "150",
  height: "150",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 359
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 362
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 363
  },
  __self: undefined
}, "Mobile (425x425)")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 365
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
  src: "https://unsplash.it/425/425/?random",
  alt: "",
  width: "425",
  height: "425",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 366
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 369
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 370
  },
  __self: undefined
}, "Tablet (768x425)")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 372
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
  src: "https://unsplash.it/768/425/?random",
  alt: "",
  width: "768",
  height: "425",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 373
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 376
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 377
  },
  __self: undefined
}, "Laptop (1024x768)")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 379
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
  src: "https://unsplash.it/1024/768/?random",
  alt: "",
  width: "1024",
  height: "768",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 380
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 383
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 384
  },
  __self: undefined
}, "Desktop (1920x1080)")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 386
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
  src: "https://unsplash.it/1920/1080/?random",
  alt: "",
  width: "1920",
  height: "1080",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 387
  },
  __self: undefined
}))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 391
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
  className: "style-guide__heading",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 392
  },
  __self: undefined
}, "Video"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("iframe", {
  width: "100%",
  height: "500",
  src: "https://www.youtube.com/embed/0evjtlI5QDY",
  frameBorder: "0",
  allow: "autoplay; encrypted-media",
  allowFullScreen: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 393
  },
  __self: undefined
})))));

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Users/cjm/Code/react_wptheme/wp-content/themes/reacttheme/react-src/src/index.js";



 // import * as serviceWorker from './serviceWorker';

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

/***/ }),

/***/ "./src/pages/Page.js":
/*!***************************!*\
  !*** ./src/pages/Page.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/cjm/Code/react_wptheme/wp-content/themes/reacttheme/react-src/src/pages/Page.js";



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: PAGE_QUERY,
    variables: {
      path: props.location.pathname === '/' ? '/home' : props.location.pathname
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, ({
    data
  }) => {
    var _data$page;

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      dangerouslySetInnerHTML: {
        __html: data === null || data === void 0 ? void 0 : (_data$page = data.page) === null || _data$page === void 0 ? void 0 : _data$page.content
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  });
});
const PAGE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  query PAGE_QUERY($path: String!) {
    page: pageBy(uri: $path) {
      id
      uri
      title(format: RAW)
      slug
      content(format: RENDERED)
    }
  }
`;

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cjm/Code/react_wptheme/wp-content/themes/reacttheme/react-src/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map