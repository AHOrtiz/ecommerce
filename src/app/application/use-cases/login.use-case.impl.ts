import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/core/domain/user.model";
import { LoginUseCase } from "src/app/core/use-cases/login.use-case";
import { AuthRepository } from "../repositories/auth.repository";

@Injectable({
  providedIn: 'root',
})
export class LoginUseCaseImpl extends LoginUseCase  {
  constructor(private authRepository: AuthRepository) {
    super();
  }

  override execute(username: string, password: string): Observable<User> {
    return this.authRepository.login(username, password)
  }
}
