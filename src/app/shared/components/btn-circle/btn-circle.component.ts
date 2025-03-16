import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-btn-circle',
  templateUrl: './btn-circle.component.html',
  styleUrls: ['./btn-circle.component.css']
})
export class BtnCircleComponent implements OnInit {

  @Input()  color_background: string = '';
  @Input()  icon: string = '';
  @Input()  color_icon: string = '';

  @Output() onclick = new EventEmitter<boolean>();

  @ViewChild('container',{static:true}) containerElement?: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    console.log('OnInit circle',this.containerElement);
    this.containerElement!.nativeElement.style.backgroundColor= `${this.color_background}`;
    this.containerElement!.nativeElement.style.color = `${this.color_icon}`;

 }

  btnClick(){
    this.onclick.emit(true);
  }


}
