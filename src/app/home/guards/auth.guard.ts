import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from '../core/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(): boolean {
    if (this.tokenService.isAuthenticated()) {
      return true;
    } else {
      // Redirigir al login si no está autenticado
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
