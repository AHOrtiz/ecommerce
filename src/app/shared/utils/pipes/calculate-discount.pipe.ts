import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateDiscount'
})
export class CalculateDiscountPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) {}

  // Se obtiene el precio como valor y el descuento como argumento
  transform(value: string, ...args: number[]): unknown {
    let price: number = parseFloat(value);
    let discount: number = args[0];

    if (discount > 0) {
      let newPrice = this.calcularNuevoPrecio(price, discount);
      return this.currencyPipe.transform(newPrice, '', 'symbol', '1.2-2') ?? '';
    }
    return this.currencyPipe.transform(price, '', 'symbol', '1.2-2') ?? '';
  }

  private calcularNuevoPrecio(precio: number, descuento: number): number {
    return precio - (precio * descuento) / 100;
  }
}
