import { Component } from '@angular/core';
import { Categories } from 'src/app/shared/components/categories/categories.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
   title :string = 'Category';
   categoriesList = [Categories.bedroom, Categories.livingRoom, Categories.office];

   onCategoryChange(category: Categories) {
    console.log('Categoría seleccionada:', category);

  }
}
