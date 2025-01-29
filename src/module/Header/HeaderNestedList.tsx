"use client"
import { Context } from '@/context'
import { IMAGE_API } from '@/hooks'
import { getCategories } from '@/services'
import { CategoryType } from '@/types'
import { Skeleton } from '@heroui/skeleton'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

const CategoryNestedList = () => {
    const {categories} = getCategories()
    const {showCategory, setShowCategory} = useContext(Context)

    const [nestedChild, setNestedChild] = useState<CategoryType | any>({})

    function showCategoryChildren(data:CategoryType){
        setNestedChild(data);
    }
    
  return (
    <div id='menu_category' onClick={(e) => (e.target as HTMLDivElement).id == "menu_category" && setShowCategory(false)} className={`${showCategory && "fixed inset-0 z-[99999]"}`}> 
        <div className={`containers !px-0 w-full !z-[999999] mx-auto right-0 left-0 duration-400 absolute top-0 sm:top-[146px] ${showCategory ? "h-[100vh] sm:h-[570px]" : "h-0 opacity-0"} overflow-hidden flex  bg-white shadow-md`}>
            <ul className='w-[52%] space-y-[15px] sm:space-y-0 sm:w-[35%] py-[13px] sm:py-[43px] px-[5px] sm:px-[32px] bg-[#ebeff3]'>
                {categories.length > 0 ? categories.map((item:CategoryType, index:number) => (
                    <li onMouseEnter={() => showCategoryChildren(item)} key={index} className='flex cursor-pointer items-center text-[14px] hover:bg-white rounded-md duration-300 sm:text-[16px] gap-[15px] py-[8px] sm:py-[12px] pl-[10px] sm:pl-[40px]'>
                        <Image style={{width:"24px", height:"24px"}} src={`${IMAGE_API}/${item.icon}`} alt='Category icon' width={24} height={24} priority/>
                        <span className='text-[16px] hover:text-black leading-[18.75px] text-[#545D6A]'>{item.name}</span>
                    </li>
                )) : <div className='space-y-5'>
                        <Skeleton className="h-5 w-full rounded-lg" />
                        <Skeleton className="h-5 w-full rounded-lg" />
                        <Skeleton className="h-5 w-full rounded-lg" />
                        <Skeleton className="h-5 w-full rounded-lg" />
                        <Skeleton className="h-5 w-full rounded-lg" />
                        <Skeleton className="h-5 w-full rounded-lg" />
                        <Skeleton className="h-5 w-full rounded-lg" />
                        <Skeleton className="h-5 w-full rounded-lg" />
                    </div>}
            </ul>
            <ul className='w-[48%] space-y-[23px] sm:space-y-[20px] sm:w-[65%] py-[13px] sm:py-[55px] px-[22px] sm:px-[73px] bg-white'>
                <strong className='font-bold text-[16px]'>{nestedChild.name}</strong>
                {nestedChild?.children?.map((item:CategoryType) => (
                    <li key={item.id} className='text-[14px] sm:text-[16px]'>{item?.name}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default CategoryNestedList