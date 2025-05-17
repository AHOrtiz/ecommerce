import { Observable } from 'rxjs';
import { Banner } from '../models/banner.model';

export abstract class BannerUseCase {
   abstract create(body: Banner): Observable<Banner>;
   abstract findAll(): Observable<Banner[]>;
}
