"use client"
import React from 'react'
import "./styles.css"
import { CategoryType } from '@/types/CategoryType'
import Image from 'next/image'
import { IMAGE_API } from '@/hooks/getEnv'
import { getCategories } from '@/services'
const CategoryMenu = () => {
    const { categories, isLoading } = getCategories()

    return (
        <div className= 'containers' >
        <div className='category-wrapper' >
        {
            categories.map((item: CategoryType) => (
                <div key= { item.id } className = 'relative overflow-hidden categoru-item p-5 bg-slate-400 rounded-md' >
                <span className='border-[1px] border-white rounded-[30px] px-[10px] sm:px-[15px] text-white absolute top-[9px] sm:top-[14px] left-[10px] text-[11px] sm:text-[14px] py-[4px]' > { item.name } </span>
            < Image className = 'object-contain !w-[150px] !h-[151px] sm:!w-[294px] sm:!h-[294px] bottom-[-10px] absolute sm:bottom-[-70px] right-0' style = {{ width: "294px", height: "294px" }} src = {`${IMAGE_API}/${item.image}`
} alt = 'CategoryImg' width = { 294} height = { 294} priority/>
    </div>
            ))}
</div>
    </div>
  )
}

export default CategoryMenu