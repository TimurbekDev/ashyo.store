"use client"
import { instance } from "@/hooks"
import { useQuery } from "@tanstack/react-query"

export const getBanners = () => {

    const { data:banners = [], isLoading } = useQuery({
        queryKey: ['banners'],
        queryFn: () => instance().get('/banner').then(res => res.data.banners)
    })
    return { banners, isLoading }
}
