import { Component } from '@angular/core';
import { MenuUserModalService } from '../../utils/services/modal-navbar.servide';
import { Router } from '@angular/router';
import { LoginUseCaseImpl } from 'src/app/auth/data/use-cases/login.use-case.impl';

@Component({
  selector: 'shared-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent {

  showLogoutModal = false;

  constructor(public menuUserModal: MenuUserModalService,
              private router: Router,
              private authUseCase: LoginUseCaseImpl) { }

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
   public  confirmLogout() {
   
    this.authUseCase.logout().subscribe({
      next: res => {
        if (res.status === 200) {
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
        }
      },
      error: () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }
    });
  }
   onLogoutClick() {
    this.showLogoutModal = true;
  }
}
