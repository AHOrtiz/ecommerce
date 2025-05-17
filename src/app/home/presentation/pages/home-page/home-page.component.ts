import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/home/core/models/banner.model';
import { CategoryUseCase } from 'src/app/home/core/use-cases/category.use-case';
import { BannerRepositoryImpl } from 'src/app/home/data/repositories/banner.repository.impl';
import { BannerUseCaseImpl } from 'src/app/home/data/use-cases/banner.use-case.impl';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
    imageArray: Banner[] = [];
  constructor(private bannerRepositoryImpl:BannerRepositoryImpl) {}
  OnInit(){
      this.getBanner();
  }
  getBanner(){
       this.bannerRepositoryImpl.findAll().subscribe(
      {
         next: (data) => {
          console.log('Banner funcionando' , data);
        this.imageArray = data;
        
      },
       error: (err) => {
        console.error('Error fetching posts:', err);
      },

     });
  }



}
