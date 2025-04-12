import { User } from './../domain/user.model';
import { Observable } from "rxjs";

export abstract class LoginUseCase {
  abstract execute(username: string, password: string): Observable<User>
}
