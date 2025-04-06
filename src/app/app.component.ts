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
  headers: [string,string]=['Features','Details'];
  title_table='Tecnical Table';
  rows: Array<[string,string]> = [
    ['Brand','KOLLIEE'],
    ['Color','Black'],
    ['Product Dumensions','24"D x 24.4"W x 35.8"H'],
    ['Size','Large'],
    ['Back Style','Solid Back'],
    ['Style','Modern'],
    ['Unit Count','1.0 Count']
  ];

  btnCarrito(event:boolean){
    alert('Holaaaaaaa');
    console.log('entroo')
  }
  btnAction(event:boolean){
    alert('Btn de accion');
  }
  isButtonClicked(){
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
