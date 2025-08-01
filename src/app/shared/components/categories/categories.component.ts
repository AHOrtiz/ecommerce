import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  @Input() title: string = '';
  @Input() categories: Array<Categories> = new Array();
  @Output() categorySelected = new EventEmitter<Categories>();

  @ViewChild('container', { static: true }) headerContainer?: ElementRef<HTMLDivElement>;
  @ViewChild('bodyContainer', { static: true }) bodyContainer?: ElementRef<HTMLDivElement>;
  @ViewChild('icon', { static: true }) icon?: ElementRef<HTMLLabelElement>;

  public selectedCategory: Categories | null = null;
  public isOpen: Boolean = false;

  public selectCategory(category: Categories) {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
  }

  public toggle() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      // BODY
      this.bodyContainer!.nativeElement.style.display = 'flex';
      // ICON
      this.icon!.nativeElement.classList.add('rotate');
    } else {
      // BODY
      this.bodyContainer!.nativeElement.style.display = 'none';
      // ICON
      this.icon!.nativeElement.classList.remove('rotate');
    }
  }
}

export enum Categories {
  bedroom = "recamara",
  livingRoom = "sala",
  office = "oficina",
  kitchen = "cocina",
  outdoor = "exterior",
  decor = "decoracion"
}
