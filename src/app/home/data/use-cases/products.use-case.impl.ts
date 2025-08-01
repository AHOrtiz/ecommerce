import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductsUseCase } from "../../core/use-cases/products.use-case";
import { Products } from "../../core/models/products.model";
import { ProductsRepository } from "../../core/repositories/products.repository";

@Injectable({ providedIn: 'root' })
export class ProductsUseCaseImpl extends ProductsUseCase{

  constructor(private productsRepository:ProductsRepository){super();}
  override create(body:Products):Observable<Products>{
    return this.productsRepository.create(body);
  }
  override findAll():Observable<Products[]>{
    return this.productsRepository.findAll();
  }
}
