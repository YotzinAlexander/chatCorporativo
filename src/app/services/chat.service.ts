import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { UsuarioService } from './usuario.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/interfaces';
import { Router } from '@angular/router';
import { FileTransferObject, FileTransfer, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { LoadingController, ToastController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { FileOpener} from '@ionic-native/file-opener/ngx';



@Injectable({
  providedIn: 'root'

})
export class ChatService {

  token: string = null;
  usuario: Usuario;

  loading: any;

 

  constructor(public wsService: WebsocketService,
              private usuarioService: UsuarioService,
              private http: HttpClient,
              private router: Router,
              private fileTransfer: FileTransfer,
              private loadingCtrl: LoadingController,
              private file: File,
              private fileOpener: FileOpener,
              private toastController: ToastController ) {
               }

  async cargarToken() {
    this.token = await localStorage.getItem('token') || null;
  }

  async sendMessage(mensaje: string, idGrupo: string) {

  await this.cargarToken();

  const headers = new HttpHeaders({
    'x-token': this.token
  });

  this.http.get(`${environment.url}/token`, {headers})
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
      } else {
        this.router.navigateByUrl('/login');
      }
    });
  }

  emitOldMessages() {
     const payload = {
       grupo: localStorage.getItem('grupo')
     };

    // console.log(localStorage.getItem('grupo'));

     this.wsService.emit('mensajes-v', payload);
  }

  oldMessages(grupo: string) {

    const data = {grupo};
    //console.log(grupo);

    return this.http.post(`${environment.url}/mensajes`, data);

  }

  emitEscribiendo(grupo: string) {

    const payload = {grupo};
    this.wsService.emit('escribiendo', payload);
  }

  getEscribiendo() {
    return this.wsService.listen('escribiendo');
  }

  getMessages() {
    return this.wsService.listen('mensaje-nuevo');
  }

  limpiarMensajes(mensajes: any[]) {
    mensajes = [];
  }

  subirImagen( img: string ) {

    const options: FileUploadOptions = {
      fileKey: 'image',
      headers: {
        'x-token': this.usuarioService.token
      }
    };

    const fileTransfer: FileTransferObject = this.fileTransfer.create();

    fileTransfer.upload( img, `${ environment.url }/mensajes/upload`, options )
      .then( data => {
        console.log('HECHO' + data);
        // Llama el mensaje de cargando

        setTimeout(( ) => {
          this.loading.dismiss();
          this.emitGuardarImagen();
        }, 1500);
        this.presentLoading('Cargando');

      }).catch( err => {
        console.log('error en carga', err);
      });
  }

  // METODO PARA SUBIR ARCHIVOS

  subirArchivo( file: string) {

    // console.log('FILEEEE'+file);

    const options: FileUploadOptions = {
      fileKey: "file",
      fileName: file,
      headers: {
        'x-token': this.usuarioService.token
      }
    };

    const fileTransfer: FileTransferObject = this.fileTransfer.create();

    fileTransfer.upload(file, `${environment.url}/mensajes/upload/file`, options).then(data => {
      setTimeout(() => {
        this.loading.dismiss();
        this.emitGuardarImagen();
      }, 1500);
      this.presentLoading('Cargando');

    }).catch(err => {
     // console.log(fileTransfer);
     // console.log('Error', err);
     this.presentToast();

    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Este archivo ya existe en la BD, Verificar  NOMBRE',
      duration: 4000
    });
    toast.present();
  }

  // VER Y DESCARGAR ARCHIVO PDF
  dowloandOpenDocument(docId: string, msgDoc: string) {
    const fileTransfer: FileTransferObject = this.fileTransfer.create();


    const url = environment.url + '/mensajes/' + docId ;
    console.log();
    console.log(url);

    fileTransfer.download(url, this.file.dataDirectory + msgDoc).then((entry) => {
      console.log('DESCARGADO');
      const urll = entry.toURL();
      console.log(urll);
      this.fileOpener.open(urll, 'application/pdf');
    }, (error) => {
      console.log(error);
    // handle error
  });

    /*
    this.fileOpener.open(docId, 'application/pdf')
    .then(() => console.log('File is opened'))
    .catch(e => console.log('Error opening file', e));
    const urlDown = 'http://10.11.124.235:2000/mensajes/5d6402eed109976474764152/g2pc7aqwk2c1sxr6.pdf';
    const path = this.file.dataDirectory;
    const transfer = this.fileTransfer.create();

    transfer.download(urlDown, `${path}myfile.pdf`).then(entry => {
      console.log(entry);
      const url = entry.toURL();
      this.fileOpener.open(url, 'application/pdf');
    });
*/

  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      message

    //  duration: 2000
    });
    return this.loading.present();
  }

  // SUBE LA IMAGEN
  guardarImagen(formData: FormData) {

    this.cargarToken();

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return this.http.post(`${environment.url}/mensajes/upload`, formData, {headers});
  }
  // CARGA LA IMAGEN
  async emitGuardarImagen() {

    await this.cargarToken();

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    this.http.get(`${environment.url}/token`, {headers})
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
  }

  //// NUEVO METODOS DE RESPONDER

// TRAE EL ID DEL MENSAJE SELECCIONADO Y REGRESA EL TEXTO DEL MENSAJE
 mensajePorId(id: string) {
    this.cargarToken();

    const headers = new HttpHeaders({
      'x-token': localStorage.getItem('token')
    });

    return this.http.get(`${environment.url}/obtener/mensaje/${id}`, {headers});
  }

// ENVIA LA RESPUES DEL MENSAJE....
emitRespuesta(idRes: string, respuesta: string, grupo: string) {
  this.cargarToken();

  const headers = new HttpHeaders({
    'x-token': localStorage.getItem('token')
  });

  this.http.get(`${environment.url}/token`, {headers})
    .subscribe(resp => {
      if (resp['ok']) {
        this.usuario = resp['userDB'];
      //  console.log('USUARIO  --- ' + this.usuario);

        const payload = {
          idRes,
          respuesta,
          grupo,
          _id: this.usuario._id
        };

      //  console.log('PAYLOAD  --- ' + payload);

        this.wsService.emit('respuesta', payload);
      }
    });
}

// Obtiene los datos del usuario
obtenerUsuario() {
  this.cargarToken();

  const headers = new HttpHeaders({
    'x-token': this.token
  });

  return this.http.get(`${environment.url}/token`, {headers});
}

sendReenviar(payload: any) {
  this.wsService.emit('reenviar', payload);
}
/* ELIMINAR */
eliminar(id: string) {
  this.cargarToken();

  const headers = new HttpHeaders({
    'x-token': this.token
  });

  return this.http.get(`${environment.url}/eliminado/${id}/${localStorage.getItem('grupo')}`,  {headers});
}




}
