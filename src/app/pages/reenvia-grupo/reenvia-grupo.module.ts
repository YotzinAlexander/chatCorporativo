import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReenviaGrupoPage } from './reenvia-grupo.page';

const routes: Routes = [
  {
    path: '',
    component: ReenviaGrupoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReenviaGrupoPage]
})
export class ReenviaGrupoPageModule {}
