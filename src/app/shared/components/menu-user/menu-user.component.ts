import { Component } from '@angular/core';
import { MenuUserModalService } from '../../utils/services/modal-navbar.servide';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent {

  constructor(public menuUserModal: MenuUserModalService,
              private router: Router) { }

  // Private properties
  private closeTimeout: any;

  // Public methods
  public onMenuHover() {
    // 0.15s de espera despues de que el mouse salga del menu
    this.closeTimeout = setTimeout(() => {
      this.menuUserModal.close();
    }, 150);
  }
   public redirectToHistory():void{
      this.router.navigate(['inicio/purchase-history'])
   }
}
