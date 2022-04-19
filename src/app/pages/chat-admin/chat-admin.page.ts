import { Component, OnInit, OnDestroy, Injectable, ViewChild, enableProdMode } from '@angular/core';
import { NavController, ModalController, LoadingController, AlertController, ActionSheetController, ToastController, Platform } from '@ionic/angular';
import { Subscription, from } from 'rxjs';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ChatService } from '../../services/chat.service';
import { UsuarioService } from '../../services/usuario.service';
import { environment } from '../../../environments/environment';
import { Grupo, Mensaje } from '../../interfaces/interfaces';
import { ReenviaGrupoPage } from '../reenvia-grupo/reenvia-grupo.page';
import { ChatPage } from '../../components/chat/chat.page';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { Chooser, ChooserResult } from '@ionic-native/chooser/ngx';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
import { DocumentPicker } from '@ionic-native/document-picker/ngx';
import { ThrowStmt } from '@angular/compiler';
import { FileOpener } from '@ionic-native/file-opener/ngx';




@Component({
  selector: 'app-chat-admin',
  templateUrl: './chat-admin.page.html',
  styleUrls: ['./chat-admin.page.scss'],
})
export class ChatAdminPage implements OnInit, OnDestroy {

  fileObj:String;

  url = environment.url;
  loading: any;

  returnpath: string="";

  tempImages: string[] = [];

  msgg: '';
  mensajesSubscription: Subscription;

  elemento: HTMLElement;

  mensajes: any[] = [];

  grupos = []; // encargado de almacenar los grupos

  msg: any;

  email = localStorage.getItem('email');

  ios: 'ios';

  android: 'android';

  mensajeNuevo = '';

  grup = localStorage.getItem('nombreGpo');
  userType = localStorage.getItem('userType');

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
  documentoReenviar: any[] = [];
  idRen: any   = '';

  platform: any;


  constructor(private ptl: Platform,
              private modals: ModalController,
              private modal: ModalController,
              private modalService: ModalController,
              private chatService: ChatService,
              private usuarioService: UsuarioService,
              private camera: Camera,
              private localNotifications: LocalNotifications,
              private alertController: AlertController,
              private actionSheerCtrl: ActionSheetController,
              private loadingCtrl: LoadingController,
              private fileChoosere: FileChooser,
              private filePath: FilePath,
              private toastController: ToastController,
              private documentViewer: DocumentViewer,
              private chooser:Chooser,
              private iOSFilePicker: IOSFilePicker,
              private fileOpener: FileOpener,
              private docPicker: DocumentPicker) {
                if (this.ptl.is('android')) {
                  this.platform = 'android';
                // tslint:disable-next-line: align
                } if (this.ptl.is('ios')) {
                  this.platform = 'ios';
                }
              //  console.log(this.grup);
              }



// ,private tab1: Tab1Page

/** ES NECESARIO BORRAR EL LOCAL STORAGE UNA VEZ QUE SE CIERRE EL GRUPO */
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

/** NOTIFICACION DE NUEVO MENSAJE, NO UTILIZADA */
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
    this.chatService.sendMessage(this.msgg, localStorage.getItem('grupo'));
    this.usuarioService.buscarUsuarios(localStorage.getItem('grupo'));
    this.msgg = '';
  }

  escribir(event) {
    this.chatService.emitEscribiendo(localStorage.getItem('grupo'));
    // console.log(event);
  }

  /** ABRIMOS LAS OPCIONES PARA IMAGENES */
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


 /** PROCESAMOS NUESTRA IMAGEN PARA SER ENVIADA */
  procesarImagen( options: CameraOptions ) {

    this.camera.getPicture(options).then(( imageData ) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // ruta!
      // console.log('IMAGEN 2' + imageData);

      // const img = window.Ionic.WebView.convertFileSrc( imageData );

          // console.log(img);


          // SUBIMOS LA DATA DE LA IMAGEN
      this.chatService.subirImagen( imageData );
          // NOS AYUDA A ENCONTRAR LOS USUARIOS DE EL GRUPO AL QUE ENVIAMOS
      this.usuarioService.buscarUsuarios(localStorage.getItem('grupo'));

      // console.log(imageData);

     // console.log('CHECK I -' + imageData);
      // console.log('CHECK II -' + img);
      // this.tempImages.push( img );

     }, (err) => {
      console.log('ERROR ----  ' + err);
     });

  }

    open(){
    this.fileOpener.open(this.returnpath, 'application/pdf');
  }
  // FileChooser IOS
  fileChooseriOS() {
    this.chooser.getFile().then((value: ChooserResult) => {
      this.filePath.resolveNativePath(value.uri).then((resolveNativePath) => {
        this.returnpath = resolveNativePath;

        console.log('AQUI:: ::: ::: ::: :::: >>>>>'+this.returnpath);
  /*     // EXTRAEMOS SU TIPO DE ARCHIVO PARA VALIDAR
        const extension = this.returnpath.substr(-3);

       // console.log(extension);

        if (extension !== 'pdf') {
          console.log(extension);
          this.presentToast();
        } else {
          // SUBIMOS NUESTRO ARCHIVO CON SU PATH
          console.log('ok');
          this.chatService.subirArchivo(this.returnpath);
        }
*/
      });
    }, (err) => {
      console.log(JSON.stringify(err));
    });
  }

  // FileChooser
  // BUSCAMOS EL ARCHIVO A SER ENVIADO
    fileChooser() {
    this.fileChoosere.open().then((fileuri) => {
      this.filePath.resolveNativePath(fileuri).then((resolveNativePath ) => {
        this.returnpath = resolveNativePath;

        console.log(this.returnpath);
       // EXTRAEMOS SU TIPO DE ARCHIVO PARA VALIDAR
        const extension = this.returnpath.substr(-3);

       // console.log(extension);

        if (extension !== 'pdf') {
          this.presentToast();
        } else {
          // SUBIMOS NUESTRO ARCHIVO CON SU PATH
          this.chatService.subirArchivo(this.returnpath);
        }


      });
    }, (err) => {
      console.log(JSON.stringify(err));
    });
      // uri => console.log(uri)).catch(e => console.log(e));
  }

  // MENSAJE DE ERROR POR ENVIO DE ARCHIVO ERRONEO
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Archivo incorrecto. Seleccionar un PDF.',
      duration: 4000
    });
    toast.present();
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
      },
      {
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
// Meoto que muestra cuadro de dialogo para respuesta de texto
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
 // console.log('ID OBTENER ' +id);
  this.chatService.obtenerUsuario().subscribe( resp => {

    if (resp['ok']) {
      this.usuarioGrupos = resp['userDB']['grupos'];
      this.id = resp['userDB']._id;
    }
  });

  this.chatService.mensajePorId(id).subscribe( resp => {

    if (resp['ok']) {

      const mensaje: Mensaje = resp['mensaje'][0];

     // console.log(mensaje.doc);

      this.mensajeReenviar = mensaje.texto || '';
      this.imagenReenviar = mensaje.img;
      // console.log('IMAGEN' + this.imagenReenviar);
      this.documentoReenviar = mensaje.doc;
      // console.log('DOCUMENTO ' + this.documentoReenviar);

      if (mensaje.reenviar) {
        this.idRen = mensaje.reenviar;
      } else {
        this.idRen = mensaje.usuario;
      }

      this.abrirModal(id);
    } else{
      console.log('no encontrado');
    }
  });
}



async abrirModal(idGrup:string) {


  const modal = await this.modalService.create({
    cssClass: 'my-custom-modal-css',
    component: ReenviaGrupoPage,
    componentProps: {
      id : idGrup,
      _id : this.id,
      reenviar : this.idRen,
      img : this.imagenReenviar,
      texto : this.mensajeReenviar,
      doc : this.documentoReenviar

    }
  });
  await modal.present();
}
/** OPCIONES DE ELIMINAR */
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

  // console.log(imgId); // ruta de imagen
  // console.log(msgId); // Id de imagen

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
    //    console.log('Cancel clicked');
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
// tslint:disable-next-line: max-line-length
/* --------------- PRESENTACTIONSHEET DOCUMENTO DE ENVIADO (DE SALIDA) ------------------------------------------------------------------------------ */
async presentActionSheetDocument(docId: string, msgId: string, msgDoc: string) {
 //  console.log(docId); // ruta de imagen
 //  console.log(msgId); // Id de imagen

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
/** MENSAJE DOCUMENTO DE LLEGADA, ACCIONES A TOMAR */
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
/** OPCIONES IMAGEN DE LLEGADA */
  async presentActionSheetImgLlegada(imgId: string, msgId: string) {
    //console.log(imgId);
    //console.log(msgId);

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


