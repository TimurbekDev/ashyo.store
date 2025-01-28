import { Skeleton } from '@heroui/skeleton'
import React from 'react'

const BrandLoading = () => {
  return (
    <>
      <div className='brend-item flex items-center justify-center p-5 rounded-md relative'>
        <Skeleton className='!h-full w-full rounded-lg' />
      </div>
      <div className='brend-item flex items-center justify-center p-5 rounded-md relative'>
        <Skeleton className='!h-full w-full rounded-lg' />
      </div>
      <div className='brend-item flex items-center justify-center p-5 rounded-md relative'>
        <Skeleton className='!h-full w-full rounded-lg' />
      </div>
      <div className='brend-item flex items-center justify-center p-5 rounded-md relative'>
        <Skeleton className='!h-full w-full rounded-lg' />
      </div>
      <div className='brend-item flex items-center justify-center p-5 rounded-md relative'>
        <Skeleton className='!h-full w-full rounded-lg' />
      </div>
      <div className='brend-item flex items-center justify-center p-5 rounded-md relative'>
        <Skeleton className='!h-full w-full rounded-lg' />
      </div>
      <div className='brend-item flex items-center justify-center p-5 rounded-md relative'>
        <Skeleton className='!h-full w-full rounded-lg' />
      </div>
    </>
  )
}

export default BrandLoading
