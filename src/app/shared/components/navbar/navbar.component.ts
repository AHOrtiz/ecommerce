import { Component } from '@angular/core';
import { MenuUserModalService } from '../../utils/services/modal-navbar.servide';
import { take } from 'rxjs';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public menuUserModal: MenuUserModalService) { }

  // Private properties
  private closeTimeout: any;

  // Public methods
  public onUserHover(isHovering: boolean) {
    if (isHovering) {
      clearTimeout(this.closeTimeout);
      this.menuUserModal.open();
    } else {
      // 0.3s de espera despues de que el mouse salga del icono
      this.closeTimeout = setTimeout(() => {
        this.menuUserModal.visibleMenuUser$
          .pipe(take(1))
          .subscribe((isVisible: boolean) => {
            if (isVisible) {} else {
              this.menuUserModal.close();
            }
          });
      }, 300);
    }
  }
}
