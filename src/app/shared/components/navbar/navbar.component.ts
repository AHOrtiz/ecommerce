import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() onclick = new EventEmitter<boolean>();

  public toggleTheme() {
    this.onclick.emit(true);
  }
}
