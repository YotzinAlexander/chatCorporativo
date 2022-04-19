import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, LoadingController, NavParams } from '@ionic/angular';
let ChatPage = class ChatPage {
    constructor(modal, navparams, loadingController) {
        /*this.loadingController.create({
          message: 'Cargando imagen'
        }).then(loading => loading.present());*/
        this.modal = modal;
        this.navparams = navparams;
        this.loadingController = loadingController;
        this.indice = this.navparams.get('imagen');
        //console.log('imagen ---------' +'http://10.11.124.235:2000/mensajes/'+this.indice);
    }
    closeChat() {
        this.modal.dismiss();
    }
    ngOnInit() {
    }
};
ChatPage = tslib_1.__decorate([
    Component({
        selector: 'app-chat',
        templateUrl: './chat.page.html',
        styleUrls: ['./chat.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController,
        NavParams,
        LoadingController])
], ChatPage);
export { ChatPage };
//# sourceMappingURL=chat.page.js.map