import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Banner } from 'src/app/home/core/models/banner.model';
import { Products } from 'src/app/home/core/models/products.model';
import { BannerUseCase } from 'src/app/home/core/use-cases/banner.use-case';
import { ProductsUseCase } from 'src/app/home/core/use-cases/products.use-case';
import { CarruselImage } from 'src/app/shared/models/carrusel-mage.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {

  constructor(
    private bannerUseCase: BannerUseCase,
    private productsLimitUseCase: ProductsUseCase
  ) {}

  // Public properties

  public categorias = [
    { nombre: 'hogar, muebles y jardín', icono: 'fa-solid fa-house' },
    { nombre: 'computación', icono: 'fa-solid fa-computer' },
    { nombre: 'juegos y juguetes', icono: 'fa-solid fa-gamepad' },
    { nombre: 'deportes', icono: 'fa-solid fa-baseball' },
    { nombre: 'electrodomésticos', icono: 'fa-solid fa-lightbulb' },
    { nombre: 'ropa y accesorios', icono: 'fa-solid fa-person-half-dress' },
  ];
  public banners: CarruselImage[] = [];
  public productsLimit: Products[] = [];

  // ViewChild properties
  @ViewChild('productsOutlet', { read: ElementRef }) productsOutletRef?: ElementRef;

  // Lifecycle

  ngOnInit(): void {
    this.getBanners();
    this.getAllProductsLimit();
  }

  // Public methods

  public btnScrollLeft() {
    if (this.productsOutletRef) {
      this.productsOutletRef.nativeElement.scrollLeft -= 300;
    }
  }

  public btnScrollRight() {
    if (this.productsOutletRef) {
      this.productsOutletRef.nativeElement.scrollLeft += 300;
    }
  }

  public onCategoryClick(nombre: string) {
    console.log('Categoría clickeada:', nombre);
  }

  // Private methods

  private getBanners() {
    this.bannerUseCase.findAll().subscribe({
      next: (response: Banner[]) => {
        this.banners = response.map<CarruselImage>((banner: Banner) => {
          return {
            imageAlt: banner.name,
            imageSrc: banner.imageUrl,
          };
        });
      },
      error: (err) => {
        console.error('Error fetching posts:', err);
      },
    });
  }

  private getAllProductsLimit() {
    this.productsLimitUseCase.findAll().subscribe({
      next: (response: Products[]) => {
        this.productsLimit = response;
      },
      error: (err) => {
        console.error('Error fetching posts:', err);
      },
    });
  }
}
