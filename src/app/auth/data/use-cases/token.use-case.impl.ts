import { Injectable } from "@angular/core";
import { TokenRepository } from "../../core/repositories/token.repository";
import { TokenUseCase } from "../../core/use-cases/token.use-case";

@Injectable({ providedIn: 'root' })
export class TokenUseCaseImpl extends TokenUseCase  {
  constructor(private tokenRepository: TokenRepository) { 
    super();
  }

  override save(token: string) {
    return this.tokenRepository.save(token)
  }
}
