import * as tslib_1 from "tslib";
import { Injectable, EventEmitter } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { UsuarioService } from './usuario.service';
let PushService = class PushService {
    constructor(oneSignal, usuarioService) {
        this.oneSignal = oneSignal;
        this.usuarioService = usuarioService;
        this.mensajes = [
        /*  {
            title: 'Titulo de la push',
            body: 'Este es el body de la push',
            date: new Date()
          }*/
        ];
        this.pushListener = new EventEmitter();
    }
    configuracionInicial() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // ONESIGNAL                          // FireBASE
            this.oneSignal.startInit('40407aec-b13e-427f-9f55-ffa52e6d8ad6', '144813111422');
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
            this.oneSignal.handleNotificationReceived().subscribe((noti) => {
                // do something when notification is received
                console.log('Notificación recibida', noti);
                this.notificacionRecibida(noti);
            });
            this.oneSignal.handleNotificationOpened().subscribe((noti) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                // do something when a notification is opened
                console.log('Notificación abierta', noti);
                yield this.notificacionRecibida(noti.notification);
            }));
            // Obtener ID del suscriptor
            this.oneSignal.getIds().then((info) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.userId = info.userId;
                // Guarda el ID en el localstorage
                yield localStorage.setItem('idOnesignal', this.userId);
                this.usuarioService.enviaOneSignal(this.userId);
                console.log(this.userId);
            }));
            this.oneSignal.endInit();
        });
    }
    notificacionRecibida(noti) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const payload = noti.payload;
            const existePush = this.mensajes.find(mensaje => mensaje.notificationID === payload.notificationID);
            if (existePush) {
                return;
            }
            this.mensajes.unshift(payload);
        });
    }
};
PushService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [OneSignal,
        UsuarioService])
], PushService);
export { PushService };
//# sourceMappingURL=push.service.js.map