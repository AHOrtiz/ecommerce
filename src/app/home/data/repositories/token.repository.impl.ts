import { Injectable } from '@angular/core';

import { TokenRepository } from '../../core/repositories/token.repository';

@Injectable({ providedIn: 'root' })
export class TokenRepositoryImpl extends TokenRepository {

    constructor() { super(); }

    private readonly TOKEN_KEY = 'auth_token'

    override get(): String | null {
        return localStorage.getItem(this.TOKEN_KEY)
    }
    
    override remove(): void {
        localStorage.removeItem(this.TOKEN_KEY)
    }
}
