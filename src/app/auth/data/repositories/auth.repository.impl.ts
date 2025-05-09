import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, tap } from 'rxjs';

import { User } from 'src/app/auth/core/models/user.model';
import { AuthRepository } from '../../core/repositories/auth.repository';
import { environment } from 'src/environments/environment';


@Injectable({providedIn: 'root'})
export class AuthRepositoryImpl extends AuthRepository {

  private baseUrl: string = `${environment.apiUrl}/auth`
  private currentUserSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { super(); }

  /**
   * Metodo para iniciar sesion
   * @param email Email del usuario
   * @param password Contraseña
   * @returns Usuario existente
   */
  override login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/login`, {email, password}).pipe(
      tap((response) => {
        if (response && response.token) {
          this.currentUserSubject.next(response)
        }
      })
    )
  }

  /**
   * Metodo encargado de crear un nuevo usuario
   * @param email 
   * @param password 
   * @returns Usuario creado
   */
  override register(email: string, password: string, username: string): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/register`, {email, password, fullName: username}).pipe(
      tap((response) => {
        if (response && response.token) {
          this.currentUserSubject.next(response);
        }
      })
    )
  }
}
