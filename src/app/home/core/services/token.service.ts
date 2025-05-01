import { Injectable } from '@angular/core';
import { TokenRepositoryImpl } from '../../data/repositories/token.repository.impl';

@Injectable({ providedIn: 'root' })
export class TokenService {

  constructor(private tokenRepository: TokenRepositoryImpl) { }

  get(): string | null {
    return this.tokenRepository.get()
  }

  remove() {
    return this.tokenRepository.remove()
  }


  isAuthenticated(): boolean {
    const token = this.get();
    if (!token) {
      return false;
    }
    // Verificar si el token ha expirado
    const payload = this.decodeToken(token);
    const currentTime = Math.floor(Date.now() / 1000);
    return payload && payload.exp > currentTime;
  }
  //   Decodifica el token JWT
  private decodeToken(token: string): any {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (e) {
      return null;
    }
  }
}
