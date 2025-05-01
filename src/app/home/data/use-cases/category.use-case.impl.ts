
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CategoryUseCase } from "../../core/use-cases/category.use-case";
import { Category } from "../../core/models/category.model";
import { CategoryRepository } from "../../core/repositories/category.repository";

/** SE EXTIENDE DE LA INTERFAZ */

@Injectable({ providedIn: 'root' })
export class CategoryUseCaseImpl extends CategoryUseCase  {
  constructor(private categoryRepository: CategoryRepository) {
    super();
  }

  override create(name: string): Observable<Category> {
     return this.categoryRepository.create(name)
  }
  override delete(id: string): Observable<Boolean> {
     return this.categoryRepository.delete(id)
  }
  override findAll(): Observable<Category[]> {
     return this.categoryRepository.findAll()
  }
}
