import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthRepository } from 'src/app/application/repositories/auth.repository';
import { User } from 'src/app/core/domain/user.model';

@Injectable({providedIn: 'root'})
export class AuthRepositoryImpl extends AuthRepository {

  private apiUrl = ''

  constructor(private http: HttpClient) {
    super();
  }

  override login(username: string, password: string): Observable<User> {
    return this.http.post<User>('', {username, password})
  }
}
