import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'shared-price-range',
  templateUrl: './price-range.component.html',
  styleUrls: ['./price-range.component.css']
})
export class PriceRangeComponent {

  @ViewChild('container',{static:true}) containerElement?: ElementRef<HTMLDivElement>;
  @ViewChild('contentPrice',{static:true}) containerPrice?: ElementRef<HTMLDivElement>;
  @ViewChild('icon',{static:true}) icon?: ElementRef<HTMLLabelElement>;

  public isOpen: Boolean = false

  public toggle() {
    this.isOpen = !this.isOpen

    if (this.isOpen) {
      // CONTAINER
      this.containerPrice!.nativeElement.style.display = 'block';
      // ICON
      this.icon!.nativeElement.classList.add('rotate');
    } else {
      this.containerElement!.nativeElement.style.height = '58px';
      // CONTAINER
      this.containerPrice!.nativeElement.style.display = 'none';
      // ICON
      this.icon!.nativeElement.classList.remove('rotate');
    }
  }
}
