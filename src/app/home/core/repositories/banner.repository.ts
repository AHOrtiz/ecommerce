import { Observable } from 'rxjs';
import { Banner } from '../models/banner.model';

export abstract class BannerRepository {
   abstract create(body: Banner): Observable<Banner>;
   abstract findAll(): Observable<Banner[]>;
}
