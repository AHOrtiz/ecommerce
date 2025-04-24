import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/auth/core/models/user.model";
import { AuthRepository } from "../../core/repositories/auth.repository";
import { AuthUseCase } from "../../core/use-cases/login.use-case";

@Injectable({ providedIn: 'root' })
export class LoginUseCaseImpl extends AuthUseCase  {
  constructor(private authRepository: AuthRepository) {
    super();
  }

  override login(email: string, password: string): Observable<User> {
    return this.authRepository.login(email, password)
  }

  override register(email: string, password: string, username: string): Observable<User> {
    return this.authRepository.register(email, password, username)
  }
}
