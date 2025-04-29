import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutPageComponent } from './presentation/layout-page/layout-page.component';
import { HomePageComponent } from './presentation/pages/home-page/home-page.component';
import { SharedModuleModule } from '../shared/shared-module.module';
import { CategoryRepository } from './core/repositories/category.repository';
import { CategoryUseCase } from './core/use-cases/category.use-case';
import { CategoryUseCaseImpl } from './data/use-cases/category.use-case.impl';
import { CategoryRepositoryImpl } from './data/repositories/category.repository.impl';
import { TokenRepository } from './core/repositories/token.repository';
import { TokenRepositoryImpl } from './data/repositories/token.repository.impl';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';


@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModuleModule,
    HttpClientModule
  ],
  providers:[
     { provide: CategoryUseCase, useClass: CategoryUseCaseImpl },
     { provide: CategoryRepository, useClass: CategoryRepositoryImpl },
     { provide: TokenRepository, useClass: TokenRepositoryImpl },
     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ]
})
export class HomeModule { }
