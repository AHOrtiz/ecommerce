import { Component, OnInit } from '@angular/core';
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
  ngOnInit(): void {
    this.getBanners();
    this.getAllProductsLimit();
  }
  constructor(
              private bannerUseCase: BannerUseCase,
              private productsLimitUseCase:ProductsUseCase) {}

  public banners: CarruselImage[] = [];
  public productsLimit:Products[]=[];

  private getBanners() {
    this.bannerUseCase.findAll().subscribe({
      next: (response: Banner[]) => {
        this.banners = response.map<CarruselImage>((banner: Banner) => {
          return {
            imageAlt: banner.name,
            imageSrc: banner.imageUrl
          }
        })
      },
      error: (err) => {
        console.error('Error fetching posts:', err);
      },
    });
  }

  private getAllProductsLimit(){
     this.productsLimitUseCase.findAll().subscribe({
       next:(response:Products[])=>{
          this.productsLimit = response
       },
       error: (err) => {
        console.error('Error fetching posts:', err);
      },
     });
  }
}
