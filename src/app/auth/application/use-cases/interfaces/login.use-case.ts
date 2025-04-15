import { User } from '../../../core/domain/user.model';
import { Observable } from "rxjs";

export abstract class LoginUseCase {
  abstract execute(email: string, password: string): Observable<User>
  abstract executeRegister(email: string, password: string): Observable<User>
}
