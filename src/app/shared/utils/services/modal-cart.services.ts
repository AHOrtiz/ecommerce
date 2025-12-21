import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Servicio global para gestionar el estado modales del Navbar en la aplicación.
 * Permite mostrar u ocultar una seccion modal de manera reactiva desde cualquier componente.
 */
@Injectable({ providedIn: 'root' })
export class MenuCartService {
  /**
   * Subject privado que mantiene el estado actual del modal.
   * true: visible, false: oculto.
   */
  private _visibleMenuCart$ = new BehaviorSubject<boolean>(false);
  /**
   * Observable público que expone el estado del modal.
   * Los componentes pueden suscribirse para reaccionar a los cambios.
   */
  public visibleMenuCart$: Observable<boolean> = this._visibleMenuCart$.asObservable();

  public open() { this._visibleMenuCart$.next(true); }
  public close() { this._visibleMenuCart$.next(false); }
  public toggle() { this._visibleMenuCart$.next(!this._visibleMenuCart$.value); }
}
