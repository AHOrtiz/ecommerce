
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductUseCase } from "../../core/use-cases/product.use-case";
import { Product } from "../../core/models/product.model";
import { ProductRepository } from "../../core/repositories/product.repository";

@Injectable({ providedIn: 'root' })

export class ProductUseCaseImpl extends ProductUseCase{

  constructor(private productRepository:ProductRepository){super();}

  override create(body: Product): Observable<Product> {
     return this.productRepository.create(body);
  }
  override fndAll(): Observable<Product[]> {
     return this.productRepository.fndAll();
  }

}
