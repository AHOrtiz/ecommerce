import { Component } from '@angular/core';

@Component({
  selector: 'shared-shopping-cart-products',
  templateUrl: './shopping-cart-products.component.html',
  styleUrls: ['./shopping-cart-products.component.css']
})
export class ShoppingCartProductsComponent {
    products = [
    { id: 1, title: 'Nike Air Max', price: 2199.00, image: '' },
    { id: 2, title: 'Adidas Ultraboost', price: 2899.00, image: '' }
  ];
}
