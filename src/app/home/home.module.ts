import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutPageComponent } from './presentation/layout-page/layout-page.component';
import { HomePageComponent } from './presentation/pages/home-page/home-page.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
