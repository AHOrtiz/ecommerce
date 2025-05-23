import { Injectable } from '@angular/core';
import { TokenRepository } from '../../core/repositories/token.repository';

@Injectable({providedIn: 'root'})
export class TokenRepositoryImpl extends TokenRepository {

  private readonly TOKEN_KEY = 'auth_token'

  constructor() {
    super();
  }

  override save(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token)
  }
}
