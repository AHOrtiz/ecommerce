import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './presentation/layout-page/layout-page.component';
import { HomePageComponent } from './presentation/pages/home-page/home-page.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
