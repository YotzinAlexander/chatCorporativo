import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
let WebsocketService = class WebsocketService {
    constructor(socket, http, uServece) {
        this.socket = socket;
        this.http = http;
        this.uServece = uServece;
        this.socketStatus = false;
        this.checkStatus();
    }
    checkStatus() {
        // setInterval(envia, 1000);
        this.socket.on('connect', () => {
            console.log('Cliente Conenctado - APP');
            this.socketStatus = true;
        });
        this.socket.on('disconnect', () => {
            console.log('Cliente Desconetado - APP');
            this.socketStatus = false;
        });
        function envia() {
            console.log('App viva');
        }
    }
    // this.http.post(`${environment.url}/mensajes`);
    emit(evento, payload, callback) {
        // console.log('Emitiendo', evento);
        this.socket.emit(evento, payload, callback);
    }
    // mensajesViejos(evento: string) {
    //   return this.socket.fromEvent(evento);
    // }
    listen(evento) {
        return this.socket.fromEvent(evento);
    }
};
WebsocketService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Socket,
        HttpClient,
        UsuarioService])
], WebsocketService);
export { WebsocketService };
//# sourceMappingURL=websocket.service.js.map