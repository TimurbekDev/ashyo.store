"use client"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

export const getLikes = () => {
    const { data:likes = [], isLoading } = useQuery({
        queryKey: ['likes'],
        queryFn: () => instance().get('/like/user').then(res => res.data?.likes)
    })
    return {likes, isLoading}
}