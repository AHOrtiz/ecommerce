import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Servicio global para gestionar el estado de carga (loader) en la aplicación.
 * Permite mostrar u ocultar un loader de manera reactiva desde cualquier componente.
 */
@Injectable({ providedIn: 'root' })
export class LoaderService {
  /**
   * Subject privado que mantiene el estado actual del loader.
   * true: loader visible, false: loader oculto.
   */
  private loadingSubject = new BehaviorSubject<boolean>(false);

  /**
   * Observable público que expone el estado del loader.
   * Los componentes pueden suscribirse para reaccionar a los cambios.
   */
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  public show() { this.loadingSubject.next(true); }
  public hide() { this.loadingSubject.next(false); }
}
