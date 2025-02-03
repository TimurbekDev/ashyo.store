import { Skeleton } from '@heroui/skeleton'
import React, { FC } from 'react'

const ProductItemSkeleton:FC<{extraClass?:string}> = ({extraClass}) => {
    const data = [1,2,3,4,5,6]
  return (
    <div className={`${extraClass} space-x-5 flex `}>
        {data.map(item => (
            <div key={item} className='min-w-[273px] product-item duration-300'>
                <Skeleton className="h-[200px] w-full mb-[5px] rounded-lg" />
                <Skeleton className="h-8 w-full mb-[5px] rounded-lg" />
                <div className='flex items-center justify-between'>
                    <Skeleton className="h-8 w-[44%] mb-[5px] rounded-lg" />
                    <Skeleton className="h-8 w-[44%] mb-[5px] rounded-lg" />
                </div>
                <Skeleton className="h-8 w-full mb-[5px] rounded-lg" />
            </div>
        ))}
    </div>
  )
}

export default ProductItemSkeleton