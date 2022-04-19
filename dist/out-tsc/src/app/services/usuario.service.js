import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
let UsuarioService = class UsuarioService {
    constructor(http, router, storage, navCtrl, platform) {
        this.http = http;
        this.router = router;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.token = null;
        this.usuario = {};
        this.paginaPosts = 0;
    }
    getPosts(pull = false) {
        if (pull) {
            this.paginaPosts = 0;
        }
        this.paginaPosts++;
        return this.http.get(`${environment.url}/posts/?pagina=${this.paginaPosts}`);
    }
    login(email, password) {
        const data = { email, password };
        return new Promise(resolve => {
            this.http.post(`${environment.url}/login`, data)
                .subscribe(resp => {
                // console.log(resp);
                if (resp['ok']) {
                    this.guardarToken(resp['token']);
                    // Llama al envio
                    // this.enviaOneSignal();
                    resolve(true);
                }
                else {
                    this.token = null;
                    localStorage.clear();
                    resolve(false);
                }
            });
        });
    }
    //////////////// Metodo que realiza la extraccion del Id y token de local Storage para enviar a el Servidor....
    enviaOneSignal(usuarioId) {
        console.log('ONEEEEEEEEEEEEE' + usuarioId);
        const signal = {
            'onesignal': usuarioId
        };
        const headers = {
            'x-token': localStorage.getItem('token')
        };
        console.log(headers);
        return new Promise(resolve => {
            this.http.post(`${environment.url}/updateone`, signal, { headers }).subscribe(resp => {
                console.log(resp);
            });
        });
    }
    /// Trae los datos de los usuarios por grupo especifico
    buscarUsuarios(grupo) {
        const grupos = {
            'grupos': grupo
        };
        return new Promise(resolve => {
            this.http.post(`${environment.url}/buscarUsuarios`, grupos).subscribe(resp => {
                console.log(resp);
                const gruposMsj = resp['usuarios'];
                console.log(gruposMsj);
                var n = 0;
                let contenido = '';
                for (var i = 0; i < gruposMsj.length; i++) {
                    n++;
                    contenido = gruposMsj[i]['onesignal'];
                    console.log(contenido);
                    this.notificacion(contenido);
                }
                // var idOneSignal
            });
        });
    }
    ////////////////// Metodo que realiza el envio de notificaciones
    notificacion(idOneSignal) {
        const content = {
            "app_id": "40407aec-b13e-427f-9f55-ffa52e6d8ad6",
            //"included_segments": ["Active Users", "Inactive Users"],
            "data": { "userId": "POSTman-123" },
            "contents": { "en": "English message from App", "es": "Mensaje Nuevo de Grupo" },
            "headings": { "en": "Alert", "es": "Alerta" },
            "include_player_ids": [idOneSignal]
        };
        console.log(content);
        // si se quiere enviar un mensaje a un usuario o usuarios en espesifico, se agrega el siguiente segmento al JSON
        // "include_player_ids":["ff5f30fc-a0a4-4b59-80a2-0f838244f50c"]
        // Y se retiran los "included_segments"
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'basic MzU2OGMzNmQtNDY2OC00NzliLThjZWQtNDIxMTE0YzU2MzI1'
        });
        return new Promise(resolve => {
            this.http.post(`${environment.noti}`, content, { headers })
                .subscribe(resp => {
                console.log(resp);
            });
        });
    }
    guardarToken(token) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.token = token;
            yield localStorage.setItem('token', token);
        });
    }
    cargarToken() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.token = (yield localStorage.getItem('token')) || null;
        });
    }
    validaToken() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.cargarToken();
            if (!this.token) {
                this.router.navigateByUrl('/login');
                return Promise.resolve(false);
            }
            return new Promise(resolve => {
                const headers = new HttpHeaders({
                    'x-token': this.token
                });
                this.http.get(`${environment.url}/token`, { headers })
                    .subscribe(resp => {
                    if (resp['ok']) {
                        this.usuario = resp['userDB'];
                        resolve(true);
                    }
                    else {
                        this.router.navigateByUrl('/login');
                        resolve(false);
                    }
                });
            });
        });
    }
    traerGruposUsuario(email) {
        const data = { email };
        return this.http.post(`${environment.url}/grupos/usuario`, data);
    }
    logout() {
        this.token = null;
        this.usuario = null;
        localStorage.clear();
        this.navCtrl.navigateRoot('/login', { animated: true });
    }
};
UsuarioService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        Router,
        Storage,
        NavController,
        Platform])
], UsuarioService);
export { UsuarioService };
//# sourceMappingURL=usuario.service.js.map