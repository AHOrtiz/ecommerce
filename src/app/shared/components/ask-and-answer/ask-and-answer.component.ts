import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'shared-ask-and-answer',
  templateUrl: './ask-and-answer.component.html',
  styleUrls: ['./ask-and-answer.component.css']
})
export class AskAndAnswerComponent {

  // Inputs
  @Input() ask: string = 'Test';
  @Input() answer: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  @ViewChild('container',{static:true}) containerElement?: ElementRef<HTMLDivElement>;
  @ViewChild('text',{static:true}) textElements?: ElementRef<HTMLLabelElement>;
  @ViewChild('answerContainer',{static:true}) containerAnswer?: ElementRef<HTMLDivElement>;
  @ViewChild('icon',{static:true}) icon?: ElementRef<HTMLLabelElement>;

  // Public properties
  public isOpen: Boolean = false

  // Public methods
  public toggle() {
    this.isOpen = !this.isOpen

    if (this.isOpen) {
      this.containerElement!.nativeElement.style.height = '150px';
      this.containerElement!.nativeElement.style.backgroundColor = 'var(--primary-imperial-color)';
      this.textElements!.nativeElement.style.color = 'var(--background-color)';
      // ANSWER
      this.containerAnswer!.nativeElement.style.color = 'var(--background-color)';
      this.containerAnswer!.nativeElement.style.display = 'block';
      // ICON
      this.icon!.nativeElement.classList.add('rotate');
      this.icon!.nativeElement.style.color = 'var(--white-color)';
    } else {
      this.containerElement!.nativeElement.style.height = '76px';
      this.containerElement!.nativeElement.style.backgroundColor = 'var(--white-color)';
      this.textElements!.nativeElement.style.color = 'var(--text-color)';
      // ANSWER
      this.containerAnswer!.nativeElement.style.color = 'var(--text-color)';
      this.containerAnswer!.nativeElement.style.display = 'none';
      // ICON
      this.icon!.nativeElement.classList.remove('rotate');
      this.icon!.nativeElement.style.color = 'var(--text-color)';
    }
  }
}
