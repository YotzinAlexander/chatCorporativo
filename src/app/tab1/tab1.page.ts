import { Component, OnInit, OnChanges, ViewChild, ApplicationRef } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { ChatService } from '../services/chat.service';
import { ModalController, Platform, NavController, AlertController } from '@ionic/angular';
import { Tab2Page } from '../tab2/tab2.page';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

import { PushService } from '../services/push.service';
import { OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ChatAdminPage } from '../pages/chat-admin/chat-admin.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  grupos = [];

  selected = false;

  id: HTMLElement;

  idAnterior: HTMLElement;

  mensajeNuevo: HTMLElement;

  span: HTMLElement;

  elem: HTMLElement;

  nombre = '';

  grupo = '';

  public grupoSelect = '';

  escribiendo = false;

  url = '';

  null = '';

  socialSharing: any;

  mensajes: OSNotificationPayload[] = [];

  constructor(private pushService: PushService,
              private aplicationRef: ApplicationRef,
              private platform: Platform,
              private splashScreen: SplashScreen,
              private usuarioService: UsuarioService,
              private chatService: ChatService,
              private modal: ModalController,
              private chat: Tab2Page,
              private chatAdminPage: ChatAdminPage,
              private navController: NavController,
              private localNotifications: LocalNotifications) {
               }

  ngOnInit() {

    /** NOS AYUDA A TRAER TODOS LOS DATOS DE LOS GRUPOS A LOS QUE PERTENECE EL USUARIO */

    localStorage.setItem('grupo', localStorage.getItem(''));


    this.usuarioService.traerGruposUsuario(localStorage.getItem('email')).subscribe( resp => {

      if (resp['ok']) {

        const usuarioStorage = resp['usuario'];

        this.grupos = usuarioStorage['grupos'];

      }
    });

    this.chatService.getMessages().subscribe( msg => {
      this.grupo = msg['grupo'];

      this.nombre = this.grupo['nombre'];
      // nombre del grupo
      // console.log(this.nombre);

      if(this.mensajeNuevo === null) {
        return;
      } else {
        this.mensajeNuevo = document.getElementById(this.grupo['_id']);
      }

      this.newMessage();
  });


/** ECRIBIENDO NOS AVISA CUANDO SE ESTA ESCRIBIENDO EN EL GRUPO */
    this.chatService.getEscribiendo().subscribe( esc => {

      this.mensajeNuevo = document.getElementById(esc.toString());

    //  console.log(this.mensajeNuevo.id + 1);
      if (this.mensajeNuevo == null) {
        return;
      } else {
         this.span = document.getElementById(this.mensajeNuevo.id + 1);
        }

     // console.log('span' + this.span);

      this.span.className = 'chat_date text-success';


      setTimeout(() => {
        this.span.className = 'chat_date text-success hidden';
      }, 1000);

    });




  }///////////////////////


  


/** NOS MUESTRA EL NUEVO MENSAJE */
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

      } else {
       // this.mensajeNuevo.className = 'chat_people active_chat';
        return; }

    } else {
      // console.log('No hay notificacion');

    }

  }
  /** ABRIMOS EL CHAT Y GUARDAMOS LOS DATOS EN EL LOCALSTORAGE */
  async openChat(grupo: string, nombreGrupo: string) {
   // console.log(grupo);

    // console.log(nombreGrupo);

    this.grupoSelect = grupo;

    localStorage.setItem('nombreGpo', nombreGrupo);

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

    const valido = await this.usuarioService.checkUserType(localStorage.getItem('email'));

    //console.log('tab1' + valido) ;

    if (valido) {
      this.modal.create({
        component : ChatAdminPage
      }).then((modal) => modal.present());
    } else {
      this.modal.create({
        component : Tab2Page
      }).then((modal) => modal.present());
    }
  }

  /** SALIMOS DE LA SALA DE CHATS */
  salir() {
       this.usuarioService.enviaOneSignal(this.null);
       this.usuarioService.paginaPosts = 0;
       this.usuarioService.logout();

  }

}




















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


