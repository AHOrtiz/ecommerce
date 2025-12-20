import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/core/models/user.model';

export abstract class AuthRepository {
  abstract login(email: string, password: string): Observable<User>
  abstract register(email: string, password: string, username: string): Observable<User>
  abstract logout(): Observable<HttpResponse<{ message: string }>>;
}
