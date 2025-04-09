import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  // tslint:disable-next-line:pipe-naming
  name: 'toString',
  pure: false
}) export class ToStringPipe implements PipeTransform {
  public transform(item: any): any {
    if (!item) {
      return 'error';
    }
    return String(item);
  }
}
