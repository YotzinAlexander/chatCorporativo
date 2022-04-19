import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2/tab2.page';
import { Tab3Page } from './tab3/tab3.page';
import { UsuarioGuard } from './guards/usuario.guard';

export const routes: Routes = [
  {path: 'main',
  loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
   // canActivate: [UsuarioGuard]},
   canLoad: [UsuarioGuard]},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  {path: '',pathMatch: 'full',redirectTo: 'main/tabs/tab1'},
  { path: 'reenvia-grupo', loadChildren: './pages/reenvia-grupo/reenvia-grupo.module#ReenviaGrupoPageModule' },
  { path: 'chat-admin', loadChildren: './pages/chat-admin/chat-admin.module#ChatAdminPageModule' }
];

export const ProjectRoutes: Routes = [
  { path: 'chat', component: Tab2Page},
  { path: 'imagen', component: Tab3Page}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


// Vanessa Rivas
