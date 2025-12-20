import { Observable } from 'rxjs';
import { ShoppingCar } from '../models/shoppingCar.model';


export abstract class ShoppingCarRepository {
  abstract findAll(): Observable<ShoppingCar[]>;

}
