import { instance } from "@/hooks"
import { useQuery } from "@tanstack/react-query"

export const getProducts = (minPrice?:number, maxPrice?:number, brandId?:number | null, categoryId?:string | null) => {
    const params = { page: 1, limit: 1000, minPrice:minPrice ? minPrice : null, maxPrice:maxPrice ? maxPrice : null, categoryId:categoryId ? categoryId : null}
    console.log("salom  ")
    const { data = [], isLoading } = useQuery({
        queryKey: ['product', minPrice, maxPrice,brandId, categoryId],
        queryFn: () => instance().get("/product", { params }).then(res => res.data.products.map((p:any)=>p.ProductItem))
        
    })
    let products = data.flat(Infinity)
    console.log(products)
    return {products, isLoading}
}