import { Component } from '@angular/core';
import { LoaderService } from 'src/app/shared/utils/services/loader.service';
import { MenuUserModalService } from 'src/app/shared/utils/services/modal-navbar.servide';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ['.layout-container { width: 100%; display: flex; flex-direction: column; height:100% } .container-page { padding: 0 20px; flex-grow:1 }']
})
export class LayoutPageComponent {
  /**
   * Inyecta el servicio LoaderService para controlar el loader global.
   * @param loaderService Servicio para mostrar/ocultar el loader.
   */
  constructor(
    private loaderService: LoaderService,
    private menuUserModal: MenuUserModalService
  ) { }

  // Public property

  /**
  * Observable que expone el estado de carga global.
  */
  public loading$ = this.loaderService.loading$;
  /**
  * Mostrar modal de menu de Usuario.
  */
  public showMenuUser$ = this.menuUserModal.visibleMenuUser$;
}
