import { Component, EventEmitter, Input, Output } from '@angular/core';
export interface Category {
  nombre: string;
  icono: string;
}

@Component({
  selector: 'shared-categories-horizontal',
  templateUrl: './categories-horizontal.component.html',
  styleUrls: ['./categories-horizontal.component.css'],
})
export class CategoriesHorizontalComponent {
  @Input() category!: Category ;

  @Output() onclick = new EventEmitter<string>();

  btnClick() {
    this.onclick.emit(this.category.nombre);
  }
    capitalize(texto: string) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }
}

