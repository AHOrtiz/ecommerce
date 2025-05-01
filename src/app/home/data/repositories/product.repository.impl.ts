
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductRepository } from '../../core/repositories/product.repository';
import { Product } from '../../core/models/product.model';

@Injectable({providedIn: 'root'})

export class ProductRepositoryImpl extends ProductRepository{
  private baseUrl: string = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) { super(); }

  override create(body: Product): Observable<Product> {
      return this.http.post<Product>(`${this.baseUrl}`,{
        ...body
      });
  }
  override fndAll(): Observable<Product[]> {
     return this.http.get<Product[]>(`${this.baseUrl}`).pipe(
      tap((response)=>{
        response
      })
    )
  }

}
