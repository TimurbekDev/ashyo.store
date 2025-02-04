"use client"
import { Context } from "@/context"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"

export const getCart = () => {
    const {token} = useContext(Context)
    const { data:cartItems = [], isLoading } = useQuery({
        queryKey: ['cart'],
        queryFn: () => instance().get('/cart/user',{headers: {Authorization: `Bearer ${token}`}}).then(res => res.data?.cart[0].cartItems)
    })
    console.log(cartItems)
    return {cartItems, isLoading}
}