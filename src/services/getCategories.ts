"use client"
import { instance } from "@/hooks"
import { useQuery } from "@tanstack/react-query"

export const getCategories = (name?: string | null) => {
  const params = { page: 1, limit: 1000, name: name ? name : null }

  const { data: categories = [], isLoading } = useQuery({
    queryKey: ['categories', name],
    queryFn: () =>
      instance().get('/category', { params }).then(res => res.data.categories),
  })

  return { categories, isLoading }
}
