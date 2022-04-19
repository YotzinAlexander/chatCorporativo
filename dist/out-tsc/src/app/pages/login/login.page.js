import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UiServiceService } from '../../services/ui-service.service';
import { Router } from '@angular/router';
import { PushService } from '../../services/push.service';
let LoginPage = class LoginPage {
    constructor(usuarioService, navController, uiService, router, pushService) {
        this.usuarioService = usuarioService;
        this.navController = navController;
        this.uiService = uiService;
        this.router = router;
        this.pushService = pushService;
        this.loginUser = {
            email: '',
            password: ''
        };
    }
    ngOnInit() {
        // console.log('ACTIVADA' + this.backgroundMode.isActive());
    }
    login() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            localStorage.setItem('email', this.loginUser.email);
            //if ( fLogin.invalid ) { return; }
            const valido = yield this.usuarioService.login(this.loginUser.email, this.loginUser.password);
            if (valido) {
                // navegar al tabs
                this.navController.navigateRoot('/main/tabs/tab1', { animated: true });
                this.pushService.configuracionInicial();
            }
            else {
                // mostrar alerta de usuario y contraseña no correctos
                this.uiService.alertaInformativa('Usuario y contraseña no son correctos.');
            }
        });
    }
};
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [UsuarioService,
        NavController,
        UiServiceService,
        Router,
        PushService])
], LoginPage);
export { LoginPage };
/*




  login() {

    localStorage.setItem('email', this.loginUser.email);

    this.usuarioService.login(this.loginUser.email, this.loginUser.password)
      .then( () => {
        this.router.navigateByUrl('/main/tabs/tab1');
      });
  }









  */
//# sourceMappingURL=login.page.js.map