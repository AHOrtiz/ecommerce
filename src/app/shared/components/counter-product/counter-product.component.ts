import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-counter-product',
  templateUrl: './counter-product.component.html',
  styleUrls: ['./counter-product.component.css']
})
export class CounterProductComponent {
  @Output() cuantityEmmit = new EventEmitter<number>();
  public cuantity :number = 1;

  plus(){
    if(this.cuantity==10) return;
     this.cuantity += 1
     this.cuantityEmmit.emit(this.cuantity);
  }

  minus(){
    if(this.cuantity==1) return;
    this.cuantity -= 1;
    this.cuantityEmmit.emit(this.cuantity);
  }

}
