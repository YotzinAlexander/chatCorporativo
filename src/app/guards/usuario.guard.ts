import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})

/** NOS AYUDA A VALIDAR NUESTRO TOKEN, AL ENTRAR EN DIFERENTES VENTANAS. ASI COMO A LA APLICACION. */
export class UsuarioGuard implements CanLoad {

  constructor( private usuarioService: UsuarioService ) {}

  canLoad(): Observable<boolean> | Promise<boolean> | boolean  {

    return this.usuarioService.validaToken();
  }

  // canActivate(): Observable<boolean> | Promise<boolean> | boolean {
  //   return false;
  // }

}
