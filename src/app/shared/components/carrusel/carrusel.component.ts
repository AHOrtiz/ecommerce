import { Component, Input } from '@angular/core';
import { slideAnimation } from '../../utils/animations/slide.animation';

@Component({
  selector: 'shared-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css'],
  animations: [slideAnimation]
})
export class CarruselComponent {
  @Input() images: any[] = [];

  slides: any[] = [];
  currentIndex = 0;

  ngOnChanges() {
    this.generateSlides();
    this.preloadImages();
  }

  /**
   * Converts the input images into slide objects with descriptions.
   */
  private generateSlides() {
    this.slides = this.images.map((image, index) => ({
      image,
      description: `Image ${index.toString().padStart(2, '0')}`,
    }));
  }

  /**
   * Preloads all images to avoid flickering.
   */
  private preloadImages() {
    this.slides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }

  /**
   * Sets the current slide index.
   * @param index The slide index to display.
   */
  setCurrentSlideIndex(index: number) {
    this.currentIndex = index;
  }

  /**
   * Checks if the given index is the current slide index.
   * @param index The index to check.
   * @returns Whether the index matches the current slide index.
   */
  isCurrentSlideIndex(index: number): boolean {
    return this.currentIndex === index;
  }

  /**
   * Moves to the previous slide.
   */
  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.slides.length - 1;
  }

  /**
   * Moves to the next slide.
   */
  nextSlide() {
    this.currentIndex = (this.currentIndex < this.slides.length - 1) ? ++this.currentIndex : 0;
  }
}
