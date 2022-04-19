import { Component, OnInit, OnDestroy, Injectable, ViewChild, enableProdMode } from '@angular/core';
import { NavController, ModalController, LoadingController, AlertController, ActionSheetController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';
import { Subscription, from } from 'rxjs';
import { ChatService } from '../services/chat.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ChatPage } from '../components/chat/chat.page';
import { Mensaje, Grupo } from '../interfaces/interfaces';
import { ReenviaGrupoPage } from '../pages/reenvia-grupo/reenvia-grupo.page';
import { ModalOptions } from '@ionic/core';
import { environment } from '../../environments/environment';


declare var window: any;

/*
PARTE DEL CHAT DE UN USUARIO NORMAL

*/


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {

  url = environment.url;
  loading: any;


  tempImages: string[] = [];


  msgg: '';
  mensajesSubscription: Subscription;

  elemento: HTMLElement;

  mensajes: any[] = [];

  grupos = []; // encargado de almacenar los grupos

  msg: any;

  email = localStorage.getItem('email');
  grup = localStorage.getItem('nombreGpo');

  mensajeNuevo = '';

  // url = '';

  imagen = '';

  file: Event;

  mensajeNew: HTMLElement;

  span: HTMLElement;

  ecribiendo: string;

  archivo: File = null;

  id: HTMLElement;

  // VARIABLES NUEVAS

  usuarioRes: any = '';
  referencia = '';
  imagenRes: any[] = [];
  idRes = '';
  respuesta = '';
  usuarioGrupos: Grupo[] = [];
  mensajeReenviar = '';
  imagenReenviar: any[] = [];
  idRen: any   = '';



  constructor(private modals: ModalController,
              private modal: ModalController,
              private modalService: ModalController,
              private chatService: ChatService,
              private usuarioService: UsuarioService,
              private camera: Camera,
              private localNotifications: LocalNotifications,
              private alertController: AlertController,
              private actionSheerCtrl: ActionSheetController,
              private loadingCtrl: LoadingController) {}

// BORRRADO DE LOCAL STORAGE
  closeChat() {
      this.modal.dismiss();
      localStorage.setItem('grupo', localStorage.getItem('0000'));
      localStorage.setItem('nombreGpo', localStorage.getItem('0000'));


  }


  ngOnInit() {
    // this.backgroundMode.enable();

    this.chatService.getEscribiendo().subscribe( esc => {

      this.mensajeNew = document.getElementById(esc.toString());

    //  console.log(this.mensajeNew.id + 1);

      this.span = document.getElementById(this.mensajeNew.id + 1);

      this.span.className = 'chat_date text-success';

      setTimeout(() => {
        this.span.className = 'chat_date text-success hidden';
      }, 1000);


      if (this.span !== null) {
        this.ecribiendo = 'escr';
       // console.log(this.ecribiendo);
      } else {
        console.log('vacio');
      }

    });

    this.chatService.getMessages().subscribe( msg => {
      const grupo = msg['grupo'];

      if (this.mensajeNew == null) {
        return;
      } else {
      this.mensajeNew = document.getElementById(grupo['_id']);
       ///////// Llamar la notificacion de un nuevo mensaje

      }


  });


 /////////////////////////////////////
    this.usuarioService.traerGruposUsuario(localStorage.getItem('email')).subscribe( resp => {

      if (resp['ok']) {

        const usuarioStorage = resp['usuario'];

        this.grupos = usuarioStorage['grupos'];

    //    console.log(this.grupos);
      }
    });



    this.elemento = document.getElementById('chat-mensaje');

    // console.log('ELEMENTO'+this.elemento);

    this.mensajesSubscription = this.chatService.getMessages().subscribe( msg => {

      const mensaje = msg['grupo']
      // console.log(mensaje['_id']);
      const grupo = mensaje['id']
      if (localStorage.getItem('grupo') === mensaje['_id'] ) {

        this.mensajes.push(msg);

      //  console.log(this.mensajes);


      }
      this.mensajeNew = mensaje['id']

      // Movimiento del scroll
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 50);

      ///////// Llamar la notificacion de un nuevo mensaje
      // this.newMessage();



    });
    //////////////// Mensajes almacenados
    this.chatService.oldMessages(localStorage.getItem('grupo')).subscribe( msg => {

      this.mensajes = msg['mensajes'];
/////
      // console.log(this.mensajes);

      // Movimiento del scroll
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 50);


    });

    this.chatService.getMessages().subscribe( msg => {
      const grupo = msg['grupo'];

  });




  } // ngOnInit

  newMessage( ) {
     if (this.mensajeNew.id !== localStorage.getItem['grupo']) {
      this.localNotifications.schedule([{
        id: 2,
        title: 'Nuevo Mensaje',
        text: '',
        icon: '/assets/icon/imagen1.png'
     }]);
     } else {return; }
  }

  ngOnDestroy() {
    this.mensajesSubscription.unsubscribe();
  }

   // ENVIO DE MENSAJE  A TRAVES DE LA VARIABLE MSGG 
  enviar() {
    const grp = localStorage;
    const q = grp['grupo'];

    if (this.msgg.trim().length === 0) {
      return;
    }
    // console.log(this.msgg);

    /** ENVIAR MENSAJE POR MEDIO DEL GRUPO */
    this.chatService.sendMessage(this.msgg, localStorage.getItem('grupo'));
    /* BUSCA USUARIOS POR MEDIO DEL GRUPO */
    this.usuarioService.buscarUsuarios(localStorage.getItem('grupo'));
    this.msgg = '';
  }

  escribir(event) {
    this.chatService.emitEscribiendo(localStorage.getItem('grupo'));
    //console.log(event);
  }

/** ABRE LA GALERIA */
  galeria() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };

    this.procesarImagen( options );
  }


/** PROCESA IMAGEN */
  procesarImagen( options: CameraOptions ) {

    this.camera.getPicture(options).then(( imageData ) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // ruta!
      // console.log('IMAGEN 2' + imageData);

      const img = window.Ionic.WebView.convertFileSrc( imageData );

          // console.log(img);

      this.chatService.subirImagen( imageData );
      this.usuarioService.buscarUsuarios(localStorage.getItem('grupo'));


     // console.log('CHECK I -' + imageData);
      //console.log('CHECK II -' + img);
      // this.tempImages.push( img );

     }, (err) => {
      console.log('ERROR ----  ' + err);
     });

  }

  //////////// METODO DE RESPONDER MENSAJE /////////////
  async presentActionSheet(id:string) {
    console.log(id);
    this.chatService.mensajePorId(id).subscribe( resp => {

      if (resp['ok']) {

        const mensaje: Mensaje = resp['mensaje'][0];

        this.referencia = mensaje.texto;
        if (mensaje.reenviar) {
          this.usuarioRes = mensaje.reenviar;
        } else {
          this.usuarioRes = mensaje.usuario;
        }
        this.imagenRes = mensaje.img;
        this.idRes = mensaje._id;
      }
    });

    const actionSheet = await this.actionSheerCtrl.create({
      // sirve para obligar a seleccionar una opcion
      // si no lo tuviera puedes tocar afuera del las
      // opciones y cerrar el cuatro. (FALSE)
      backdropDismiss: false,
      header: 'Action Mensaje',
      buttons: [{
        text: 'Responder',
        icon: 'send',
        handler: () => {
          this.presentMensaje(this.referencia);
        }
      }, {
        text: 'Reenviar',
        icon: 'share',
        handler: () => {
          this.reenviarMsj(id);
        }
      }, {
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        // agrega css al boton, la propiedas se guardan
        // en el archivo .scss
        cssClass: 'rojo',
        handler: () => {
          this.eliminar(id);
        }
      },   {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
}
 /*  --------------- PRSENTACTIONSHEET DOCUMENTO DE ENVIADO (DE SALIDA) ------------------------------------------------------------------------------ */
async presentActionSheetDocument(docId: string, msgId: string, msgDoc: string) {

    console.log(docId); // ruta de imagen
    console.log(msgId); // Id de imagen
    console.log(msgDoc);

    this.chatService.mensajePorId(msgId).subscribe( resp => {

     if (resp['ok']) {

       const mensaje: Mensaje = resp['mensaje'][0];

       this.referencia = mensaje.texto;

       if (mensaje.reenviar) {
         this.usuarioRes = mensaje.reenviar;
       } else {
         this.usuarioRes = mensaje.usuario;
       }
       this.imagenRes = mensaje.img;

       this.idRes = mensaje._id;
     }
   });
   
    const actionSheet = await this.actionSheerCtrl.create({
     // sirve para obligar a seleccionar una opcion
     // si no lo tuviera puedes tocar afuera del las
     // opciones y cerrar el cuatro. (FALSE)
     backdropDismiss: false,
     header: 'Action Mensaje - Documento',
     buttons: [
       {
       text: 'Ver Documento',
       icon: 'document',
       handler: () => {
         this.chatService.dowloandOpenDocument(docId, msgDoc);
         console.log('ok, Abrir');
       }
     }, /*  {
       text: 'Abrir Documento',
       icon: 'image',
       handler: () => {
       }
     }, */{
       text: 'Responder',
       icon: 'send',
       handler: () => {
           this.presentMensaje(this.referencia);
         }
      }, /* {
       text: 'Reenviar',
       icon: 'share',
       handler: () => {
         this.reenviarMsj(msgId);
       }
     },*/ {
       text: 'Eliminar',
       role: 'destructive',
       icon: 'trash',
       // agrega css al boton, la propiedas se guardan
       // en el archivo .scss
       cssClass: 'rojo',
       handler: () => {
         this.eliminar(msgId);
       }
     },   {
       text: 'Cancel',
       icon: 'close',
       role: 'cancel',
       handler: () => {
     //    console.log('Cancel clicked');
       }
     }]
   });
    await actionSheet.present();
 }
// DOCUMENTO DE LLEGADA ---------------------------------------------------
async presentActionSheetDocumentRecive(docId: string, msgId: string, msgDoc: string) {
  //  console.log(docId); // ruta de imagen
  //  console.log(msgId); // Id de imagen
 
   this.chatService.mensajePorId(msgId).subscribe( resp => {
 
     if (resp['ok']) {
 
       const mensaje: Mensaje = resp['mensaje'][0];
 
       this.referencia = mensaje.texto;
 
       if (mensaje.reenviar) {
         this.usuarioRes = mensaje.reenviar;
       } else {
         this.usuarioRes = mensaje.usuario;
       }
       this.imagenRes = mensaje.img;
 
       this.idRes = mensaje._id;
     }
   });
 
   const actionSheet = await this.actionSheerCtrl.create({
     // sirve para obligar a seleccionar una opcion
     // si no lo tuviera puedes tocar afuera del las
     // opciones y cerrar el cuatro. (FALSE)
     backdropDismiss: false,
     header: 'Action Mensaje - Documento',
     buttons: [{
       text: 'Ver Documento',
       icon: 'document',
       handler: () => {
         this.chatService.dowloandOpenDocument(docId, msgDoc);
       }
     }, /* {
       text: 'Abrir Documento',
       icon: 'image',
       handler: () => {
       }
     }, */{
       text: 'Responder',
       icon: 'send',
       handler: () => {
           this.presentMensaje(this.referencia);
         }
      }, /* {
       text: 'Reenviar',
       icon: 'share',
       handler: () => {
         this.reenviarMsj(msgId);
       }
     }, {
       text: 'Eliminar',
       role: 'destructive',
       icon: 'trash',
       // agrega css al boton, la propiedas se guardan
       // en el archivo .scss
       cssClass: 'rojo',
       handler: () => {
         this.eliminar(msgId);
       }
     },*/   {
       text: 'Cancel',
       icon: 'close',
       role: 'cancel',
       handler: () => {
     //    console.log('Cancel clicked');
       }
     }]
   });
   await actionSheet.present();
 }
// Metodo que muestra cuadro de dialogo para respuesta de texto   <html> <body> <b>MOTIVO</b> </body> </html>
async presentMensaje(referencia:string) {
  const alert = await this.alertController.create({
    header: 'Mensaje a Responder',
    subHeader: referencia,
    inputs: [
      {
        name: 'txtRespuesta',
        type: 'text',
        placeholder: 'Respuesta'
      },
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirmar cancelar');
        }
      }, {
        text: 'Enviar',
        handler: (data) => {
          /* Mensaje, CARGANDO para esperar que cargue la imagen al responder */
          this.respuesta = data.txtRespuesta;
          setTimeout(( ) => {
            this.loading.dismiss();
            this.enviarRespuesta();

          }, 1500);
          this.presentLoading('Cargando');
        }
      }
    ]
  });
  await alert.present();
}
// Metodo de para enviar Respuesta
enviarRespuesta() {


  if (this.respuesta.trim().length === 0) {
    return;
  }

  this.chatService.emitRespuesta(this.idRes, this.respuesta, localStorage.getItem('grupo'));

  this.referencia = '';
  this.usuarioRes = '';
  this.imagenRes = [];
  this.idRes = '';
  this.respuesta = '';

  this.usuarioService.buscarUsuarios(localStorage.getItem('grupo'));

}



// Metodo que muestra grupos a Reenviar el mensaje
reenviarMsj(id:string) {

  this.chatService.obtenerUsuario().subscribe( resp => {

    if (resp['ok']) {
      this.usuarioGrupos = resp['userDB']['grupos'];
      this.id = resp['userDB']._id;
    }
  });

  this.chatService.mensajePorId(id).subscribe( resp => {

    if (resp['ok']) {

      const mensaje: Mensaje = resp['mensaje'][0];

      this.mensajeReenviar = mensaje.texto || '';
      this.imagenReenviar = mensaje.img;
      if (mensaje.reenviar) {
        this.idRen = mensaje.reenviar;
      } else {
        this.idRen = mensaje.usuario;
      }

      this.abrirModal(id);
    }
  });
}


/** MODAL DE REENCIO DE MENSAJE */
async abrirModal(idGrup:string) {


  const modal = await this.modalService.create({
    cssClass: 'my-custom-modal-css',
    component: ReenviaGrupoPage,
    componentProps: {
      id : idGrup,
      _id : this.id,
      reenviar : this.idRen,
      img : this.imagenReenviar,
      texto : this.mensajeReenviar
    }
  });
  await modal.present();
}
/** METODO DE ELIMINAR MENSAJE */
async eliminar(id: string) {

    const alert = this.alertController.create({
      header: 'Confirmar',
      message: '¿Estas seguro que deseas <strong>eliminarlo</strong>?',
      buttons: [
        {
          text: 'No, Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            return;
          }
        }, {
          text: 'Si, Borrarlo',
          handler: () => {

            this.chatService.eliminar(id).subscribe( resp => {
              this.mensajes = [];
              if (resp['ok']) {
                this.mensajes = resp['mensajes'];
              }
            });

          }
        }
      ]
    });

    (await alert).present();

}

/// RESPONDE IMAGEN OPCIONES
async presentActionSheetImage(imgId: string, msgId: string) {

  console.log(imgId); // ruta de imagen
  console.log(msgId); // Id de imagen

  this.chatService.mensajePorId(msgId).subscribe( resp => {

    if (resp['ok']) {

      const mensaje: Mensaje = resp['mensaje'][0];

      this.referencia = mensaje.texto;

      if (mensaje.reenviar) {
        this.usuarioRes = mensaje.reenviar;
      } else {
        this.usuarioRes = mensaje.usuario;
      }
      this.imagenRes = mensaje.img;

      this.idRes = mensaje._id;
    }
  });

  const actionSheet = await this.actionSheerCtrl.create({
    // sirve para obligar a seleccionar una opcion
    // si no lo tuviera puedes tocar afuera del las
    // opciones y cerrar el cuatro. (FALSE)
    backdropDismiss: false,
    header: 'Action Mensaje - Imagen',
    buttons: [{
      text: 'Abrir Imagen',
      icon: 'image',
      handler: () => {
        this.openImage(imgId);
      }
    },{
      text: 'Responder',
      icon: 'send',
      handler: () => {
          this.presentMensaje(this.referencia);
        }
     }, {
      text: 'Reenviar',
      icon: 'share',
      handler: () => {
        this.reenviarMsj(msgId);
      }
    }, {
      text: 'Eliminar',
      role: 'destructive',
      icon: 'trash',
      // agrega css al boton, la propiedas se guardan
      // en el archivo .scss
      cssClass: 'rojo',
      handler: () => {
        this.eliminar(msgId);
      }
    },   {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]
  });
  await actionSheet.present();
}


async presentLoading(message: string) {
  this.loading = await this.loadingCtrl.create({
    message

  //  duration: 2000
  });
  return this.loading.present();
}

// Metodo para abrir imagen
openImage(images) {
  //  console.log('IMAGEN' + images);
    this.modals.create({
      component: ChatPage,
      componentProps : {
        imagen: images
      }
    }).then(modal => modal.present());
  }
/********************* OPCIONES PARA LOS MENSAJES DE LLEGADA*****************************/
  async presentActionSheetMsgLlegada(msgId: string) {

    this.chatService.mensajePorId(msgId).subscribe( resp => {

      if (resp['ok']) {

        const mensaje: Mensaje = resp['mensaje'][0];

        this.referencia = mensaje.texto;

        if (mensaje.reenviar) {
          this.usuarioRes = mensaje.reenviar;
        } else {
          this.usuarioRes = mensaje.usuario;
        }
        this.imagenRes = mensaje.img;
        this.idRes = mensaje._id;
      }
    });

    const actionSheet = await this.actionSheerCtrl.create({
      // sirve para obligar a seleccionar una opcion
      // si no lo tuviera puedes tocar afuera del las
      // opciones y cerrar el cuatro. (FALSE)
      backdropDismiss: false,
      header: 'Action Mensaje - Recepcion',
      buttons: [{
        text: 'Responder',
        icon: 'send',
        handler: () => {
          this.presentMensaje(this.referencia);
        }
      }, {
        text: 'Reenviar',
        icon: 'share',
        handler: () => {
          this.reenviarMsj(msgId);
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
// Action Sheet Imagen de llegada
  async presentActionSheetImgLlegada(imgId: string, msgId: string) {
    console.log(imgId);
    console.log(msgId);

    this.chatService.mensajePorId(msgId).subscribe( resp => {

      if (resp['ok']) {
        

        const mensaje: Mensaje = resp['mensaje'][0];

        this.referencia = mensaje.texto;

        if (mensaje.reenviar) {
          this.usuarioRes = mensaje.reenviar;
        } else {
          this.usuarioRes = mensaje.usuario;
        }
        this.imagenRes = mensaje.img;
        this.idRes = mensaje._id;
      }
    });

    const actionSheet = await this.actionSheerCtrl.create({
      // sirve para obligar a seleccionar una opcion
      // si no lo tuviera puedes tocar afuera del las
      // opciones y cerrar el cuatro. (FALSE)
      backdropDismiss: false,
      header: 'Action Mensaje - Recepcion',
      buttons: [{
        text: 'Abrir Imagen',
        icon: 'image',
        handler: () => {
          this.openImage(imgId);
        }
      }, {
        text: 'Responder',
        icon: 'send',
        handler: () => {
          this.presentMensaje(this.referencia);
        }
      }, {
        text: 'Reenviar',
        icon: 'share',
        handler: () => {
          this.reenviarMsj(msgId);
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }




}


