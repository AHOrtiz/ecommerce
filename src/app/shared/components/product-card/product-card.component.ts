import { Component, Input } from '@angular/core';

interface Product {
  name: string;
  shop: string;
  images: string[];
  rating: number;
  colors: string[];
  sizes: string[];
  price: number;
  description: string;
  badges: { icon?: string, textTop?: string, textBottom?: string }[];
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
    @Input() product!: Product;

  selectedImage!: string;
  selectedSize!: string;
  selectedColor!: string;

  ngOnInit() {
    this.selectedImage = this.product.images[0];
    this.selectedSize = this.product.sizes[0];
    this.selectedColor = this.product.colors[0];
  }

  changeImage(image: string) {
    this.selectedImage = image;
  }
}
