"use client"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

export const getVaration = () => {
    const { data:varation = [], isLoading } = useQuery({
        queryKey: ['varation'],
        queryFn: () => instance().get('/varation-option').then(res => res.data?.varationOptions)
    })
    return {varation, isLoading}
}