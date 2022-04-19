import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ChatService } from '../../services/chat.service';
import { Mensaje, Grupo } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';



@Component({
  selector: 'app-reenvia-grupo',
  templateUrl: './reenvia-grupo.page.html',
  styleUrls: ['./reenvia-grupo.page.scss'],
})
export class ReenviaGrupoPage implements OnInit {

idGrupo: any;
id: any;
idRen: any;
imagenReenviar: any;
mensajeReenviar: any;
documentoReenviar: any;


  usuarioGrupos: Grupo[] = [];
  userGrupos = '';

  constructor(private modal: ModalController,
              public chatService: ChatService,
              public navParams: NavParams,
              private usuarioService: UsuarioService) {
                this.reenviar(this.id);
                this.documentoReenviar = this.navParams.get('doc');
                this.mensajeReenviar = this.navParams.get('texto');
                this.imagenReenviar  = this.navParams.get('img');
                this.idRen = this.navParams.get('reenviar');
                this.id =  this.navParams.get('id');
               }

  async openMyModal() {
    const myModal = await this.modal.create({
      component: ReenviaGrupoPage,
      cssClass: 'my-custom-modal-css'
    });
    return await myModal.present();
  }

  ngOnInit() {
  }

  close() {
    this.modal.dismiss();

  }

  reenviar(id: string) {
   // OBTIENE USUARIOS PARA SER ENVIADO EL MENSAJE
    this.chatService.obtenerUsuario().subscribe( resp => {

      if (resp['ok']) {

        this.usuarioGrupos = resp['userDB']['grupos'];
        this.id = resp['userDB']._id;
      }
    });

    this.chatService.mensajePorId(id).subscribe( resp => {


      if (resp['ok']) {

        const mensaje: Mensaje = resp['mensaje'][0];

        this.mensajeReenviar = mensaje.texto || '';
        this.imagenReenviar = mensaje.img;
        this.documentoReenviar = mensaje.doc;
        console.log('DOCUMENTO 2 ' + this.documentoReenviar);

        if (mensaje.reenviar) {
          this.idRen = mensaje.reenviar;
        } else {
          this.idRen = mensaje.usuario;
        }
      }
    });

  }

  enviarGrupo() {
    for (let i = 0; i < this.userGrupos.length; i++) {
      const element = this.userGrupos[i];
      const payload = {
        texto: this.mensajeReenviar,
        img: this.imagenReenviar,
        doc: this.documentoReenviar,
        reenviar: this.idRen,
        _id: this.id,
        grupo: element
      };
      // console.log(payload);
      // ALERTA DE MENSAJES PARA ENVIO A GRUPOS
      // this.usuarioService.buscarUsuarios(localStorage.getItem('grupo'));
      /* NOTIFICACION DE REENVIO DE MENSAJE */
      this.usuarioService.buscarUsuarios(localStorage.getItem('grupo'));
      this.chatService.sendReenviar(payload);
    }
    this.mensajeReenviar = '';
    this.imagenReenviar = [];
    this.documentoReenviar = [];
    this.idRen = '';
    this.id = '';
    this.userGrupos = '';
    this.usuarioGrupos = [];

    this.modal.dismiss();

  }


}
