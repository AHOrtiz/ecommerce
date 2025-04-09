import { Product } from './../../models/product.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-second-card',
  templateUrl: './second-card.component.html',
  styleUrls: ['./second-card.component.css']
})
export class SecondCardComponent {
  @Input() product!: Product;

  hasDiscount(): boolean {
    if (this.product.hasDiscount) {
      return true
    }
    return false
  }

  getPrice(): number {
    if (this.product.hasDiscount) {
      return this.calcularNuevoPrecio(
        this.product.price,
        this.product.discount!
      )
    }
    return this.product.price
  }

  private calcularNuevoPrecio(precio: number, descuento: number): number {
    return precio - (precio * descuento / 100)
  }

  btnCarrito() {
    console.log('click en boton de carro')
  }

  OnclickCard() {
    console.log('click en tarjeta')
  }
}
