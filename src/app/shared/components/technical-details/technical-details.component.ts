import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-technical-details',
  templateUrl: './technical-details.component.html',
  styleUrls: ['./technical-details.component.css']
})
export class TechnicalDetailsComponent {
  @Input()  title: string = '';
  @Input()  headers: [string,string] =['',''] ;
  @Input()  rows: Array<[string,string]>= new Array();
}
