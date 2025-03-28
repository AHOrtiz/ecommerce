import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-second-card',
  templateUrl: './second-card.component.html',
  styleUrls: ['./second-card.component.css']
})
export class SecondCardComponent {
  @Input() titulo: string = '';
  @Input() precio: number = 0;

  btnCarrito(event: boolean) {
    alert('Holaaaaaaa');
    console.log('entroo')
  }
  OnclickCard() {
    console.log('ando funcionado padre')
  }
}
