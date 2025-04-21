import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  @Input() title: string = '';
  @Input() categories:Array<Categories> = new Array();
  @Output() categorySelected = new EventEmitter<Categories>();

  @ViewChild('container',{static:true}) containerElement?: ElementRef<HTMLDivElement>;
  @ViewChild('containerCategories',{static:true}) containerCategories?: ElementRef<HTMLDivElement>;
  @ViewChild('icon',{static:true}) icon?: ElementRef<HTMLLabelElement>;
  public selectedCategory: Categories | null = null;

selectCategory(category: Categories) {
  this.selectedCategory = category;
  this.categorySelected.emit(category);
}

  public isOpen: Boolean = false;
  public toggle(){
    this.isOpen = !this.isOpen;

    if(this.isOpen){

       this.containerCategories!.nativeElement.style.display = 'block';
       this.icon!.nativeElement.classList.add('rotate');
    }else{
       this.containerElement!.nativeElement.style.height = '58px';
       this.containerCategories!.nativeElement.style.display = 'none';
       this.icon!.nativeElement.classList.remove('rotate');
    }
  }


}

 export enum Categories{
     bedroom = "recamara",
     livingRoom = "sala",
     office = "oficina",
     kitchen = "cocina",
     outdoor = "exterior",
     decor = "decoracion"
}
