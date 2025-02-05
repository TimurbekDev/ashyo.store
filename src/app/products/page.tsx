"use client"
import ProductFilter from '@/components/ProductFilter'
import ProductItem from '@/components/ProductItem'
import ProductItemSkeleton from '@/components/ProductItemSkeleton'
import { getProducts } from '@/services'
import { ProductItemType } from '@/types/ProductType'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Products = () => {
  const [minPrice, setMinPrice] = useState<number>(0)
  const [maxPrice, setMaxPrice] = useState<number>(0)
  const [search, setSearch] = useState<string | null>(null)
  const [brandId, setBrandId] = useState<number | null>(null)
  const [variationFilters, setVariationFilters] = useState<number[]>([]) // Default empty array

  const route = useSearchParams()

  useEffect(() => {
    const searchQuery = route.get('search')
    if (searchQuery !== search) {
      setSearch(searchQuery)
    }
  }, [route])

  const { products, isLoading } = getProducts(minPrice, maxPrice, brandId, search)

  return (
    <div className='flex containers gap-[20px]'>
      
      <div className='w-[25%] h-full sticky top-0'>
        <ProductFilter 
          setBrandId={setBrandId} 
          setMinPrice={setMinPrice} 
          setMaxPrice={setMaxPrice} 
        />
      </div>

      <div className='w-[75%] h-[800px] pb-5 overflow-y-auto overscroll-y-none flex flex-wrap justify-between gap-[20px]'>
        {isLoading ? (
          <ProductItemSkeleton extraClass='!flex-wrap !justify-between !gap-[20px] !space-x-0' />
        ) : (
          products?.map((item: ProductItemType) => <ProductItem key={item.id} item={item} />)
        )}
      </div>
    </div>
  )
}

export default Products
