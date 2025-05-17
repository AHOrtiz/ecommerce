import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BannerRepository } from '../../core/repositories/banner.repository';
import { Banner } from '../../core/models/banner.model';

@Injectable({ providedIn: 'root' })
export class BannerRepositoryImpl extends BannerRepository {

  private baseUrl: string = `${environment.apiUrl}/banner`;

  constructor(private http: HttpClient) { super(); }

  override create(body: Banner): Observable<Banner> {
    return this.http.post<Banner>(`${this.baseUrl}`, {
      ...body
    });
  }

  override findAll(): Observable<Banner[]> {
    return this.http.get<Banner[]>(`${this.baseUrl}`).pipe(
      tap((response) => {
        response
      })
    )
  }
}


