export interface ShoppingCar {
  id: number;
  status: string;
  totalPrice: string;
  createdAt: Date;
  updatedAt: Date;
  deliveryDate?: Date;
  deliveryTracking?: DeliveryTracking[];
  orderNumber?: string;
  totalProducts: number;
  shoppingCartProducts: ShoppingCartProduct[];
}

export interface DeliveryTracking {
  status: string;
  date: Date;
}

export interface ShoppingCartProduct {
  id: number;
  product: Product;
  quantity: number;
  purchasePrice: string;
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
}
