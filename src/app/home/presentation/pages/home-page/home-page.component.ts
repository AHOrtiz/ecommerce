import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/home/core/models/banner.model';
import { Products } from 'src/app/home/core/models/products.model';
import { BannerUseCase } from 'src/app/home/core/use-cases/banner.use-case';
import { ProductsUseCase } from 'src/app/home/core/use-cases/products.use-case';

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

  public banners: Banner[] = [];
  public productsLimit:Products[]=[];

  private getBanners() {
    this.bannerUseCase.findAll().subscribe({
      next: (response: Banner[]) => {
        this.banners = response;
      },
      error: (err) => {
        console.error('Error fetching posts:', err);
      },
    });
  }

  private getAllProductsLimit(){
     this.productsLimitUseCase.findAll().subscribe({
       next:(response:Products[])=>{
           response.forEach((product:Products) => {
              product.imageUrl= 'https://www.pngfind.com/pngs/m/464-4649522_sillas-antiguas-png-silla-png-transparent-png.png';
              this.productsLimit.push(product);
          });

       },
       error: (err) => {
        console.error('Error fetching posts:', err);
      },
     });
  }
}
