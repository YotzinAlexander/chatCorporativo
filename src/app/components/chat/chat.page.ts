import { Component, OnInit, OnDestroy, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { NavController, ModalController, LoadingController, NavParams, IonSlides } from '@ionic/angular';
import { environment } from '../../../environments/environment';

/*

CLASE DESTINADA PARA ABRIR NUESTRAS IMAGENES,
CARGANDOLA EN NUESTRO HTML

*/




@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  indice: any;

  imagen: string;

  url = environment.url;



  constructor(
              private modal: ModalController,
              private navparams: NavParams,
              private loadingController: LoadingController) {


                /*this.loadingController.create({
                  message: 'Cargando imagen'
                }).then(loading => loading.present());*/

                this.indice = this.navparams.get('imagen');

                // console.log('imagen ---------' +'http://10.11.124.235:2000/mensajes/'+this.indice);
              }
/* CIERRE DE MODAL  */
  closeChat() {
      this.modal.dismiss();
  }

  ngOnInit() {
  }
}
