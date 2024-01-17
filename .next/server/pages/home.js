(() => {
var exports = {};
exports.id = 229;
exports.ids = [229,39,456];
exports.modules = {

/***/ 9399:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Home_main__nLjiQ",
	"footer": "Home_footer____T7K",
	"title": "Home_title__T09hD",
	"description": "Home_description__41Owk",
	"code": "Home_code__suPER",
	"grid": "Home_grid__GxQ85",
	"card": "Home_card___LpL1",
	"logo": "Home_logo__27_tb"
};


/***/ }),

/***/ 175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(9399);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./lib/api.js + 1 modules
var api = __webpack_require__(3434);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
// EXTERNAL MODULE: ./pages/component/layout.js
var layout = __webpack_require__(8255);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./pages/home.js













function Home({ Posts , banner: banner1 , benetech: benetech1 , logo  }) {
    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Home_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout["default"], {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                    ...settings,
                    children: banner1.map((banner, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-[500]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: banner.image,
                                alt: "image",
                                width: "2000",
                                height: "600",
                                objectFit: "center",
                                layout: "responsive"
                            })
                        }, index)
                    )
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "lg:px-20 md:px-6 px-4 md:py-12 py-8",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "lg:flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "lg:w-1/3",
                                children: [
                                    benetech1.map((benetech, index)=>/*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "text-4xl font-semibold leading-9 m-4 text-gray-800",
                                            children: benetech.benetechTitle
                                        }, index)
                                    ),
                                    benetech1.map((benetech, index)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-base leading-6 m-4 text-gray-600",
                                            children: benetech.benetechdesc
                                        }, index)
                                    )
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "lg:w-7/12 lg:mt-0 mt-8",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-4/5 h-full mx-auto",
                                        children: benetech1.map((benetech, index)=>/*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: benetech.benetechimage1,
                                                alt: "apartment design",
                                                className: " w-full sm:block hidden ",
                                                width: 1100,
                                                height: 400,
                                                objectFit: "cover",
                                                layout: "responsive"
                                            }, index)
                                        )
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4 w-4/5 mx-auto h-[300px] object-fit: scale-down;",
                                        children: [
                                            benetech1.map((benetech, index)=>/*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: benetech.benetechimage2,
                                                    className: "w-full",
                                                    alt: "kitchen",
                                                    width: 350,
                                                    height: 350,
                                                    objectFit: "cover"
                                                }, index)
                                            ),
                                            benetech1.map((benetech, index)=>/*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: benetech.benetechimage3,
                                                    className: "w-full",
                                                    alt: "sitting room",
                                                    width: 350,
                                                    height: 350,
                                                    objectFit: "cover"
                                                }, index)
                                            )
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: " container mx-auto py-16 bg-white ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-center font-bold text-2xl text-indigo-500",
                            children: "\u041C\u044D\u0434\u044D\u044D \u043C\u044D\u0434\u044D\u044D\u043B\u044D\u043B"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 my-10",
                            children: Posts.slice(0, 4).map((post, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            className: "h-56 lg:h-60 w-full object-cover",
                                            src: post.news_image,
                                            alt: "",
                                            width: 500,
                                            height: 350
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "p-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-sm text-primary",
                                                    children: post._createdAt
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "font-semibold text-xl leading-6 text-gray-700 my-2",
                                                    children: post.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "paragraph-normal text-gray-600",
                                                    children: post.description
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mt-3 block",
                                                    children: " "
                                                })
                                            ]
                                        })
                                    ]
                                }, index)
                            )
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "pb-16",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "max-w-8xl mx-auto container bg-white pt-16",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    role: "contentinfo",
                                    className: "flex items-center flex-col px-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        tabIndex: "0",
                                        className: "focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4",
                                        children: "\u0411\u0438\u0434\u043D\u0438\u0439 \u0434\u0430\u0432\u0443\u0443 \u0442\u0430\u043B"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    tabIndex: "0",
                                    "aria-label": "group of cards",
                                    className: "focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            tabIndex: "0",
                                            "aria-label": "card 1",
                                            className: "focus:outline-none flex sm:w-full md:w-5/12 pb-20",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "w-20 h-20 relative mr-5",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                src: "https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg",
                                                                alt: "drawer",
                                                                width: 35,
                                                                height: 35
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "w-10/12",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            tabIndex: "0",
                                                            className: "focus:outline-none text-lg font-bold leading-tight text-gray-800",
                                                            children: "\u0422\u0443\u0440\u0448\u043B\u0430\u0433\u0430"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            tabIndex: "0",
                                                            className: "focus:outline-none text-base text-gray-600 leading-normal pt-2",
                                                            children: "\u0411\u0438\u0434 \u0442\u0430\u043D\u044C\u0434 \u0434\u0443\u043B\u0430\u0430\u043D \u0445\u0430\u043D\u0433\u0430\u043C\u0436\u0438\u0439\u043D  \u0441\u0430\u043B\u0431\u0430\u0440\u0442 \u0430\u0436\u043B\u044B\u043D \u0434\u0430\u0434\u043B\u0430\u0433\u0430 \u0442\u0443\u0440\u0448\u043B\u0430\u0433\u0430\u0442\u0430\u0439 \u0445\u0430\u043C\u0442 \u043E\u043B\u043E\u043D \u04AF\u0439\u043B\u0447\u0438\u043B\u0436 \u0431\u0430\u0439\u043D\u0430."
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            tabIndex: "0",
                                            "aria-label": "card 2",
                                            className: "focus:outline-none flex sm:w-full md:w-5/12 pb-20",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "w-20 h-20 relative mr-5",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                src: "https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg",
                                                                alt: "check",
                                                                width: 35,
                                                                height: 35
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "w-10/12",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            tabIndex: "0",
                                                            className: "focus:outline-none text-lg font-semibold leading-tight text-gray-800",
                                                            children: "\u041D\u0430\u0439\u0434\u0432\u0430\u0440\u0442\u0430\u0439"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            tabIndex: "0",
                                                            className: "focus:outline-none text-base text-gray-600 leading-normal pt-2",
                                                            children: "\u0425\u0430\u0440\u0438\u043B\u0446\u0430\u0433\u0447 \u0442\u0430\u043D\u044B \u0441\u0430\u043D\u0445\u04AF\u04AF\u0433\u0438\u0439\u043D \u0430\u043C\u0436\u0438\u043B\u0442\u044B\u043D \u0442\u04E9\u043B\u04E9\u04E9 \u0445\u0430\u043C\u0442\u0434\u0430\u0430."
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            tabIndex: "0",
                                            "aria-label": "card 3",
                                            className: "focus:outline-none flex sm:w-full md:w-5/12 pb-20",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "w-20 h-20 relative mr-5",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                src: "https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg",
                                                                alt: "html tag",
                                                                width: 35,
                                                                height: 35
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "w-10/12",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            tabIndex: "0",
                                                            className: "focus:outline-none text-lg font-semibold leading-tight text-gray-800",
                                                            children: "\u0427\u0430\u043D\u0430\u0440\u0442\u0430\u0439 \u0431\u04AF\u0442\u044D\u044D\u0433\u0434\u044D\u0445\u04AF\u04AF\u043D"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            tabIndex: "0",
                                                            className: "focus:outline-none text-base text-gray-600 leading-normal pt-2",
                                                            children: "\u0411\u0438\u0434 \u0445\u0430\u0440\u0438\u043B\u0446\u0430\u0433\u0447 \u0431\u04AF\u0440\u0442\u044D\u044D \u0445\u0430\u043C\u0433\u0438\u0439\u043D \u0441\u0430\u0439\u043D \u0431\u04AF\u0442\u044D\u044D\u0433\u0434\u044D\u0445\u04AF\u04AF\u043D \u04AF\u0439\u043B\u0447\u0438\u043B\u0433\u044D\u044D\u0433 \u0445\u04AF\u0440\u0433\u044D\u0445\u0438\u0439\u0433 \u0437\u043E\u0440\u0438\u043D \u0430\u0436\u0438\u043B\u043B\u0430\u0434\u0430\u0433."
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            tabIndex: "0",
                                            "aria-label": "card 4",
                                            className: "focus:outline-none flex sm:w-full md:w-5/12 pb-20",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "w-20 h-20 relative mr-5",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                src: "https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg",
                                                                alt: "monitor",
                                                                width: 35,
                                                                height: 35
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "w-10/12",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            tabIndex: "0",
                                                            className: "focus:outline-none text-lg font-semibold leading-tight text-gray-800",
                                                            children: "\u0425\u0443\u0440\u0434\u0430\u043D \u0448\u0443\u0443\u0440\u0445\u0430\u0439"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            tabIndex: "0",
                                                            className: "focus:outline-none text-base text-gray-600 leading-normal pt-2",
                                                            children: "\u0411\u0438\u0434 \u0442\u0430\u043D\u044B \u0445\u04AF\u0441\u044D\u043B\u0442\u0438\u0439\u0433 \u0445\u0430\u043C\u0433\u0438\u0439\u043D \u0442\u04AF\u0440\u0433\u044D\u043D \u0448\u0443\u0443\u0440\u0445\u0430\u0439 \u0448\u0438\u0439\u0434\u0432\u044D\u0440\u043B\u044D\u043D\u044D \u0431\u043E\u043B\u043D\u043E."
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
const getServerSideProps = async ()=>{
    const Posts = await (0,api/* getAllPots */.M_)();
    const banner = await (0,api/* getAllbanner */.dI)();
    const benetech = await (0,api/* getBenetech */.QU)();
    const logo = await (0,api/* getLogo */.R7)();
    return {
        props: {
            Posts,
            banner,
            benetech,
            logo
        }
    };
};


/***/ }),

/***/ 1097:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/client");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675,676,664,438,288,427], () => (__webpack_exec__(175)));
module.exports = __webpack_exports__;

})();