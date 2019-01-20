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
        redirectTo: 'blog/myself',
        pathMatch: 'full',
    },
    {
        path: 'blog',
        children: [
            {
                path: '',
                component: _blog__WEBPACK_IMPORTED_MODULE_2__["MyselfComponent"],
            },
            {
                path: 'myself',
                component: _blog__WEBPACK_IMPORTED_MODULE_2__["MyselfComponent"],
            },
            {
                path: 'blog',
                component: _blog__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"],
            },
            {
                path: 'potfolio',
                component: _blog__WEBPACK_IMPORTED_MODULE_2__["PotfolioComponent"],
            },
            {
                path: 'contact',
                component: _blog__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"],
            },
            {
                path: 'resume',
                component: _blog__WEBPACK_IMPORTED_MODULE_2__["ResumeComponent"],
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

module.exports = "<app-nav></app-nav>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _blog_resume_resume_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog/resume/resume.component */ "./src/app/blog/resume/resume.component.ts");
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
                _blog_resume_resume_component__WEBPACK_IMPORTED_MODULE_7__["ResumeComponent"],
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

module.exports = ".wrapper {\r\n  margin: 20px;\r\n}\r\n\r\nimg {\r\n  width: 300px;\r\n  display: inline-block;\r\n}\r\n\r\n.img {\r\n  width: 300px;\r\n  vertical-align: middle;\r\n  display: inline-block;\r\n  margin: 10px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n.comment {\r\n  display: inline-block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxzQkFBc0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmltZyB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb21tZW50IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='wrapper'>\n  <!-- <ng-template #content let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Contact Info</h4>\n    </div>\n    <div class=\"modal-body\">\n      <h2>Name : {{ contactInfo?.first_name }} {{ contactInfo?.last_name }}</h2>\n      <h5><a href='mailto:{{ contactInfo?.email }}'>email : {{ contactInfo?.email }}</a></h5>\n\n    </div>\n\n  </ng-template> -->\n\n  <!-- <h3>Click Photo</h3> -->\n\n  <!-- <div class='img' (click)='open(content)'><img src=\"../../assets/photo/marco01.jpg\" alt=\"marco01\"><br>\n    <div class='comment'>Marco\n      DongChan Seo</div>\n    </div> -->\n\n  <div class='img'><a href=\"../../assets/photo/marco01.jpg\"><img src=\"../../assets/photo/marco01.jpg\" alt=\"marco01\"></a><br>\n    <div class='comment'>Marco\n      DongChan Seo</div>\n  </div>\n\n  <div class='img'><a href='../../assets/photo/sophia01.jpg'><img src=\"../../assets/photo/sophia01.jpg\" alt=\"marco01\"></a><br>My\n    lovely wife with Baby Ashton\n    in\n    belly</div>\n  <div class='img'><a href=\"../../assets/photo/wedding01.jpg\"><img src=\"../../assets/photo/wedding01.jpg\" alt=\"marco01\"></a><br>Me\n    and My wife Engagement photo</div>\n  <div class='img'><a href='../../assets/photo/wedding02.jpg'><img src=\"../../assets/photo/wedding02.jpg\" alt=\"marco01\"></a><br>Gender\n    reveal!!</div>\n  <div class='img'><a href='../../assets//photo/ashton01.jpg'><img src=\"../../assets/photo/ashton01.jpg\" alt=\"marco01\"></a><br>Baby\n    Ashton YoonKyo Seo</div>\n  <div class='img'><a href='../../assets/photo/ashton02.jpg'><img src=\"../../assets/photo/ashton02.jpg\" alt=\"marco01\"></a><br>When\n    Ashton was born. Day 1</div>\n  <div class='img'><a href='../../assets/photo/ashton03.jpg'><img src=\"../../assets/photo/ashton03.jpg\" alt=\"marco01\"></a><br>Ashton\n    is so funny</div>\n  <div class='img'><a href='../../assets/photo/furbaby01.jpg'><img src=\"../../assets/photo/furbaby01.jpg\" alt=\"marco01\"></a><br>My\n    Duke and Lip are waiting for baby\n    Asthon</div>\n  <div class='img'><a href='../../assets/photo/furbaby02.jpg'><img src=\"../../assets/photo/furbaby02.jpg\" alt=\"marco01\"></a><br>Lip</div>\n  <div class='img'><a href='../../assets/photo/furbaby03.jpg'><img src=\"../../assets/photo/furbaby03.jpg\" alt=\"marco01\"></a><br>Duke\n    and Lip</div>\n\n\n\n\n</div>\n"

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
        console.log('click click click', content);
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

module.exports = ".title {\r\n  font-weight: bolder;\r\n}\r\n\r\nh2 {\r\n  font-weight: bolder;\r\n  margin-left: 10px;\r\n}\r\n\r\ndiv {\r\n  margin: 10px;\r\n  font-size: 5mm;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5kaXYge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBmb250LXNpemU6IDVtbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/blog/contact/contact.component.html":
/*!*****************************************************!*\
  !*** ./src/app/blog/contact/contact.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <br>\n  <h2>Marco DongChan Seo</h2>\n  <br>\n  <div>\n\n    <span class='title'>Phone</span><span> : 571-335-2177</span>\n  </div>\n  <br>\n  <div>\n\n    <span class='title'>Email</span><span> : <a href=\"mailto:marco.dseo@gmail.com\">marco.dseo@gmail.com</a></span>\n  </div>\n\n  <div>\n    <span class='title'>LinkedIn</span><span> : <a href=\"https://www.linkedin.com/in/dongchan-seo/\">Click to LinkedIn</a></span>\n  </div>\n  <div>\n    <span class='title'>GitHub</span><span> : <a href=\"https://github.com/seeck3\">Click to GitHub!!</a></span>\n  </div>\n\n</div>\n"

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
/*! exports provided: components, ResumeComponent, BlogComponent, PotfolioComponent, PhotoComponent, MyselfComponent, ContactComponent, BlogsComponent */
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
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/blog/resume/resume.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return _blog_component__WEBPACK_IMPORTED_MODULE_0__["BlogComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PotfolioComponent", function() { return _potfolio_potfolio_component__WEBPACK_IMPORTED_MODULE_1__["PotfolioComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhotoComponent", function() { return _photo_photo_component__WEBPACK_IMPORTED_MODULE_2__["PhotoComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyselfComponent", function() { return _myself_myself_component__WEBPACK_IMPORTED_MODULE_3__["MyselfComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_5__["BlogsComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__["ResumeComponent"]; });








var components = [
    _blog_component__WEBPACK_IMPORTED_MODULE_0__["BlogComponent"],
    _potfolio_potfolio_component__WEBPACK_IMPORTED_MODULE_1__["PotfolioComponent"],
    _photo_photo_component__WEBPACK_IMPORTED_MODULE_2__["PhotoComponent"],
    _myself_myself_component__WEBPACK_IMPORTED_MODULE_3__["MyselfComponent"],
    _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
    _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_5__["BlogsComponent"],
    _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__["ResumeComponent"]
];









/***/ }),

/***/ "./src/app/blog/myself/myself.component.css":
/*!**************************************************!*\
  !*** ./src/app/blog/myself/myself.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\r\n  font-family: \"glyphicons\";\r\n\r\n  src: url('glyphicons-halflings-regular.woff');\r\n}\r\n\r\n\r\nh1 {\r\n  font-weight: bolder;\r\n  margin: 20px;\r\n\r\n}\r\n\r\n\r\np {\r\n  margin: 20px;\r\n  width: 40%;\r\n  color: black;\r\n  font-weight: 500;\r\n  background-image: repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0) 8%, rgba(255, 255, 255, 0.075) 10%, rgba(255, 255, 255, 0.075) 14%, rgba(255, 255, 255, 0.15) 14%, rgba(255, 255, 255, 0.15) 15%, rgba(255, 255, 255, 0.075) 17%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0) 36%, rgba(255, 255, 255, 0.075) 40%, rgba(255, 255, 255, 0.15) 42%, rgba(255, 255, 255, 0) 43%, rgba(255, 255, 255, 0) 55%, rgba(255, 255, 255, 0.075) 60%, rgba(255, 255, 255, 0.075) 66%, rgba(255, 255, 255, 0.15) 66%, rgba(255, 255, 255, 0.075) 70%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%), radial-gradient(ellipse farthest-corner, transparent, rgba(0, 0, 0, 0.2) 110%);\r\n  font-size: 5mm;\r\n}\r\n\r\n\r\nimg {\r\n  margin: 10px;\r\n  display: inline-block;\r\n}\r\n\r\n\r\n/* .wrapper {\r\n\r\n  background: url('../../../assets/background/background01.jpg') no-repeat center center fixed;\r\n  -webkit-background-size: cover;\r\n  -moz-background-size: cover;\r\n  -o-background-size: cover;\r\n  background-size: cover;\r\n  width: 100%;\r\n  height: 100%;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9teXNlbGYvbXlzZWxmLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7O0VBRTFCLDhDQUFvRTtDQUNyRTs7O0FBR0Q7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTs7Q0FFZDs7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsb3FCQUFvcUI7RUFDcHFCLGVBQWU7Q0FDaEI7OztBQUVEO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtDQUN2Qjs7O0FBRUQ7Ozs7Ozs7OztJQVNJIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9teXNlbGYvbXlzZWxmLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJnbHlwaGljb25zXCI7XHJcblxyXG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL2dseXBoaWNvbnMtaGFsZmxpbmdzLXJlZ3VsYXIud29mZlwiKTtcclxufVxyXG5cclxuXHJcbmgxIHtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIG1hcmdpbjogMjBweDtcclxuXHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMjBweDtcclxuICB3aWR0aDogNDAlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDglLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpIDE0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSAxNCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgMTUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KSAxNyUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDM2JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSkgNDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDQyJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA0MyUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNTUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KSA2MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpIDY2JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA2NiUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpIDcwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA3NSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSksIHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciwgdHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgMC4yKSAxMTAlKTtcclxuICBmb250LXNpemU6IDVtbTtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4vKiAud3JhcHBlciB7XHJcblxyXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmQvYmFja2dyb3VuZDAxLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufSAqL1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/blog/myself/myself.component.html":
/*!***************************************************!*\
  !*** ./src/app/blog/myself/myself.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='wrapper'>\n\n  <h1>Who is Marco DongChan Seo</h1>\n\n  <p>\n    I am a determined developer with a particular passion solving everyday problems in effective ways. Most recently I\n    completed a full stack web development program at Coding Dojo where I specialized in Python and MEAN. I am\n    dedicated\n    to always learning and looking for an opportunity where I can make a meaningful contribution to a team and a\n    community at large.\n  </p>\n\n  <img class='slide-3' src='../../../assets/background/slide-3.jpg'>\n\n</div>\n"

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

module.exports = "li {\r\n  margin: 30px;\r\n}\r\n\r\n.title {\r\n  font-weight: bolder;\r\n  font-size: 7mm;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  font-size: 5mm;\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline;\r\n  font-weight: bolder;\r\n  color: rgb(75, 75, 75);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9wb3Rmb2xpby9wb3Rmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLDJCQUEyQjtFQUMzQixvQkFBb0I7RUFDcEIsdUJBQXVCO0NBQ3hCIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9wb3Rmb2xpby9wb3Rmb2xpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkge1xyXG4gIG1hcmdpbjogMzBweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtc2l6ZTogN21tO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiA1bW07XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgY29sb3I6IHJnYig3NSwgNzUsIDc1KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/blog/potfolio/potfolio.component.html":
/*!*******************************************************!*\
  !*** ./src/app/blog/potfolio/potfolio.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <ul>\n    <li><span class='title'>Marco's Buy&Sell : </span><a class=\"hover-shadow hover-color\" href=\"http://ec2-3-16-91-225.us-east-2.compute.amazonaws.com/\"\n        target=\"_blank\">Let's\n        <span>g</span>o to Marco's Buy&Sell</a></li>\n    <li><span class='title'>Marco's Simple Movie Review : </span><a href=\"https://lit-temple-82702.herokuapp.com/movies\"\n        targer=\"_blank\">Let's\n        go to Marco's Movie Review</a></li>\n\n  </ul>\n</div>\n"

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

/***/ "./src/app/blog/resume/resume.component.css":
/*!**************************************************!*\
  !*** ./src/app/blog/resume/resume.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n  margin: 10px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.btn {\r\n  font-weight: bolder;\r\n  font-size: 5mm;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9ibG9nL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zaXplOiA1bW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/blog/resume/resume.component.html":
/*!***************************************************!*\
  !*** ./src/app/blog/resume/resume.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n    <div ngbDropdown class=\"d-inline-block\">\n      <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Select type of Files</button>\n      <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n        <a href=\"../../../assets/Marco-Resume-03  (1).docx\"><button class=\"dropdown-item\">Marco Resume.doc</button></a>\n        <br>\n        <a href=\"../../../assets/Marco-Resume-03  (1).pdf\"><button class=\"dropdown-item\">Marco Resume.pdf</button></a>\n\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/blog/resume/resume.component.ts":
/*!*************************************************!*\
  !*** ./src/app/blog/resume/resume.component.ts ***!
  \*************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
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

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/blog/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/blog/resume/resume.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n  display: inline-block;\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.btn {\r\n\r\n  font-weight: bolder;\r\n  color: black;\r\n  /* background: lightblue; */\r\n}\r\n\r\n.btn-glass {\r\n  flex-grow: 1;\r\n  text-align: center;\r\n  display: inline-block;\r\n  color: rgba(94, 94, 94, 0.7);\r\n  text-decoration: none;\r\n  padding: 0.65em 2em;\r\n  font-family: Lato;\r\n  font-weight: bolder;\r\n  border: 1px dotted transparent;\r\n  letter-spacing: 0.98pt;\r\n  text-transform: uppercase;\r\n  transition: background-position 2s cubic-bezier(0, 1, 0, 1), border-color 500ms, background-color 500ms;\r\n  position: relative;\r\n  background-attachment: fixed, scroll;\r\n  background-size: 100vw 100vh, cover;\r\n  background-position: center center, 0 0;\r\n  background-image: repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0) 8%, rgba(255, 255, 255, 0.075) 10%, rgba(255, 255, 255, 0.075) 14%, rgba(255, 255, 255, 0.15) 14%, rgba(255, 255, 255, 0.15) 15%, rgba(255, 255, 255, 0.075) 17%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0) 36%, rgba(255, 255, 255, 0.075) 40%, rgba(255, 255, 255, 0.15) 42%, rgba(255, 255, 255, 0) 43%, rgba(255, 255, 255, 0) 55%, rgba(255, 255, 255, 0.075) 60%, rgba(255, 255, 255, 0.075) 66%, rgba(255, 255, 255, 0.15) 66%, rgba(255, 255, 255, 0.075) 70%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%), radial-gradient(ellipse farthest-corner, transparent, rgba(0, 0, 0, 0.2) 110%);\r\n\r\n  text-shadow: -1px -1px rgba(255, 255, 255, 0.44), 1px 1px rgba(0, 0, 0, 0.38);\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);\r\n}\r\n\r\n.btn-glass:hover {\r\n  background-position: -100vw 0, 0 0;\r\n}\r\n\r\n.btn-glass:active {\r\n  background-position: -75vw 0, 0 0;\r\n  border-style: solid;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0NBQ2xCOztBQUVEOztFQUVFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsNEJBQTRCO0NBQzdCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQix3R0FBd0c7RUFDeEcsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxvQ0FBb0M7RUFDcEMsd0NBQXdDO0VBQ3hDLG9xQkFBb3FCOztFQUVwcUIsOEVBQThFO0VBQzlFLDRDQUE0QztDQUM3Qzs7QUFFRDtFQUNFLG1DQUFtQztDQUNwQzs7QUFFRDtFQUNFLGtDQUFrQztFQUNsQyxvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmJ0biB7XHJcblxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIC8qIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTsgKi9cclxufVxyXG5cclxuLmJ0bi1nbGFzcyB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6IHJnYmEoOTQsIDk0LCA5NCwgMC43KTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZzogMC42NWVtIDJlbTtcclxuICBmb250LWZhbWlseTogTGF0bztcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGJvcmRlcjogMXB4IGRvdHRlZCB0cmFuc3BhcmVudDtcclxuICBsZXR0ZXItc3BhY2luZzogMC45OHB0O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAycyBjdWJpYy1iZXppZXIoMCwgMSwgMCwgMSksIGJvcmRlci1jb2xvciA1MDBtcywgYmFja2dyb3VuZC1jb2xvciA1MDBtcztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZCwgc2Nyb2xsO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwdncgMTAwdmgsIGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIsIDAgMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA4JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSkgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KSAxNCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgMTQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDE1JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSkgMTclLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAzNiUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpIDQwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA0MiUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNDMlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDU1JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSkgNjAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KSA2NiUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNjYlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KSA3MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNzUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpLCByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIsIHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuMikgMTEwJSk7XHJcblxyXG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ0KSwgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMzgpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yOSk7XHJcbn1cclxuXHJcbi5idG4tZ2xhc3M6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMDB2dyAwLCAwIDA7XHJcbn1cclxuXHJcbi5idG4tZ2xhc3M6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNzV2dyAwLCAwIDA7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <!-- <div class=\"back\">\n    <div class=\"button_base b05_3d_roll\">\n      <div>01_Button</div>\n      <div>01_Button</div>\n    </div>\n  </div> -->\n\n  <div class='roll'>\n    <button class='btn btn-glass' [routerLink]='[\"/blog\", \"myself\"]'>About Me</button>\n\n  </div>\n  | <div><button class='btn btn-glass' [routerLink]='[\"/blog\", \"potfolio\"]'>Potfolio</button></div>\n\n  | <div><button class='btn btn-glass' [routerLink]='[\"/blog\", \"contact\"]'>Contact</button></div> | <div><button class='btn btn-glass'\n      [routerLink]='[\"/blog\", \"resume\"]'>Download\n      Resume</button></div>\n  |\n  <div><button class='btn btn-glass' [routerLink]='[\"/blog\", \"blog\"]'>Blog</button></div>\n</div>\n"

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