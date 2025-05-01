import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { CategoryRepository } from '../../core/repositories/category.repository';
import { Category } from '../../core/models/category.model';

@Injectable({providedIn: 'root'})
export class CategoryRepositoryImpl extends CategoryRepository {

  private baseUrl: string = `${environment.apiUrl}/categories`;
  private categorySubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { super(); }

  override create(name: string): Observable<Category> {
     return this.http.post<Category>(`${this.baseUrl}`,{name});
  }

  override delete(id: string): Observable<Boolean> {
    return this.http.delete<Boolean>(`${this.baseUrl}/${id}`).pipe(
      tap((response)=>{
          response
      })
    )
  }

  override findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}`).pipe(
      tap((response)=>{
        response
      })
    )
  }
}
