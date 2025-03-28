import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-btn-action',
  templateUrl: './btn-action.component.html',
  styleUrls: ['./btn-action.component.css']
})
export class BtnActionComponent {
  @Input()  color_background: string = '';
  @Input()  text: string = '';
  @Input()  color_text: string = '';
  @Output() onclick = new EventEmitter<boolean>();

  @ViewChild('container',{static:true}) containerElement?: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    this.containerElement!.nativeElement.style.backgroundColor= `${this.color_background}`;
    this.containerElement!.nativeElement.style.color = `${this.color_text}`;

 }

  btnClick(){
    this.onclick.emit(true);
  }
}
