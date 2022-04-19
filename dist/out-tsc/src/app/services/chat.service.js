import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { UsuarioService } from './usuario.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { LoadingController } from '@ionic/angular';
let ChatService = class ChatService {
    constructor(wsService, usuarioService, http, router, fileTransfer, loadingCtrl) {
        this.wsService = wsService;
        this.usuarioService = usuarioService;
        this.http = http;
        this.router = router;
        this.fileTransfer = fileTransfer;
        this.loadingCtrl = loadingCtrl;
        this.token = null;
    }
    cargarToken() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.token = (yield localStorage.getItem('token')) || null;
        });
    }
    sendMessage(mensaje, idGrupo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.cargarToken();
            const headers = new HttpHeaders({
                'x-token': this.token
            });
            this.http.get(`${environment.url}/token`, { headers })
                .subscribe(resp => {
                if (resp['ok']) {
                    this.usuario = resp['userDB'];
                    // console.log(this.usuario);
                    const payload = {
                        _id: this.usuario._id,
                        grupo: idGrupo,
                        texto: mensaje
                    };
                    this.wsService.emit('mensaje', payload);
                }
                else {
                    this.router.navigateByUrl('/login');
                }
            });
        });
    }
    emitOldMessages() {
        const payload = {
            grupo: localStorage.getItem('grupo')
        };
        // console.log(localStorage.getItem('grupo'));
        this.wsService.emit('mensajes-v', payload);
    }
    oldMessages(grupo) {
        const data = { grupo };
        //console.log(grupo);
        return this.http.post(`${environment.url}/mensajes`, data);
    }
    emitEscribiendo(grupo) {
        const payload = { grupo };
        this.wsService.emit('escribiendo', payload);
    }
    getEscribiendo() {
        return this.wsService.listen('escribiendo');
    }
    getMessages() {
        return this.wsService.listen('mensaje-nuevo');
    }
    limpiarMensajes(mensajes) {
        mensajes = [];
    }
    subirImagen(img) {
        const options = {
            fileKey: 'image',
            headers: {
                'x-token': this.usuarioService.token
            }
        };
        const fileTransfer = this.fileTransfer.create();
        fileTransfer.upload(img, `${environment.url}/mensajes/upload`, options)
            .then(data => {
            console.log('HECHO' + data);
            // Llama el mensaje de cargando
            setTimeout(() => {
                this.loading.dismiss();
                this.emitGuardarImagen();
            }, 1500);
            this.presentLoading('Cargando');
        }).catch(err => {
            console.log('error en carga', err);
        });
    }
    presentLoading(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message
                //  duration: 2000
            });
            return this.loading.present();
        });
    }
    // primero
    guardarImagen(formData) {
        this.cargarToken();
        const headers = new HttpHeaders({
            'x-token': this.token
        });
        return this.http.post(`${environment.url}/mensajes/upload`, formData, { headers });
    }
    // Segundo
    emitGuardarImagen() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.cargarToken();
            const headers = new HttpHeaders({
                'x-token': this.token
            });
            this.http.get(`${environment.url}/token`, { headers })
                .subscribe(resp => {
                if (resp['ok']) {
                    this.usuario = resp['userDB'];
                    console.log(this.usuario);
                    const payload = {
                        _id: this.usuario._id,
                        grupo: localStorage.getItem('grupo'),
                    };
                    this.wsService.emit('imagen', payload);
                }
            });
        });
    }
};
ChatService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [WebsocketService,
        UsuarioService,
        HttpClient,
        Router,
        FileTransfer,
        LoadingController])
], ChatService);
export { ChatService };
//# sourceMappingURL=chat.service.js.map