import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technical-details',
  templateUrl: './technical-details.component.html',
  styleUrls: ['./technical-details.component.css']
})
export class TechnicalDetailsComponent {
  @Input()  text: string = '';
  @Input()  title_category : string = '';

}
