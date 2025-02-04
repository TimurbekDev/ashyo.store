
import { IMAGE_API } from '@/hooks'
import { CartItemType } from '@/types'
import Image from 'next/image'
import React, { FC } from 'react'

const CartProduct: FC<{ item: CartItemType }> = ({ item }) => {
    return (
            <div className='flex justify-between w-[] gap-[31px]'>
                <div className='w-[202px] h-[170px] bg-[#EBEFF3] rounded-[8px] flex items-center justify-center'>
                    <Image src={`${IMAGE_API}/${item.product.image}`} alt='Cart img' width={115} height={115} />
                </div>
                <div className='flex flex-col py-[17px]'>
                    <h2 className='text-[18px] text-[#545D6A] mb-[51px]'>{item.product.name}</h2>
                    <div className='flex items-center gap-[10px]'>
                        <button className='w-[52px] h-[52px] flex items-center justify-center bg-[#EBEFF3] rounded-[7px]'> <LikeIcon /> </button>
                        <button className='w-[52px] h-[52px] flex items-center justify-center bg-[#EBEFF3] rounded-[7px]'> <RemoveIcon /> </button>
                    </div>
                </div>
                <div className='py-[17px] '>
                    <div className='flex items-center gap-[10px] mb-[51px]'>
                        <strong className='font-bold text-[24px]'>2 470 000</strong> <span className='text-[14px]'>USZ</span>
                    </div>
                    <div className='flex items-center gap-[28px]'>
                        <button className='w-[60px] text-[24px] h-[40px] bg-[#EBEFF3] flex items-center justify-center rounded-[7px]'>-</button>
                        <button className='w-[60px] text-[24px] h-[40px] bg-[#EBEFF3] flex items-center justify-center rounded-[7px]'>1</button>
                        <button className='w-[60px] text-[24px] h-[40px] bg-[#EBEFF3] flex items-center justify-center rounded-[7px]'>+</button>
                    </div>
                </div>
            </div>
    )
}

export default CartProduct