"use client"

import { getCart } from '@/services/getAllCart'
import { CartItemType } from '@/types'
import React from 'react'

const Cart = () => {
    const { cartItems } = getCart()
    return (
        <div className='containers'>
            <h2 className='font-bold text-[22px] mb-[36px]'>Savat</h2>
            <div className='flex justify-between'>
                <div className='w-[70%] space-y-[30px]'>
                    {cartItems.map((item: CartItemType) => <CartProduct key={item.id} item={item} />)}
                </div>
                <div className='w-[25%]'>
                    <div className='w-full bg-[#EBEFF3] p-[40px] rounded-[7px]'>
                        <h2 className='font-bold text-[25px] text-center mb-[42px]'>Sizni haridingiz</h2>
                        <ul className='flex mb-[41px] items-center justify-between'>
                            <li className='text-[12px] font-normal'>Yetkazib berish:</li>
                            <li className='text-[18px] font-semibold'>Bepul</li>
                        </ul>
                        <ul className='flex items-center mb-[39px] justify-between'>
                            <li className='text-[12px] font-normal'>Jami summa::</li>
                            <li className='text-[18px] font-semibold'>12 568 000 usz</li>
                        </ul>
                        <Button extrClass='!py-[17px] w-[90%] mx-auto' title='Hoziroq sotib olish' type='button'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart