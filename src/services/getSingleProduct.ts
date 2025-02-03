import { instance } from "@/hooks"
import { useQuery } from "@tanstack/react-query"

export const getSingleProduct = (id:string | undefined) => {
    const { data:singleProducts = {}, isLoading } = useQuery({
        queryKey: ['product_single', id],
        queryFn: () => instance().get(`/product-item/${id}`).then(res => res.data.productItem)
    })
    return {singleProducts, isLoading}
}