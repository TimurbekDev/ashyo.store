"use client"
import React, { FC } from 'react'
import ProductItem from './ProductItem'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'
import Button from './ButtonComponent'
import { ProductItemType, ProductPageType } from '@/types/ProductType';
import { getProducts } from '@/services';

const Products: FC<ProductPageType> = ({ title, API, extraClass }) => {
    const { products } = getProducts(API)
    return (
        <div className={`mb-[48px] sm:mb-0 mt-[79px] ${extraClass}`
        }>
            <div className='containers' >
                <h2 className='text-[32px] leading-[41.6px] font-bold mb-[50px]' > {title} </h2>
            </div>
            < Swiper
                navigation={true}
                slidesPerView={4}
                spaceBetween={30}
                modules={[Navigation]}
                className="product-carucel !px-5 !hidden sm:!block"
            >
                {
                    products.map((item: ProductItemType) => (
                        <SwiperSlide key={item.id} > <ProductItem item={item} /> </SwiperSlide>
                    ))
                }
            </Swiper>
            < div className='px-5 sm:hidden grid grid-cols-2 gap-[15px] flex-wrap' >
                {products.map((item: ProductItemType) => <ProductItem key={item.id} item={item} />)}
            </div>
            < Button extrClass='sm:hidden !bg-[#EBEFF3] !text-[#134E9B] !w-[198px] !py-[12px] mx-auto mt-[30px]' type='button' title='Ko’proq' />
        </div>
    )
}

export default Products