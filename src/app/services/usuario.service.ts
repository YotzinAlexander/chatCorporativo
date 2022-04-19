import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario, RespuestaPosts } from '../interfaces/interfaces';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  userType: string = null;
  private usuario: Usuario ;
  paginaPosts = 0;

  constructor( private http: HttpClient,
               private router: Router,
               private storage: Storage,
               private navCtrl: NavController,
               private platform: Platform ) { }

               getPosts( pull: boolean = false ) {

                if ( pull ) {
                  this.paginaPosts = 0;
                }

                this.paginaPosts ++;

                return this.http.get<RespuestaPosts>(`${ environment.url }/posts/?pagina=${ this.paginaPosts }`);

              }
/** METODO PRINCIPAL, INICIO DE SESION. */
  login(email: string, password: string) {

    const data = { email, password};

    return new Promise( resolve => {
      this.http.post(`${environment.url}/login`, data)
        .subscribe( resp => {
          // console.log(resp);

          if (resp['ok']) {
          //  console.log(resp);
            this.guardarToken(resp['token']);
           // this.guardarUtype(resp['uType']);
            // Llama al envio
           // this.enviaOneSignal();
            resolve(true);
          } else {
            this.token = null;
            localStorage.clear();
            resolve(false);
          }
        });
    });
  }
/* Metodo que realiza la extraccion del Id y token de local Storage para enviar a el Servidor....*/
  enviaOneSignal(usuarioId:string) {

    const signal = {
      'onesignal': usuarioId
    };

    const  headers = {
        'x-token': localStorage.getItem('token')};

    // console.log(signal);

    return new Promise (resolve => {
      this.http.post(`${environment.url}/updateone`, signal, {headers}).subscribe(resp => {
    //    console.log(signal);
      });
    });
  }

  checkUserType(email: string) {

    const data = { email};

    return new Promise (resolve => {
      this.http.post(`${environment.url}/checkUserType`, data).subscribe(resp => {
    //    console.log(resp['ok']);

        if (resp['ok']) {
            resolve(true);
          } else {
            resolve(false);
          }
      });
    });
  }
/// Trae los datos de los usuarios por grupo especifico --> tab2.page.ts
  buscarUsuarios(grupo: string) {
   // console.log('Buscar  USR')
    const grupos = {
      'grupos' : grupo,
      'idOneSignal': localStorage.getItem('idOnesignal'),
      'nombreGrupo': localStorage.getItem('nombreGpo')
    };
    return new Promise (resolve => {
  //    console.log('Promesa')
      /** Usuarios que perteneces al mismo gruo */
      this.http.post(`${environment.url}/buscarUsuarios`, grupos).subscribe(resp => {
  //      console.log(resp);

      });
    });

  }

/** GUARDAR TOKEN */
  async guardarToken( token: string) {
    this.token = token;

    await localStorage.setItem('token', token);
  }
/** TIPO DE USUARIO 01 ADMINISTRADOR, 00 NORMAL */
  async guardarUtype( userType: string){
    this.userType =  userType;

    await localStorage.setItem('userType', userType);
  }

  async cargarToken() {
    this.token = await localStorage.getItem('token') || null;
  }


/** VALIDA NUESTRO TOKEN, DE SER CORRECTO NOS DA ACCESO */
 async validaToken(): Promise<boolean> {

   await this.cargarToken();

   if (!this.token) {

    this.router.navigateByUrl('/login');
    return Promise.resolve(false);

   }

   return new Promise( resolve => {
    const headers = new HttpHeaders({
      'x-token': this.token
    });
    this.http.get(`${environment.url}/token`, {headers})
      .subscribe(resp => {
        if (resp['ok']) {
          this.usuario = resp['userDB'];
          resolve(true);
        } else {
          this.router.navigateByUrl('/login');
          resolve(false);
        }
      });
   });
  }
/** EXTRAER GRUPOS A LOS QUE PERTECE ESTE USUARIO, MEDIANTE EL EMAIL */
  traerGruposUsuario(email: string) {

    const data = { email };

    return this.http.post(`${environment.url}/grupos/usuario`, data);

  }
/** CERRAR SESION, ELIMINAR DATOS DE LOCAL STORAGE */
  logout() {
    this.token   = null;
    this.usuario = null;
    localStorage.clear();
    this.navCtrl.navigateRoot('/login', { animated: false });
  }
}
