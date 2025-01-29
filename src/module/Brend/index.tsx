"use client"
import React from 'react'
import "./styles.css"

import Image from 'next/image'
import BrandLoading from './BrentLoading'
import { BrandType } from '@/types'
import { IMAGE_API } from '@/hooks'
import { getBrands } from '@/services'


const Brend = () => {
    const { brands, isLoading } = getBrands()
    const lastObj: BrandType = {
        id: null,
        name: "Ko’proq",
        image: null,
        Product: []
    }
    return (
        <div className='containers brend-wrapper !mb-[110px]'>
            {isLoading ? <BrandLoading/> :  [...brands, lastObj].map((item: BrandType) => item.id != null ? (
                <div key={item.id} className='brend-item flex items-center justify-center p-5 rounded-md relative'>
                    <Image style={{width:"92px", height:"92px"}} src={`${IMAGE_API}/${item.image}`} alt='Brand img' width={92} height={92} priority />
                </div>
            ) : <button key={item.id} className='brend-item text-[18px] text-[#134E9B] font-medium flex items-center justify-center p-5 rounded-md relative'>
                {item.name}
            </button>
            )}
        </div>
    )
}

export default Brend