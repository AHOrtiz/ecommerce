import { Observable } from 'rxjs';
import { Product } from '../models/product.model';


export abstract class ProductRepository{
 abstract create (body: Product):Observable<Product>;
  abstract fndAll():Observable<Product[]>;
}
