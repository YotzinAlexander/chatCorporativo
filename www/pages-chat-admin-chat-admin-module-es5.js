(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-admin-chat-admin-module"],{

/***/ "./src/app/pages/chat-admin/chat-admin.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/chat-admin/chat-admin.module.ts ***!
  \*******************************************************/
/*! exports provided: ChatAdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatAdminPageModule", function() { return ChatAdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-admin.page */ "./src/app/pages/chat-admin/chat-admin.page.ts");







var routes = [
    {
        path: '',
        component: _chat_admin_page__WEBPACK_IMPORTED_MODULE_6__["ChatAdminPage"]
    }
];
var ChatAdminPageModule = /** @class */ (function () {
    function ChatAdminPageModule() {
    }
    ChatAdminPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_admin_page__WEBPACK_IMPORTED_MODULE_6__["ChatAdminPage"]]
        })
    ], ChatAdminPageModule);
    return ChatAdminPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-chat-admin-chat-admin-module-es5.js.map