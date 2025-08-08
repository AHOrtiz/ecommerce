import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {
  @Input() titulo: string = '';
  @Input() precio: number = 0 ;

  btnCarrito(){
    alert('Holaaaaaaa');
    console.log('entroo')
  }
  OnclickCard(){
    console.log('ando funcionado padre')
  }
}
