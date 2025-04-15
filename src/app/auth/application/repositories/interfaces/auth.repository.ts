import { Observable } from 'rxjs';
import { User } from 'src/app/auth/core/domain/user.model';

export abstract class AuthRepository {
  abstract login(email: string, password: string): Observable<User>
  abstract register(email: string, password: string): Observable<User>
}
