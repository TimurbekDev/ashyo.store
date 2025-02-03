"use client"
import React, { FC, useState } from 'react'
import {Slider} from "@heroui/slider";
import { Skeleton } from '@heroui/skeleton';


import { useQueryClient } from '@tanstack/react-query';
import Button from './ButtonComponent';
import { getVaration } from '@/services';
import { ProductFilterType, VarationType } from '@/types';

const ProductFilter:FC<ProductFilterType> = ({setMaxPrice, setMinPrice, setBrandId}) => {
    const queryClient = useQueryClient()

    const {varation, isLoading:varationLoading} = getVaration()
    const [minValue, setMinValue] = useState<number>(10)
    const [maxValue, setMaxValue] = useState<number>(200000000)

    const accumulatorData = [
        {
            id:1,
            value:"3000 mAh",
        },
        {
            id:2,
            value:"3200 mAh",
        },
        {
            id:3,
            value:"3600 mAh",
        },
        {
            id:4,
            value:"4000 mAh",
        },
        {
            id:5,
            value:"4500 mAh",
        },
        {
            id:6,
            value:"5000 mAh",
        },
    ]

    function handlePriceChange(e:number | number[]){
        if(Array.isArray(e)){
            setMinValue(e[0])
            setMaxValue(e[1])
        }
    }

    function handleFilterPriceBtnClick(){
        setMaxPrice(maxValue)
        setMinPrice(minValue)
        queryClient.invalidateQueries({queryKey:['product']})
    }
  return (
    <div className='w-[25%] p-[18px] bg-[#EBEFF3] rounded-[8px]'>
        <h2 className='font-bold mb-[16px] text-[16px] leading-[34px]'>Narx <span className='font-normal text-[14px]'>[so‘m]</span></h2>
        <div className='flex justify-between mb-[26px]'>
            <div className='flex w-[45%] flex-col'>
                <span className='font-normal text-[12px] leading-[34px] inline-block mb-[6px]'>..dan</span>
                <input type='number' value={minValue} onChange={(e) => setMinValue(Number(e.target.value))} className='py-[8px] px-[25px] text-center rounded-[5px] w-full' placeholder='Min naxr'/>
            </div>
            <div className='flex w-[45%] flex-col'>
                <span className='font-normal text-[12px] leading-[34px] inline-block mb-[6px]'>..gacha</span>
                <input type='number' value={maxValue} onChange={(e => setMaxValue(Number(e.target.value)))} className='py-[8px] px-[25px] text-center rounded-[5px] w-full' placeholder='Max naxr'/>
            </div>
        </div>
        <Slider
            onChange={handlePriceChange}
            aria-label='Slider'
            size='sm'
            className="max-w-md"
            defaultValue={[minValue, maxValue]}
            formatOptions={{style: "decimal", currency: "UZS"}}
            maxValue={500000000}
            minValue={40}
            step={10}
            />
        <Button onClick={handleFilterPriceBtnClick} extrClass='mt-5' title='Qidirish' type='button'/>
        <div className='mt-[26px]'>
            <h2 className='font-bold text-[16px] leading-[20px]'>Doiymi xotira ROM</h2>
            <div className='flex flex-wrap gap-[8px] mt-[15px]'>
                {varationLoading ? <Skeleton className="h-5 !bg-white w-full mb-[5px] rounded-lg" /> : varation.map((item:VarationType) => <button key={item.id} type='button' className='hover:scale-[1.1] duration-300 text-[12px] leading-[16px] py-[7px] px-[18px] bg-white rounded-[30px]'>{item.value} GB</button>)}
            </div>
        </div>
        <div className='mt-[26px]'>
            <h2 className='font-bold text-[16px] leading-[20px]'>Doiymi xotira ROM</h2>
            <div className='flex flex-wrap gap-[8px] mt-[15px]'>
                {varationLoading ? <Skeleton className="h-5 !bg-white w-full mb-[5px] rounded-lg" /> : accumulatorData.map((item:{id:number, value:string}) => <button key={item.id} type='button' className='hover:scale-[1.1] duration-300 text-[12px] leading-[16px] py-[7px] px-[18px] bg-white rounded-[30px]'>{item.value}</button>)}
            </div>
        </div>
    </div>
  )
}

export default ProductFilter