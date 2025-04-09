import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  @Input() title: string = '';
  @Input() description: string = '';

}
