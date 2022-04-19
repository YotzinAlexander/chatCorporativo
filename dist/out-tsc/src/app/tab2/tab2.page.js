import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';
import { ChatService } from '../services/chat.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { ChatPage } from '../components/chat/chat.page';
let Tab2Page = class Tab2Page {
    constructor(modals, modal, chatService, usuarioService, camera, localNotifications) {
        this.modals = modals;
        this.modal = modal;
        this.chatService = chatService;
        this.usuarioService = usuarioService;
        this.camera = camera;
        this.localNotifications = localNotifications;
        this.tempImages = [];
        this.mensajes = [];
        this.grupos = []; // encargado de almacenar los grupos
        this.email = localStorage.getItem('email');
        this.mensajeNuevo = '';
        this.url = '';
        this.imagen = '';
        this.archivo = null;
    }
    // ,private tab1: Tab1Page
    closeChat() {
        this.modal.dismiss();
        localStorage.setItem('grupo', localStorage.getItem('0000'));
    }
    ngOnInit() {
        // this.backgroundMode.enable();
        this.chatService.getEscribiendo().subscribe(esc => {
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
            }
            else {
                console.log('vacio');
            }
        });
        this.chatService.getMessages().subscribe(msg => {
            const grupo = msg['grupo'];
            if (this.mensajeNew == null) {
                return;
            }
            else {
                this.mensajeNew = document.getElementById(grupo['_id']);
                ///////// Llamar la notificacion de un nuevo mensaje
            }
        });
        /////////////////////////////////////
        this.usuarioService.traerGruposUsuario(localStorage.getItem('email')).subscribe(resp => {
            if (resp['ok']) {
                const usuarioStorage = resp['usuario'];
                this.grupos = usuarioStorage['grupos'];
                //    console.log(this.grupos);
            }
        });
        this.elemento = document.getElementById('chat-mensaje');
        // console.log('ELEMENTO'+this.elemento);
        this.mensajesSubscription = this.chatService.getMessages().subscribe(msg => {
            const mensaje = msg['grupo'];
            // console.log(mensaje['_id']);
            const grupo = mensaje['id'];
            if (localStorage.getItem('grupo') === mensaje['_id']) {
                this.mensajes.push(msg);
                //  console.log(this.mensajes);
            }
            this.mensajeNew = mensaje['id'];
            // Movimiento del scroll
            setTimeout(() => {
                this.elemento.scrollTop = this.elemento.scrollHeight;
            }, 50);
            ///////// Llamar la notificacion de un nuevo mensaje
            // this.newMessage();
        });
        //////////////// Mensajes almacenados
        this.chatService.oldMessages(localStorage.getItem('grupo')).subscribe(msg => {
            this.mensajes = msg['mensajes'];
            /////
            // console.log(this.mensajes);
            // Movimiento del scroll
            setTimeout(() => {
                this.elemento.scrollTop = this.elemento.scrollHeight;
            }, 50);
        });
        this.chatService.getMessages().subscribe(msg => {
            const grupo = msg['grupo'];
        });
    } // ngOnInit
    newMessage() {
        if (this.mensajeNew.id !== localStorage.getItem['grupo']) {
            this.localNotifications.schedule([{
                    id: 2,
                    title: 'Nuevo Mensaje',
                    text: '',
                    icon: '/assets/icon/imagen1.png'
                }]);
        }
        else {
            return;
        }
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
        // --------------------------
        // Aqui envia general tenga o no tenga el grupo.
        // this.usuarioService.notificacion();
        // --------------------------
        // Aqui manda llamar el mentodo
        this.usuarioService.buscarUsuarios(q);
        this.msgg = '';
    }
    escribir(event) {
        this.chatService.emitEscribiendo(localStorage.getItem('grupo'));
        //console.log(event);
    }
    // Metodo para guardar imagen en el local storage y BD
    // Metodo para abrir imagen
    openImage(images) {
        //  console.log('IMAGEN' + images);
        this.modals.create({
            component: ChatPage,
            componentProps: {
                imagen: images
            }
        }).then(modal => modal.present());
    }
    galeria() {
        const options = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.procesarImagen(options);
    }
    procesarImagen(options) {
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            // ruta!
            // console.log('IMAGEN 2' + imageData);
            const img = window.Ionic.WebView.convertFileSrc(imageData);
            // console.log(img);
            this.chatService.subirImagen(imageData);
            // console.log('CHECK I -' + imageData);
            //console.log('CHECK II -' + img);
            // this.tempImages.push( img );
        }, (err) => {
            console.log('ERROR ----  ' + err);
        });
    }
};
Tab2Page = tslib_1.__decorate([
    Component({
        selector: 'app-tab2',
        templateUrl: 'tab2.page.html',
        styleUrls: ['tab2.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController,
        ModalController,
        ChatService,
        UsuarioService,
        Camera,
        LocalNotifications])
], Tab2Page);
export { Tab2Page };
//# sourceMappingURL=tab2.page.js.map