import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChatsPage } from './chats.page';
const routes = [
    {
        path: '',
        component: ChatsPage
    }
];
let ChatsPageModule = class ChatsPageModule {
};
ChatsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ChatsPage]
    })
], ChatsPageModule);
export { ChatsPageModule };
//# sourceMappingURL=chats.module.js.map