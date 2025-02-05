import { ProductItemType } from "./ProductType";

export interface LikesType {
    id: number,
    productItemId: number,
    userId: number,
    productItem: ProductItemType
}