import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-reviews-user',
  templateUrl: './reviews-user.component.html',
  styleUrls: ['./reviews-user.component.css']
})
export class ReviewsUserComponent {
 @Input() message: string = '';
 @Input() title : string  ='';
 @Input() icon1:  string = '';
 @Input() icon2:  string = '';
}
