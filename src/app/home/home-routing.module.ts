import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './presentation/layout-page/layout-page.component';
import { HomePageComponent } from './presentation/pages/home-page/home-page.component';
import { CardProductDetailPageComponent } from './presentation/pages/card-product-detail-page/card-product-detail-page.component';
import { SearchPageComponent } from './presentation/pages/search-page/search-page.component';
import { HistorialComprasComponent } from './presentation/pages/historial-compras/historial-compras.component';
import { HelpPageComponent } from './presentation/pages/help-page/help-page.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {path: '', component: HomePageComponent },
      {path:'detail-product', component:CardProductDetailPageComponent},
      {path:'search-product',component:SearchPageComponent},
      {path:'purchase-history',component:HistorialComprasComponent},
      {path:'help',component:HelpPageComponent},
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
