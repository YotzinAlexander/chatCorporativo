import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
let UsuarioGuard = class UsuarioGuard {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    canLoad() {
        return this.usuarioService.validaToken();
    }
};
UsuarioGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [UsuarioService])
], UsuarioGuard);
export { UsuarioGuard };
//# sourceMappingURL=usuario.guard.js.map