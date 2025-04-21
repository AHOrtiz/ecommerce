import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-multipli-menu',
  templateUrl: './multipli-menu.component.html',
  styleUrls: ['./multipli-menu.component.css']
})
export class MultipliMenuComponent {
  @Input() title: string = '';
  @Input() options:Array<any> = new Array();
  @Output() selectionChanged = new EventEmitter<string[]>();
  @ViewChild('container',{static:true}) containerElement?: ElementRef<HTMLDivElement>;
  @ViewChild('containerOptions',{static:true}) containerOptions?: ElementRef<HTMLDivElement>;
  @ViewChild('icon',{static:true}) icon?: ElementRef<HTMLLabelElement>;

  public isOpen: Boolean = false;
  public selectedOptions: string[] = [];
  public toggle(){
    this.isOpen = !this.isOpen;
    if(this.isOpen){
      this.containerOptions!.nativeElement.style.display = 'block';
      this.icon!.nativeElement.classList.add('rotate');
    }else{
      this.containerElement!.nativeElement.style.height = '58px';
      this.containerOptions!.nativeElement.style.display = 'none';
      this.icon!.nativeElement.classList.remove('rotate');
    }
  }

  public onOptionChange(event: any, item: string) {
    if (event.target.checked) {
      this.selectedOptions.push(item);
    } else {
      this.selectedOptions = this.selectedOptions.filter(opt => opt !== item);
    }
    this.selectionChanged.emit(this.selectedOptions);
  }
}
