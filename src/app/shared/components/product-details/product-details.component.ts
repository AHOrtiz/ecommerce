import { Component, Input } from '@angular/core';

export interface DeliveryStatusItem {
  date: string;
  title: string;
  subtitle?: string;
  completed?: boolean;
}

@Component({
  selector: 'shared-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() imgSrc = '';
  @Input() purchaseDate = '';
  @Input() title = '';
  @Input() brand = '';
  @Input() rating = 0;
  @Input() deliveryDateTime = '';
  @Input() receiverName = '';
  @Input() address = '';
  @Input() statusTimeline: DeliveryStatusItem[] = [];
}
