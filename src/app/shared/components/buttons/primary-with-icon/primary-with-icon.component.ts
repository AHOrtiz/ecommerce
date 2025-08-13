import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-btn-primary-with-icon',
  templateUrl: './primary-with-icon.component.html',
  styleUrls: ['./primary-with-icon.component.css']
})
export class PrimaryWithIconComponent implements OnInit {

  constructor() { }

  // Inputs
  @Input() icon: string = '';
  @Input() state: 'normal' | 'disabled' = 'normal';
  @Input() type: 'normal' | 'form' = 'normal';

  // Outputs
  @Output() click = new EventEmitter<void>();

  // ViewChild properties
  @ViewChild('container', { static: true }) containerElement?: ElementRef<HTMLDivElement>;

  // Listeners
  @HostListener('mouseover')
  onMouseOver() {
    if (this.state === 'disabled') return;
    this.containerElement!.nativeElement.style.backgroundColor = `var(--primary-orange-secondary-color)`;
  }

  @HostListener('mouseout')
  onMouseLeave() {
    if (this.state === 'disabled') return;
    this.containerElement!.nativeElement.style.backgroundColor = `var(--primary-orange-color)`;
  }

  // Private methods
  private setPaddingFor(type: 'normal' | 'form'): string {
    switch (type) {
      case 'normal':
        return '10px 25px';
      case 'form':
        return '10px 64px';
    }
  }

  // Public methods
  public onClick() {
    if (this.state === 'disabled') return;
    this.click.emit();
  }

  // Lifecycle
  ngOnInit(): void {
    if (this.state === 'disabled') {
      this.containerElement!.nativeElement.style.backgroundColor = 'var(--gray-secondary-color)';
      this.containerElement!.nativeElement.style.color = 'var(--gray-third-color)';
      this.containerElement!.nativeElement.style.cursor = 'no-drop';
    } else {
      this.containerElement!.nativeElement.style.backgroundColor = 'var(--primary-orange-color)';
      this.containerElement!.nativeElement.style.color = 'var(--background-color)';
      this.containerElement!.nativeElement.style.cursor = 'pointer';
    }

      this.containerElement!.nativeElement.style.padding = this.setPaddingFor(this.type);
  }
}
