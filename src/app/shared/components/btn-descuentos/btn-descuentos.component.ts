import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-btn-descuentos',
  templateUrl: './btn-descuentos.component.html',
  styleUrls: ['./btn-descuentos.component.css']
})
export class BtnDescuentosComponent {

  @Input() color_background: string = '';
  @Input() set label(value: number) {
    this._label = Math.min(Math.max(value, 1), 100);
  }

  @ViewChild('container', { static: true }) containerElement?: ElementRef<HTMLDivElement>;
  @ViewChild('text', { static: true }) textElement?: ElementRef<HTMLLabelElement>;

  ngOnInit(): void {
    this.containerElement!.nativeElement.style.backgroundColor = `${this.color_background}`;
    this.textElement!.nativeElement.style.color = `var(--text-color-button-primary)`;
  }

  get label(): number {
    return this._label;
  }

  private _label: number = 1;


}
