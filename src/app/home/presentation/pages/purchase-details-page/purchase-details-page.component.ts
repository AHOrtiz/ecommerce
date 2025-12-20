import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-details-page',
  templateUrl: './purchase-details-page.component.html',
  styleUrls: ['./purchase-details-page.component.css']
})
export class PurchaseDetailsPageComponent {
  statusTimeline = [
  { date: '2021-08-04' , title: 'Order Placed', completed: true },
  { date: '2021-08-05' , title: 'Order Confirmed', completed: true },
  { date: '2021-08-06' , title: 'Shipped', completed: true },
  { date: '2021-08-07' , title: 'Out for Delivery', completed: true },
  { date: '2021-08-08' , title: 'Delivered', completed: false },
];
  products = [
    {fecha:'2021-08-04', title: 'Figura Shinobu',store:'Anime', image: 'https://m.media-amazon.com/images/I/81rpkUQV3BL._AC_SX425_.jpg', ordernumber: '00000000000012359877'},
    {fecha:'2021-08-05', title: 'Adidas Ultraboost',store:'Adidas', image: 'https://m.media-amazon.com/images/I/51fM0CKG+HL._AC_SX679_.jpg', ordernumber: '00000000000123456789'}

  ];
  //Constructor
  constructor(private router: Router) {}

  //Public methods
   OnclickBack() {
    this.router.navigate(['inicio']);
  }
}
