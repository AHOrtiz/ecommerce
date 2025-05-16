import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared-module.module';

import { LayoutPageComponent } from './presentation/layout-page/layout-page.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

import { HomePageComponent } from './presentation/pages/home-page/home-page.component';

import { CategoryUseCase } from './core/use-cases/category.use-case';
import { CategoryRepository } from './core/repositories/category.repository';
import { CategoryUseCaseImpl } from './data/use-cases/category.use-case.impl';
import { CategoryRepositoryImpl } from './data/repositories/category.repository.impl';

import { ProductUseCase } from './core/use-cases/product.use-case';
import { ProductUseCaseImpl } from './data/use-cases/product.use-case.impl';
import { ProductRepository } from './core/repositories/product.repository';
import { ProductRepositoryImpl } from './data/repositories/product.repository.impl';

import { TokenRepository } from './core/repositories/token.repository';
import { TokenRepositoryImpl } from './data/repositories/token.repository.impl';

import { BannerUseCase } from './core/use-cases/banner.use-case';
import { BannerUseCaseImpl } from './data/use-cases/banner.use-case.impl';
import { BannerRepository } from './core/repositories/banner.repository';
import { BannerRepositoryImpl } from './data/repositories/banner.repository.impl';

@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: TokenRepository, useClass: TokenRepositoryImpl },

    { provide: CategoryUseCase, useClass: CategoryUseCaseImpl },
    { provide: CategoryRepository, useClass: CategoryRepositoryImpl },

    { provide: ProductUseCase, useClass: ProductUseCaseImpl },
    { provide: ProductRepository, useClass: ProductRepositoryImpl },

    { provide: BannerUseCase, useClass: BannerUseCaseImpl },
    { provide: BannerRepository, useClass: BannerRepositoryImpl },
  ]
})
export class HomeModule { }
