import { Component } from '@angular/core';

@Component({
  selector: 'app-images-product',
  templateUrl: './images-product.component.html',
  styleUrls: ['./images-product.component.css']
})
export class ImagesProductComponent {
 images = [
  'https://m.media-amazon.com/images/I/81rpkUQV3BL._AC_SX425_.jpg',
  'https://m.media-amazon.com/images/I/81rpkUQV3BL._AC_SX425_.jpg',
  'https://m.media-amazon.com/images/I/81rpkUQV3BL._AC_SX425_.jpg',
  'https://m.media-amazon.com/images/I/81rpkUQV3BL._AC_SX425_.jpg',
 ];
 selectedImage = this.images[0];

  changeImage(image: string) {
    this.selectedImage = image;
  }
}
