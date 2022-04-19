(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding\" scroll=\"false\">\n  \n    <ion-list-header>\n        <ion-label color=\"dark\" >Inicio de Sesion</ion-label>\n      </ion-list-header>\n\n    <img src=\"/assets/icon/imagen1.png\" class=\"center\"/>\n\n\n  <form class=\"p-4\" #formulario=\"ngForm\" (ngSubmit)=\"login()\" class=\"border\"  >\n\n\n                \n\n      <ion-item  color=\"transparent\">\n          <ion-label position=\"floating\">Email</ion-label>\n            <ion-input color=\"dark\"  type=\"email\"\n                        name=\"email\"\n                        pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"\n                        [(ngModel)]=\"loginUser.email\"\n                        requiered>\n              </ion-input>\n       </ion-item> \n\n       <ion-item color=\"transparent\">\n          <ion-label position=\"floating\">Password</ion-label>\n            <ion-input color=\"dark\"   type=\"password\"\n                        name=\"password\"\n                        pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"\n                        [(ngModel)]=\"loginUser.password\"\n                        requiered>\n              </ion-input>\n       </ion-item>\n\n\n\n    <ion-button expand=\"block\" type=\"submit\"\n                [disabled]=\"formulario.valid\" >\n                Ingresar\n    </ion-button>\n\n  </form>\n\n\n</ion-content>\n\n<!--\n  <ion-content>\n\n\n    <ion-slides class=\"mainSlide\" #slidePrincipal>\n      \n      <ion-slide>\n  \n        <form (ngSubmit)=\"login( fLogin )\" #fLogin=\"ngForm\">\n          <ion-grid fixed>\n  \n            <ion-row>\n              <ion-col>\n                <img src=\"/assets/avatars/av-1.png\">\n              </ion-col>\n            </ion-row>\n          \n            <ion-row>\n              <ion-col>\n                \n                  <ion-list>\n                    \n                    <ion-item>\n                      <ion-label>Email</ion-label>\n                      <ion-input name=\"email\"\n                                  type=\"email\"\n                                  [(ngModel)]=\"loginUser.email\"\n                                  required></ion-input>\n                    </ion-item>\n  \n                    <ion-item>\n                      <ion-label>Password</ion-label>\n                      <ion-input name=\"password\"\n                                  type=\"password\"\n                                  [(ngModel)]=\"loginUser.password\"\n                                  required></ion-input>\n                    </ion-item>\n  \n                  </ion-list>\n              </ion-col>\n            </ion-row>\n  \n            <ion-row>\n              <ion-col>\n                <ion-button type=\"submit\"\n                            color=\"tertiary\"\n                            shape=\"round\">\n                  Login\n                </ion-button>\n              </ion-col>\n            </ion-row>\n  \n          </ion-grid>\n        </form>\n      \n  \n  \n      </ion-slide>\n    </ion-slides>\n</ion-content>\n\n\n\n\n\n-->"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainSlide, .mainSlide ion-slide {\n  width: 100%;\n  height: 100%;\n}\n\nimg {\n  width: 120px;\n}\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n.form {\n  --border-radius: 20px;\n}\n\nion-content {\n  --background: url(\"/assets/icon/fond2.png\") center no-repeat ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNrYm9va2M1L0Rlc2t0b3AvY2hhdENvcnBvSmFuL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtBQ0RKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLHFCQUFBO0FDQUo7O0FESUE7RUFDRSw2REFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4ubWFpblNsaWRlLCAubWFpblNsaWRlIGlvbi1zbGlkZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxufVxyXG4uY2VudGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIFxyXG59ICAgXHJcblxyXG5pb24tY29udGVudHtcclxuICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pY29uL2ZvbmQyLnBuZycpIGNlbnRlciAgbm8tcmVwZWF0IDtcclxufVxyXG5cclxuLy8gIHJnYigxMDAsIDk4LCA5OCkiLCIubWFpblNsaWRlLCAubWFpblNsaWRlIGlvbi1zbGlkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLmNlbnRlciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9ybSB7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaWNvbi9mb25kMi5wbmdcIikgY2VudGVyIG5vLXJlcGVhdCA7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ui-service.service */ "./src/app/services/ui-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_push_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/push.service */ "./src/app/services/push.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");








let LoginPage = class LoginPage {
    constructor(usuarioService, navController, uiService, router, pushService, localNotifications) {
        this.usuarioService = usuarioService;
        this.navController = navController;
        this.uiService = uiService;
        this.router = router;
        this.pushService = pushService;
        this.localNotifications = localNotifications;
        /** CREDENCIALES DE PRUEBA, BORRAR Y DEJAR LIMPIO '' */
        /*  loginUser = {
          email: 'yot@gmail.com',
          password: '123456'
        };
      */
        this.loginUser = {
            email: '',
            password: ''
        };
    }
    ngOnInit() {
        // console.log('ACTIVADA' + this.backgroundMode.isActive());
        // this.notificacionLocal();
    }
    notificacionLocal() {
        this.localNotifications.schedule({
            id: 1,
            text: 'Single ILocalNotification'
        });
    }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            localStorage.setItem('email', this.loginUser.email);
            //if ( fLogin.invalid ) { return; }
            const valido = yield this.usuarioService.login(this.loginUser.email, this.loginUser.password);
            // console.log(valido);
            if (valido) {
                // navegar al tabs de inicio
                this.navController.navigateRoot('/main/tabs/tab1', { animated: false });
                this.pushService.configuracionInicial();
            }
            else {
                // mostrar alerta de usuario y contraseña no correctos
                this.uiService.alertaInformativa('Usuario y contraseña no son correctos.');
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__["UiServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_push_service__WEBPACK_IMPORTED_MODULE_6__["PushService"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__["LocalNotifications"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__["UiServiceService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _services_push_service__WEBPACK_IMPORTED_MODULE_6__["PushService"],
        _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__["LocalNotifications"]])
], LoginPage);

/*




  login() {

    localStorage.setItem('email', this.loginUser.email);

    this.usuarioService.login(this.loginUser.email, this.loginUser.password)
      .then( () => {
        this.router.navigateByUrl('/main/tabs/tab1');
      });
  }









  */


/***/ }),

/***/ "./src/app/services/ui-service.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/ui-service.service.ts ***!
  \************************************************/
/*! exports provided: UiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiServiceService", function() { return UiServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let UiServiceService = class UiServiceService {
    constructor(alertController, toastController) {
        this.alertController = alertController;
        this.toastController = toastController;
    }
    alertaInformativa(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                subHeader: 'Error',
                message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                position: 'top',
                duration: 1500
            });
            toast.present();
        });
    }
};
UiServiceService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
UiServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], UiServiceService);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map