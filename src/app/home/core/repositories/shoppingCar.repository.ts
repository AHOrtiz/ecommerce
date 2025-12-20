import { Observable } from 'rxjs';
import { ShoppingCar } from '../models/shoppingCar.model';


export abstract class ShoppingCarRepository {
  abstract findById(id: number): Observable<ShoppingCar>;
  abstract findActiveShoppingCar(): Observable<ShoppingCar>;
  abstract create(): Observable<ShoppingCar>;
}
