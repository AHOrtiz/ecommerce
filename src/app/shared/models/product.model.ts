export interface Product {
  title: string;
  price: number;
  discount: number | undefined;
  hasDiscount: Boolean;
  isFavorite: Boolean;
  img: string | string[];
}
