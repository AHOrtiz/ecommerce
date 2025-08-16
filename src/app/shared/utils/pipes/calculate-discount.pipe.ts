import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateDiscount'
})
export class CalculateDiscountPipe implements PipeTransform {

  // Se obtiene el precio como valor y el descuento como argumento
  transform(value: string, ...args: number[]): unknown {
    let price: number = parseFloat(value);
    let discount: number = args[0];

    if (discount > 0) {
      let newPrice = this.calcularNuevoPrecio(price, discount);
      return newPrice.toFixed(2);
    }
    return price.toFixed(2);
  }

  private calcularNuevoPrecio(precio: number, descuento: number): number {
    return precio - (precio * descuento) / 100;
  }
}
