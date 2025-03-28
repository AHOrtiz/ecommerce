import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amazon';
  public currentTheme = 'light-theme';
  public  nombreProduct = 'Luxe Lounge Sofa';
  price =235.99
  text:string='Buy Nowñopiy';

  btnCarrito(event:boolean){
    alert('Holaaaaaaa');
    console.log('entroo')
  }
  btnAction(event:boolean){
    alert('Btn de accion');

  }

  public toggleTheme(event :boolean): void {
    if (this.currentTheme === 'light-theme') {
      this.currentTheme = 'dark-theme';
    } else {
      this.currentTheme = 'light-theme';
    }
    document.body.className = this.currentTheme;
  }

  public cuantity(cantity:number){
      console.log(cantity)
  }
}
