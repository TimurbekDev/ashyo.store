import { instance } from "@/hooks"
import { useQuery } from "@tanstack/react-query"

export const getProducts = (minPrice?:number, maxPrice?:number, brandId?:number | null, search?:string | null) => {
    const params = { page: 1, limit: 1000, minPrice:minPrice ? minPrice : null, maxPrice:maxPrice ? maxPrice : null, search:search ? search : null}

    const { data:products = [], isLoading } = useQuery({
        queryKey: ['product', minPrice, maxPrice,brandId, search],
        queryFn: () => instance().get("/product-item", { params }).then(res => res.data.productItems)
        
    })
   
    return {products, isLoading}

}