import { User } from '../models/user.model';
import { Observable } from "rxjs";

/**ARCHIVO INTERFAZ SOLO SE TIENE PROPIEDADES Y LO QUE REGRESA */

export abstract class AuthUseCase {
  abstract login(email: string, password: string): Observable<User>
  abstract register(email: string, password: string, username: string): Observable<User>
}
