import { Component } from '@angular/core';
import { LoaderService } from 'src/app/shared/utils/services/loader.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ['.layout-container { width: 100%; display: flex; flex-direction: column; background-color: var(--background-color); } .container-page { padding: 0 20px; }']
})
export class LayoutPageComponent {
  /**
   * Inyecta el servicio LoaderService para controlar el loader global.
   * @param loaderService Servicio para mostrar/ocultar el loader.
   */
  constructor(private loaderService: LoaderService) { }

  // Public property

  /**
  * Observable que expone el estado de carga global.
  */
  public loading$ = this.loaderService.loading$;
}
