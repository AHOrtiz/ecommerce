import { Component } from '@angular/core';

@Component({
  selector: 'shared-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {
  btnCarrito(event:boolean){
    alert('Holaaaaaaa');
    console.log('entroo')
  }
}
