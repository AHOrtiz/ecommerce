import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateDiscount'
})
export class CalculateDiscountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value)
    return null;
  }

}
