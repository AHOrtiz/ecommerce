import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnCircleComponent } from './components/btn-circle/btn-circle.component';
import { BtnDescuentosComponent } from './components/btn-descuentos/btn-descuentos.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    BtnDescuentosComponent,
    BtnCircleComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BtnDescuentosComponent,
    BtnCircleComponent,
    NavbarComponent
  ]
})
export class SharedModuleModule { }
