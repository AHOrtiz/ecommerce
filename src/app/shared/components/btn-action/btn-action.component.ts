import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild, AfterContentInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'shared-btn-action',
  templateUrl: './btn-action.component.html',
  styleUrls: ['./btn-action.component.css']
})
export class BtnActionComponent implements AfterViewChecked {
  @Input()  color_background: string = '';
  @Input()  text: string = '';
  @Input()  color_text: string = '';
  @Output() onclick = new EventEmitter<void>();

  private width: number = 0
  private firstInvocation: boolean = false

  @ViewChild('container',{static:true}) containerElement?: ElementRef<HTMLButtonElement>;

  ngOnInit(): void {
    this.containerElement!.nativeElement.style.backgroundColor = `${this.color_background}`;
    this.containerElement!.nativeElement.style.color = `${this.color_text}`;
 }

  btnClick(){
    this.onclick.emit();
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.containerElement!.nativeElement.style.backgroundColor = `var(--text-color-red)`;
    let width: number = this.containerElement!.nativeElement.offsetWidth
    this.containerElement!.nativeElement.style.width = `${width - 2}px`;
  }


  @HostListener('mouseout')
  onMouseLeave() {
    this.containerElement!.nativeElement.style.backgroundColor = `${this.color_background}`;
    this.containerElement!.nativeElement.style.width = `${this.width}px`;
  }

  ngAfterViewChecked(): void {
    if (!this.firstInvocation) {
      this.width = this.containerElement!.nativeElement.offsetWidth
      this.firstInvocation = true
    }
  }
}
