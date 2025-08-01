import { ToStringPipe } from './utils/pipes/toString.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    // Pipes
    ToStringPipe,
    CarruselComponent,
    TruncateTextPipe,



  ],
  imports: [
 CommonModule

  ],
  exports:[
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
    CarruselComponent
  ]
})
export class SharedModule { }
