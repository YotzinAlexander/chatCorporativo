import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { Tab2Page } from './tab2/tab2.page';
import { Tab3Page } from './tab3/tab3.page';
import { UsuarioGuard } from './guards/usuario.guard';
export const routes = [
    { path: 'main',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
        // canActivate: [UsuarioGuard]},
        canLoad: [UsuarioGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'main/tabs/tab1'
    }
];
export const ProjectRoutes = [
    { path: 'chat', component: Tab2Page },
    { path: 'imagen', component: Tab3Page }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map