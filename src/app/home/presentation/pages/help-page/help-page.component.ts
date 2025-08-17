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
  ask_answer = [
    {
      id: 1,
      ask: '¿Qué hago si mi producto no ha llegado?',
      answer: 'Llamar al centro de ayuda',
    },
    {
      id: 2,
      ask: '¿Si mi producto llega maltratado, puedo devolverlo?',
      answer: 'Corroborar que la funcionalidad del producto',
    },
    {
      id: 3,
      ask: '¿Dónde puedo ver las calificaciones de los vendedores?',
      answer: 'En el apartado de detalles del producto',
    },
    {
      id: 4,
      ask: '¿Dónde puedo ver los productos más vendidos?',
      answer: 'En el inicio de la pantalla aprecen los mas recientes',
    },
    {
      id: 5,
      ask: '¿Qué hago si quiero cambiar mi producto?',
      answer: 'Acudir a un centro de atencion para el cambio',
    },
    {
      id: 6,
      ask: '¿En qué parte puedo ver las categorías?',
      answer: 'En la parte del menu principal',
    },
    {
      id: 7,
      ask: '¿Amazon envía paquetes a mi país?',
      answer: 'Verificar esa información en el apartado de politica de envios y corroborar información',
    },
  ];
  // Public methods
  OnclickBack() {
    this.router.navigate(['inicio']);
  }
}
