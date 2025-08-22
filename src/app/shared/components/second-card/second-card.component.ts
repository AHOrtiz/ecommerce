import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/home/core/models/products.model';

@Component({
  selector: 'shared-second-card',
  templateUrl: './second-card.component.html',
  styleUrls: ['./second-card.component.css'],
})
export class SecondCardComponent {

  constructor(
    private router: Router,
    private currencyPipe: CurrencyPipe
  ) {}

  // Inputs
  @Input() product!: Products;

  // Getters
  get rating(): number {
    return Number(this.product.rating);
  }

  get discount(): string {
    return '-' + this.product.discount.toString() + '%';
  }

  // Methods Public
  public hasDiscount(): boolean {
    if (this.product.discount) {
      return true;
    }
    return false;
  }

  public getPrice(): string {
    let parsedFloat = parseFloat(this.product.price);
    return this.currencyPipe.transform(parsedFloat, '', 'symbol', '1.2-2') ?? '';
  }

  btnCarrito() {
    console.log('click en boton de carro');
  }

  OnclickCard() {
       this.router.navigate(['inicio/detail-product']);
  }
}
