import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/home/core/models/products.model';

@Component({
  selector: 'shared-second-card',
  templateUrl: './second-card.component.html',
  styleUrls: ['./second-card.component.css'],
})
export class SecondCardComponent {
  @Input() product!: Products;
  constructor(private router: Router) {}

  get rating(): number {
    return Number(this.product.rating);
  }

  hasDiscount(): boolean {
    if (this.product.discount) {
      return true;
    }
    return false;
  }

  getPrice(): string {
    let parsedFloat = parseFloat(this.product.price);
    let fixedString = parsedFloat.toFixed(2);
    return fixedString;
  }

  btnCarrito() {
    console.log('click en boton de carro');
  }

  OnclickCard() {
       this.router.navigate(['inicio/detail-product']);
  }
}
