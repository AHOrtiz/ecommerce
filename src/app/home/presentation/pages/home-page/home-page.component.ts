import { Component } from '@angular/core';
import { Categories } from 'src/app/shared/components/categories/categories.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
   titleOptions : string = 'Martial';
   optionsList =['Cloth', 'Wood','Glass','Plastic', 'Rattan']
   title :string = 'Category';
   categoriesList = [Categories.bedroom, Categories.livingRoom, Categories.office];
   selectedMaterials: string[] = [];
   onCategoryChange(category: Categories) {
    console.log('Categoría seleccionada:', category);

  }

  onOptionsSelected(selected: string[]) {
    this.selectedMaterials = selected;
    console.log('Materiales seleccionados:', this.selectedMaterials);
  }
}
