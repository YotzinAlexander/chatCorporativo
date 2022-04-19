import { Injectable, EventEmitter } from '@angular/core';
import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';
import { async } from '@angular/core/testing';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  mensajes: OSNotificationPayload[] = [
   /*  {
       title: 'Titulo de la push',
       body: 'Este es el body de la push',
       date: new Date()
     }*/
  ];

  userId: string;

 pushListener = new EventEmitter<OSNotificationPayload>();



  constructor( private oneSignal: OneSignal,
               private usuarioService: UsuarioService) {}

  async configuracionInicial() {
                             // ONESIGNAL                          // FireBASE
this.oneSignal.startInit('40407aec-b13e-427f-9f55-ffa52e6d8ad6', '144813111422');

this.oneSignal.inFocusDisplaying( this.oneSignal.OSInFocusDisplayOption.Notification );

this.oneSignal.handleNotificationReceived().subscribe( ( noti ) => {
// do something when notification is received
console.log('Notificación recibida', noti );
this.notificacionRecibida( noti );
});

this.oneSignal.handleNotificationOpened().subscribe( async( noti ) => {
// do something when a notification is opened
console.log('Notificación abierta', noti );
await this.notificacionRecibida( noti.notification );
});


// Obtener ID del suscriptor
this.oneSignal.getIds().then( async info => {

this.userId = info.userId ;
// Guarda el ID en el localstorage
await localStorage.setItem('idOnesignal', this.userId);
// GUARDAR ID DENTRO DE LA BD, PARA UN FUTURO ENVIAR NOTIFICACIONES.
this.usuarioService.enviaOneSignal(this.userId);
console.log(this.userId);
});

this.oneSignal.endInit();

}
  async notificacionRecibida( noti: OSNotification ) {

    const payload = noti.payload;

    const existePush = this.mensajes.find( mensaje => mensaje.notificationID === payload.notificationID );

    if ( existePush ) {
      return;
    }

    this.mensajes.unshift( payload );

  }

}
