import { User } from '../models/user.model';
import { Observable } from "rxjs";

export abstract class AuthUseCase {
  abstract login(email: string, password: string): Observable<User>
  abstract register(email: string, password: string): Observable<User>
}
