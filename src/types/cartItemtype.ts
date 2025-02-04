import { ProductItemType } from "./ProductType";

export interface CartItemType {
    id: number,
    cartId: number,
    productItemId: number,
    count: number,
    productItem: ProductItemType
}