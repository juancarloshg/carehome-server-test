webpackJsonp([0,4],{

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(671),
            styles: [__webpack_require__(662)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/juanc/Desktop/civic/CareHomeInfo/web/CivicReactor-Carehome-App/src/app.component.js.map

/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CarehomesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarehomesService = (function () {
    function CarehomesService(http) {
        this.http = http;
    }
    CarehomesService.prototype.get = function () {
        console.log('Serving markers.json');
        return this.http.get('assets/markers.json')
            .map(function (response) { return response.json(); });
    };
    CarehomesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], CarehomesService);
    return CarehomesService;
    var _a;
}());
//# sourceMappingURL=C:/Users/juanc/Desktop/civic/CareHomeInfo/web/CivicReactor-Carehome-App/src/carehomes.js.map

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NewsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsService = (function () {
    function NewsService(http) {
        this.http = http;
    }
    NewsService.prototype.get = function () {
        console.log('Serving news.json');
        return this.http.get('assets/news.json')
            .map(function (response) { return response.json(); });
    };
    NewsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], NewsService);
    return NewsService;
    var _a;
}());
//# sourceMappingURL=C:/Users/juanc/Desktop/civic/CareHomeInfo/web/CivicReactor-Carehome-App/src/news.js.map

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PopupService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopupService = (function () {
    function PopupService(http) {
        this.http = http;
    }
    PopupService.prototype.get = function (id) {
        console.log('Serving carehome with id', id);
        return this.http.get('assets/popupData.json')
            .map(function (response) { return response.json()[id]; });
    };
    PopupService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], PopupService);
    return PopupService;
    var _a;
}());
//# sourceMappingURL=C:/Users/juanc/Desktop/civic/CareHomeInfo/web/CivicReactor-Carehome-App/src/popup.js.map

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PostcodeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostcodeService = (function () {
    function PostcodeService(http) {
        this.http = http;
    }
    PostcodeService.prototype.get = function (postcode) {
        console.log('Serving coordinates for', postcode);
        return this.http.get('assets/outer.json')
            .map(function (response) { return response.json()[postcode]; });
    };
    PostcodeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], PostcodeService);
    return PostcodeService;
    var _a;
}());
//# sourceMappingURL=C:/Users/juanc/Desktop/civic/CareHomeInfo/web/CivicReactor-Carehome-App/src/postcode.js.map

/***/ },

/***/ 376:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 376;


/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(499);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_27" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/juanc/Desktop/civic/CareHomeInfo/web/CivicReactor-Carehome-App/src/main.js.map

/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutCmp; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutCmp = (function () {
    function AboutCmp() {
    }
    AboutCmp = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'about',
            styles: [
                "\n      ul li a {\n        color:blue;\n        cursor:pointer;\n      }\n    "
            ],
            template: __webpack_require__(670)
        }), 
        __metadata('design:paramtypes', [])
    ], AboutCmp);
    return AboutCmp;
}());
//# sourceMappingURL=C:/Users/juanc/Desktop/civic/CareHomeInfo/web/CivicReactor-Carehome-App/src/about.js.map

/***/ },

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__map_map__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__map_input_map_input__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__news_news__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__suggestions_suggestions__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_postcode__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_news__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_popup__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_carehomes__ = __webpack_require__(321);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var appRoutes = [
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomeCmp */] },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_6__about_about__["a" /* AboutCmp */]
    },
    { path: 'news', component: __WEBPACK_IMPORTED_MODULE_10__news_news__["a" /* NewsCmp */] },
    { path: 'suggestions', component: __WEBPACK_IMPORTED_MODULE_11__suggestions_suggestions__["a" /* SuggestionsCmp */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_about__["a" /* AboutCmp */],
                __WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomeCmp */],
                __WEBPACK_IMPORTED_MODULE_8__map_map__["a" /* MapCmp */],
                __WEBPACK_IMPORTED_MODULE_10__news_news__["a" /* NewsCmp */],
                __WEBPACK_IMPORTED_MODULE_9__map_input_map_input__["a" /* MapInputCmp */],
                __WEBPACK_IMPORTED_MODULE_11__suggestions_suggestions__["a" /* SuggestionsCmp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services_postcode__["a" /* PostcodeService */],
                __WEBPACK_IMPORTED_MODULE_15__services_carehomes__["a" /* CarehomesService */],
                __WEBPACK_IMPORTED_MODULE_13__services_news__["a" /* NewsService */],
                __WEBPACK_IMPORTED_MODULE_14__services_popup__["a" /* PopupService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/juanc/Desktop/civic/CareHomeInfo/web/CivicReactor-Carehome-App/src/app.module.js.map

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeCmp; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeCmp = (function () {
    function HomeCmp() {
    }
    HomeCmp.prototype.onMap = function (mymap) {
        this.mymap = mymap;
    };
    HomeCmp = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'home',
            template: __webpack_require__(672),
            styles: [__webpack_require__(663)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeCmp);
    return HomeCmp;
}());
//# sourceMappingURL=C:/Users/juanc/Desktop/civic/CareHomeInfo/web/CivicReactor-Carehome-App/src/home.js.map

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_postcode__ = __webpack_require__(324);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MapInputCmp; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapInputCmp = (function () {
    function MapInputCmp(postcodeService) {
        this.postcodeService = postcodeService;
    }
    MapInputCmp.prototype.setView = function (postcode) {
        var _this = this;
        var coordinates;
        postcode = postcode.toUpperCase();
        this.postcodeService.get(postcode)
            .subscribe(function (data) { return coordinates = data; }, function (error) { return console.error('Error:', error); }, function () { return _this.mymap.setView(coordinates, 13); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], MapInputCmp.prototype, "mymap", void 0);
    MapInputCmp = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'map-input',
            template: __webpack_require__(673),
            styles: [__webpack_require__(664)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_postcode__["a" /* PostcodeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_postcode__["a" /* PostcodeService */]) === 'function' && _a) || Object])
    ], MapInputCmp);
    return MapInputCmp;
    var _a;
}());
//# sourceMappingURL=C:/Users/juanc/Desktop/civic/CareHomeInfo/web/CivicReactor-Carehome-App/src/map-input.js.map

/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_carehomes__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_popup__ = __webpack_require__(323);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MapCmp; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapCmp = (function () {
    function MapCmp(carehomesService, popupService) {
        this.carehomesService = carehomesService;
        this.popupService = popupService;
        this.apikey = 'pk.eyJ1IjoianVhbmNhcmxvc2hnIiwiYSI6ImNpdnIzN2R4dzAwMTEyeW1ubTI2aXJ1bG0ifQ.nY1oVZ6HN3Vg4sSwbOy2Vw';
        //Emitter used to send the map to the parent component
        this.onMap = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* EventEmitter */]();
    }
    //Map loads after the view
    MapCmp.prototype.ngAfterViewInit = function () {
        this.initMap();
        //Gets carehomes json (only coordinates, carehome id and overall grade) and adds the markers to the map
        this.getCarehomes();
    };
    MapCmp.prototype.initMap = function () {
        //Add map to the div
        this.mymap = L.map('mapid').setView([54, -2], 6);
        L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=' + this.apikey, {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/' +
                'licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        }).addTo(this.mymap);
        //Emit map so that the map-input component can use it
        this.onMap.emit(this.mymap);
    };
    MapCmp.prototype.addMarker = function (lat, lng, id, color, markers) {
        //Adds a marker in input coordinates, with input color and input id.
        var size = 'l';
        //Options in case we want to change the marker size
        //smallOptions: {iconSize: [20, 50], popupAnchor: [0,-20]}
        //mediumOptions: {iconSize: [30,70], popupAnchor: [0,-30]}
        //largeOptions: {iconSize: [36,90], popupAnchor: [0,-40]}
        var icon = L.icon({
            iconUrl: 'https://api.mapbox.com/v4/marker/pin-' + size + '+' + color + '.png?access_token=' + this.apikey,
            iconRetinaUrl: 'https://api.mapbox.com/v4/marker/pin-' + size + '+' + color + '@2x.png?access_token=' + this.apikey,
            iconSize: [36, 90],
            popupAnchor: [0, -40]
        });
        var marker = L.marker([lat, lng], { icon: icon });
        marker.id = id;
        //On click, it will use a service to get the carehome info and set the popup
        marker.on('click', function () {
            if (!marker._popup) {
                this.setPopupText(marker);
            }
        }.bind(this));
        //Add marker to the clustering layer
        markers.addLayer(marker);
    };
    MapCmp.prototype.addMarkers = function (carehomes) {
        var _this = this;
        console.log('Adding markers');
        //Clustering settings
        var markers = L.markerClusterGroup({
            //disableClusteringAtZoom: 13,
            //spiderfyOnMaxZoom: true,
            chunkedLoading: true,
            //
            maxClusterRadius: function (zoom) {
                return (zoom < 13) ? 100 : 1; // radius in pixels
            }
        });
        //Add a marker for each carehome
        carehomes.forEach(function (carehome) {
            var color;
            switch (carehome[3]) {
                case 0:
                    color = 'f43311';
                    break;
                case 1:
                    color = 'd1e24a';
                    break;
                case 2:
                    color = '33821d';
                    break;
                case 3:
                    color = '58e231';
                    break;
                case -1:
                    color = 'a3a3a3';
            }
            _this.addMarker(carehome[1], carehome[2], carehome[0], color, markers);
        });
        //Add the clustering to the map
        this.mymap.addLayer(markers);
        console.log('Finished adding markers');
    };
    MapCmp.prototype.getCarehomes = function () {
        var _this = this;
        //Gets carehomes, saves them and sends them to the addMarkers function.
        this.carehomesService.get()
            .subscribe(function (carehomes) { return _this.carehomes = carehomes; }, function (error) { return console.error('Error:', error); }, function () {
            _this.addMarkers(_this.carehomes);
        });
    };
    MapCmp.prototype.setPopupText = function (marker) {
        var _this = this;
        //Gets a specific carehome, calls a styling function and then binds that text to the given marker
        var carehome;
        this.popupService.get(marker.id)
            .subscribe(function (data) { return carehome = data; }, function (error) { return console.error('Error:', error); }, function () {
            marker.bindPopup(_this.style(carehome)).openPopup();
        });
    };
    MapCmp.prototype.style = function (carehome) {
        //makes html string out of a carehome object
        if (!carehome.grading.Overall || !carehome.grading.Caring || !carehome.grading.Effective || !carehome.grading.Responsive || !carehome.grading.Safe || !carehome.grading['Well-led']) {
            return "\n        <div class=\"carehome-detail\">\n          <h3><strong>" + carehome.name + "</strong></h3>\n          " + (carehome.address1 + '\n') + "<br />\n          " + carehome.address2 + "<br />\n          " + carehome.postcode + "<br />\n          " + carehome.city + "<br /><br />\n          <h4><a href=\"" + carehome.url + "\" target=\"_blank\">More details here</a></h4>\n        </div>\n          ";
        }
        return "\n      <div class=\"carehome-detail\">\n        <h3><strong>" + carehome.name + "</strong></h3>\n        " + (carehome.address1 + '\n') + "<br />\n        " + carehome.address2 + "<br />\n        " + carehome.postcode + "<br />\n        " + carehome.city + "<br /><br />\n        <ul style=\"list-style: none;\">\n          <li style=\"background: url(assets/imgs/" + carehome.grading.Caring.replace(' ', '') + ".png) no-repeat right center transparent;\">Caring: " + carehome.grading.Caring + "</li>\n          <li style=\"background: url(assets/imgs/" + carehome.grading.Effective.replace(' ', '') + ".png) no-repeat right center transparent;\">Effective: " + carehome.grading.Effective + "</li>\n          <li style=\"background: url(assets/imgs/" + carehome.grading.Responsive.replace(' ', '') + ".png) no-repeat right center transparent;\">Responsive: " + carehome.grading.Responsive + "</li>\n          <li style=\"background: url(assets/imgs/" + carehome.grading.Safe.replace(' ', '') + ".png) no-repeat right center transparent;\">Safe: " + carehome.grading.Safe + "</li>\n          <li style=\"background: url(assets/imgs/" + carehome.grading['Well-led'].replace(' ', '') + ".png) no-repeat right center transparent;\">Well-led: " + carehome.grading['Well-led'] + "</li>\n          <li style=\"background: url(assets/imgs/" + carehome.grading.Overall.replace(' ', '') + ".png) no-repeat right center transparent;\">Overall: " + carehome.grading.Overall + "</li>\n        </ul>\n        <h4><a href=\"" + carehome.url + "\" target=\"_blank\">More details here</a></h4>\n      </div>\n        ";
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], MapCmp.prototype, "onMap", void 0);
    MapCmp = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'map',
            template: __webpack_require__(674),
            styles: [__webpack_require__(665)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_carehomes__["a" /* CarehomesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_carehomes__["a" /* CarehomesService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_popup__["a" /* PopupService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_popup__["a" /* PopupService */]) === 'function' && _b) || Object])
    ], MapCmp);
    return MapCmp;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/juanc/Desktop/civic/CareHomeInfo/web/CivicReactor-Carehome-App/src/map.js.map

/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_news__ = __webpack_require__(322);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NewsCmp; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var $ = __webpack_require__(658);
var NewsCmp = (function () {
    function NewsCmp(newsService) {
        this.newsService = newsService;
    }
    NewsCmp.prototype.ngOnInit = function () {
        this.getNews();
    };
    NewsCmp.prototype.showNews = function (type) {
        if (type === 'all') {
            $('#news-list ul').css('display', 'inherit');
        }
        else {
            type = '.' + type;
            $('#news-list ul').css('display', 'none');
            $(type).css('display', 'inherit');
        }
    };
    NewsCmp.prototype.getNews = function () {
        var _this = this;
        this.newsService.get()
            .subscribe(function (news) { return _this.news = news; }, function (error) { return console.error('Error:', error); }, function () { return console.log(_this.news); });
    };
    NewsCmp = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'news',
            template: __webpack_require__(675),
            styles: [__webpack_require__(666)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_news__["a" /* NewsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_news__["a" /* NewsService */]) === 'function' && _a) || Object])
    ], NewsCmp);
    return NewsCmp;
    var _a;
}());
//# sourceMappingURL=C:/Users/juanc/Desktop/civic/CareHomeInfo/web/CivicReactor-Carehome-App/src/news.js.map

/***/ },

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SuggestionsCmp; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuggestionsCmp = (function () {
    function SuggestionsCmp() {
    }
    SuggestionsCmp = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'suggestions',
            template: __webpack_require__(676),
            styles: [__webpack_require__(667)]
        }), 
        __metadata('design:paramtypes', [])
    ], SuggestionsCmp);
    return SuggestionsCmp;
}());
//# sourceMappingURL=C:/Users/juanc/Desktop/civic/CareHomeInfo/web/CivicReactor-Carehome-App/src/suggestions.js.map

/***/ },

/***/ 499:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_app_app_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_app_app_module__ = __webpack_require__(493);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__components_app_app_module__["a"]; });


//# sourceMappingURL=C:/Users/juanc/Desktop/civic/CareHomeInfo/web/CivicReactor-Carehome-App/src/index.js.map

/***/ },

/***/ 500:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/juanc/Desktop/civic/CareHomeInfo/web/CivicReactor-Carehome-App/src/environment.js.map

/***/ },

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/juanc/Desktop/civic/CareHomeInfo/web/CivicReactor-Carehome-App/src/polyfills.js.map

/***/ },

/***/ 662:
/***/ function(module, exports) {

module.exports = ".sample-app-content {\r\n  font-family: Verdana;\r\n}\r\n.sample-app-content h1 {\r\n  color: #999;\r\n  font-size: 3em;\r\n}\r\n.sample-app-content h2 {\r\n  color: #990000;\r\n  font-size: 2em;\r\n}\r\n.sample-app-content p,\r\n.sample-app-content nav {\r\n  padding: 30px;\r\n}\r\n.sample-app-content li,\r\n.sample-app-content p {\r\n  font-size: 1.2em;\r\n}\r\n.sample-app-content li {\r\n  font-family: Consolas;\r\n}\r\n.sample-app-content nav a {\r\n  float: right;\r\n  display: inline-block;\r\n  margin-right: 15px;\r\n}\r\n.sample-app-content input,\r\n.sample-app-content button {\r\n  padding: 5px;\r\n  font-size: 1em;\r\n  outline: none;\r\n}\r\n"

/***/ },

/***/ 663:
/***/ function(module, exports) {

module.exports = ".note {\r\n  color: #a8a8a8;\r\n}\r\n\r\n.logo {\r\n  width: 400px;\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n    .logo {\r\n      width: 280px;\r\n    }\r\n}"

/***/ },

/***/ 664:
/***/ function(module, exports) {

module.exports = "form {\r\n    text-align: center;\r\n}"

/***/ },

/***/ 665:
/***/ function(module, exports) {

module.exports = "#mapid {\r\n  width: 650px;\r\n  height: 800px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.carehome-detail ul {\r\n  list-style-type: none;\r\n  padding: 10px;\r\n  padding-left: 0;\r\n  border-top: 1px solid black;\r\n}\r\n\r\n.carehome-detail ul li {\r\n  padding-right: 20px;\r\n}\r\n\r\n@media only screen and (max-width: 1400px) {\r\n    #mapid {\r\n      width: 500px;\r\n      height: 800px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    #mapid {\r\n      width: 500px;\r\n      height: 600px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n    #mapid {\r\n      width: 280px;\r\n      height: 400px;\r\n    }\r\n}\r\n"

/***/ },

/***/ 666:
/***/ function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\nli {\r\n    display: inline-block;\r\n}\r\n\r\nli img {\r\n    margin-right: 20px;\r\n}\r\n/*\r\nli a img {\r\n    padding: 0;\r\n    margin: 0 30px 0 0;\r\n}*/\r\n\r\np {\r\n    padding: 0;\r\n    margin: 20px 20px 5px 0;\r\n    text-align: justify;\r\n}\r\n\r\np  a {\r\n    margin: 0 0 35px 0;\r\n    float: right;\r\n}\r\n\r\nbutton {\r\n    background: none;\r\n    border: none;\r\n    border-bottom: 0px;\r\n    padding: 0;\r\n    font: inherit;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton:first-child {\r\n    font-size: 2em;\r\n    margin-right: 20px;\r\n}"

/***/ },

/***/ 667:
/***/ function(module, exports) {

module.exports = "form {\r\n    margin-top: 50px;\r\n    margin-bottom: 50px;\r\n}"

/***/ },

/***/ 670:
/***/ function(module, exports) {

module.exports = "<p>\r\n  Civic reactors can be Young, old, beginners, experts, programmers, designers, data scientists, good communicators, civic organisers, entrepreneurs,  employers, employees and unemployed. Actually anyone willing to get his or her hands dirty solving problems who collaborate on co-creating solutions as a response to social, environmental and economic challenges relevant to their city.  Following the goals of the open data movement are similar to those of other \"open\" movements such as open source, open hardware, open content and open access and making these things  available and usable information for all.\r\n</p>"

/***/ },

/***/ 671:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle btn-default navbar-btn\" data-toggle=\"collapse\" data-target=\"#myNavbar\"> Menu\r\n      </button>\r\n      <a href=\"#\"><img src=\"assets/crLogo.png\"></a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"dropdown\">\r\n          <ul class=\"dropdown-menu\">\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li><a routerLink=\"home\">Home</a></li>\r\n        <li><a routerLink=\"about\">About</a></li>\r\n        <li><a routerLink=\"news\">News</a></li>\r\n        <li><a routerLink=\"suggestions\">Feedback</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<section class=\"sample-app-content\">\r\n  <router-outlet></router-outlet>\r\n  <br>\r\n  <footer class=\"text-center\">\r\n    <div class=\"panel-footer\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                  <br>\r\n                  <img class=\"logo\" style=\"width: 100px\" src=\"assets/cqclogo.png\">\r\n                  <p>Powered by data from CQC</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n</section>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ },

/***/ 672:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n\r\n          <img class=\"logo\" src=\"assets/ukcarehomes-logo.jpg\">\r\n\r\n          <map-input [mymap]=\"mymap\"></map-input>\r\n          <p>\r\n          Here is a map of all the care homes in the United Kingdom. The colours show  <a href=\"http://www.cqc.org.uk\"> Care Quality Commission</a>'s rating for each care home. Red pins are the lowest and green pins are the highest.\r\n          <br>\r\n          <br>\r\n          Click on a pin to see details on that care home and for further information click on 'More details here'.\r\n          </p>\r\n<!-- This paragraph below should go on the About page instead -->\r\n <!--          <p>\r\n            We at CIVIC REACTOR have noticed that more and more is expected to be done for less, we as a volunteer organisation are committed to the improvement\r\n            to access and publicly open data resources. to allow for wider usage and research from that data.\r\n            If you feel like you would like to get involved -\r\n            either with questions or suggestions to make it more useful,\r\n            or by getting more involved with this project or suggest another.\r\n            Please fill out the feedback form.\r\n\r\n            Thank you from the Civic Reactor Team. </p> -->\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n            <map (onMap)=\"onMap($event)\"></map>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },

/***/ 673:
/***/ function(module, exports) {

module.exports = "<form (submit)=\"setView(postcode.value)\" class=\"form-inline\">\r\n    <input #postcode placeholder=\"Your postcode\" class=\"form-control\" />\r\n    <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n</form>\r\n"

/***/ },

/***/ 674:
/***/ function(module, exports) {

module.exports = "<div id=\"mapid\"></div>"

/***/ },

/***/ 675:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"news\" class=\"container\" style=\"clear:both\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 col-md-offset-3\">\r\n      <ul>\r\n        <li><button (click)=\"showNews('all')\">All</button></li>\r\n        <li><button (click)=\"showNews('audio')\"><img src=\"assets/news-icon-audio.png\" class=\"img-responsive\"></button></li>\r\n        <li><button (click)=\"showNews('video')\"><img src=\"assets/news-icon-video.png\" class=\"img-responsive\"></button></li>\r\n        <li><button (click)=\"showNews('text')\"><img src=\"assets/news-icon-text.png\" class=\"img-responsive\"></button></li>\r\n        <li><button (click)=\"showNews('blog')\"><img src=\"assets/news-icon-blog.png\" class=\"img-responsive\"></button></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div *ngFor=\"let new of news\" class=\"row article\" id=\"news-list\">\r\n    <div class=\"col-md-6 col-md-offset-3\">\r\n      <ul class=\"{{new.type}}\">\r\n        <li><img src=\"{{'assets/news-icon-' + new.type + '.png'}}\" class=\"img-responsive\"></li>\r\n        <li><h2><a href=\"{{new.link}}\">{{new.title}}</a></h2></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ },

/***/ 676:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h3>Give us your feedback!</h3>\r\n    <form>\r\n        <div class=\"form-group\">\r\n            <label for=\"email\">Email address</label>\r\n            <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"email@email.com\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"subject\">Subject</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"subject\" id=\"subject\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"message\">Message</label>\r\n            <textarea id=\"message\" name=\"message\" class=\"form-control\" rows=\"5\" required></textarea>\r\n        </div>\r\n        <button class=\"btn btn-default\" type=\"submit\" class=\"btn btn-default\">Send</button>\r\n    </form>\r\n</div>"

/***/ },

/***/ 702:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(377);


/***/ }

},[702]);
//# sourceMappingURL=main.bundle.map