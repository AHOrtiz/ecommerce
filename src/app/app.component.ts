import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amazon';

  btnCarrito(event:boolean){
    alert('Holaaaaaaa');
    console.log('entroo')
  }

}
