(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog */ "./src/app/blog/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: 'blog',
        pathMatch: 'full',
    },
    {
        path: 'blog',
        children: [
            {
                path: '',
                component: _blog__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"],
            },
            {
                path: 'potfolio',
                component: _blog__WEBPACK_IMPORTED_MODULE_2__["PotfolioComponent"],
            },
            {
                path: 'myself',
                component: _blog__WEBPACK_IMPORTED_MODULE_2__["MyselfComponent"],
            },
            {
                path: 'contact',
                component: _blog__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"],
            },
        ],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'blog';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog */ "./src/app/blog/index.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _blog__WEBPACK_IMPORTED_MODULE_4__["components"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  width: 300px;\r\n  display: inline-block;\r\n}\r\n\r\n.img {\r\n  width: 300px;\r\n  vertical-align: middle;\r\n  display: inline-block;\r\n  margin: 10px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n.comment {\r\n  display: inline-block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxzQkFBc0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmltZyB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb21tZW50IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n\n  <div class='img'><a href=\"../../assets/photo/marco01.jpg\"><img src=\"../../assets/photo/marco01.jpg\" alt=\"marco01\"></a><br>\n    <div class='comment'>Marco\n      DongChan Seo</div>\n  </div>\n\n\n\n  <div class='img'><a href='../../assets/photo/sophia01.jpg'><img src=\"../../assets/photo/sophia01.jpg\" alt=\"marco01\"></a><br>My\n    lovely wife with Baby Ashton\n    in\n    belly</div>\n  <div class='img'><a href=\"../../assets/photo/wedding01.jpg\"><img src=\"../../assets/photo/wedding01.jpg\" alt=\"marco01\"></a><br>Me\n    and My wife Engagement photo</div>\n  <div class='img'><a href='../../assets/photo/wedding02.jpg'><img src=\"../../assets/photo/wedding02.jpg\" alt=\"marco01\"></a><br>Gender\n    reveal!!</div>\n  <div class='img'><a href='../../assets//photo/ashton01.jpg'><img src=\"../../assets/photo/ashton01.jpg\" alt=\"marco01\"></a><br>Baby\n    Ashton YoonKyo Seo</div>\n  <div class='img'><a href='../../assets/photo/ashton02.jpg'><img src=\"../../assets/photo/ashton02.jpg\" alt=\"marco01\"></a><br>When\n    Ashton was born. Day 1</div>\n  <div class='img'><a href='../../assets/photo/ashton03.jpg'><img src=\"../../assets/photo/ashton03.jpg\" alt=\"marco01\"></a><br>Ashton\n    is so funny</div>\n  <div class='img'><a href='../../assets/photo/furbaby01.jpg'><img src=\"../../assets/photo/furbaby01.jpg\" alt=\"marco01\"></a><br>My\n    Duke and Lip are waiting for baby\n    Asthon</div>\n  <div class='img'><a href='../../assets/photo/furbaby02.jpg'><img src=\"../../assets/photo/furbaby02.jpg\" alt=\"marco01\"></a><br>Lip</div>\n  <div class='img'><a href='../../assets/photo/furbaby03.jpg'><img src=\"../../assets/photo/furbaby03.jpg\" alt=\"marco01\"></a><br>Duke\n    and Lip</div>\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogComponent = /** @class */ (function () {
    function BlogComponent(modalService) {
        this.modalService = modalService;
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent.prototype.open = function (content) {
        var _this = this;
        console.log('click click click');
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    BlogComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/blog/blogs/blogs.component.css":
/*!************************************************!*\
  !*** ./src/app/blog/blogs/blogs.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZ3MvYmxvZ3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/blog/blogs/blogs.component.html":
/*!*************************************************!*\
  !*** ./src/app/blog/blogs/blogs.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  blogs works!\n</p>\n"

/***/ }),

/***/ "./src/app/blog/blogs/blogs.component.ts":
/*!***********************************************!*\
  !*** ./src/app/blog/blogs/blogs.component.ts ***!
  \***********************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogsComponent = /** @class */ (function () {
    function BlogsComponent() {
    }
    BlogsComponent.prototype.ngOnInit = function () {
    };
    BlogsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blogs',
            template: __webpack_require__(/*! ./blogs.component.html */ "./src/app/blog/blogs/blogs.component.html"),
            styles: [__webpack_require__(/*! ./blogs.component.css */ "./src/app/blog/blogs/blogs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogsComponent);
    return BlogsComponent;
}());



/***/ }),

/***/ "./src/app/blog/contact/contact.component.css":
/*!****************************************************!*\
  !*** ./src/app/blog/contact/contact.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\r\n  font-weight: bolder;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/blog/contact/contact.component.html":
/*!*****************************************************!*\
  !*** ./src/app/blog/contact/contact.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <br>\n  <h2>Marco DongChan Seo</h2>\n  <br>\n  <div>\n\n    <span class='title'>Phone</span><span> : 571-335-2177</span>\n  </div>\n  <br>\n  <div>\n\n    <span class='title'>Email</span><span> : <a href=\"mailto:marco.dseo@gmail.com\">marco.dseo@gmail.com</a></span>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/blog/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/blog/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/blog/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/blog/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/blog/index.ts":
/*!*******************************!*\
  !*** ./src/app/blog/index.ts ***!
  \*******************************/
/*! exports provided: components, BlogComponent, PotfolioComponent, PhotoComponent, MyselfComponent, ContactComponent, BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _potfolio_potfolio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./potfolio/potfolio.component */ "./src/app/blog/potfolio/potfolio.component.ts");
/* harmony import */ var _photo_photo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo/photo.component */ "./src/app/blog/photo/photo.component.ts");
/* harmony import */ var _myself_myself_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myself/myself.component */ "./src/app/blog/myself/myself.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/blog/contact/contact.component.ts");
/* harmony import */ var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blogs/blogs.component */ "./src/app/blog/blogs/blogs.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return _blog_component__WEBPACK_IMPORTED_MODULE_0__["BlogComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PotfolioComponent", function() { return _potfolio_potfolio_component__WEBPACK_IMPORTED_MODULE_1__["PotfolioComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhotoComponent", function() { return _photo_photo_component__WEBPACK_IMPORTED_MODULE_2__["PhotoComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyselfComponent", function() { return _myself_myself_component__WEBPACK_IMPORTED_MODULE_3__["MyselfComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_5__["BlogsComponent"]; });







var components = [
    _blog_component__WEBPACK_IMPORTED_MODULE_0__["BlogComponent"],
    _potfolio_potfolio_component__WEBPACK_IMPORTED_MODULE_1__["PotfolioComponent"],
    _photo_photo_component__WEBPACK_IMPORTED_MODULE_2__["PhotoComponent"],
    _myself_myself_component__WEBPACK_IMPORTED_MODULE_3__["MyselfComponent"],
    _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
    _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_5__["BlogsComponent"],
];








/***/ }),

/***/ "./src/app/blog/myself/myself.component.css":
/*!**************************************************!*\
  !*** ./src/app/blog/myself/myself.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  font-weight: bolder;\r\n  margin: 20px;\r\n}\r\n\r\np {}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9teXNlbGYvbXlzZWxmLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtDQUNkOztBQUVELElBQUkiLCJmaWxlIjoic3JjL2FwcC9ibG9nL215c2VsZi9teXNlbGYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxucCB7fVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/blog/myself/myself.component.html":
/*!***************************************************!*\
  !*** ./src/app/blog/myself/myself.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <h1>Who is Marco DongChan Seo</h1>\n\n  <p>\n    I am a determined developer with a particular passion solving everyday problems in effective ways. Most recently I\n    completed a full stack web development program at Coding Dojo where I specialized in Python and MEAN. I am\n    dedicated\n    to always learning and looking for an opportunity where I can make a meaningful contribution to a team and a\n    community at large.\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/blog/myself/myself.component.ts":
/*!*************************************************!*\
  !*** ./src/app/blog/myself/myself.component.ts ***!
  \*************************************************/
/*! exports provided: MyselfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyselfComponent", function() { return MyselfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyselfComponent = /** @class */ (function () {
    function MyselfComponent() {
    }
    MyselfComponent.prototype.ngOnInit = function () {
    };
    MyselfComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myself',
            template: __webpack_require__(/*! ./myself.component.html */ "./src/app/blog/myself/myself.component.html"),
            styles: [__webpack_require__(/*! ./myself.component.css */ "./src/app/blog/myself/myself.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyselfComponent);
    return MyselfComponent;
}());



/***/ }),

/***/ "./src/app/blog/photo/photo.component.css":
/*!************************************************!*\
  !*** ./src/app/blog/photo/photo.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvcGhvdG8vcGhvdG8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/blog/photo/photo.component.html":
/*!*************************************************!*\
  !*** ./src/app/blog/photo/photo.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  photo works!\n</p>\n"

/***/ }),

/***/ "./src/app/blog/photo/photo.component.ts":
/*!***********************************************!*\
  !*** ./src/app/blog/photo/photo.component.ts ***!
  \***********************************************/
/*! exports provided: PhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoComponent", function() { return PhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotoComponent = /** @class */ (function () {
    function PhotoComponent() {
    }
    PhotoComponent.prototype.ngOnInit = function () {
    };
    PhotoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photo',
            template: __webpack_require__(/*! ./photo.component.html */ "./src/app/blog/photo/photo.component.html"),
            styles: [__webpack_require__(/*! ./photo.component.css */ "./src/app/blog/photo/photo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotoComponent);
    return PhotoComponent;
}());



/***/ }),

/***/ "./src/app/blog/potfolio/potfolio.component.css":
/*!******************************************************!*\
  !*** ./src/app/blog/potfolio/potfolio.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\r\n  margin: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9wb3Rmb2xpby9wb3Rmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9wb3Rmb2xpby9wb3Rmb2xpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkge1xyXG4gIG1hcmdpbjogMzBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/blog/potfolio/potfolio.component.html":
/*!*******************************************************!*\
  !*** ./src/app/blog/potfolio/potfolio.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <ul>\n    <li>Marco's Buy&Sell : <a href=\"http://ec2-3-16-91-225.us-east-2.compute.amazonaws.com/\" target=\"_blank\">http://ec2-3-16-91-225.us-east-2.compute.amazonaws.com/</a></li>\n    <li>Marco's Simple Movie Review : <a href=\"https://lit-temple-82702.herokuapp.com/movies\" targer=\"_blank\">https://lit-temple-82702.herokuapp.com/movies</a></li>\n\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/blog/potfolio/potfolio.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/blog/potfolio/potfolio.component.ts ***!
  \*****************************************************/
/*! exports provided: PotfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PotfolioComponent", function() { return PotfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PotfolioComponent = /** @class */ (function () {
    function PotfolioComponent() {
    }
    PotfolioComponent.prototype.ngOnInit = function () {
    };
    PotfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-potfolio',
            template: __webpack_require__(/*! ./potfolio.component.html */ "./src/app/blog/potfolio/potfolio.component.html"),
            styles: [__webpack_require__(/*! ./potfolio.component.css */ "./src/app/blog/potfolio/potfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PotfolioComponent);
    return PotfolioComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n  display: inline-block;\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n}\r\n\r\n.btn {\r\n  font-weight: bolder;\r\n  color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div><button class='btn btn-link' [routerLink]='[\"blog\"]'>Blog</button></div> | <div><button class='btn btn-link'\n      [routerLink]='[\"/blog\", \"potfolio\"]'>Potfolio</button></div>\n  |\n  <div><button class='btn btn-link' [routerLink]='[\"/blog\", \"myself\"]'>Introduce Myself</button></div> | <div><button\n      class='btn btn-link' [routerLink]='[\"/blog\", \"contact\"]'>Contact</button></div> | <div><a href=\"../../assets/Marco-Resume-03 .docx\"\n      download=\"marco-seo-resume\" class='btn btn-link'>Download Resume</a></div>\n</div>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! e:\Marco_Project\MarcoBlog\blog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map