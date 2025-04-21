import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutPageComponent } from './presentation/layout-page/layout-page.component';
import { HomePageComponent } from './presentation/pages/home-page/home-page.component';
import { SharedModuleModule } from '../shared/shared-module.module';



@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModuleModule
  ]
})
export class HomeModule { }
