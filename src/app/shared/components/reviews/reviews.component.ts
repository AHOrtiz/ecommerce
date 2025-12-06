import { Component } from '@angular/core';

@Component({
  selector: 'shared-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
    totalRatings = 2600;
  averageRating = 5;

  ratingBreakdown = [
    { stars: 5, percentage: 91, count: 2366 },
    { stars: 4, percentage: 50, count: 1300 },
    { stars: 3, percentage: 40, count: 1040 },
    { stars: 2, percentage: 1, count: 26 },
    { stars: 1, percentage: 2, count: 52 }
  ];

  onWriteReview() {
    console.log('Abrir formulario para escribir reseña');
  }
}
