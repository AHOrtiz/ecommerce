import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/auth/core/domain/user.model";
import { LoginUseCase } from "src/app/auth/application/use-cases/interfaces/login.use-case";
import { AuthRepository } from "../repositories/interfaces/auth.repository";

@Injectable({
  providedIn: 'root',
})
export class LoginUseCaseImpl extends LoginUseCase  {
  constructor(private authRepository: AuthRepository) {
    super();
  }

  override execute(email: string, password: string): Observable<User> {
    return this.authRepository.login(email, password)
  }

  override executeRegister(email: string, password: string): Observable<User> {
    return this.authRepository.register(email, password)
  }
}
