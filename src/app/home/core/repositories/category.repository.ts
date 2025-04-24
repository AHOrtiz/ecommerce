
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';


export abstract class CategoryRepository {
  abstract create(name: string): Observable<Category>
  abstract delete(id:string): Observable<Boolean>
  abstract findAll(): Observable<Category[]>

}
