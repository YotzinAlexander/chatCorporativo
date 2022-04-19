import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;

  constructor(private socket: Socket,
              private http: HttpClient,
              private uServece: UsuarioService) {
    this.checkStatus();
  }
/** VALIDAMOS STATUS DE CONEXION AL SERVIDOR */
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


  emit( evento: string, payload?: any, callback?: Function) {

    // console.log('Emitiendo', evento);

    this.socket.emit(evento, payload, callback);
  }

  // mensajesViejos(evento: string) {
  //   return this.socket.fromEvent(evento);
  // }

  listen( evento: string ) {
    return this.socket.fromEvent(evento);
  }
}
