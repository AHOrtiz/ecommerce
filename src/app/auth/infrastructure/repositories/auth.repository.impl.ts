import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthRepository } from 'src/app/auth/application/repositories/auth.repository';
import { User } from 'src/app/auth/core/domain/user.model';

@Injectable({providedIn: 'root'})
export class AuthRepositoryImpl extends AuthRepository {

  private apiUrl = 'http://localhost:3000/users'
  private currentUserSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {
    super();
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUserSubject.next(JSON.parse(user));
    }
  }

  /**
   * Metodo para iniciar sesion
   * @param email Email del usuario
   * @param password Contraseña
   * @returns Observable con la respuesta del servidor
   */
  override login(email: string, password: string): Observable<User> {

    let user: string = (email === "irwing@hotmail.com") ? '1' : '2'

    return this.http.get<User>(`${this.apiUrl}/${user}`).pipe(
      tap((response) => {
        if (response && response.token) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.currentUserSubject.next(response);
        }
      })
    )
  }
}
