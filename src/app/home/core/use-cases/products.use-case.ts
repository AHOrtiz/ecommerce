import { Observable } from 'rxjs';
import { Products } from '../models/products.model';

export abstract class ProductsUseCase{

  abstract create(body:Products):Observable<Products>
  abstract findAll():Observable<Products[]>
}
