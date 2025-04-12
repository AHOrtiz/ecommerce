import { Observable } from 'rxjs';
import { User } from 'src/app/core/domain/user.model';

export abstract class AuthRepository {
  abstract login(username: string, password: string): Observable<User>
}
