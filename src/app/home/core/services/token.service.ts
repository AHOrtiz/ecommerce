import { Injectable } from '@angular/core';
import { TokenRepositoryImpl } from '../../data/repositories/token.repository.impl';

@Injectable({ providedIn: 'root' })
export class TokenService {

    constructor(private tokenRepository: TokenRepositoryImpl) { }

    get(): String | null {
        return this.tokenRepository.get()
    }

    remove() {
        return this.tokenRepository.remove()
    }
}
