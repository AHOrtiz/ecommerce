import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/home/core/models/banner.model';
import { BannerUseCase } from 'src/app/home/core/use-cases/banner.use-case';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  constructor(private bannerUseCase: BannerUseCase) { }

  public banners: Banner[] = [];
  
  private getBanners() {
    this.bannerUseCase.findAll().subscribe({
      next: (response: Banner[]) => {
        this.banners = response;
      },
      error: (err) => {
        console.error('Error fetching posts:', err);
      }
    })
  }

  ngOnInit(): void {
    this.getBanners()
  }
}
