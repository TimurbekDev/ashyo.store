import { IMAGE_API } from '@/hooks/getEnv'
import Image from 'next/image'
import React, { FC } from 'react'
import { BasketCartIcon, CompareIcon, LikeIcon } from '@/icons'
import { ProductItemType } from '@/types/ProductType'
import Button from './ButtonComponent'

const ProductItem: FC<{ item: ProductItemType }> = ({ item }) => {
    function handleLikeClick(id:string | number) {
        
    }
    return (
        <div className='w-full sm:w-[273px] relative product-item duration-300'>
        <div className='bg-[#EBEFF3] relative rounded-[8px] mb-[16px] flex items-center justify-center h-[280px]'>
            <Image className='product-img duration-300' style={{width:"202px" , height:"202px"}} src={`${IMAGE_API}/${item.image}`} width={202} height={202} alt='Product img' priority/>
             {/* <span className='bg-white px-[10px] py-[7px] rounded-[5px] font-semibold text-[14px] text-[#E81504] absolute top-[15px] left-[15px]'>Aksiyada</span> */}
        </div>
        <p className='text-[18px] font-normal leading-[19px] text-[#545D6A] line-clamp-1 mb-[28px]'>{item.name}</p>
        <div className='flex justify-between'>
            <strong className='text-[20px] leading-[26px] font-bold'>{item.price} usz</strong>
            <div className='flex gap-[10px]'>
                <Button extrClass='!w-[52px] !h-[44px] !p-0 !bg-transparent border-[2px] border-[#EBEFF3]' type='button' icon={<CompareIcon/>} iconPostion='left'/>
                <Button extrClass='!w-[52px] !h-[44px] !p-0 text-white' type='button' icon={<BasketCartIcon/>} iconPostion='left'/>
            </div>
        </div>
        <button onClick={() => handleLikeClick(item.id)} className='absolute top-[20px] right-[20px]'> <LikeIcon/> </button>
   </div>
    )
}

export default ProductItem