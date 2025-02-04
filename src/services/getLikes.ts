"use client"
import { Context } from "@/context"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"

export const getLikes = () => {
    const {token} = useContext(Context)
    const { data:likes = [], isLoading } = useQuery({
        queryKey: ['likes'],
        queryFn: () => instance().get('/like/user',{headers: {Authorization: `Bearer ${token}`}}).then(res => res.data?.likes)
    })
    return {likes, isLoading}
}