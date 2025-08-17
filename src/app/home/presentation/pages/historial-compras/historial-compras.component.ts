import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.component.html',
  styleUrls: ['./historial-compras.component.css']
})
export class HistorialComprasComponent {

    constructor(private router: Router){}

   products = [
    { id: 1, title: 'Nike Air Max',store:'Club Nintendo', fecha: '12 Abril 2021', image: 'https://m.media-amazon.com/images/I/81rpkUQV3BL._AC_SX425_.jpg',orderNumber:323223232 },
    { id: 2, title: 'Adidas Ultraboost',store:'Nike shop',fecha: '10 de Marzo 2021', image: 'https://m.media-amazon.com/images/I/51fM0CKG+HL._AC_SX679_.jpg',orderNumber:15151515215 }
  ];

  goToDetailProduct(){
     this.router.navigate(['inicio/detail-product'])
  }
  OnclickBack(){
    this.router.navigate(['inicio']);
   }
}
