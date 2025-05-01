import { Component } from '@angular/core';
import { slideAnimation } from '../../utils/animations/slide.animation';

@Component({
  selector: 'shared-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css'],
  animations: [slideAnimation]
})
export class CarruselComponent {
  currentIndex = 0;
  slides = [
    {image: 'assets/imgs/cielo.jpg', description: 'Image 00'},
    {image: 'assets/imgs/muelle.jpg', description: 'Image 01'},
    {image: 'assets/imgs/paisaje.jpg', description: 'Image 02'},
    {image: 'assets/imgs/perrito.jpg', description: 'Image 03'},
    {image: 'assets/imgs/sofa.png', description: 'Image 04'}
  ];

  constructor() {
    this.preloadImages();
  }

  preloadImages() {
    this.slides.forEach(slide => {
      (new Image()).src = slide.image;
    });
    console.log('slides: ', this.slides)
  }

  setCurrentSlideIndex(index:number) {
    this.currentIndex = index;
  }

  isCurrentSlideIndex(index:number) {
    return this.currentIndex === index;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex < this.slides.length - 1) ? ++this.currentIndex : 0;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.slides.length - 1;
  }
}
