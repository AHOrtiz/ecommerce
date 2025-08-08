import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'shared-btn-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})
export class PrimaryComponent implements OnInit {

  constructor() { }

  // Inputs
  @Input() text: string = '';
  @Input() state: 'normal' | 'disabled' = 'normal';
  @Input() type: 'normal' | 'form' | 'card' | 'link' = 'normal';

  // Outputs
  @Output() click = new EventEmitter<void>();

  // Private properties
  @ViewChild('container', { static: true }) containerElement?: ElementRef<HTMLDivElement>;

  // Listeners
  @HostListener('mouseover')
  onMouseOver() {
    if (this.state === 'disabled') return;
    this.containerElement!.nativeElement.style.backgroundColor = this.setBackgroundSecondaryColorFor(this.type);
    if (this.type === 'link') {
      this.containerElement!.nativeElement.style.color = `var(--primary-orange-secondary-color)`;
    }
  }

  @HostListener('mouseout')
  onMouseLeave() {
    if (this.state === 'disabled') return;
    this.containerElement!.nativeElement.style.backgroundColor = this.setBackgroundColorFor(this.type);
  }

  // Public methods
  public onClick() {
    if (this.state === 'disabled') return;
    this.click.emit();
  }

  // Private methods
  private setPaddingFor(type: 'normal' | 'form' | 'card' | 'link'): string {
    switch (type) {
      case 'normal':
        return '10px 25px';
      case 'form':
        return '10px 50px';
      case 'card':
        return '10px 75px';
      case 'link':
        return '10px 25px';
    }
  }

  private setFontSizeFor(type: 'normal' | 'form' | 'card' | 'link'): string {
    switch (type) {
      case 'normal':
      case 'form':
      case 'link':
        return 'var(--font-size-text)';
      case 'card':
        return 'var(--font-size-paragraph)';
    }
  }

  private setHeightFor(type: 'normal' | 'form' | 'card' | 'link'): string {
    switch (type) {
      case 'normal':
      case 'form':
      case 'link':
        return '22px';
      case 'card':
        return '32px';
    }
  }

  private setBackgroundColorFor(type: 'normal' | 'form' | 'card' | 'link'): string {
    switch (type) {
      case 'normal':
      case 'form':
        return 'var(--primary-orange-color)';
      case 'link':
        return 'clear';
      case 'card':
        return 'var(--primary-imperial-color)';
    }
  }

  private setBackgroundSecondaryColorFor(type: 'normal' | 'form' | 'card' | 'link'): string {
    switch (type) {
      case 'normal':
      case 'form':
        return 'var(--primary-orange-secondary-color)';
      case 'link':
        return 'clear';
      case 'card':
        return 'var(--primary-imperial-secondary-color)';
    }
  }

  private setCursorFor(type: 'normal' | 'form' | 'card' | 'link'): string {
    switch (type) {
      case 'normal':
      case 'form':
      case 'card':
      case 'link':
        return 'pointer';
    }
  }

  // Lifecycle
  ngOnInit(): void {
    if (this.state === 'disabled' && this.type === 'link') {
      this.containerElement!.nativeElement.style.backgroundColor = 'clear';
      this.containerElement!.nativeElement.style.color = 'var(--primary-orange-secondary-color)';
      this.containerElement!.nativeElement.style.cursor = 'no-drop';
      return
    }

    if (this.state === 'disabled') {
      this.containerElement!.nativeElement.style.backgroundColor = 'var(--gray-secondary-color)';
      this.containerElement!.nativeElement.style.color = 'var(--gray-third-color)';
      this.containerElement!.nativeElement.style.cursor = 'no-drop';
      return
    }

    this.containerElement!.nativeElement.style.padding = this.setPaddingFor(this.type);
    this.containerElement!.nativeElement.style.fontSize = this.setFontSizeFor(this.type);
    this.containerElement!.nativeElement.style.height = this.setHeightFor(this.type);
    this.containerElement!.nativeElement.style.backgroundColor = this.setBackgroundColorFor(this.type);
    this.containerElement!.nativeElement.style.cursor = this.setCursorFor(this.type);
    let labelElement = this.containerElement!.nativeElement.childNodes[0] as HTMLLabelElement;
    labelElement.style.cursor = this.setCursorFor(this.type);

    if (this.type === 'link') {
      this.containerElement!.nativeElement.style.color = 'var(--primary-orange-color)';
    }
  }
}
