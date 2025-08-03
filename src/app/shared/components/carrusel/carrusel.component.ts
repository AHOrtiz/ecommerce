import { Component, Input } from '@angular/core';
import { slideAnimation } from '../../utils/animations/slide.animation';
import { CarruselImage } from '../../models/carrusel-mage.model';

@Component({
  selector: 'shared-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css'],
  animations: [slideAnimation]
})
export class CarruselComponent {
  @Input() images: CarruselImage[] = [];
  @Input() indicators = true;

  public selectedIndex = 0;
  constructor() {}

  ngOnInit(): void {
    this.autoSlideImages();
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }
  autoSlideImages(): void {
    setInterval(() => {
      this.selectedIndex < this.images.length - 1
        ? this.selectedIndex++
        : (this.selectedIndex = 0);
    }, 3000);
  }
}
