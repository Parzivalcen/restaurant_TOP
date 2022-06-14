"use strict";
(self["webpackChunkrestaurant_top"] = self["webpackChunkrestaurant_top"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bg_mobile.jpg */ "./src/images/bg_mobile.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bg_pizzeria.jpg */ "./src/images/bg_pizzeria.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Oregano:ital@1&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* FONT FAMILY */\n/*\n=============== \nGlobal Styles/ Reset\n===============\n*/\n:root {\n  --window-height-large: calc(100vh - 14vh); \n  --window-height-small: calc(100vh - 16vh - 5vh); \n}\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4 p,\nfigure,\npicture {\n  margin: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  text-transform: capitalize;\n  font-weight: 400;\n}\n\na,\nli {\n  text-decoration: none;\n  list-style: none;\n}\n\nbody {\n  line-height: 1.5;\n  min-height: 100vh;\n  font-family: \"Roboto\", sans-serif;\n\n  grid-template-rows: -webkit-min-content 1fr;\n  grid-template-rows: min-content 1fr;\n  overflow-x: hidden;\n}\n\n/* imgs easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* form elements easier to work with */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* remove animation for people who turned them off */\n@media (prefers-reduced-motion: reduce) {\n\n  *,\n  *::before,\n  *::after {\n    -webkit-animation-duration: 0.01ms !important;\n    animation-duration: 0.01ms !important;\n    -webkit-animation-iteration-count: 1 !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01sms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n/* =========\nutility clases \n=========== */\n.hidden {\n  display: none;\n}\n\n.inline {\n  display: inline-block;\n}\n\n.flex {\n  display: flex;\n  gap: var(--gap, 1rem);\n}\n\n.grid {\n  display: grid;\n  gap: var(--gap, 1rem);\n}\n\n.d-block {\n  display: block;\n}\n\n/* header */\n.logo {\n  margin: clamp(1.5rem, 5vw, 2rem);\n}\n\n.primary-header {\n  align-items: center;\n  justify-content: space-between;\n}\n\n@media screen and (max-width: 768px) {\n  .flex {\n    flex-wrap: wrap;\n  }\n}\n\n/* SPACING .flow */\n/* Seclect all the elements of a divider except the first Child */\n/* It is use to make the top and botton line heights and borders the same */\n/* Where is a way to group things, is lower on specificy so we dont overwrite things*/\n.flow>*:where(:not(:first-child)) {\n  margin-top: var(--flow-space, 1rem);\n  /* outline: 1px solid red; */\n}\n\n.container {\n  padding-inline: 0rem;\n  margin-inline: auto;\n  max-width: 1200px;\n}\n.btn{\n  background: transparent;\n  border-radius: 5px;\n  padding-block: .2rem;\n  width: 8rem;\n}\n.btn:hover{\n  cursor: pointer;\n}\n.bg-black{\n  background-color: #000000;\n}\n/* -----------------\nRESTAURANT STYLES\n---------------------*/\n@media screen and (min-width: 0px) {\n  .bg-home{\n    height: var(--window-height-small);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n  /*----------\n    NAVBAR\n   ------------ */\n  .nav{\n  background-color: black;\n  }\n  .container--nav{\n    \n    color: white;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: .5rem;\n    height: 5vh;\n  }\n  /* change svg color */\n  .homeIcon,.maps-icon,.ig-icon{\n    filter:invert(99%) sepia(99%) saturate(0%) hue-rotate(325deg) brightness(111%) contrast(100%);\n  }\n  .homeIcon:hover{\n    cursor: pointer;\n  }\n  .tabs{\n    display: flex;\n    gap: 2rem;\n  }\n  .tabs *{\n    cursor: pointer;\n  }\n  /* ----------\n  HERO\n  ------------- */\n  .hero{\n    display: grid;\n    gap: 2rem;\n    place-content: center;\n    height: calc(100vh - 5vh);\n  }\n  .title{\n    font-family: 'Oregano', cursive;\n    color: #ffcba2;\n    font-size: 3rem;\n    text-shadow: 3px 2px black;\n  }\n  .btn--order{\n    place-self: center;\n    color: #ff9849;\n    border: 2px solid #000000;\n    text-shadow: 2px 1px black;\n    transition: 0.25s;\n  }\n  .btn--order:hover{\n    background-color: #ffcaa252;\n   \n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .bg-home{\n    height: var(--window-height-large);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  }\n}\n/*----------\n   MENU\n  ------------ */\n  @media screen and (min-width:0px) {\n    \n  .bg-menu{\n    min-height: var(--window-height-small);\n    background-color: #1b1b1b;\n  }\n  .container--menu{\n    text-align: center;\n    \n  }\n  .title--menu{\n    color: #ff9849;\n  }\n  .menu-grid{\n    display: grid;\n    width: 100%;\n    margin-inline: auto;\n    justify-content: center;\n    gap: 2rem;\n    grid-template-columns: repeat(auto-fill, 20rem);\n  }\n  .card-img{\n    min-height: 25vh;\n    min-width: 24vh;\n  }\n  .menu-card{\n    min-height: 40vh;\n    max-width: 28vh;\n    padding: 0.5rem;\n    background-color: #000000;\n    border-radius: 5px;\n    justify-self: center;\n    display: grid;\n    align-content: space-between;\n  }\n  .menu-card:last-child{\n    margin-bottom: 1vh;\n  }\n  .btn--menu{\n    color: #ff9849;\n    border: 2px solid #ff9849;\n    justify-self: center;\n    \n  }\n  .menu-card > h3{\n    font-family: 'Oregano', cursive;\n    color: #ff9849; \n    font-size: 3vh;\n  }\n  .menu-card > p{\n    color:#ffff;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .bg-menu{\n    height: var(--window-height-large);\n  }\n}\n/*----------\n  ABOUT US\n  ------------ */\n  @media screen and (min-width: 0px) {\n    .bg-about{\n      min-height: var(--window-height-small);\n      background-color: #1b1b1b;\n      display: grid;\n      place-content: center;\n    }\n    .container--about{\n      display: grid;\n      place-content: center;\n    }\n    .about-text  {\n      color: white;\n      text-align: center;\n      padding: .5rem;\n      \n    }\n    .about-text > h1 {\n      color: #ff9849;\n      font-family: 'Oregano', cursive;\n    }\n    \n  }\n  @media screen and (min-width: 800px) {\n    .container--about{\n      grid-template-columns: 1fr 1fr;\n      place-content: center;\n    }\n    .about-text{\n      display: grid;\n      place-content: center;\n    }    \n    .about-text p{\n      text-align: left;\n    }\n    \n    .about-img {\n      padding: .4rem;\n    }\n  }\n  @media screen and (min-width: 1200px) {\n    .bg-about{\n      height: var(--window-height-large);\n    }\n  }\n\n  /*----------\n    FOOTER\n    ------------ */\n    @media screen and (min-width: 0px) {\n      .footer{\n        padding: 1vh;\n        height: 15vh;\n        color: white;\n      }\n      .container--footer{\n        display: grid;\n        grid-template-columns: repeat(auto-fill, 20rem);\n        place-items: center;\n        place-content: center;\n      }\n      .made{\n        margin-top: .4rem;\n        font-size: .7rem;\n      }\n      .location, .socials{\n        display: grid;\n        place-items: center;\n      }\n      .maps-icon:hover,.ig-icon:hover{\n        filter: invert(66%) sepia(8%) saturate(4173%) hue-rotate(333deg) brightness(107%) contrast(101%);\n        cursor: pointer;\n      }    \n    }\n    @media screen and (min-width: 1200px) {\n      .footer{\n        height: 9vh;\n      }\n      \n    }\n  ", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,gBAAgB;AAGhB;;;;CAIC;AACD;EACE,yCAAyC;EACzC,+CAA+C;AACjD;;AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;;;;;;EAOE,SAAS;AACX;;AAEA;;;;;EAKE,0BAA0B;EAC1B,gBAAgB;AAClB;;AAEA;;EAEE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,iCAAiC;;EAEjC,2CAA2C;EAC3C,mCAAmC;EACnC,kBAAkB;AACpB;;AAEA,6BAA6B;AAC7B;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA,sCAAsC;AACtC;;;;EAIE,aAAa;AACf;;AAEA,oDAAoD;AACpD;;EAEE;;;IAGE,6CAA6C;IAC7C,qCAAqC;IACrC,+CAA+C;IAC/C,uCAAuC;IACvC,uCAAuC;IACvC,gCAAgC;EAClC;AACF;;AAEA;;aAEa;AACb;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,cAAc;AAChB;;AAEA,WAAW;AACX;EACE,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA,kBAAkB;AAClB,iEAAiE;AACjE,2EAA2E;AAC3E,qFAAqF;AACrF;EACE,mCAAmC;EACnC,4BAA4B;AAC9B;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,oBAAoB;EACpB,WAAW;AACb;AACA;EACE,eAAe;AACjB;AACA;EACE,yBAAyB;AAC3B;AACA;;sBAEsB;AACtB;EACE;IACE,kCAAkC;IAClC,yDAA+C;IAC/C,4BAA4B;IAC5B,sBAAsB;EACxB;EACA;;iBAEe;EACf;EACA,uBAAuB;EACvB;EACA;;IAEE,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,cAAc;IACd,WAAW;EACb;EACA,qBAAqB;EACrB;IACE,6FAA6F;EAC/F;EACA;IACE,eAAe;EACjB;EACA;IACE,aAAa;IACb,SAAS;EACX;EACA;IACE,eAAe;EACjB;EACA;;iBAEe;EACf;IACE,aAAa;IACb,SAAS;IACT,qBAAqB;IACrB,yBAAyB;EAC3B;EACA;IACE,+BAA+B;IAC/B,cAAc;IACd,eAAe;IACf,0BAA0B;EAC5B;EACA;IACE,kBAAkB;IAClB,cAAc;IACd,yBAAyB;IACzB,0BAA0B;IAC1B,iBAAiB;EACnB;EACA;IACE,2BAA2B;;EAE7B;AACF;;AAEA;EACE;IACE,kCAAkC;IAClC,yDAAiD;EACnD;AACF;AACA;;gBAEgB;EACd;;EAEA;IACE,sCAAsC;IACtC,yBAAyB;EAC3B;EACA;IACE,kBAAkB;;EAEpB;EACA;IACE,cAAc;EAChB;EACA;IACE,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,+CAA+C;EACjD;EACA;IACE,gBAAgB;IAChB,eAAe;EACjB;EACA;IACE,gBAAgB;IAChB,eAAe;IACf,eAAe;IACf,yBAAyB;IACzB,kBAAkB;IAClB,oBAAoB;IACpB,aAAa;IACb,4BAA4B;EAC9B;EACA;IACE,kBAAkB;EACpB;EACA;IACE,cAAc;IACd,yBAAyB;IACzB,oBAAoB;;EAEtB;EACA;IACE,+BAA+B;IAC/B,cAAc;IACd,cAAc;EAChB;EACA;IACE,WAAW;EACb;AACF;AACA;EACE;IACE,kCAAkC;EACpC;AACF;AACA;;gBAEgB;EACd;IACE;MACE,sCAAsC;MACtC,yBAAyB;MACzB,aAAa;MACb,qBAAqB;IACvB;IACA;MACE,aAAa;MACb,qBAAqB;IACvB;IACA;MACE,YAAY;MACZ,kBAAkB;MAClB,cAAc;;IAEhB;IACA;MACE,cAAc;MACd,+BAA+B;IACjC;;EAEF;EACA;IACE;MACE,8BAA8B;MAC9B,qBAAqB;IACvB;IACA;MACE,aAAa;MACb,qBAAqB;IACvB;IACA;MACE,gBAAgB;IAClB;;IAEA;MACE,cAAc;IAChB;EACF;EACA;IACE;MACE,kCAAkC;IACpC;EACF;;EAEA;;kBAEgB;IACd;MACE;QACE,YAAY;QACZ,YAAY;QACZ,YAAY;MACd;MACA;QACE,aAAa;QACb,+CAA+C;QAC/C,mBAAmB;QACnB,qBAAqB;MACvB;MACA;QACE,iBAAiB;QACjB,gBAAgB;MAClB;MACA;QACE,aAAa;QACb,mBAAmB;MACrB;MACA;QACE,gGAAgG;QAChG,eAAe;MACjB;IACF;IACA;MACE;QACE,WAAW;MACb;;IAEF","sourcesContent":["/* FONT FAMILY */\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;900&display=swap\");\n@import url('https://fonts.googleapis.com/css2?family=Oregano:ital@1&display=swap');\n/*\n=============== \nGlobal Styles/ Reset\n===============\n*/\n:root {\n  --window-height-large: calc(100vh - 14vh); \n  --window-height-small: calc(100vh - 16vh - 5vh); \n}\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4 p,\nfigure,\npicture {\n  margin: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  text-transform: capitalize;\n  font-weight: 400;\n}\n\na,\nli {\n  text-decoration: none;\n  list-style: none;\n}\n\nbody {\n  line-height: 1.5;\n  min-height: 100vh;\n  font-family: \"Roboto\", sans-serif;\n\n  grid-template-rows: -webkit-min-content 1fr;\n  grid-template-rows: min-content 1fr;\n  overflow-x: hidden;\n}\n\n/* imgs easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* form elements easier to work with */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* remove animation for people who turned them off */\n@media (prefers-reduced-motion: reduce) {\n\n  *,\n  *::before,\n  *::after {\n    -webkit-animation-duration: 0.01ms !important;\n    animation-duration: 0.01ms !important;\n    -webkit-animation-iteration-count: 1 !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01sms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n/* =========\nutility clases \n=========== */\n.hidden {\n  display: none;\n}\n\n.inline {\n  display: inline-block;\n}\n\n.flex {\n  display: flex;\n  gap: var(--gap, 1rem);\n}\n\n.grid {\n  display: grid;\n  gap: var(--gap, 1rem);\n}\n\n.d-block {\n  display: block;\n}\n\n/* header */\n.logo {\n  margin: clamp(1.5rem, 5vw, 2rem);\n}\n\n.primary-header {\n  align-items: center;\n  justify-content: space-between;\n}\n\n@media screen and (max-width: 768px) {\n  .flex {\n    flex-wrap: wrap;\n  }\n}\n\n/* SPACING .flow */\n/* Seclect all the elements of a divider except the first Child */\n/* It is use to make the top and botton line heights and borders the same */\n/* Where is a way to group things, is lower on specificy so we dont overwrite things*/\n.flow>*:where(:not(:first-child)) {\n  margin-top: var(--flow-space, 1rem);\n  /* outline: 1px solid red; */\n}\n\n.container {\n  padding-inline: 0rem;\n  margin-inline: auto;\n  max-width: 1200px;\n}\n.btn{\n  background: transparent;\n  border-radius: 5px;\n  padding-block: .2rem;\n  width: 8rem;\n}\n.btn:hover{\n  cursor: pointer;\n}\n.bg-black{\n  background-color: #000000;\n}\n/* -----------------\nRESTAURANT STYLES\n---------------------*/\n@media screen and (min-width: 0px) {\n  .bg-home{\n    height: var(--window-height-small);\n    background-image: url('./images/bg_mobile.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n  /*----------\n    NAVBAR\n   ------------ */\n  .nav{\n  background-color: black;\n  }\n  .container--nav{\n    \n    color: white;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: .5rem;\n    height: 5vh;\n  }\n  /* change svg color */\n  .homeIcon,.maps-icon,.ig-icon{\n    filter:invert(99%) sepia(99%) saturate(0%) hue-rotate(325deg) brightness(111%) contrast(100%);\n  }\n  .homeIcon:hover{\n    cursor: pointer;\n  }\n  .tabs{\n    display: flex;\n    gap: 2rem;\n  }\n  .tabs *{\n    cursor: pointer;\n  }\n  /* ----------\n  HERO\n  ------------- */\n  .hero{\n    display: grid;\n    gap: 2rem;\n    place-content: center;\n    height: calc(100vh - 5vh);\n  }\n  .title{\n    font-family: 'Oregano', cursive;\n    color: #ffcba2;\n    font-size: 3rem;\n    text-shadow: 3px 2px black;\n  }\n  .btn--order{\n    place-self: center;\n    color: #ff9849;\n    border: 2px solid #000000;\n    text-shadow: 2px 1px black;\n    transition: 0.25s;\n  }\n  .btn--order:hover{\n    background-color: #ffcaa252;\n   \n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .bg-home{\n    height: var(--window-height-large);\n    background-image: url('./images/bg_pizzeria.jpg');\n  }\n}\n/*----------\n   MENU\n  ------------ */\n  @media screen and (min-width:0px) {\n    \n  .bg-menu{\n    min-height: var(--window-height-small);\n    background-color: #1b1b1b;\n  }\n  .container--menu{\n    text-align: center;\n    \n  }\n  .title--menu{\n    color: #ff9849;\n  }\n  .menu-grid{\n    display: grid;\n    width: 100%;\n    margin-inline: auto;\n    justify-content: center;\n    gap: 2rem;\n    grid-template-columns: repeat(auto-fill, 20rem);\n  }\n  .card-img{\n    min-height: 25vh;\n    min-width: 24vh;\n  }\n  .menu-card{\n    min-height: 40vh;\n    max-width: 28vh;\n    padding: 0.5rem;\n    background-color: #000000;\n    border-radius: 5px;\n    justify-self: center;\n    display: grid;\n    align-content: space-between;\n  }\n  .menu-card:last-child{\n    margin-bottom: 1vh;\n  }\n  .btn--menu{\n    color: #ff9849;\n    border: 2px solid #ff9849;\n    justify-self: center;\n    \n  }\n  .menu-card > h3{\n    font-family: 'Oregano', cursive;\n    color: #ff9849; \n    font-size: 3vh;\n  }\n  .menu-card > p{\n    color:#ffff;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .bg-menu{\n    height: var(--window-height-large);\n  }\n}\n/*----------\n  ABOUT US\n  ------------ */\n  @media screen and (min-width: 0px) {\n    .bg-about{\n      min-height: var(--window-height-small);\n      background-color: #1b1b1b;\n      display: grid;\n      place-content: center;\n    }\n    .container--about{\n      display: grid;\n      place-content: center;\n    }\n    .about-text  {\n      color: white;\n      text-align: center;\n      padding: .5rem;\n      \n    }\n    .about-text > h1 {\n      color: #ff9849;\n      font-family: 'Oregano', cursive;\n    }\n    \n  }\n  @media screen and (min-width: 800px) {\n    .container--about{\n      grid-template-columns: 1fr 1fr;\n      place-content: center;\n    }\n    .about-text{\n      display: grid;\n      place-content: center;\n    }    \n    .about-text p{\n      text-align: left;\n    }\n    \n    .about-img {\n      padding: .4rem;\n    }\n  }\n  @media screen and (min-width: 1200px) {\n    .bg-about{\n      height: var(--window-height-large);\n    }\n  }\n\n  /*----------\n    FOOTER\n    ------------ */\n    @media screen and (min-width: 0px) {\n      .footer{\n        padding: 1vh;\n        height: 15vh;\n        color: white;\n      }\n      .container--footer{\n        display: grid;\n        grid-template-columns: repeat(auto-fill, 20rem);\n        place-items: center;\n        place-content: center;\n      }\n      .made{\n        margin-top: .4rem;\n        font-size: .7rem;\n      }\n      .location, .socials{\n        display: grid;\n        place-items: center;\n      }\n      .maps-icon:hover,.ig-icon:hover{\n        filter: invert(66%) sepia(8%) saturate(4173%) hue-rotate(333deg) brightness(107%) contrast(101%);\n        cursor: pointer;\n      }    \n    }\n    @media screen and (min-width: 1200px) {\n      .footer{\n        height: 9vh;\n      }\n      \n    }\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/nav.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about */ "./src/pages/about.js");
/* harmony import */ var _pages_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/footer */ "./src/pages/footer.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
// JS Modules

// Pages



// Footer

// Assets


const body = document.body;
// Icon


// Main
const main = () => {
  const main = document.createElement('main');
  main.id = 'main'
  body.appendChild(main);
}
// const main = document.querySelector('#main');
// Navbar
body.append((0,_nav__WEBPACK_IMPORTED_MODULE_0__["default"])())
// Main
main();
const mainCont = document.querySelector('#main')
mainCont.appendChild((0,_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"])())

// menu
// if the container exist we need to remove it 
const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
  if(document.querySelector('.bg-home')){
    document.querySelector('.bg-home').remove();
  }else if (document.querySelector('.bg-about')){
    console.log('about exist')
    document.querySelector('.bg-about').remove();
  }
  // if content exist dont add it
  if(!document.querySelector('.bg-menu')){
    mainCont.appendChild((0,_pages_menu__WEBPACK_IMPORTED_MODULE_2__["default"])())
  }
});

// about
const about = document.querySelector('.about');
about.addEventListener('click', () => {
  // remove menu if exist
  if(document.querySelector('.bg-menu')){
    document.querySelector('.bg-menu').remove();
    // remove home if exist
  }else if (document.querySelector('.bg-home')){
    document.querySelector('.bg-home').remove();
  }
  // if content exist dont add it
  
  if(!document.querySelector('.bg-about')){
    mainCont.appendChild((0,_pages_about__WEBPACK_IMPORTED_MODULE_3__["default"])())
  }
});
// Home elements
const home = document.querySelector('.homeIcon');
home.addEventListener('click', () => {
  // remove menu if exist
  if(document.querySelector('.bg-menu')){
    document.querySelector('.bg-menu').remove();
    // remove about if exist
  }else if (document.querySelector('.bg-about')){
    document.querySelector('.bg-about').remove();
  }
  // if content exist dont add it
  if(!document.querySelector('.bg-home')){
    mainCont.appendChild((0,_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"])())
  }
});
body.append((0,_pages_footer__WEBPACK_IMPORTED_MODULE_4__["default"])());





/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_homeIcon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/homeIcon.svg */ "./src/images/homeIcon.svg");

const homeIcon = new Image ();
homeIcon.src = _images_homeIcon_svg__WEBPACK_IMPORTED_MODULE_0__;
homeIcon.classList.add('homeIcon')
const nav = () => {
  const navbar = document.createElement('div');
  navbar.classList.add('nav');
  navbar.innerHTML = `
  <div class="container container--nav">
    ${homeIcon.outerHTML}
    <div class="tabs">
      <h2 class="menu">Menu</h2>
      <h2 class="about">About</h2>
    </div>
  </div>`;
  return navbar;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_about_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/about.jpg */ "./src/images/about.jpg");
// About img

const AboutImg = new Image();
AboutImg.src = _images_about_jpg__WEBPACK_IMPORTED_MODULE_0__;

const about = () => {
  const about = document.createElement('div');
  const bgAbout = document.createElement('div');
  bgAbout.classList.add('bg-about')
  about.classList.add('container', 'container--about');
  about.innerHTML = `
  <div class="about-text">
    <h1>About Us</h1>
    <p>We are proud to say that we make the best pizza of the region</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae molestias suscipit repellendus tempore. Ex totam mollitia nam molestiae eaque aliquid eligendi reiciendis, quasi eius.</p>
  </div>
  <div class="about-img">
    ${AboutImg.outerHTML}
    </div>
  </div>`
  bgAbout.appendChild(about);
  return bgAbout;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);

/***/ }),

/***/ "./src/pages/footer.js":
/*!*****************************!*\
  !*** ./src/pages/footer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_LOCATION_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/LOCATION.svg */ "./src/images/LOCATION.svg");
/* harmony import */ var _images_insta_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/insta.svg */ "./src/images/insta.svg");
// Social Icons

const IconMaps = new Image();
IconMaps.src = _images_LOCATION_svg__WEBPACK_IMPORTED_MODULE_0__;
IconMaps.classList.add('maps-icon')

;
const IconIg = new Image();
IconIg.src = _images_insta_svg__WEBPACK_IMPORTED_MODULE_1__;
IconIg.classList.add('ig-icon')


const footer = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer', 'bg-black');
  footer.innerHTML = `
  <div class="container container--footer">
  <div class="socials">
    <p>Follow Us</p>
    <i>${IconIg.outerHTML}</i>
  </div>
  <div class="location">
    <p>San Pedro - California</p>
    <i>${IconMaps.outerHTML}</i>
  </div>
  <div class="made">
    <p>made by <a target="_blank" href="https://github.com/Parzivalcen">DavidCentz</a></p>
  </div>
  </div>`;
  return footer;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const home = () =>{
const bgHome = document.createElement('div');
bgHome.classList.add('bg-home');
const container = document.createElement('div');
container.classList.add('container', 'container--home');
container.innerHTML = `
<div class="hero">
<h1 class="title">Tata Rendygui</h1>
<button class="btn btn--order">Order now</button>
</div>
`
bgHome.appendChild(container);
return bgHome;
  }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_margherita_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/margherita.jpg */ "./src/images/margherita.jpg");
/* harmony import */ var _images_Deavola_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/Deavola.jpg */ "./src/images/Deavola.jpg");
/* harmony import */ var _images_random_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/random.jpg */ "./src/images/random.jpg");



// margherita img
const ImgMargherita = new Image();
ImgMargherita.src = _images_margherita_jpg__WEBPACK_IMPORTED_MODULE_0__;
ImgMargherita.classList.add('card-img')

// Diavola img
const ImgDiavola = new Image();
ImgDiavola.src = _images_Deavola_jpg__WEBPACK_IMPORTED_MODULE_1__;
ImgDiavola.classList.add('card-img')

//Random img
const ImgRandom = new Image();
ImgRandom.src = _images_random_jpg__WEBPACK_IMPORTED_MODULE_2__;
ImgRandom.classList.add('card-img')
const menu = () => {
  const menu = document.createElement('div')
  const bgMenu = document.createElement('div');
  bgMenu.classList.add('bg-menu');
  menu.classList.add('container', 'container--menu');
  menu.innerHTML = `
  <h1 class="title title--menu">Our Delicious Menu</h1>
  <div class="menu-grid">
  <!-- Cards -->
  <!-- SingleCard -->
  <div class="menu-card">
    ${ImgMargherita.outerHTML}
    <h3>Margherita</h3>
    <p>Classic Italian Masterpiece. Do you need any more info than that?</p>
    <button class="btn btn--menu">order now</button>
    </div>
    
    <!-- SingleCard -->
    <div class="menu-card">
    ${ImgDiavola.outerHTML}
    <h3>Deavola</h3>
    <p>Can you stand the spice?</p>
    <p>Delicious spicy fresh chillies sauce</p>
    <button class="btn btn--menu">order now</button>
    </div>
    
    <!-- SingleCard -->
    <div class="menu-card">
    ${ImgRandom.outerHTML}
    <h3>Feeling lucky?</h3>
    <p>We will randomly pick the flavors for you</p>
    <button class="btn btn--menu">order now</button>
  </div>
  
</div>`
  bgMenu.appendChild(menu);
  return bgMenu;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/images/Deavola.jpg":
/*!********************************!*\
  !*** ./src/images/Deavola.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a49ceac959f508710b53.jpg";

/***/ }),

/***/ "./src/images/LOCATION.svg":
/*!*********************************!*\
  !*** ./src/images/LOCATION.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "419c8315b68356d88793.svg";

/***/ }),

/***/ "./src/images/about.jpg":
/*!******************************!*\
  !*** ./src/images/about.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de89c6b09961128174aa.jpg";

/***/ }),

/***/ "./src/images/bg_mobile.jpg":
/*!**********************************!*\
  !*** ./src/images/bg_mobile.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "136f39eb0d8345519a0a.jpg";

/***/ }),

/***/ "./src/images/bg_pizzeria.jpg":
/*!************************************!*\
  !*** ./src/images/bg_pizzeria.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4e7177bf2be27501506.jpg";

/***/ }),

/***/ "./src/images/homeIcon.svg":
/*!*********************************!*\
  !*** ./src/images/homeIcon.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "632bd76136152f09e92a.svg";

/***/ }),

/***/ "./src/images/insta.svg":
/*!******************************!*\
  !*** ./src/images/insta.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ed2cb5264b2240800b4.svg";

/***/ }),

/***/ "./src/images/margherita.jpg":
/*!***********************************!*\
  !*** ./src/images/margherita.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25ae3808a209ee4ff9bd.jpg";

/***/ }),

/***/ "./src/images/random.jpg":
/*!*******************************!*\
  !*** ./src/images/random.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cfdc8d25eaa5973166a9.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLE1BQU0sT0FBTyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLE1BQU0sT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxNQUFNLG1IQUFtSCxJQUFJLG9CQUFvQixzRkFBc0YsMEVB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Ozs7Ozs7Ozs7Ozs7O0FDZGtDO0FBQ047QUFDRjtBQUM3QztBQUNBO0FBQ0Esb0JBQW9CLG1EQUFhO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsZ0RBQVU7QUFDM0I7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQiwrQ0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF90b3AvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3RvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF90b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF90b3AvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnRfdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3RvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3RvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3RvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF90b3AvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF90b3AvLi9zcmMvbmF2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfdG9wLy4vc3JjL3BhZ2VzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfdG9wLy4vc3JjL3BhZ2VzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3RvcC8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfdG9wLy4vc3JjL3BhZ2VzL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2JnX21vYmlsZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9iZ19waXp6ZXJpYS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs1MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9yZWdhbm86aXRhbEAxJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogRk9OVCBGQU1JTFkgKi9cXG4vKlxcbj09PT09PT09PT09PT09PSBcXG5HbG9iYWwgU3R5bGVzLyBSZXNldFxcbj09PT09PT09PT09PT09PVxcbiovXFxuOnJvb3Qge1xcbiAgLS13aW5kb3ctaGVpZ2h0LWxhcmdlOiBjYWxjKDEwMHZoIC0gMTR2aCk7IFxcbiAgLS13aW5kb3ctaGVpZ2h0LXNtYWxsOiBjYWxjKDEwMHZoIC0gMTZ2aCAtIDV2aCk7IFxcbn1cXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCBwLFxcbmZpZ3VyZSxcXG5waWN0dXJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5hLFxcbmxpIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcblxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAtd2Via2l0LW1pbi1jb250ZW50IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4vKiBpbWdzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcsXFxucGljdHVyZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogZm9ybSBlbGVtZW50cyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKiByZW1vdmUgYW5pbWF0aW9uIGZvciBwZW9wbGUgd2hvIHR1cm5lZCB0aGVtIG9mZiAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuXFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFzbXMgIWltcG9ydGFudDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcblxcbi8qID09PT09PT09PVxcbnV0aWxpdHkgY2xhc2VzIFxcbj09PT09PT09PT09ICovXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaW5saW5lIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogdmFyKC0tZ2FwLCAxcmVtKTtcXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogdmFyKC0tZ2FwLCAxcmVtKTtcXG59XFxuXFxuLmQtYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIGhlYWRlciAqL1xcbi5sb2dvIHtcXG4gIG1hcmdpbjogY2xhbXAoMS41cmVtLCA1dncsIDJyZW0pO1xcbn1cXG5cXG4ucHJpbWFyeS1oZWFkZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5mbGV4IHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcbn1cXG5cXG4vKiBTUEFDSU5HIC5mbG93ICovXFxuLyogU2VjbGVjdCBhbGwgdGhlIGVsZW1lbnRzIG9mIGEgZGl2aWRlciBleGNlcHQgdGhlIGZpcnN0IENoaWxkICovXFxuLyogSXQgaXMgdXNlIHRvIG1ha2UgdGhlIHRvcCBhbmQgYm90dG9uIGxpbmUgaGVpZ2h0cyBhbmQgYm9yZGVycyB0aGUgc2FtZSAqL1xcbi8qIFdoZXJlIGlzIGEgd2F5IHRvIGdyb3VwIHRoaW5ncywgaXMgbG93ZXIgb24gc3BlY2lmaWN5IHNvIHdlIGRvbnQgb3ZlcndyaXRlIHRoaW5ncyovXFxuLmZsb3c+Kjp3aGVyZSg6bm90KDpmaXJzdC1jaGlsZCkpIHtcXG4gIG1hcmdpbi10b3A6IHZhcigtLWZsb3ctc3BhY2UsIDFyZW0pO1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nLWlubGluZTogMHJlbTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG59XFxuLmJ0bntcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZy1ibG9jazogLjJyZW07XFxuICB3aWR0aDogOHJlbTtcXG59XFxuLmJ0bjpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJnLWJsYWNre1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG59XFxuLyogLS0tLS0tLS0tLS0tLS0tLS1cXG5SRVNUQVVSQU5UIFNUWUxFU1xcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSB7XFxuICAuYmctaG9tZXtcXG4gICAgaGVpZ2h0OiB2YXIoLS13aW5kb3ctaGVpZ2h0LXNtYWxsKTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIH1cXG4gIC8qLS0tLS0tLS0tLVxcbiAgICBOQVZCQVJcXG4gICAtLS0tLS0tLS0tLS0gKi9cXG4gIC5uYXZ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIH1cXG4gIC5jb250YWluZXItLW5hdntcXG4gICAgXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICB9XFxuICAvKiBjaGFuZ2Ugc3ZnIGNvbG9yICovXFxuICAuaG9tZUljb24sLm1hcHMtaWNvbiwuaWctaWNvbntcXG4gICAgZmlsdGVyOmludmVydCg5OSUpIHNlcGlhKDk5JSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMzI1ZGVnKSBicmlnaHRuZXNzKDExMSUpIGNvbnRyYXN0KDEwMCUpO1xcbiAgfVxcbiAgLmhvbWVJY29uOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICAudGFic3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycmVtO1xcbiAgfVxcbiAgLnRhYnMgKntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgLyogLS0tLS0tLS0tLVxcbiAgSEVST1xcbiAgLS0tLS0tLS0tLS0tLSAqL1xcbiAgLmhlcm97XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1dmgpO1xcbiAgfVxcbiAgLnRpdGxle1xcbiAgICBmb250LWZhbWlseTogJ09yZWdhbm8nLCBjdXJzaXZlO1xcbiAgICBjb2xvcjogI2ZmY2JhMjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB0ZXh0LXNoYWRvdzogM3B4IDJweCBibGFjaztcXG4gIH1cXG4gIC5idG4tLW9yZGVye1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmY5ODQ5O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDFweCBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxuICB9XFxuICAuYnRuLS1vcmRlcjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2FhMjUyO1xcbiAgIFxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5iZy1ob21le1xcbiAgICBoZWlnaHQ6IHZhcigtLXdpbmRvdy1oZWlnaHQtbGFyZ2UpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgfVxcbn1cXG4vKi0tLS0tLS0tLS1cXG4gICBNRU5VXFxuICAtLS0tLS0tLS0tLS0gKi9cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MHB4KSB7XFxuICAgIFxcbiAgLmJnLW1lbnV7XFxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLXdpbmRvdy1oZWlnaHQtc21hbGwpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxYjFiO1xcbiAgfVxcbiAgLmNvbnRhaW5lci0tbWVudXtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG4gIH1cXG4gIC50aXRsZS0tbWVudXtcXG4gICAgY29sb3I6ICNmZjk4NDk7XFxuICB9XFxuICAubWVudS1ncmlke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAyMHJlbSk7XFxuICB9XFxuICAuY2FyZC1pbWd7XFxuICAgIG1pbi1oZWlnaHQ6IDI1dmg7XFxuICAgIG1pbi13aWR0aDogMjR2aDtcXG4gIH1cXG4gIC5tZW51LWNhcmR7XFxuICAgIG1pbi1oZWlnaHQ6IDQwdmg7XFxuICAgIG1heC13aWR0aDogMjh2aDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcbiAgLm1lbnUtY2FyZDpsYXN0LWNoaWxke1xcbiAgICBtYXJnaW4tYm90dG9tOiAxdmg7XFxuICB9XFxuICAuYnRuLS1tZW51e1xcbiAgICBjb2xvcjogI2ZmOTg0OTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmOTg0OTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIFxcbiAgfVxcbiAgLm1lbnUtY2FyZCA+IGgze1xcbiAgICBmb250LWZhbWlseTogJ09yZWdhbm8nLCBjdXJzaXZlO1xcbiAgICBjb2xvcjogI2ZmOTg0OTsgXFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbiAgfVxcbiAgLm1lbnUtY2FyZCA+IHB7XFxuICAgIGNvbG9yOiNmZmZmO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5iZy1tZW51e1xcbiAgICBoZWlnaHQ6IHZhcigtLXdpbmRvdy1oZWlnaHQtbGFyZ2UpO1xcbiAgfVxcbn1cXG4vKi0tLS0tLS0tLS1cXG4gIEFCT1VUIFVTXFxuICAtLS0tLS0tLS0tLS0gKi9cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkge1xcbiAgICAuYmctYWJvdXR7XFxuICAgICAgbWluLWhlaWdodDogdmFyKC0td2luZG93LWhlaWdodC1zbWFsbCk7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWIxYjtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyLS1hYm91dHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuYWJvdXQtdGV4dCAge1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgcGFkZGluZzogLjVyZW07XFxuICAgICAgXFxuICAgIH1cXG4gICAgLmFib3V0LXRleHQgPiBoMSB7XFxuICAgICAgY29sb3I6ICNmZjk4NDk7XFxuICAgICAgZm9udC1mYW1pbHk6ICdPcmVnYW5vJywgY3Vyc2l2ZTtcXG4gICAgfVxcbiAgICBcXG4gIH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XFxuICAgIC5jb250YWluZXItLWFib3V0e1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmFib3V0LXRleHR7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH0gICAgXFxuICAgIC5hYm91dC10ZXh0IHB7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmFib3V0LWltZyB7XFxuICAgICAgcGFkZGluZzogLjRyZW07XFxuICAgIH1cXG4gIH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgICAuYmctYWJvdXR7XFxuICAgICAgaGVpZ2h0OiB2YXIoLS13aW5kb3ctaGVpZ2h0LWxhcmdlKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLyotLS0tLS0tLS0tXFxuICAgIEZPT1RFUlxcbiAgICAtLS0tLS0tLS0tLS0gKi9cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSB7XFxuICAgICAgLmZvb3RlcntcXG4gICAgICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgICAgIGhlaWdodDogMTV2aDtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICB9XFxuICAgICAgLmNvbnRhaW5lci0tZm9vdGVye1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMjByZW0pO1xcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICB9XFxuICAgICAgLm1hZGV7XFxuICAgICAgICBtYXJnaW4tdG9wOiAuNHJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XFxuICAgICAgfVxcbiAgICAgIC5sb2NhdGlvbiwgLnNvY2lhbHN7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgICB9XFxuICAgICAgLm1hcHMtaWNvbjpob3ZlciwuaWctaWNvbjpob3ZlcntcXG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDY2JSkgc2VwaWEoOCUpIHNhdHVyYXRlKDQxNzMlKSBodWUtcm90YXRlKDMzM2RlZykgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCgxMDElKTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9ICAgIFxcbiAgICB9XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgICAgIC5mb290ZXJ7XFxuICAgICAgICBoZWlnaHQ6IDl2aDtcXG4gICAgICB9XFxuICAgICAgXFxuICAgIH1cXG4gIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQUdoQjs7OztDQUlDO0FBQ0Q7RUFDRSx5Q0FBeUM7RUFDekMsK0NBQStDO0FBQ2pEOztBQUVBOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTs7Ozs7OztFQU9FLFNBQVM7QUFDWDs7QUFFQTs7Ozs7RUFLRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlDQUFpQzs7RUFFakMsMkNBQTJDO0VBQzNDLG1DQUFtQztFQUNuQyxrQkFBa0I7QUFDcEI7O0FBRUEsNkJBQTZCO0FBQzdCOztFQUVFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBLHNDQUFzQztBQUN0Qzs7OztFQUlFLGFBQWE7QUFDZjs7QUFFQSxvREFBb0Q7QUFDcEQ7O0VBRUU7OztJQUdFLDZDQUE2QztJQUM3QyxxQ0FBcUM7SUFDckMsK0NBQStDO0lBQy9DLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsZ0NBQWdDO0VBQ2xDO0FBQ0Y7O0FBRUE7O2FBRWE7QUFDYjtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FB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O1FBQ1osWUFBWTtRQUNaLFlBQVk7TUFDZDtNQUNBO1FBQ0UsYUFBYTtRQUNiLCtDQUErQztRQUMvQyxtQkFBbUI7UUFDbkIscUJBQXFCO01BQ3ZCO01BQ0E7UUFDRSxpQkFBaUI7UUFDakIsZ0JBQWdCO01BQ2xCO01BQ0E7UUFDRSxhQUFhO1FBQ2IsbUJBQW1CO01BQ3JCO01BQ0E7UUFDRSxnR0FBZ0c7UUFDaEcsZUFBZTtNQUNqQjtJQUNGO0lBQ0E7TUFDRTtRQUNFLFdBQVc7TUFDYjs7SUFFRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBGT05UIEZBTUlMWSAqL1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs1MDA7OTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9yZWdhbm86aXRhbEAxJmRpc3BsYXk9c3dhcCcpO1xcbi8qXFxuPT09PT09PT09PT09PT09IFxcbkdsb2JhbCBTdHlsZXMvIFJlc2V0XFxuPT09PT09PT09PT09PT09XFxuKi9cXG46cm9vdCB7XFxuICAtLXdpbmRvdy1oZWlnaHQtbGFyZ2U6IGNhbGMoMTAwdmggLSAxNHZoKTsgXFxuICAtLXdpbmRvdy1oZWlnaHQtc21hbGw6IGNhbGMoMTAwdmggLSAxNnZoIC0gNXZoKTsgXFxufVxcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0IHAsXFxuZmlndXJlLFxcbnBpY3R1cmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmEsXFxubGkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IC13ZWJraXQtbWluLWNvbnRlbnQgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi8qIGltZ3MgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBmb3JtIGVsZW1lbnRzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIHJlbW92ZSBhbmltYXRpb24gZm9yIHBlb3BsZSB3aG8gdHVybmVkIHRoZW0gb2ZmICovXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG5cXG4gICosXFxuICAqOjpiZWZvcmUsXFxuICAqOjphZnRlciB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMXNtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuLyogPT09PT09PT09XFxudXRpbGl0eSBjbGFzZXMgXFxuPT09PT09PT09PT0gKi9cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pbmxpbmUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiB2YXIoLS1nYXAsIDFyZW0pO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiB2YXIoLS1nYXAsIDFyZW0pO1xcbn1cXG5cXG4uZC1ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogaGVhZGVyICovXFxuLmxvZ28ge1xcbiAgbWFyZ2luOiBjbGFtcCgxLjVyZW0sIDV2dywgMnJlbSk7XFxufVxcblxcbi5wcmltYXJ5LWhlYWRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmZsZXgge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxufVxcblxcbi8qIFNQQUNJTkcgLmZsb3cgKi9cXG4vKiBTZWNsZWN0IGFsbCB0aGUgZWxlbWVudHMgb2YgYSBkaXZpZGVyIGV4Y2VwdCB0aGUgZmlyc3QgQ2hpbGQgKi9cXG4vKiBJdCBpcyB1c2UgdG8gbWFrZSB0aGUgdG9wIGFuZCBib3R0b24gbGluZSBoZWlnaHRzIGFuZCBib3JkZXJzIHRoZSBzYW1lICovXFxuLyogV2hlcmUgaXMgYSB3YXkgdG8gZ3JvdXAgdGhpbmdzLCBpcyBsb3dlciBvbiBzcGVjaWZpY3kgc28gd2UgZG9udCBvdmVyd3JpdGUgdGhpbmdzKi9cXG4uZmxvdz4qOndoZXJlKDpub3QoOmZpcnN0LWNoaWxkKSkge1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tZmxvdy1zcGFjZSwgMXJlbSk7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgcmVkOyAqL1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBhZGRpbmctaW5saW5lOiAwcmVtO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbn1cXG4uYnRue1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nLWJsb2NrOiAuMnJlbTtcXG4gIHdpZHRoOiA4cmVtO1xcbn1cXG4uYnRuOmhvdmVye1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYmctYmxhY2t7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLVxcblJFU1RBVVJBTlQgU1RZTEVTXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIHtcXG4gIC5iZy1ob21le1xcbiAgICBoZWlnaHQ6IHZhcigtLXdpbmRvdy1oZWlnaHQtc21hbGwpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2JnX21vYmlsZS5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIH1cXG4gIC8qLS0tLS0tLS0tLVxcbiAgICBOQVZCQVJcXG4gICAtLS0tLS0tLS0tLS0gKi9cXG4gIC5uYXZ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIH1cXG4gIC5jb250YWluZXItLW5hdntcXG4gICAgXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICB9XFxuICAvKiBjaGFuZ2Ugc3ZnIGNvbG9yICovXFxuICAuaG9tZUljb24sLm1hcHMtaWNvbiwuaWctaWNvbntcXG4gICAgZmlsdGVyOmludmVydCg5OSUpIHNlcGlhKDk5JSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMzI1ZGVnKSBicmlnaHRuZXNzKDExMSUpIGNvbnRyYXN0KDEwMCUpO1xcbiAgfVxcbiAgLmhvbWVJY29uOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICAudGFic3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycmVtO1xcbiAgfVxcbiAgLnRhYnMgKntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgLyogLS0tLS0tLS0tLVxcbiAgSEVST1xcbiAgLS0tLS0tLS0tLS0tLSAqL1xcbiAgLmhlcm97XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1dmgpO1xcbiAgfVxcbiAgLnRpdGxle1xcbiAgICBmb250LWZhbWlseTogJ09yZWdhbm8nLCBjdXJzaXZlO1xcbiAgICBjb2xvcjogI2ZmY2JhMjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB0ZXh0LXNoYWRvdzogM3B4IDJweCBibGFjaztcXG4gIH1cXG4gIC5idG4tLW9yZGVye1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmY5ODQ5O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDFweCBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxuICB9XFxuICAuYnRuLS1vcmRlcjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2FhMjUyO1xcbiAgIFxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5iZy1ob21le1xcbiAgICBoZWlnaHQ6IHZhcigtLXdpbmRvdy1oZWlnaHQtbGFyZ2UpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2JnX3BpenplcmlhLmpwZycpO1xcbiAgfVxcbn1cXG4vKi0tLS0tLS0tLS1cXG4gICBNRU5VXFxuICAtLS0tLS0tLS0tLS0gKi9cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MHB4KSB7XFxuICAgIFxcbiAgLmJnLW1lbnV7XFxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLXdpbmRvdy1oZWlnaHQtc21hbGwpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxYjFiO1xcbiAgfVxcbiAgLmNvbnRhaW5lci0tbWVudXtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG4gIH1cXG4gIC50aXRsZS0tbWVudXtcXG4gICAgY29sb3I6ICNmZjk4NDk7XFxuICB9XFxuICAubWVudS1ncmlke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAyMHJlbSk7XFxuICB9XFxuICAuY2FyZC1pbWd7XFxuICAgIG1pbi1oZWlnaHQ6IDI1dmg7XFxuICAgIG1pbi13aWR0aDogMjR2aDtcXG4gIH1cXG4gIC5tZW51LWNhcmR7XFxuICAgIG1pbi1oZWlnaHQ6IDQwdmg7XFxuICAgIG1heC13aWR0aDogMjh2aDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcbiAgLm1lbnUtY2FyZDpsYXN0LWNoaWxke1xcbiAgICBtYXJnaW4tYm90dG9tOiAxdmg7XFxuICB9XFxuICAuYnRuLS1tZW51e1xcbiAgICBjb2xvcjogI2ZmOTg0OTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmOTg0OTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIFxcbiAgfVxcbiAgLm1lbnUtY2FyZCA+IGgze1xcbiAgICBmb250LWZhbWlseTogJ09yZWdhbm8nLCBjdXJzaXZlO1xcbiAgICBjb2xvcjogI2ZmOTg0OTsgXFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbiAgfVxcbiAgLm1lbnUtY2FyZCA+IHB7XFxuICAgIGNvbG9yOiNmZmZmO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5iZy1tZW51e1xcbiAgICBoZWlnaHQ6IHZhcigtLXdpbmRvdy1oZWlnaHQtbGFyZ2UpO1xcbiAgfVxcbn1cXG4vKi0tLS0tLS0tLS1cXG4gIEFCT1VUIFVTXFxuICAtLS0tLS0tLS0tLS0gKi9cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkge1xcbiAgICAuYmctYWJvdXR7XFxuICAgICAgbWluLWhlaWdodDogdmFyKC0td2luZG93LWhlaWdodC1zbWFsbCk7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWIxYjtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyLS1hYm91dHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuYWJvdXQtdGV4dCAge1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgcGFkZGluZzogLjVyZW07XFxuICAgICAgXFxuICAgIH1cXG4gICAgLmFib3V0LXRleHQgPiBoMSB7XFxuICAgICAgY29sb3I6ICNmZjk4NDk7XFxuICAgICAgZm9udC1mYW1pbHk6ICdPcmVnYW5vJywgY3Vyc2l2ZTtcXG4gICAgfVxcbiAgICBcXG4gIH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XFxuICAgIC5jb250YWluZXItLWFib3V0e1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmFib3V0LXRleHR7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH0gICAgXFxuICAgIC5hYm91dC10ZXh0IHB7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmFib3V0LWltZyB7XFxuICAgICAgcGFkZGluZzogLjRyZW07XFxuICAgIH1cXG4gIH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgICAuYmctYWJvdXR7XFxuICAgICAgaGVpZ2h0OiB2YXIoLS13aW5kb3ctaGVpZ2h0LWxhcmdlKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLyotLS0tLS0tLS0tXFxuICAgIEZPT1RFUlxcbiAgICAtLS0tLS0tLS0tLS0gKi9cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSB7XFxuICAgICAgLmZvb3RlcntcXG4gICAgICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgICAgIGhlaWdodDogMTV2aDtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICB9XFxuICAgICAgLmNvbnRhaW5lci0tZm9vdGVye1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMjByZW0pO1xcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICB9XFxuICAgICAgLm1hZGV7XFxuICAgICAgICBtYXJnaW4tdG9wOiAuNHJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XFxuICAgICAgfVxcbiAgICAgIC5sb2NhdGlvbiwgLnNvY2lhbHN7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgICB9XFxuICAgICAgLm1hcHMtaWNvbjpob3ZlciwuaWctaWNvbjpob3ZlcntcXG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDY2JSkgc2VwaWEoOCUpIHNhdHVyYXRlKDQxNzMlKSBodWUtcm90YXRlKDMzM2RlZykgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCgxMDElKTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9ICAgIFxcbiAgICB9XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgICAgIC5mb290ZXJ7XFxuICAgICAgICBoZWlnaHQ6IDl2aDtcXG4gICAgICB9XFxuICAgICAgXFxuICAgIH1cXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEpTIE1vZHVsZXNcbmltcG9ydCBuYXZCYXIgZnJvbSAnLi9uYXYnO1xuLy8gUGFnZXNcbmltcG9ydCBob21lUGFnZSBmcm9tICcuL3BhZ2VzL2hvbWUnO1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gJy4vcGFnZXMvbWVudSc7XG5pbXBvcnQgYWJvdXRQYWdlIGZyb20gJy4vcGFnZXMvYWJvdXQnO1xuLy8gRm9vdGVyXG5pbXBvcnQgZm9vdGVyIGZyb20gJy4vcGFnZXMvZm9vdGVyJztcbi8vIEFzc2V0c1xuXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbi8vIEljb25cblxuXG4vLyBNYWluXG5jb25zdCBtYWluID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBtYWluLmlkID0gJ21haW4nXG4gIGJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG59XG4vLyBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcbi8vIE5hdmJhclxuYm9keS5hcHBlbmQobmF2QmFyKCkpXG4vLyBNYWluXG5tYWluKCk7XG5jb25zdCBtYWluQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJylcbm1haW5Db250LmFwcGVuZENoaWxkKGhvbWVQYWdlKCkpXG5cbi8vIG1lbnVcbi8vIGlmIHRoZSBjb250YWluZXIgZXhpc3Qgd2UgbmVlZCB0byByZW1vdmUgaXQgXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZy1ob21lJykpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZy1ob21lJykucmVtb3ZlKCk7XG4gIH1lbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmctYWJvdXQnKSl7XG4gICAgY29uc29sZS5sb2coJ2Fib3V0IGV4aXN0JylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmctYWJvdXQnKS5yZW1vdmUoKTtcbiAgfVxuICAvLyBpZiBjb250ZW50IGV4aXN0IGRvbnQgYWRkIGl0XG4gIGlmKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmctbWVudScpKXtcbiAgICBtYWluQ29udC5hcHBlbmRDaGlsZChtZW51UGFnZSgpKVxuICB9XG59KTtcblxuLy8gYWJvdXRcbmNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0Jyk7XG5hYm91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgLy8gcmVtb3ZlIG1lbnUgaWYgZXhpc3RcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJnLW1lbnUnKSl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJnLW1lbnUnKS5yZW1vdmUoKTtcbiAgICAvLyByZW1vdmUgaG9tZSBpZiBleGlzdFxuICB9ZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJnLWhvbWUnKSl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJnLWhvbWUnKS5yZW1vdmUoKTtcbiAgfVxuICAvLyBpZiBjb250ZW50IGV4aXN0IGRvbnQgYWRkIGl0XG4gIFxuICBpZighZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJnLWFib3V0Jykpe1xuICAgIG1haW5Db250LmFwcGVuZENoaWxkKGFib3V0UGFnZSgpKVxuICB9XG59KTtcbi8vIEhvbWUgZWxlbWVudHNcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZUljb24nKTtcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIC8vIHJlbW92ZSBtZW51IGlmIGV4aXN0XG4gIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZy1tZW51Jykpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZy1tZW51JykucmVtb3ZlKCk7XG4gICAgLy8gcmVtb3ZlIGFib3V0IGlmIGV4aXN0XG4gIH1lbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmctYWJvdXQnKSl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJnLWFib3V0JykucmVtb3ZlKCk7XG4gIH1cbiAgLy8gaWYgY29udGVudCBleGlzdCBkb250IGFkZCBpdFxuICBpZighZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJnLWhvbWUnKSl7XG4gICAgbWFpbkNvbnQuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UoKSlcbiAgfVxufSk7XG5ib2R5LmFwcGVuZChmb290ZXIoKSk7XG5cblxuXG4iLCJpbXBvcnQgaEljb24gZnJvbSAnLi9pbWFnZXMvaG9tZUljb24uc3ZnJztcbmNvbnN0IGhvbWVJY29uID0gbmV3IEltYWdlICgpO1xuaG9tZUljb24uc3JjID0gaEljb247XG5ob21lSWNvbi5jbGFzc0xpc3QuYWRkKCdob21lSWNvbicpXG5jb25zdCBuYXYgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG4gIG5hdmJhci5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgY29udGFpbmVyLS1uYXZcIj5cbiAgICAke2hvbWVJY29uLm91dGVySFRNTH1cbiAgICA8ZGl2IGNsYXNzPVwidGFic1wiPlxuICAgICAgPGgyIGNsYXNzPVwibWVudVwiPk1lbnU8L2gyPlxuICAgICAgPGgyIGNsYXNzPVwiYWJvdXRcIj5BYm91dDwvaDI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PmA7XG4gIHJldHVybiBuYXZiYXI7XG59XG5leHBvcnQgZGVmYXVsdCBuYXY7IiwiLy8gQWJvdXQgaW1nXG5pbXBvcnQgYWJvdXRJbWcgZnJvbSAnLi4vaW1hZ2VzL2Fib3V0LmpwZyc7XG5jb25zdCBBYm91dEltZyA9IG5ldyBJbWFnZSgpO1xuQWJvdXRJbWcuc3JjID0gYWJvdXRJbWc7XG5cbmNvbnN0IGFib3V0ID0gKCkgPT4ge1xuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBiZ0Fib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJnQWJvdXQuY2xhc3NMaXN0LmFkZCgnYmctYWJvdXQnKVxuICBhYm91dC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInLCAnY29udGFpbmVyLS1hYm91dCcpO1xuICBhYm91dC5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJhYm91dC10ZXh0XCI+XG4gICAgPGgxPkFib3V0IFVzPC9oMT5cbiAgICA8cD5XZSBhcmUgcHJvdWQgdG8gc2F5IHRoYXQgd2UgbWFrZSB0aGUgYmVzdCBwaXp6YSBvZiB0aGUgcmVnaW9uPC9wPlxuICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE5lY2Vzc2l0YXRpYnVzIHZpdGFlIG1vbGVzdGlhcyBzdXNjaXBpdCByZXBlbGxlbmR1cyB0ZW1wb3JlLiBFeCB0b3RhbSBtb2xsaXRpYSBuYW0gbW9sZXN0aWFlIGVhcXVlIGFsaXF1aWQgZWxpZ2VuZGkgcmVpY2llbmRpcywgcXVhc2kgZWl1cy48L3A+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYWJvdXQtaW1nXCI+XG4gICAgJHtBYm91dEltZy5vdXRlckhUTUx9XG4gICAgPC9kaXY+XG4gIDwvZGl2PmBcbiAgYmdBYm91dC5hcHBlbmRDaGlsZChhYm91dCk7XG4gIHJldHVybiBiZ0Fib3V0O1xufVxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7IiwiLy8gU29jaWFsIEljb25zXG5pbXBvcnQgbWFwSWNvbiBmcm9tICcuLi9pbWFnZXMvTE9DQVRJT04uc3ZnJztcbmNvbnN0IEljb25NYXBzID0gbmV3IEltYWdlKCk7XG5JY29uTWFwcy5zcmMgPSBtYXBJY29uO1xuSWNvbk1hcHMuY2xhc3NMaXN0LmFkZCgnbWFwcy1pY29uJylcblxuaW1wb3J0IGlnSWNvbiBmcm9tICcuLi9pbWFnZXMvaW5zdGEuc3ZnJztcbmNvbnN0IEljb25JZyA9IG5ldyBJbWFnZSgpO1xuSWNvbklnLnNyYyA9IGlnSWNvbjtcbkljb25JZy5jbGFzc0xpc3QuYWRkKCdpZy1pY29uJylcblxuXG5jb25zdCBmb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJywgJ2JnLWJsYWNrJyk7XG4gIGZvb3Rlci5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgY29udGFpbmVyLS1mb290ZXJcIj5cbiAgPGRpdiBjbGFzcz1cInNvY2lhbHNcIj5cbiAgICA8cD5Gb2xsb3cgVXM8L3A+XG4gICAgPGk+JHtJY29uSWcub3V0ZXJIVE1MfTwvaT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJsb2NhdGlvblwiPlxuICAgIDxwPlNhbiBQZWRybyAtIENhbGlmb3JuaWE8L3A+XG4gICAgPGk+JHtJY29uTWFwcy5vdXRlckhUTUx9PC9pPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm1hZGVcIj5cbiAgICA8cD5tYWRlIGJ5IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vUGFyeml2YWxjZW5cIj5EYXZpZENlbnR6PC9hPjwvcD5cbiAgPC9kaXY+XG4gIDwvZGl2PmA7XG4gIHJldHVybiBmb290ZXI7XG59XG5leHBvcnQgZGVmYXVsdCBmb290ZXI7IiwiY29uc3QgaG9tZSA9ICgpID0+e1xuY29uc3QgYmdIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5iZ0hvbWUuY2xhc3NMaXN0LmFkZCgnYmctaG9tZScpO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJywgJ2NvbnRhaW5lci0taG9tZScpO1xuY29udGFpbmVyLmlubmVySFRNTCA9IGBcbjxkaXYgY2xhc3M9XCJoZXJvXCI+XG48aDEgY2xhc3M9XCJ0aXRsZVwiPlRhdGEgUmVuZHlndWk8L2gxPlxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tLW9yZGVyXCI+T3JkZXIgbm93PC9idXR0b24+XG48L2Rpdj5cbmBcbmJnSG9tZS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xucmV0dXJuIGJnSG9tZTtcbiAgfVxuZXhwb3J0IGRlZmF1bHQgaG9tZTsiLCJpbXBvcnQgbWFyZ2hlcml0YUltZyBmcm9tICcuLi9pbWFnZXMvbWFyZ2hlcml0YS5qcGcnO1xuaW1wb3J0IGRpYXZvbGFJbWcgZnJvbSAnLi4vaW1hZ2VzL0RlYXZvbGEuanBnJztcbmltcG9ydCByYW5kb21JbWcgZnJvbSAnLi4vaW1hZ2VzL3JhbmRvbS5qcGcnO1xuLy8gbWFyZ2hlcml0YSBpbWdcbmNvbnN0IEltZ01hcmdoZXJpdGEgPSBuZXcgSW1hZ2UoKTtcbkltZ01hcmdoZXJpdGEuc3JjID0gbWFyZ2hlcml0YUltZztcbkltZ01hcmdoZXJpdGEuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbWcnKVxuXG4vLyBEaWF2b2xhIGltZ1xuY29uc3QgSW1nRGlhdm9sYSA9IG5ldyBJbWFnZSgpO1xuSW1nRGlhdm9sYS5zcmMgPSBkaWF2b2xhSW1nO1xuSW1nRGlhdm9sYS5jbGFzc0xpc3QuYWRkKCdjYXJkLWltZycpXG5cbi8vUmFuZG9tIGltZ1xuY29uc3QgSW1nUmFuZG9tID0gbmV3IEltYWdlKCk7XG5JbWdSYW5kb20uc3JjID0gcmFuZG9tSW1nO1xuSW1nUmFuZG9tLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1nJylcbmNvbnN0IG1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBiZ01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYmdNZW51LmNsYXNzTGlzdC5hZGQoJ2JnLW1lbnUnKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInLCAnY29udGFpbmVyLS1tZW51Jyk7XG4gIG1lbnUuaW5uZXJIVE1MID0gYFxuICA8aDEgY2xhc3M9XCJ0aXRsZSB0aXRsZS0tbWVudVwiPk91ciBEZWxpY2lvdXMgTWVudTwvaDE+XG4gIDxkaXYgY2xhc3M9XCJtZW51LWdyaWRcIj5cbiAgPCEtLSBDYXJkcyAtLT5cbiAgPCEtLSBTaW5nbGVDYXJkIC0tPlxuICA8ZGl2IGNsYXNzPVwibWVudS1jYXJkXCI+XG4gICAgJHtJbWdNYXJnaGVyaXRhLm91dGVySFRNTH1cbiAgICA8aDM+TWFyZ2hlcml0YTwvaDM+XG4gICAgPHA+Q2xhc3NpYyBJdGFsaWFuIE1hc3RlcnBpZWNlLiBEbyB5b3UgbmVlZCBhbnkgbW9yZSBpbmZvIHRoYW4gdGhhdD88L3A+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tLW1lbnVcIj5vcmRlciBub3c8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8IS0tIFNpbmdsZUNhcmQgLS0+XG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtY2FyZFwiPlxuICAgICR7SW1nRGlhdm9sYS5vdXRlckhUTUx9XG4gICAgPGgzPkRlYXZvbGE8L2gzPlxuICAgIDxwPkNhbiB5b3Ugc3RhbmQgdGhlIHNwaWNlPzwvcD5cbiAgICA8cD5EZWxpY2lvdXMgc3BpY3kgZnJlc2ggY2hpbGxpZXMgc2F1Y2U8L3A+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tLW1lbnVcIj5vcmRlciBub3c8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8IS0tIFNpbmdsZUNhcmQgLS0+XG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtY2FyZFwiPlxuICAgICR7SW1nUmFuZG9tLm91dGVySFRNTH1cbiAgICA8aDM+RmVlbGluZyBsdWNreT88L2gzPlxuICAgIDxwPldlIHdpbGwgcmFuZG9tbHkgcGljayB0aGUgZmxhdm9ycyBmb3IgeW91PC9wPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLS1tZW51XCI+b3JkZXIgbm93PC9idXR0b24+XG4gIDwvZGl2PlxuICBcbjwvZGl2PmBcbiAgYmdNZW51LmFwcGVuZENoaWxkKG1lbnUpO1xuICByZXR1cm4gYmdNZW51O1xufVxuZXhwb3J0IGRlZmF1bHQgbWVudTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=