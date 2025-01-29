import { IMAGE_API } from '@/hooks/getEnv'
import Image from 'next/image'
import React, { FC } from 'react'
import { BasketCartIcon, CompareIcon } from '@/icons'
import { ProductItemType } from '@/types/ProductType'
import Button from './ButtonComponent'

const ProductItem: FC<{ item: ProductItemType }> = ({ item }) => {

    return (
        <div className='w-full product-item duration-300' >
            <div className='bg-[#EBEFF3] relative rounded-[8px] mb-[16px] flex items-center justify-center h-[280px]' >
                <Image className='product-img duration-300' style={{ width: "202px", height: "202px" }
                } src={`${IMAGE_API}/${item.image}`} width={202} height={202} alt='Product img' priority />
            </div>
            < p className='text-[18px] font-normal leading-[19px] text-[#545D6A] mb-[28px]' > {item.name} </p>
            < div className='flex justify-between' >
                <strong className='text-[20px] leading-[26px] font-bold' > {item.price} usz </strong>
                < div className='flex gap-[10px]' >
                    <Button extrClass='!w-[52px] !h-[44px] !p-0 !bg-transparent border-[2px] border-[#EBEFF3]' type='button' icon={< CompareIcon />} iconPostion='left' />
                    <Button extrClass='!w-[52px] !h-[44px] !p-0 text-white' type='button' icon={< BasketCartIcon />} iconPostion='left' />
                </div>
            </div>
        </div>
    )
}

export default ProductItem