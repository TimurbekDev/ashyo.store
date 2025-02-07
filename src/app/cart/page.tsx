"use client"

import { Button } from '@/components'
import CartProduct from '@/components/CartProduct'
import { getCart } from '@/services/getAllCart'
import { CartItemType } from '@/types'
import Image from 'next/image'
import React from 'react'
import noDataImage from "../../../public/no-data.png"

const Cart = () => {
    const { cartItems } = getCart();
    if (!cartItems.length) {
        return (
          <div className="containers mx-auto h-[60vh]">
            <h2 className="font-bold text-[22px] mb-6">Savat</h2>
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={noDataImage}
                width={400}
                height={400}
                alt="no data image"
              />
            </div>
          </div>
        );
      }

      
    
    let total = 0
    cartItems.map((item: CartItemType)=>total+=(item.productItem.price * item.count))
    return (
        <div className='containers mx-auto p-4'>
            <h2 className='font-bold text-[22px] mb-6'>Savat</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='md:col-span-2 space-y-6'>
                    {cartItems.sort((a: CartItemType,b: CartItemType)=>a.id-b.id).map((item: CartItemType) => (
                        <CartProduct key={item.id} item={item} />
                    ))}
                </div>
                <div className='bg-[#EBEFF3] p-6 rounded-lg'>
                    <h2 className='font-bold text-[25px] text-center mb-6'>Sizning haridingiz</h2>
                    <ul className='flex justify-between mb-5 text-sm'>
                        <li className='font-normal'>Yetkazib berish:</li>
                        <li className='font-semibold'>Bepul</li>
                    </ul>
                    <ul className='flex justify-between mb-5 text-sm'>
                        <li className='font-normal'>Jami summa:</li>
                        <li className='text-lg font-semibold'>{total} UZS</li>
                    </ul>
                    <Button extrClass='!py-[17px] w-full' title='Hoziroq sotib olish' type='button' />
                </div>
            </div>
        </div>
    )
}

export default Cart
