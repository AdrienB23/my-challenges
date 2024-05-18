"use strict";
(self["webpackChunkmy_challenges"] = self["webpackChunkmy_challenges"] || []).push([["main"],{

/***/ 2948:
/*!**********************************************!*\
  !*** ./modules/article-preview/src/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticlePreviewComponent: () => (/* reexport safe */ _lib_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_0__.ArticlePreviewComponent),
/* harmony export */   ShareComponent: () => (/* reexport safe */ _lib_article_preview_share_share_component__WEBPACK_IMPORTED_MODULE_1__.ShareComponent)
/* harmony export */ });
/* harmony import */ var _lib_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/article-preview/article-preview.component */ 5126);
/* harmony import */ var _lib_article_preview_share_share_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/article-preview/share/share.component */ 8950);



/***/ }),

/***/ 5126:
/*!**************************************************************************************!*\
  !*** ./modules/article-preview/src/lib/article-preview/article-preview.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticlePreviewComponent: () => (/* binding */ ArticlePreviewComponent)
/* harmony export */ });
/* harmony import */ var _services_article_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/article.service */ 1174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 310);



function ArticlePreviewComponent_section_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const article_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", article_r2.profileSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](article_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](article_r2.date);
  }
}
function ArticlePreviewComponent_section_1_app_share_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-share");
  }
}
function ArticlePreviewComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "article", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "article", 2)(3, "div", 3)(4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ArticlePreviewComponent_section_1_div_9_Template, 7, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ArticlePreviewComponent_section_1_app_share_11_Template, 1, 0, "app-share", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function ArticlePreviewComponent_section_1_Template_div_mouseover_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.shareHovered(true));
    })("mouseleave", function ArticlePreviewComponent_section_1_Template_div_mouseleave_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.shareHovered(false));
    })("click", function ArticlePreviewComponent_section_1_Template_div_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.shareClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const article_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("background-image: url(", article_r2.pictureSrc, ");");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](article_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](article_r2.presentation);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r2.mobileClicked ? "bottom-clicked" : "bottom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.mobileClicked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r2.shareClick ? "share-clicked" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.shareClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.shareHover || ctx_r2.shareClick ? "assets/images/icon-share-white.svg" : "assets/images/icon-share.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
class ArticlePreviewComponent {
  constructor(articleService) {
    this.articleService = articleService;
    this.articles = [];
    this.shareHover = false;
    this.shareClick = false;
    this.mobileClicked = false;
    this.window = window;
    this.getScreenSize();
  }
  getScreenSize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.mobileClicked = this.shareClick && this.screenWidth <= 800;
  }
  ngOnInit() {
    this.getArticles();
  }
  getArticles() {
    this.articleService.getArticles().subscribe(articles => this.articles = articles);
    console.log(this.articles);
  }
  shareHovered(value) {
    this.shareHover = value;
    this.shareColorChange(value || this.shareClick);
  }
  shareClicked() {
    this.shareClick = !this.shareClick;
    this.shareColorChange(this.shareClick || this.shareHover);
    this.mobileClicked = this.shareClick && this.screenWidth <= 800;
  }
  shareColorChange(value) {
    const shareElement = document.getElementById("share");
    if (shareElement !== null) {
      shareElement.style.backgroundColor = value ? 'hsl(214, 17%, 51%)' : 'hsl(210, 46%, 95%)';
    }
  }
  static #_ = this.ɵfac = function ArticlePreviewComponent_Factory(t) {
    return new (t || ArticlePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_article_service__WEBPACK_IMPORTED_MODULE_0__.ArticleService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ArticlePreviewComponent,
    selectors: [["app-article-preview"]],
    hostBindings: function ArticlePreviewComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function ArticlePreviewComponent_resize_HostBindingHandler($event) {
          return ctx.getScreenSize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
      }
    },
    decls: 2,
    vars: 1,
    consts: [[4, "ngFor", "ngForOf"], [1, "image"], [1, "description"], [1, "description-text"], ["class", "profile", 4, "ngIf"], [4, "ngIf"], ["id", "share", 1, "share", 3, "mouseover", "mouseleave", "click"], ["alt", "Share", 3, "src"], [1, "profile"], ["alt", "Profile picture", 1, "profile-picture", 3, "src"], [1, "profile-text"], [1, "date"]],
    template: function ArticlePreviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ArticlePreviewComponent_section_1_Template, 14, 12, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.articles);
      }
    },
    styles: ["*[_ngcontent-%COMP%] {\n    font-family: 'Manrope', serif;\n    font-size: 13px;\n}\n\n[_ngcontent-%COMP%]:root {\n    --share-color: #6E8098;\n}\n\n\n\n\nmain[_ngcontent-%COMP%] {\n    background-color: var(--light-grayish-blue);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n}\n\nsection[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: 55%;\n    border-radius: 10px;\n    background: #fff;\n    box-shadow: 0 40px 40px 0 rgba(72, 85, 106, 0.05);\n}\n\n.image[_ngcontent-%COMP%] {\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    border-radius: 10px 0 0 10px;\n    width: 75%;\n}\n\n.description[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    padding-top: 30px;\n    row-gap: 10px;\n}\n\n.description-text[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    row-gap: 10px;\n    padding: 0 40px 0 40px;\n}\n\n.bottom[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px 45px 30px 40px;\n}\n\n.profile[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    column-gap: 15px;\n}\n\n.share[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 35px;\n    height: 35px;\n    border-radius: 100%;\n    background-color: var(--light-grayish-blue);\n    cursor: pointer;\n    color: #6E8098;\n}\n\n.share[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50%;\n}\n\n.share-clicked[_ngcontent-%COMP%] {\n    position: relative;\n}\n\napp-share[_ngcontent-%COMP%] {\n    position: absolute;\n    width: max-content;\n    top: -80px;\n    left: -110px;\n}\n\n\n\n\n\n.profile-picture[_ngcontent-%COMP%] {\n    border-radius: 100%;\n    width: 40px;\n}\n\n\n\n\nh1[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: 700;\n    color: var(--very-dark-grayish-blue);\n    line-height: 30px;\n}\n\np[_ngcontent-%COMP%] {\n    font-weight: 500;\n    color: var(--desaturated-dark-blue);\n    line-height: 20px;\n}\n\nh2[_ngcontent-%COMP%] {\n    font-weight: 700;\n    color: var(--very-dark-grayish-blue);\n}\n\n.date[_ngcontent-%COMP%] {\n    color: var(--grayish-blue);\n}\n\n@media (max-width: 800px) {\n    section[_ngcontent-%COMP%] {\n        min-height: 500px;\n        flex-direction: column;\n        width: 90%;\n        margin: 75px 0 75px 0;\n    }\n\n    .image[_ngcontent-%COMP%] {\n        background-position: top;\n        border-radius: 10px 10px 0 0;\n        width: 100%;\n        flex: 1;\n    }\n\n    .description-text[_ngcontent-%COMP%] {\n        padding: 0 35px 10px 35px;\n    }\n\n    .bottom[_ngcontent-%COMP%] {\n        padding: 20px 35px 20px 35px;\n    }\n\n    .bottom-clicked[_ngcontent-%COMP%] {\n        border-radius: 0 0 10px 10px;\n        padding: 15px 35px 15px 35px;\n        background-color: var(--very-dark-grayish-blue);\n    }\n\n    .share-clicked[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        position: initial;\n        width: 100%;\n    }\n\n    app-share[_ngcontent-%COMP%] {\n        position: initial;\n        display: flex;\n        align-items: center;\n    }\n\n    h1[_ngcontent-%COMP%] {\n        font-size: 16px;\n        line-height: 24px;\n    }\n}\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL21vZHVsZXMvYXJ0aWNsZS1wcmV2aWV3L3NyYy9saWIvYXJ0aWNsZS1wcmV2aWV3L2FydGljbGUtcHJldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUEsZUFBZTs7QUFFZjtJQUNJLDJDQUEyQztJQUMzQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsMkNBQTJDO0lBQzNDLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQSxtQkFBbUI7OztBQUduQjtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUEsZ0JBQWdCOztBQUVoQjtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQ0FBbUM7SUFDbkMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0QixVQUFVO1FBQ1YscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksd0JBQXdCO1FBQ3hCLDRCQUE0QjtRQUM1QixXQUFXO1FBQ1gsT0FBTztJQUNYOztJQUVBO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksNEJBQTRCO0lBQ2hDOztJQUVBO1FBQ0ksNEJBQTRCO1FBQzVCLDRCQUE0QjtRQUM1QiwrQ0FBK0M7SUFDbkQ7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsV0FBVztJQUNmOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWFucm9wZScsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgICAtLXNoYXJlLWNvbG9yOiAjNkU4MDk4O1xyXG59XHJcblxyXG4vKiBDb250YWluZXJzICovXHJcblxyXG5tYWluIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXlpc2gtYmx1ZSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCA0MHB4IDQwcHggMCByZ2JhKDcyLCA4NSwgMTA2LCAwLjA1KTtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICByb3ctZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHJvdy1nYXA6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDQwcHggMCA0MHB4O1xyXG59XHJcblxyXG4uYm90dG9tIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweCA0NXB4IDMwcHggNDBweDtcclxufVxyXG5cclxuLnByb2ZpbGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2x1bW4tZ2FwOiAxNXB4O1xyXG59XHJcblxyXG4uc2hhcmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXlpc2gtYmx1ZSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzZFODA5ODtcclxufVxyXG5cclxuLnNoYXJlIGltZyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uc2hhcmUtY2xpY2tlZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmFwcC1zaGFyZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICB0b3A6IC04MHB4O1xyXG4gICAgbGVmdDogLTExMHB4O1xyXG59XHJcblxyXG4vKiBQaWN0dXJlcyBzdHlsZSAqL1xyXG5cclxuXHJcbi5wcm9maWxlLXBpY3R1cmUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG59XHJcblxyXG4vKiBUZXh0cyBzdHlsZSAqL1xyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiB2YXIoLS12ZXJ5LWRhcmstZ3JheWlzaC1ibHVlKTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tZGVzYXR1cmF0ZWQtZGFyay1ibHVlKTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IHZhcigtLXZlcnktZGFyay1ncmF5aXNoLWJsdWUpO1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JheWlzaC1ibHVlKTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICBzZWN0aW9uIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiA3NXB4IDAgNzVweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWFnZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24tdGV4dCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAzNXB4IDEwcHggMzVweDtcclxuICAgIH1cclxuXHJcbiAgICAuYm90dG9tIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDM1cHggMjBweCAzNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3R0b20tY2xpY2tlZCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDM1cHggMTVweCAzNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZlcnktZGFyay1ncmF5aXNoLWJsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaGFyZS1jbGlja2VkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcC1zaGFyZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8950:
/*!**********************************************************************************!*\
  !*** ./modules/article-preview/src/lib/article-preview/share/share.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShareComponent: () => (/* binding */ ShareComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 310);

class ShareComponent {
  static #_ = this.ɵfac = function ShareComponent_Factory(t) {
    return new (t || ShareComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ShareComponent,
    selectors: [["app-share"]],
    decls: 9,
    vars: 0,
    consts: [[1, "share-container"], [1, "content"], [1, "icons-container"], ["src", "assets/images/icon-facebook.svg", "alt", "Facebook"], ["src", "assets/images/icon-twitter.svg", "alt", "Twitter"], ["src", "assets/images/icon-pinterest.svg", "alt", "Pinterest"], [1, "triangle"]],
    template: function ShareComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SHARE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3)(6, "img", 4)(7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["\n\n\n.share-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.content[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    column-gap: 15px;\n    background-color: var(--very-dark-grayish-blue);\n    padding: 15px 35px 15px 35px;\n    border-radius: 10px;\n    box-shadow: 0px 5px 9px 0px rgba(72, 85, 106, 0.35);\n}\n\n.icons-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    column-gap: 15px;\n}\n\n\n\n\np[_ngcontent-%COMP%] {\n    color: var(--grayish-blue);\n    letter-spacing: 7px;\n}\n\nimg[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n\n\n\n.triangle[_ngcontent-%COMP%] {\n    width: 0px;\n    height: 0px;\n    border-style: solid;\n    border-width: 12px 11.5px 0 11.5px;\n    border-color: var(--very-dark-grayish-blue) transparent transparent transparent;\n    transform: rotate(0deg);\n}\n\n\n@media (max-width: 800px) {\n    .triangle[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    .content[_ngcontent-%COMP%] {\n        padding: 0;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL21vZHVsZXMvYXJ0aWNsZS1wcmV2aWV3L3NyYy9saWIvYXJ0aWNsZS1wcmV2aWV3L3NoYXJlL3NoYXJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTs7QUFFZjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiwrQ0FBK0M7SUFDL0MsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUEscUJBQXFCOztBQUVyQjtJQUNJLDBCQUEwQjtJQUMxQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBLFdBQVc7O0FBRVg7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsK0VBQStFO0lBQy9FLHVCQUF1QjtBQUMzQjs7O0FBR0E7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbnRhaW5lcnMgKi9cclxuXHJcbi5zaGFyZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2x1bW4tZ2FwOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmVyeS1kYXJrLWdyYXlpc2gtYmx1ZSk7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDM1cHggMTVweCAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggOXB4IDBweCByZ2JhKDcyLCA4NSwgMTA2LCAwLjM1KTtcclxufVxyXG5cclxuLmljb25zLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sdW1uLWdhcDogMTVweDtcclxufVxyXG5cclxuLyogVGV4dHMgYW5kIEltYWdlcyAqL1xyXG5cclxucCB7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JheWlzaC1ibHVlKTtcclxuICAgIGxldHRlci1zcGFjaW5nOiA3cHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIE90aGVycyAqL1xyXG5cclxuLnRyaWFuZ2xlIHtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDEycHggMTEuNXB4IDAgMTEuNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS12ZXJ5LWRhcmstZ3JheWlzaC1ibHVlKSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAudHJpYW5nbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1174:
/*!*********************************************************************!*\
  !*** ./modules/article-preview/src/lib/services/article.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticleService: () => (/* binding */ ArticleService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 310);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4485);



class ArticleService {
  constructor(http) {
    this.http = http;
    this.articleUrl = 'api/articles';
  }
  getArticles() {
    return this.http.get(this.articleUrl);
  }
  static #_ = this.ɵfac = function ArticleService_Factory(t) {
    return new (t || ArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ArticleService,
    factory: ArticleService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 409:
/*!*****************************************!*\
  !*** ./modules/challenges/src/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChallengesModule: () => (/* reexport safe */ _lib_challenges_module__WEBPACK_IMPORTED_MODULE_0__.ChallengesModule)
/* harmony export */ });
/* harmony import */ var _lib_challenges_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/challenges.module */ 3285);


/***/ }),

/***/ 3285:
/*!*********************************************************!*\
  !*** ./modules/challenges/src/lib/challenges.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChallengesModule: () => (/* binding */ ChallengesModule)
/* harmony export */ });
/* harmony import */ var _my_challenges_article_preview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @my-challenges/article-preview */ 2948);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 1142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 310);




class ChallengesModule {
  static #_ = this.ɵfac = function ChallengesModule_Factory(t) {
    return new (t || ChallengesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ChallengesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChallengesModule, {
    declarations: [_my_challenges_article_preview__WEBPACK_IMPORTED_MODULE_0__.ArticlePreviewComponent, _my_challenges_article_preview__WEBPACK_IMPORTED_MODULE_0__.ShareComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_my_challenges_article_preview__WEBPACK_IMPORTED_MODULE_0__.ArticlePreviewComponent, _my_challenges_article_preview__WEBPACK_IMPORTED_MODULE_0__.ShareComponent]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_my_challenges_article_preview__WEBPACK_IMPORTED_MODULE_0__.ArticlePreviewComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _my_challenges_article_preview__WEBPACK_IMPORTED_MODULE_0__.ShareComponent], []);

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 310);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4354);


class AppComponent {
  constructor() {
    this.title = 'my-challenges';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4150);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 4354);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routes */ 2181);
/* harmony import */ var _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./challenges/challenges.component */ 1214);
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./in-memory-data.service */ 2985);
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-in-memory-web-api */ 5217);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 4485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 1142);
/* harmony import */ var _my_challenges_challenges__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @my-challenges/challenges */ 409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 310);













class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_8__.HttpClientInMemoryWebApiModule.forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_3__.InMemoryDataService, {
      dataEncapsulation: false
    }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_1__.appRoutes), _my_challenges_challenges__WEBPACK_IMPORTED_MODULE_4__.ChallengesModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_2__.ChallengesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_8__.HttpClientInMemoryWebApiModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _my_challenges_challenges__WEBPACK_IMPORTED_MODULE_4__.ChallengesModule]
  });
})();

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appRoutes: () => (/* binding */ appRoutes)
/* harmony export */ });
/* harmony import */ var _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./challenges/challenges.component */ 1214);
/* harmony import */ var _my_challenges_article_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @my-challenges/article-preview */ 2948);


const appRoutes = [{
  path: '',
  component: _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_0__.ChallengesComponent
}, {
  path: 'articles',
  component: _my_challenges_article_preview__WEBPACK_IMPORTED_MODULE_1__.ArticlePreviewComponent
}];

/***/ }),

/***/ 1214:
/*!****************************************************!*\
  !*** ./src/app/challenges/challenges.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChallengesComponent: () => (/* binding */ ChallengesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 310);

class ChallengesComponent {
  static #_ = this.ɵfac = function ChallengesComponent_Factory(t) {
    return new (t || ChallengesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ChallengesComponent,
    selectors: [["app-challenges"]],
    decls: 2,
    vars: 0,
    template: function ChallengesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "challenges works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2985:
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InMemoryDataService: () => (/* binding */ InMemoryDataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 310);

class InMemoryDataService {
  createDb() {
    const articles = [{
      id: 1,
      title: 'Shift the overall look and feel by adding these wonderful ' + 'touches to furniture in your home',
      presentation: 'Ever been in a room and felt like something was ' + 'missing? Perhaps it felt slightly bare and uninviting. I’ve got ' + 'some simple tips to help you make any room feel complete.',
      pictureSrc: 'assets/images/drawers.jpg',
      profileSrc: 'assets/images/avatar-michelle.jpg',
      name: 'Michelle Appleton',
      date: '28 Jun 2020'
    }];
    return {
      articles
    };
  }
  static #_ = this.ɵfac = function InMemoryDataService_Factory(t) {
    return new (t || InMemoryDataService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: InMemoryDataService,
    factory: InMemoryDataService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map