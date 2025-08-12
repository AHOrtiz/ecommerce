import { Component } from '@angular/core';

@Component({
  selector: 'shared-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css']
})
export class FlagComponent {
  badges = [
    { icon: '★', textTop: 'Best', textBottom: '' },
    { icon: '5', textTop: 'Seller', textBottom: '' }
  ];
}
