import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Servicio global para gestionar el estado modales del Navbar en la aplicación.
 * Permite mostrar u ocultar una seccion modal de manera reactiva desde cualquier componente.
 */
@Injectable({ providedIn: 'root' })
export class MenuUserModalService {
  /**
   * Subject privado que mantiene el estado actual del modal.
   * true: visible, false: oculto.
   */
  private _visibleMenuUser$ = new BehaviorSubject<boolean>(false);
  /**
   * Observable público que expone el estado del modal.
   * Los componentes pueden suscribirse para reaccionar a los cambios.
   */
  public visibleMenuUser$: Observable<boolean> = this._visibleMenuUser$.asObservable();

  public open() { this._visibleMenuUser$.next(true); }
  public close() { this._visibleMenuUser$.next(false); }
  public toggle() { this._visibleMenuUser$.next(!this._visibleMenuUser$.value); }
}
