import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-details-product-history',
  templateUrl: './details-product-history.component.html',
  styleUrls: ['./details-product-history.component.css']
})
export class DetailsProductHistoryComponent {
    //Inputs
    @Input() productData:any;

    //Outputs
    @Output() click = new EventEmitter<void>();

    public onClick(){
      this.click.emit();
    }
}
