import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-product-detail-page',
  templateUrl: './card-product-detail-page.component.html',
  styleUrls: ['./card-product-detail-page.component.css']
})
export class CardProductDetailPageComponent {
   constructor(private router: Router) {}

   OnclickBack(){
    this.router.navigate(['inicio']);
   }
}
