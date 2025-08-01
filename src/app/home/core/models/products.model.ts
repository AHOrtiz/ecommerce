export interface Products {
    id:                   string;
    name:                 string;
    description:          string;
    price:                string;
    quantity:             number;
    imageUrl:             string;
    isActive:             boolean;
    sku:                  null;
    expirationDate:       Date;
    tags:                 string;
    rating:               string;
    discount:             number;
    reviewCount:          number;
    createdAt:            Date;
    updatedAt:            Date;
    category:             string;
    brand:                Brand | null;
    shoppingCartProducts: any[];
}

export interface Brand {
    id:   number;
    name: string;
}
