import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'shared-ask-and-answer',
  templateUrl: './ask-and-answer.component.html',
  styleUrls: ['./ask-and-answer.component.css']
})
export class AskAndAnswerComponent {

  @Input() ask: string = '¿Precios tachados y Ahorros?';
  @Input() answer: string = 'Los productos en Amazon pueden mostrar el precio listado, el precio recomendado, el precio anterior u otro precio tachado o información de ahorro en la página de detalles del producto.';
  @ViewChild('container',{static:true}) containerElement?: ElementRef<HTMLDivElement>;
  @ViewChild('text',{static:true}) textElements?: ElementRef<HTMLLabelElement>;
  @ViewChild('answerContainer',{static:true}) containerAnswer?: ElementRef<HTMLDivElement>;
  @ViewChild('icon',{static:true}) icon?: ElementRef<HTMLLabelElement>;

  public isOpen: Boolean = false

  public toggle() {
    this.isOpen = !this.isOpen

    if (this.isOpen) {
      this.containerElement!.nativeElement.style.height = '150px';
      this.containerElement!.nativeElement.style.backgroundColor = 'var(--text-color-button)';
      this.textElements!.nativeElement.style.color = 'var(--text-color-ligth)';
      // ANSWER
      this.containerAnswer!.nativeElement.style.color = 'var(--text-color-ligth)';
      this.containerAnswer!.nativeElement.style.display = 'block';
      // ICON
      this.icon!.nativeElement.classList.add('rotate');
    } else {
      this.containerElement!.nativeElement.style.height = '60px';
      this.containerElement!.nativeElement.style.backgroundColor = 'var(--background-secondary-color)';
      this.textElements!.nativeElement.style.color = 'var(--text-color)';
      // ANSWER
      this.containerAnswer!.nativeElement.style.color = 'var(--text-color)';
      this.containerAnswer!.nativeElement.style.display = 'none';
      // ICON
      this.icon!.nativeElement.classList.remove('rotate');
    }
  }
}
