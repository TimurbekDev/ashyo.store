"use client"
import { Context } from "@/context"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"

export const getMe = () => {
    const {token} = useContext(Context)
    const { data:userData = [], isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: () => instance().get('/me',{headers: {Authorization: `Bearer ${token}`}}).then(res => res.data?.user)
    })
    return {userData, isLoading}
}