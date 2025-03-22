import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amazon';
  public currentTheme = 'light-theme';

  btnCarrito(event:boolean){
    alert('Holaaaaaaa');
    console.log('entroo')
  }

  public toggleTheme(event :boolean): void {
    if (this.currentTheme === 'light-theme') {
      this.currentTheme = 'dark-theme';
    } else {
      this.currentTheme = 'light-theme';
    }
    document.body.className = this.currentTheme;
  }
}
