import { ToStringPipe } from './utils/pipes/toString.pipe';
import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { BtnCircleComponent } from './components/btn-circle/btn-circle.component';
import { BtnDescuentosComponent } from './components/btn-descuentos/btn-descuentos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { RaitingComponent } from './components/raiting/raiting.component';
import { CounterProductComponent } from './components/counter-product/counter-product.component';
import { CategoryComponent } from './components/category/category.component';
import { AskAndAnswerComponent } from './components/ask-and-answer/ask-and-answer.component';
import { BtnActionComponent } from './components/btn-action/btn-action.component';
import { SecondCardComponent } from './components/second-card/second-card.component';
import { TechnicalDetailsComponent } from './components/technical-details/technical-details.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PriceRangeComponent } from './components/price-range/price-range.component';
import { Error404PageComponent } from './components/error404-page/error404-page.component';
import { MultipliMenuComponent } from './components/multipli-menu/multipli-menu.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { TruncateTextPipe } from './utils/pipes/truncate-text.pipe';
import { CategoriesHorizontalComponent } from './components/categories-horizontal/categories-horizontal.component';
import { PrimaryComponent } from './components/buttons/primary/primary.component';
import { PrimaryWithIconComponent } from './components/buttons/primary-with-icon/primary-with-icon.component';
import { FullscreenLoaderComponent } from './components/fullscreen-loader/fullscreen-loader.component';
import { MenuUserComponent } from './components/menu-user/menu-user.component';
import { CalculateDiscountPipe } from './utils/pipes/calculate-discount.pipe';
import { ImagesProductComponent } from './components/images-product/images-product.component';
import { FlagComponent } from './components/flag/flag.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { ShoppingCartProductsComponent } from './components/shopping-cart-products/shopping-cart-products.component';
import { DetailsShoppingCartProductComponent } from './components/details-shopping-cart-product/details-shopping-cart-product.component';
import { DetailsProductHistoryComponent } from './components/details-product-history/details-product-history.component';

@NgModule({
  declarations: [
    BtnDescuentosComponent,
    BtnCircleComponent,
    NavbarComponent,
    CardProductComponent,
    RaitingComponent,
    CounterProductComponent,
    CategoryComponent,
    AskAndAnswerComponent,
    BtnActionComponent,
    SecondCardComponent,
    TechnicalDetailsComponent,
    CategoriesComponent,
    PriceRangeComponent,
    Error404PageComponent,
    MultipliMenuComponent,
    CategoriesHorizontalComponent,
    FullscreenLoaderComponent,
    ImagesProductComponent,
    FlagComponent,
    FooterComponent,
    ProductCardComponent,
    ShoppingCartProductsComponent,
    DetailsShoppingCartProductComponent,
    DetailsProductHistoryComponent,

    // Butons
    PrimaryComponent,
    PrimaryWithIconComponent,
    // Modals
    MenuUserComponent,
    // Pipes
    ToStringPipe,
    CarruselComponent,
    TruncateTextPipe,
    CalculateDiscountPipe
  ],
  providers: [
    CurrencyPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BtnDescuentosComponent,
    BtnCircleComponent,
    NavbarComponent,
    CardProductComponent,
    RaitingComponent,
    CounterProductComponent,
    CategoryComponent,
    AskAndAnswerComponent,
    BtnActionComponent,
    SecondCardComponent,
    TechnicalDetailsComponent,
    CategoriesComponent,
    PriceRangeComponent,
    Error404PageComponent,
    MultipliMenuComponent,
    CarruselComponent,
    CategoriesHorizontalComponent,
    PrimaryComponent,
    PrimaryWithIconComponent,
    FullscreenLoaderComponent,
    FooterComponent,
    MenuUserComponent,
    FlagComponent,
    ProductCardComponent,
    ShoppingCartProductsComponent,
    DetailsShoppingCartProductComponent,
    DetailsProductHistoryComponent,
  ]
})
export class SharedModule { }
