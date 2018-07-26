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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
        this.pageTitle = "Product Management";
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pm-root',
            template: "\n              <nav class='navbar navbar-expand navbar-light bg-light'>\n                  <a class='navbar-brand'>{{pageTitle}}</a>\n                    <ul class='nav nav-pills'>\n                        <li><a class='nav-link' [routerLink]=\"['/welcome']\">Home</a></li>\n                        <li><a class='nav-link' [routerLink]=\"['/products']\"> Product List</a></li>\n                        <li><a class='nav-link' [routerLink]=\"['/new']\"> New Product </a></li>\n                       \n                    </ul>\n             </nav>\n             <div class='container'>\n             <router-outlet></router-outlet>\n             </div>\n  "
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/welcome.component */ "./src/app/home/welcome.component.ts");
/* harmony import */ var _products_product_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/product.module */ "./src/app/products/product.module.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: 'welcome', component: _home_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"] },
                    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
                ]),
                _products_product_module__WEBPACK_IMPORTED_MODULE_6__["ProductModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/welcome.component.html":
/*!*********************************************!*\
  !*** ./src/app/home/welcome.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    {{pageTitle}}\n  </div>\n  <div class=\"card-body\">\n    <div class=\"container-fluid\">\n      <div class=\"text-center\">\n        <img src=\"./assets/images/logo.jpg\"\n             class=\"img-responsive right-block\"\n             style=\"max-height:300px;padding-bottom:50px\" />\n          \n      </div>\n     \n     \n      <div class=\"text-center\">Developed by:</div>\n      <div class=\"text-center\">\n        <h3>Rahul Navale</h3>\n      </div>\n\n      <div class=\"text-center\">@rahulnavale</div>\n      <div class=\"text-center\">\n        <a href=\"https://www.linkedin.com/in/rahul-navale-67491273\">My Profile</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/welcome.component.ts":
/*!*******************************************!*\
  !*** ./src/app/home/welcome.component.ts ***!
  \*******************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
        this.pageTitle = 'Welcome';
    }
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/home/welcome.component.html")
        })
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/products/product-delete.component.css":
/*!*******************************************************!*\
  !*** ./src/app/products/product-delete.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/product-delete.component.html":
/*!********************************************************!*\
  !*** ./src/app/products/product-delete.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/product-delete.component.ts":
/*!******************************************************!*\
  !*** ./src/app/products/product-delete.component.ts ***!
  \******************************************************/
/*! exports provided: ProductDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDeleteComponent", function() { return ProductDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDeleteComponent = /** @class */ (function () {
    function ProductDeleteComponent(route, router, productService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.errorMessage = '';
    }
    ProductDeleteComponent.prototype.ngOnInit = function () {
        var param = this.route.snapshot.paramMap.get('id');
        if (param) {
            var id = +param;
            this.delete(id);
        }
    };
    ProductDeleteComponent.prototype.delete = function (id) {
        var _this = this;
        console.log("Product to be deleted is + ", id);
        this.productService.deleteProduct(id).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
        this.router.navigate(['/welcome']);
    };
    ProductDeleteComponent.prototype.onBack = function () {
        this.router.navigate(['/products']);
    };
    ProductDeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./product-delete.component.html */ "./src/app/products/product-delete.component.html"),
            styles: [__webpack_require__(/*! ./product-delete.component.css */ "./src/app/products/product-delete.component.css")],
            providers: [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductDeleteComponent);
    return ProductDeleteComponent;
}());



/***/ }),

/***/ "./src/app/products/product-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/products/product-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n    margin: 13px;\r\n  }"

/***/ }),

/***/ "./src/app/products/product-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/products/product-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card'\n     *ngIf='product'>\n  <div class='card-header'>\n    {{pageTitle + ': ' + product.productName}}\n  </div>\n\n  <div class='card-body'>\n    <div class='row'>\n      <div class='col-md-8'>\n        <div class='row'>\n          <div class='col-md-4'>Name:</div>\n          <div class='col-md-8'>{{product.productName}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>Code:</div>\n          <div class='col-md-8'>{{product.productCode | lowercase | convertToSpaces: '-'}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>Description:</div>\n          <div class='col-md-8'>{{product.description}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>Availability:</div>\n          <div class='col-md-8'>{{product.releaseDate}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>Price:</div>\n          <div class='col-md-8'>{{product.price|currency:\"&#8377;\"}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>5 Star Rating:</div>\n          <div class='col-md-8'>\n            <pm-star [rating]='product.starRating'>\n            </pm-star>\n          </div>\n        </div>\n      </div>\n\n      <div class='col-md-4'>\n        <img class='center-block img-responsive'\n             [style.width.px]='200'\n             [style.margin.px]='2'\n             [src]='product.imageUrl'\n             >\n      </div>\n    </div>\n    <div class=\"btn-toolbar\">\n    <button class='btn btn-primary' style='width:80px' [routerLink]=\"['/update',product.productId]\">Update</button>\n    <button class='btn btn-danger' style='width:80px' [routerLink]=\"['/delete',product.productId]\">Delete</button>         \n    </div>\n  </div>\n\n  <div class='card-footer'>\n    <button class='btn btn-warning'\n            (click)='onBack()'\n            style='width:80px'>\n      <i class='fa fa-chevron-left'></i> Back\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/products/product-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/products/product-detail.component.ts ***!
  \******************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, router, productService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.pageTitle = 'Details';
        this.errorMessage = '';
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var param = this.route.snapshot.paramMap.get('id');
        if (param) {
            var id = +param;
            this.getProduct(id);
        }
    };
    ProductDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/products']);
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/products/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/products/product-detail.component.css")],
            providers: [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/products/product-detail.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/products/product-detail.guard.ts ***!
  \**************************************************/
/*! exports provided: ProductDetailGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailGuard", function() { return ProductDetailGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductDetailGuard = /** @class */ (function () {
    function ProductDetailGuard(router) {
        this.router = router;
    }
    ProductDetailGuard.prototype.canActivate = function (next, state) {
        var id = +next.url[1].path;
        if (isNaN(id) || id < 1) {
            alert("Invalid Product Id");
            this.router.navigate(["/products"]);
            return false;
        }
        ;
        return true;
    };
    ProductDetailGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductDetailGuard);
    return ProductDetailGuard;
}());



/***/ }),

/***/ "./src/app/products/product-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/products/product-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "thead{\r\n    color: #337AB7\r\n}"

/***/ }),

/***/ "./src/app/products/product-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/products/product-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card'>\r\n    <div class='card-header'>\r\n        {{pageTitle}}\r\n    </div>\r\n    <div class='card-body'>\r\n        <div class='row'>\r\n            <div class='col-md-2'>Filter by:</div>\r\n            <div class='col-md-4'>\r\n                <input type='text'\r\n                        [(ngModel)]= 'listFilter' />\r\n            </div>\r\n            </div>\r\n            <div class='row'>\r\n                <div class='col-md-6'>\r\n                    <h4>Filtered by: {{listFilter}}</h4>\r\n                </div>\r\n            </div>\r\n            <div class='table-responsive'>\r\n                <table class='table'\r\n                    *ngIf='products && products.length'>\r\n                    <thead>\r\n                        <tr>\r\n                            <th>\r\n                                <button class='btn btn-primary'\r\n                                (click)='toggleImage()'>\r\n                                {{showImage ? 'Hide' : 'Show'}}\r\n                                     Image\r\n                                </button>\r\n                            </th>\r\n                            <th>Product</th>\r\n                            <th>Code</th>\r\n                            <th>Available</th>\r\n                            <th>Price</th>\r\n                            <th>Star Rating</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor='let product of filteredProducts'>\r\n                            <td>\r\n                                    <a [routerLink]=\"['/products',product.productId]\"><img *ngIf='showImage'\r\n                                    [src]='product.imageUrl'\r\n                                    [title]='product.productName'\r\n                                    [style.width.px]='imageWidth'\r\n                                    [style.margin.px]='imageMargin'></a>\r\n                            </td>\r\n                            <td><a [routerLink]=\"['/products',product.productId]\">{{product.productName}}</a></td>\r\n                            <td>{{product.productCode | lowercase | convertToSpaces: '-' }}</td>\r\n                            <td>{{product.releaseDate}}</td>\r\n                            <td>{{product.price | currency:\"&#8377;\"}}</td>\r\n                            <td><pm-star [rating]='product.starRating' (ratingClicked)='onRatingClicked($event)'></pm-star></td>\r\n                          </tr>\r\n\r\n\r\n\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/products/product-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/products/product-list.component.ts ***!
  \****************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
        this.pageTitle = 'RSA Store';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
    }
    Object.defineProperty(ProductListComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
        },
        enumerable: true,
        configurable: true
    });
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product List: ' + message;
    };
    ProductListComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(function (product) {
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (products) {
            _this.products = products;
            _this.filteredProducts = _this.products;
        }, function (error) { return _this.errorMessage = error; });
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/products/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/products/product-list.component.css")],
            providers: [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/products/product-new.component.css":
/*!****************************************************!*\
  !*** ./src/app/products/product-new.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/product-new.component.html":
/*!*****************************************************!*\
  !*** ./src/app/products/product-new.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"card-body\">\n<div class=\"form-group\">\n  <h1>New Product </h1>\n  <form #form=\"ngForm\" (ngSubmit)=\"saveProduct(form.value)\" class=\"border\">\n  <table>\n  <tr>\n      <td><label>ProductID:</label></td>\n      <td><input type=\"text\" name=\"productId\" ngModel></td>\n  </tr>\n  <tr>\n      <td><label>ProductName:</label></td>\n      <td><input type=\"text\" name=\"productName\" ngModel></td>\n  </tr>\n  <tr>\n      <td><label>ProductCode:</label></td>\n      <td><input type=\"text\" name=\"productCode\" ngModel></td>\n  </tr>\n  <tr>\n        <td><label>ReleaseDate:</label></td>\n        <td><input type=\"text\" name=\"releaseDate\" ngModel></td>\n  </tr>\n   <tr>\n      <td> <label>Price:</label></td>\n      <td><input type=\"text\" name=\"price\" ngModel></td>\n  </tr>\n  <tr>\n    <td> <label>Description:</label></td>\n    <td><input type=\"text\" name=\"description\" ngModel></td>\n</tr>\n<tr>\n  <td> <label>StarRating:</label></td>\n  <td><input type=\"text\" name=\"starRating\" ngModel></td>\n</tr>\n\n<tr>\n  <td> <label>ImageUrl:</label></td>\n  <td><input type=\"text\" name=\"imageUrl\" ngModel></td>\n</tr>\n  \n  <tr>\n      <td><button type=\"submit\">Submit</button> </td>\n  </tr>\n</table>\n</form>\n</div>\n</div>\n<div class='card-footer'>\n  <button class='btn btn-outline-secondary'\n          (click)='onBack()'\n          style='width:80px'>\n    <i class='fa fa-chevron-left'></i> Back\n  </button>\n</div> -->\n\n\n\n<h1>New Product</h1>\n<hr>\n<div class=\"col-md-6\">\n  <form #form=\"ngForm\" (ngSubmit)=\"saveProduct(form.value)\">\n    <div class=\"form-group\">\n      <label for=\"productId\">ProductID</label>\n      <input (ngModel)=\"form.productId\" name=\"productId\" required id=\"productId\" type=\"number\" class=\"form-control\" placeholder=\"Product ID of Product..\" />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"productName\">ProductName</label>\n      <input (ngModel)=\"form.productName\" name=\"productName\" required productName=\"productName\" type=\"text\" class=\"form-control\" placeholder=\"Name of Product..\" />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"productCode\">ProductCode</label>\n      <input (ngModel)=\"form.productCode\" name=\"productCode\" required productCode=\"productCode\" type=\"text\" class=\"form-control\" placeholder=\"Code of Product..\" />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"releaseDate\">ReleaseDate</label>\n      <input (ngModel)=\"form.releaseDate\" name=\"releaseDate\" required releaseDate=\"releaseDate\" type=\"text\" class=\"form-control\" placeholder=\"Date of Product..\" />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"price\">Price</label>\n      <input (ngModel)=\"form.price\" name=\"price\" required productCode=\"price\" type=\"number\" class=\"form-control\" placeholder=\"Price of Product..\" />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <input (ngModel)=\"form.description\" name=\"description\" required description=\"description\" type=\"text\" class=\"form-control\" placeholder=\"Description of Product..\" />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"starRating\">StarRating</label>\n      <input (ngModel)=\"form.starRating\" name=\"starRating\" required starRating=\"starRating\" type=\"number\" class=\"form-control\" placeholder=\"Star Rating of Product..\" />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"imageUrl\">ImageUrl</label>\n      <input (ngModel)=\"form.imageUrl\" name=\"imageUrl\" required imageUrl=\"imageUrl\" type=\"text\" class=\"form-control\" placeholder=\"Image URL of Product..\" />\n    </div>\n  \n    <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary\">Save</button>\n    \n  </form>\n</div>\n\n<div class='card-footer'>\n  <button class='btn btn-outline-secondary'\n          (click)='onBack()'\n          style='width:80px'>\n    <i class='fa fa-chevron-left'></i> Back\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/products/product-new.component.ts":
/*!***************************************************!*\
  !*** ./src/app/products/product-new.component.ts ***!
  \***************************************************/
/*! exports provided: ProductNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductNewComponent", function() { return ProductNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductNewComponent = /** @class */ (function () {
    function ProductNewComponent(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    ProductNewComponent.prototype.ngOnInit = function () {
    };
    ProductNewComponent.prototype.saveProduct = function (formValues) {
        var _this = this;
        this.productService.saveProduct(formValues).subscribe(function () {
            _this.router.navigate(['/products']);
        });
    };
    ProductNewComponent.prototype.onBack = function () {
        this.router.navigate(['/welcome']);
    };
    ProductNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./product-new.component.html */ "./src/app/products/product-new.component.html"),
            styles: [__webpack_require__(/*! ./product-new.component.css */ "./src/app/products/product-new.component.css")],
            providers: [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductNewComponent);
    return ProductNewComponent;
}());



/***/ }),

/***/ "./src/app/products/product-update.component.css":
/*!*******************************************************!*\
  !*** ./src/app/products/product-update.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/product-update.component.html":
/*!********************************************************!*\
  !*** ./src/app/products/product-update.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>Update Product</h1>\n\n<hr>\n<div class=\"col-md-8\" *ngIf=\"product\">\n  <form #form=\"ngForm\" (ngSubmit)=\"update(form.product)\">\n    \n\n    <div class=\"form-group\">\n      <label for=\"productId\">ProductID</label>\n      <input type=\"text\"  name=\"productId\" [(ngModel)]=\"product.productId\" disabled class=\"form-control\" />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"productName\">ProductName</label>\n      <input type=\"text\"  name=\"productName\" [(ngModel)]=\"product.productName\" class=\"form-control\"  />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"productCode\">ProductCode</label>\n      <input type=\"text\" name=\"productCode\" [(ngModel)]=\"product.productCode\" class=\"form-control\"  />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"releaseDate\">ReleaseDate</label>\n      <input type=\"text\"  name=\"releaseDate\"   [(ngModel)]=\"product.releaseDate\" class=\"form-control\" />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"price\">Price</label>\n      <input type=\"number\" name=\"price\"[(ngModel)]=\"product.price\"  class=\"form-control\"  />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <input  type=\"text\" name=\"description\"  [(ngModel)]=\"product.description\" class=\"form-control\"  />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"starRating\">StarRating</label>\n      <input  type=\"number\"  name=\"starRating\"  [(ngModel)]=\"product.starRating\"  class=\"form-control\" />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"imageUrl\">ImageUrl</label>\n      <input type=\"text\"  name=\"imageUrl\" [(ngModel)]=\"product.imageUrl\" class=\"form-control\"  />\n    </div>\n  \n    <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary\">Save</button>\n    <button class='btn btn-outline-secondary'(click)='onBack()'style='width:80px'> <i class='fa fa-chevron-left'></i> Back </button>\n  </form>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/products/product-update.component.ts":
/*!******************************************************!*\
  !*** ./src/app/products/product-update.component.ts ***!
  \******************************************************/
/*! exports provided: ProductUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductUpdateComponent", function() { return ProductUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductUpdateComponent = /** @class */ (function () {
    function ProductUpdateComponent(route, router, productService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.errorMessage = '';
    }
    ProductUpdateComponent.prototype.ngOnInit = function () {
        var param = this.route.snapshot.paramMap.get('id');
        if (param) {
            var id = +param;
            this.getProduct(id);
        }
    };
    ProductUpdateComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
    };
    ProductUpdateComponent.prototype.update = function (form) {
        var _this = this;
        this.productService.updateProduct(this.product).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
        this.router.navigate(['/products']);
    };
    ProductUpdateComponent.prototype.onBack = function () {
        this.router.navigate(['/welcome']);
    };
    ProductUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./product-update.component.html */ "./src/app/products/product-update.component.html"),
            styles: [__webpack_require__(/*! ./product-update.component.css */ "./src/app/products/product-update.component.css")],
            providers: [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductUpdateComponent);
    return ProductUpdateComponent;
}());



/***/ }),

/***/ "./src/app/products/product.module.ts":
/*!********************************************!*\
  !*** ./src/app/products/product.module.ts ***!
  \********************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list.component */ "./src/app/products/product-list.component.ts");
/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail.component */ "./src/app/products/product-detail.component.ts");
/* harmony import */ var _shared_convert_to_spaces_pipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/convert-to-spaces.pipes */ "./src/app/shared/convert-to-spaces.pipes.ts");
/* harmony import */ var _product_detail_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-detail.guard */ "./src/app/products/product-detail.guard.ts");
/* harmony import */ var _product_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-new.component */ "./src/app/products/product-new.component.ts");
/* harmony import */ var _product_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-update.component */ "./src/app/products/product-update.component.ts");
/* harmony import */ var _product_delete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-delete.component */ "./src/app/products/product-delete.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'products', component: _product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"] },
                    { path: 'products/:id',
                        canActivate: [_product_detail_guard__WEBPACK_IMPORTED_MODULE_5__["ProductDetailGuard"]],
                        component: _product_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailComponent"] },
                    { path: 'new', component: _product_new_component__WEBPACK_IMPORTED_MODULE_6__["ProductNewComponent"] },
                    { path: 'update/:id', component: _product_update_component__WEBPACK_IMPORTED_MODULE_7__["ProductUpdateComponent"] },
                    { path: 'delete/:id', component: _product_delete_component__WEBPACK_IMPORTED_MODULE_8__["ProductDeleteComponent"] }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
            ],
            declarations: [
                _product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"],
                _product_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailComponent"],
                _shared_convert_to_spaces_pipes__WEBPACK_IMPORTED_MODULE_4__["ConvertToSpacesPipe"],
                _product_new_component__WEBPACK_IMPORTED_MODULE_6__["ProductNewComponent"],
                _product_update_component__WEBPACK_IMPORTED_MODULE_7__["ProductUpdateComponent"],
                _product_delete_component__WEBPACK_IMPORTED_MODULE_8__["ProductDeleteComponent"]
            ]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/products/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/products/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        //private productUrl = 'http://localhost/api/products/';
        //private productUrl = 'http://localhost:49951/api/products/';
        this.productUrl = 'https://myrsawebapi.azurewebsites.net/api/products/';
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.productUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return JSON.stringify(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.getProduct = function (id) {
        return this.http.get(this.productUrl + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.saveProduct = function (product) {
        console.log("Product to be added is " + product);
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post(this.productUrl, product, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.updateProduct = function (product) {
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.put(this.productUrl + product.productId, product, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.deleteProduct = function (id) {
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.delete(this.productUrl + id, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = "Ann Error occurred:" + err.status + ",err message is : " + err.message;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shared/convert-to-spaces.pipes.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/convert-to-spaces.pipes.ts ***!
  \***************************************************/
/*! exports provided: ConvertToSpacesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertToSpacesPipe", function() { return ConvertToSpacesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConvertToSpacesPipe = /** @class */ (function () {
    function ConvertToSpacesPipe() {
    }
    ConvertToSpacesPipe.prototype.transform = function (value, character) {
        return value.replace(character, ' ');
    };
    ConvertToSpacesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'convertToSpaces'
        })
    ], ConvertToSpacesPipe);
    return ConvertToSpacesPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _star_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./star.component */ "./src/app/shared/star.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _star_component__WEBPACK_IMPORTED_MODULE_3__["StarComponent"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _star_component__WEBPACK_IMPORTED_MODULE_3__["StarComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/star.component.css":
/*!*******************************************!*\
  !*** ./src/app/shared/star.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\n  overflow: hidden;\n color:orange;\n}\ndiv {\n  cursor: pointer;\n}\n\n"

/***/ }),

/***/ "./src/app/shared/star.component.html":
/*!********************************************!*\
  !*** ./src/app/shared/star.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\"\n     [style.width.px]=\"starWidth\"\n     [title]=\"rating\"\n     (click)=\"onClick()\">\n  <div style=\"width: 75px\">\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/star.component.ts":
/*!******************************************!*\
  !*** ./src/app/shared/star.component.ts ***!
  \******************************************/
/*! exports provided: StarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarComponent", function() { return StarComponent; });
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

var StarComponent = /** @class */ (function () {
    function StarComponent() {
        this.ratingClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    StarComponent.prototype.ngOnChanges = function () {
        this.starWidth = this.rating * 75 / 5;
    };
    StarComponent.prototype.onClick = function () {
        this.ratingClicked.emit("The rating " + this.rating + " was clicked");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StarComponent.prototype, "rating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StarComponent.prototype, "ratingClicked", void 0);
    StarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pm-star',
            template: __webpack_require__(/*! ./star.component.html */ "./src/app/shared/star.component.html"),
            styles: [__webpack_require__(/*! ./star.component.css */ "./src/app/shared/star.component.css")]
        })
    ], StarComponent);
    return StarComponent;
}());



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



// if (environment.production) {
//   enableProdMode();
// }
Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\NG6\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map