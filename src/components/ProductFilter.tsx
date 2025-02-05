"use client"
import React, { FC, useState, useEffect } from 'react'
import { Slider } from "@heroui/slider";
import { Skeleton } from '@heroui/skeleton';

import { useQueryClient } from '@tanstack/react-query';
import Button from './ButtonComponent';
import { getProducts, getVaration } from '@/services';
import { ProductFilterType, VarationType } from '@/types';
import { ProductItemType } from '@/types/ProductType';

const ProductFilter: FC<ProductFilterType> = ({ setMaxPrice, setMinPrice, setBrandId }) => {
    const queryClient = useQueryClient();

    const { products } = getProducts();

    const sortedProducts = products.length > 0 ? [...products].sort((a: ProductItemType, b: ProductItemType) => a.price - b.price) : [];
    const minProductPrice = sortedProducts.length > 0 ? sortedProducts[0].price : 1000;
    const maxProductPrice = sortedProducts.length > 0 ? sortedProducts.at(-1)?.price : 100000;
    
    const [minValue, setMinValue] = useState<number>(minProductPrice);
    const [maxValue, setMaxValue] = useState<number>(maxProductPrice);

    useEffect(() => {
        if (sortedProducts.length > 0) {
            setMinValue(minProductPrice);
            setMaxValue(maxProductPrice);
        }
    }, [products]);

    function handlePriceChange(value: number | number[]) {
        if (Array.isArray(value)) {
            setMinValue(value[0]);
            setMaxValue(value[1]);
        }
    }

    function handleFilterPriceBtnClick() {
        setMaxPrice(maxValue);
        setMinPrice(minValue);
        queryClient.invalidateQueries({ queryKey: ['product'] });
    }

    return (
        <div className='p-[18px] bg-[#EBEFF3] rounded-[8px]'>
            <h2 className='font-bold mb-[16px] text-[16px] leading-[34px]'>Narx <span className='font-normal text-[14px]'>[so‘m]</span></h2>
            <div className='flex justify-between mb-[26px]'>
                <div className='flex w-[45%] flex-col'>
                    <span className='font-normal text-[17px] leading-[34px] inline-block mb-[6px]'>..dan</span>
                    <input type='number' value={minValue} onChange={(e) => setMinValue(Number(e.target.value))} className='py-[8px] px-[25px] text-center rounded-[5px] w-full' placeholder='Min narx' />
                </div>
                <div className='flex w-[45%] flex-col'>
                    <span className='font-normal text-[17px] leading-[34px] inline-block mb-[6px]'>..gacha</span>
                    <input type='number' value={maxValue} onChange={(e) => setMaxValue(Number(e.target.value))} className='py-[8px] px-[25px] text-center rounded-[5px] w-full' placeholder='Max narx' />
                </div>
            </div>
            {sortedProducts.length > 0 && (
                <Slider
                    onChange={handlePriceChange}
                    aria-label='Slider'
                    size='sm'
                    className="max-w-md"
                    defaultValue={[minProductPrice, maxProductPrice]}
                    formatOptions={{ style: "decimal", currency: "UZS" }}
                    maxValue={maxProductPrice}
                    minValue={minProductPrice}
                    step={1000}
                />
            )}
            
            <Button onClick={handleFilterPriceBtnClick} extrClass='mt-5' title='Qidirish' type='button' />
        </div>
    )
}

export default ProductFilter;
