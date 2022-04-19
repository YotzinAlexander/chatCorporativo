import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UiServiceService } from '../../services/ui-service.service';
import { Router } from '@angular/router';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { PushService } from '../../services/push.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombre: string;

  /** CREDENCIALES DE PRUEBA, BORRAR Y DEJAR LIMPIO '' */

  /*  loginUser = {
    email: 'yot@gmail.com',
    password: '123456'
  };
*/

  loginUser = {
    email: '',
    password: ''
  };



  constructor( private usuarioService: UsuarioService,
               private navController: NavController,
               private uiService: UiServiceService,
               private router: Router,
               private pushService: PushService,
               private localNotifications: LocalNotifications) { }

  ngOnInit() {
    // console.log('ACTIVADA' + this.backgroundMode.isActive());

  // this.notificacionLocal();


  }

  notificacionLocal() { 
    this.localNotifications.schedule({
    id: 1,
    text: 'Single ILocalNotification'
  });
  }

  async login( ) {

    localStorage.setItem('email', this.loginUser.email);

    //if ( fLogin.invalid ) { return; }

    const valido = await this.usuarioService.login( this.loginUser.email, this.loginUser.password );
   // console.log(valido);
    if ( valido ) {
      // navegar al tabs de inicio
      this.navController.navigateRoot( '/main/tabs/tab1', { animated: false } );
      this.pushService.configuracionInicial();
    } else {
      // mostrar alerta de usuario y contraseña no correctos
      this.uiService.alertaInformativa('Usuario y contraseña no son correctos.');
    }


  }


}

/*




  login() {

    localStorage.setItem('email', this.loginUser.email);

    this.usuarioService.login(this.loginUser.email, this.loginUser.password)
      .then( () => {
        this.router.navigateByUrl('/main/tabs/tab1');
      });
  }









  */
