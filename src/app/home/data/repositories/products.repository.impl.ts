import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductsRepository } from '../../core/repositories/products.repository';
import { Products } from '../../core/models/products.model';

@Injectable({ providedIn: 'root' })
export class ProductsRepositoryImpl extends ProductsRepository {
  private baseUrl: string = `${environment.apiUrl}/products/bestRated?limit=10`;
  
  constructor(private http: HttpClient) {
    super();
  }

  override create(body: Products): Observable<Products> {
    return this.http.post<Products>(`${this.baseUrl}`, {
      ...body,
    });
  }
  override findAll(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.baseUrl}`).pipe(
      tap((response) => {
        response;
      })
    );
  }
}
