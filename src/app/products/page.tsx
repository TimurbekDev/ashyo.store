"use client"
import ProductFilter from '@/components/ProductFilter'
import ProductItem from '@/components/ProductItem'
import ProductItemSkeleton from '@/components/ProductItemSkeleton'
import { getProducts } from '@/services'
import { ProductItemType } from '@/types/ProductType'

import React, { useState } from 'react'

const Products = () => {
  // const {products, isLoading} = getProducts("/product-item")
  const [minPrice, setMinPrice] = useState<number>(0)
  const [maxPrice, setMaxPrice] = useState<number>(0)
  const [brandId, setBrandId] = useState<number | null>(null)

  const {products, isLoading} = getProducts(minPrice, maxPrice)
  console.log(products)
  
  return (
    <div className='flex containers gap-[20px]'>
      <ProductFilter setBrandId={setBrandId} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice}/>
      <div className='w-[75%] !h-[800px] overflow-y-auto flex flex-wrap justify-between gap-[20px]'>
        {isLoading ? <ProductItemSkeleton extraClass='!flex-wrap !justify-between !gap-[20px] !space-x-0'/> : products?.map((item:ProductItemType) => <ProductItem key={item.id} item={item}/>)}
      </div>
    </div>
  )
}

export default Products