import { Component } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
   products = [
    {
      name: 'Nike Run Ultimate',
      shop: 'Nike online Shop',
      images: [
        'https://m.media-amazon.com/images/I/81rpkUQV3BL._AC_SX425_.jpg',
        'https://m.media-amazon.com/images/I/81rpkUQV3BL._AC_SX425_.jpg',
        'https://m.media-amazon.com/images/I/81rpkUQV3BL._AC_SX425_.jpg',
        'https://m.media-amazon.com/images/I/81rpkUQV3BL._AC_SX425_.jpg'
      ],
      rating: 4,
      colors: ['red', 'blue', 'green', 'gray'],
      sizes: ['8/2', '9', '10'],
      price: 40.00,
      description: 'Sigue moviéndote con las zapatillas para correr Nike Run Ultimate...',
      badges: [
        { icon: '★', textTop: 'Best' },
        { textTop: '5', textBottom: 'Seller' }
      ]
    },
    {
      name: 'Nike Air Pegasus',
      shop: 'Nike Shop',
      images: [
        'https://m.media-amazon.com/images/I/81rpkUQV3BL._AC_SX425_.jpg'
      ],
      rating: 4,
      colors: ['red', 'blue', 'green', 'gray'],
      sizes: ['8/2', '9', '10'],
      price: 50.00,
      description: 'Diseñadas para la comodidad y el rendimiento...',
      badges: [
        { textTop: '5', textBottom: 'Seller' }
      ]
    }
  ];
}
