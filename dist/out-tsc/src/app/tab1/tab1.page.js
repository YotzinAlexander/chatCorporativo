import * as tslib_1 from "tslib";
import { Component, ApplicationRef } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { ChatService } from '../services/chat.service';
import { ModalController, Platform, NavController } from '@ionic/angular';
import { Tab2Page } from '../tab2/tab2.page';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { PushService } from '../services/push.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
let Tab1Page = class Tab1Page {
    constructor(pushService, aplicationRef, platform, splashScreen, usuarioService, chatService, modal, chat, navController, localNotifications) {
        this.pushService = pushService;
        this.aplicationRef = aplicationRef;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.usuarioService = usuarioService;
        this.chatService = chatService;
        this.modal = modal;
        this.chat = chat;
        this.navController = navController;
        this.localNotifications = localNotifications;
        this.grupos = [];
        this.selected = false;
        this.nombre = '';
        this.grupo = '';
        this.grupoSelect = '';
        this.escribiendo = false;
        this.url = '';
        this.mensajes = [];
    }
    ngOnInit() {
        localStorage.setItem('grupo', localStorage.getItem(''));
        this.usuarioService.traerGruposUsuario(localStorage.getItem('email')).subscribe(resp => {
            if (resp['ok']) {
                const usuarioStorage = resp['usuario'];
                this.grupos = usuarioStorage['grupos'];
            }
        });
        this.chatService.getMessages().subscribe(msg => {
            this.grupo = msg['grupo'];
            this.nombre = this.grupo['nombre'];
            // nombre del grupo
            // console.log(this.nombre);
            if (this.mensajeNuevo === null) {
                return;
            }
            else {
                this.mensajeNuevo = document.getElementById(this.grupo['_id']);
            }
            this.newMessage();
        });
        this.chatService.getEscribiendo().subscribe(esc => {
            this.mensajeNuevo = document.getElementById(esc.toString());
            //  console.log(this.mensajeNuevo.id + 1);
            if (this.mensajeNuevo == null) {
                return;
            }
            else {
                this.span = document.getElementById(this.mensajeNuevo.id + 1);
            }
            // console.log('span' + this.span);
            this.span.className = 'chat_date text-success';
            setTimeout(() => {
                this.span.className = 'chat_date text-success hidden';
            }, 1000);
        });
    } ///////////////////////
    newMessage() {
        const grp = localStorage;
        const q = grp['grupo'];
        // console.log(q);
        // console.log(this.mensajeNuevo.id);
        if (q !== this.mensajeNuevo.id) {
            if (this.mensajeNuevo.id !== localStorage.getItem['grupo']) {
                this.elem = document.getElementById(this.mensajeNuevo.id);
                this.elem.className = ' mensaje_nuevo';
                // manda llamar el servicio de notificaciones. En este lugar solo funciona abierta la APP
                //this.usuarioService.notificacion();
                if (this.elem.className === 'chat_people') {
                }
                /*this.localNotifications.schedule([{
                  id: 2,
                  title: 'Nuevo Mensaje',
                  text: this.nombre,
                  icon: '/assets/icon/imagen1.png'
               }]);
                */
            }
            else {
                // this.mensajeNuevo.className = 'chat_people active_chat';
                return;
            }
        }
        else {
            console.log('No hay notificacion');
        }
    }
    openChat(grupo) {
        // console.log(grupo);
        this.grupoSelect = grupo;
        localStorage.setItem('anterior', localStorage.getItem('grupo'));
        localStorage.setItem('grupo', grupo);
        this.chat.mensajes = [];
        this.chat.elemento = document.getElementById('chat-mensaje');
        this.id = document.getElementById(grupo);
        this.idAnterior = document.getElementById(localStorage.getItem('anterior'));
        // this.idAnterior.className = 'chat_people';
        if (this.id.id === localStorage.getItem('grupo')) {
            this.id.className = 'chat_people ';
        }
        this.modal.create({
            component: Tab2Page
        }).then((modal) => modal.present());
    }
    salir() {
        this.usuarioService.enviaOneSignal('null');
        this.usuarioService.paginaPosts = 0;
        this.usuarioService.logout();
    }
};
Tab1Page = tslib_1.__decorate([
    Component({
        selector: 'app-tab1',
        templateUrl: 'tab1.page.html',
        styleUrls: ['tab1.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [PushService,
        ApplicationRef,
        Platform,
        SplashScreen,
        UsuarioService,
        ChatService,
        ModalController,
        Tab2Page,
        NavController,
        LocalNotifications])
], Tab1Page);
export { Tab1Page };
/////////////////////////////////////////////////////////////
/*
  newMessage() {
    if (this.mensajeNuevo.id !== localStorage.getItem['grupo']) {
      this.mensajeNuevo.className = 'chat_people mensaje_nuevo';
    } else {
      this.mensajeNuevo.className = 'chat_people active_chat';
    }
  }
  */
/*
// metodo para recibir los mensajes viejos del localStorage!

this.chatService.oldMessages(localStorage.getItem('grupo')).subscribe( msg => {

      this.chat.mensajes = msg['mensajes'];

      //console.log(this.chat.mensajes);

      this.modal.create({
        component : Tab2Page,
        componentProps : {
          chat: grupo
        }
      }).then((modal) => modal.present());


    });

*/
/*
   // Va dentro de open chat, ayuda a dejar seleccionado el grupo. Asignar las clases al ion-item

  this.idAnterior.className = 'chat_people';

    if ( this.id.id === localStorage.getItem('grupo')) {
      this.id.className = 'chat_people active_chat';
    }
    */
////////////////////////////////////////////////////////////
/*
  openChat( id: string) {

    localStorage.setItem('anterior', localStorage.getItem('grupo'));

    localStorage.setItem('grupo', id);
    this.chat.mensajes = [];

    this.chat.elemento = document.getElementById('chat-mansaje');

    this.id = document.getElementById(id);
    this.idAnterior = document.getElementById(localStorage.getItem('anterior'));


    this.chatService.oldMessages(localStorage.getItem('grupo')).subscribe( msg => {
      console.log(msg['mensajes']);

      this.chat.mensajes = msg['mensajes'];

      setTimeout(() => {
        this.chat.elemento.scrollTop = this.chat.elemento.scrollHeight;
      }, 50);
    });

    this.idAnterior.className = 'chat_people';

    if ( this.id.id === localStorage.getItem('grupo')) {
      this.id.className = 'chat_people active_chat';
    }

  }
*/
//# sourceMappingURL=tab1.page.js.map