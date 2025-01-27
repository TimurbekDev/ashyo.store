"use client"
import React, { useContext } from 'react'
import Search from './Search'
import { ArrowIcon } from '@/icons'
import { Context } from '@/context/Context'
import Button from '@/components/ButtonComponent'

const HeaderSearchMobile = () => {
    const { setShowCategory, showCategory } = useContext(Context)
    return (
        <div className='px-[20px] flex items-center justify-center lg:mt-[20px] gap-[10px] xl:hidden'>
            <Button
                onClick={() => setShowCategory(true)}
                extrClass='!px-[20px] !gap-[10px] text-[12px] !py-[12px] sm:!py-[18px]'
                type='button'
                title='Kategoriya'
                iconPostion='right'
                icon={
                    <ArrowIcon
                        classList={`${showCategory && "rotate-[-180deg]"}`}
                    />
                }
            />
            <Search />
        </div>
    )
}

export default HeaderSearchMobile
