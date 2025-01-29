"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import Image from 'next/image';
import { IMAGE_API } from '@/hooks/getEnv';
import { Skeleton } from '@heroui/skeleton';
import { getBanners } from '@/services';
import { Button } from '@/components';
import { BannerType } from '@/types';

const Hero = () => {
    const {banners, isLoading} = getBanners()
    
    return (
        <div className="bg-[#dedede] mb-[33px] sm:mb-[100px]">
            <div className='containers'>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper z-[-1]">
                    {isLoading ?  <Skeleton className="absolute top-5 w-full h-[400px] rounded-lg" /> : banners.map((item:BannerType) => (
                        <SwiperSlide className='pt-[37px] z-[-99999] pb-[63px] sm:!pt-[145px] relative sm:!pb-[150px]' key={item.id}>
                            <div className='w-full sm:w-[40%] lg:w-[596px]'>
                                <h2 className='font-bold text-[22px] sm:text-[44px] leading-[26.4px] sm:leading-[52.8px] sm:mb-[6px]'>{item.name}</h2>
                                <p className='font-normal text-[11px] text-[#545D6A] mb-[22px] sm:text-[16px]'>{item.description}</p>
                                <Button extrClass='!text-[12px] !py-[12px] w-[161px]' type='button' title={"Batafsil"}/>
                            </div>
                         <Image style={{width:"400px", height:"600px"}} className='!w-[200px] !h-[200px] sm:!w-[400px] sm:!h-[400px] bottom-0 absolute sm:top-0 sm:bottom-0 sm:my-auto right-5' src={`${IMAGE_API}/${item.image}`} alt='Brand Img' width={400} height={600} priority/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Hero