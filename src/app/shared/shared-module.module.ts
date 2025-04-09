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

    // Pipes
    ToStringPipe
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
    CategoriesComponent
  ]
})
export class SharedModuleModule { }
