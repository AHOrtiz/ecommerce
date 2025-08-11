import { Component } from '@angular/core';
import { MenuUserModalService } from '../../utils/services/modal-navbar.servide';

@Component({
  selector: 'shared-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent {

  constructor(public menuUserModal: MenuUserModalService) { }

  // Private properties
  private closeTimeout: any;

  // Public methods
  public onMenuHover() {
    // 0.15s de espera despues de que el mouse salga del menu
    this.closeTimeout = setTimeout(() => {
      this.menuUserModal.close();
    }, 150);
  }
}
