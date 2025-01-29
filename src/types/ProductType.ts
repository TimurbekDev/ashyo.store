

export interface ProductType {
    ProductsItem:any[],
    brendId:number,
    categoryId:number,
    description:string,
    id:number,
    image:string,
    name:string
}

export interface ProductPageType {
    title:string,
    API:string,
    extraClass?:string,
}

export interface ProductItemType {
    ProductOptions:any[],
    colorId:number,
    id:number,
    name:string,
    image:string,
    price:number,
    productId:number,
    quantity:number
}