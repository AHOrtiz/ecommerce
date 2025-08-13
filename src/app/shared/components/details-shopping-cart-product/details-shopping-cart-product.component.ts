import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-details-shopping-cart-product',
  templateUrl: './details-shopping-cart-product.component.html',
  styleUrls: ['./details-shopping-cart-product.component.css']
})
export class DetailsShoppingCartProductComponent {
  @Input() productData:any;
}
