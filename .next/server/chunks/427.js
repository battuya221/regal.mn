"use strict";
exports.id = 427;
exports.ids = [427];
exports.modules = {

/***/ 3434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "yT": () => (/* binding */ getAllAboutPage),
  "zn": () => (/* binding */ getAllContactPage),
  "M_": () => (/* binding */ getAllPots),
  "RN": () => (/* binding */ getAllServicePage),
  "dI": () => (/* binding */ getAllbanner),
  "QU": () => (/* binding */ getBenetech),
  "R7": () => (/* binding */ getLogo),
  "zQ": () => (/* binding */ getPostBySlug)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "@sanity/client"
var client_ = __webpack_require__(1097);
var client_default = /*#__PURE__*/__webpack_require__.n(client_);
;// CONCATENATED MODULE: ./lib/sanity.js

const client = client_default()({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: "2021-03-25",
    // token: 'sanity-auth-token', // or leave blank for unauthenticated usage
    useCdn: process.NODE_ENV === "production"
});
/* harmony default export */ const sanity = (client);

;// CONCATENATED MODULE: ./lib/api.js

const getLogo = async ()=>{
    const logo = await sanity.fetch(`*[_type=="logo"]{title,  'logo':logo.asset->url,}`);
    return logo;
};
const getAllPots = async ()=>{
    const post = await sanity.fetch(`*[_type=="Posts"]{_createdAt, title, 'slug':slug.current, description, 'news_image':poster.asset->url, 'publisher':publisher1->{title, 'picture':picture.asset->url}}`);
    return post;
};
/* harmony default export */ const api = ((/* unused pure expression or super */ null && (getAllPots)));
const getBenetech = async ()=>{
    const benetech = await sanity.fetch(`*[_type=="home"]{_createdAt, benetechTitle, benetechdesc, 'benetechimage1': benetechimage1.asset->url, 'benetechimage2': benetechimage2.asset->url, 'benetechimage3': benetechimage3.asset->url,}`);
    return benetech;
};
const getPostBySlug = async (slug)=>{
    const posts = await sanity.fetch(`*[_type=="Posts" && slug.current==$slug]{_createdAt, title, 'slug':slug.current, description, 'news_image':poster.asset->url, 'publisher':publisher1->{title, 'picture':picture.asset->url}}`, {
        slug
    });
    return posts;
};
const getAllbanner = async ()=>{
    const banner = await sanity.fetch(`*[_type=="Banner"]{_createdAt, title, date, 'image': coverImage.asset->url,  'slug':slug.current }`);
    return banner;
};
// content[]{..., 'asset': asset->} ,
// About Page
const getAllAboutPage = async ()=>{
    const about = await sanity.fetch(`*[_type=="about"]{ aboutMenutitle, abouttitle, 'aboutimage': aboutimage.asset->url, leadershiptitle, content, founder1,  foundersub1, 'founderimage1': founderimage1.asset->url, founder2, foundersub2,  'founderimage2': founderimage2.asset->url, founder3, foundersub3, 'founderimage3': founderimage3.asset->url,  }`);
    return about;
};
const getAllServicePage = async ()=>{
    const service = await sanity.fetch(`*[_type=="service"]{serviceMenutitle, servicetitle1, servicedescription1,'serviceimage1': serviceimage1.asset->url, servicetitle2, servicedescription2,'serviceimage2': serviceimage2.asset->url, servicetitle3, servicedescription3,'serviceimage3': serviceimage3.asset->url, }`);
    return service;
};
const getAllContactPage = async ()=>{
    const contact = await sanity.fetch(`*[_type=="contact"]{'contactbanner': contactbanner.asset->url,contactMenutitle, contacttitle,  contacdescription,'contactimage': contactimage.asset->url, contactphone, contactemail, contactaddress, facebook, instagram, youtube,}`);
    return contact;
};


/***/ }),

/***/ 8255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3288);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2438);



const layout = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);


/***/ })

};
;