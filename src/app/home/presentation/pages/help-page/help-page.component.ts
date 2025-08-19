import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.css'],
})
export class HelpPageComponent {
  constructor(private router: Router) {}

  // Public properties
  public questions = [
    {
      ask: '¿Qué hago si mi producto no ha llegado?',
      answer: 'Llamar al centro de ayuda',
    },
    {
      ask: '¿Si mi producto llega maltratado, puedo devolverlo?',
      answer: 'Corroborar que la funcionalidad del producto',
    },
    {
      ask: '¿Dónde puedo ver las calificaciones de los vendedores?',
      answer: 'En el apartado de detalles del producto',
    },
    {
      ask: '¿Dónde puedo ver los productos más vendidos?',
      answer: 'En el inicio de la pantalla aprecen los mas recientes',
    },
    {
      ask: '¿Qué hago si quiero cambiar mi producto?',
      answer: 'Acudir a un centro de atencion para el cambio',
    },
    {
      ask: '¿En qué parte puedo ver las categorías?',
      answer: 'En la parte del menu principal',
    },
    {
      ask: '¿Amazon envía paquetes a mi país?',
      answer: 'Verificar esa información en el apartado de politica de envios y corroborar información',
    },
  ];
  // Public methods
  OnclickBack() {
    this.router.navigate(['inicio']);
  }
}
