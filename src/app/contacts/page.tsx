"use client"
import { Button, Input } from '@/components'
import Footer from '@/module/Footer'
import { Header } from '@/module/Header'
import React, { FormEvent } from 'react'

const ContactPage = () => {
    async function handleSupportSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const data = {
            name: (e.target as HTMLFormElement).username.value,
            surname: (e.target as HTMLFormElement).surname.value,
            phone: (e.target as HTMLFormElement).phone.value,
            email: (e.target as HTMLFormElement).email.value,
            text: (e.target as HTMLFormElement).userquestion.value,
        }
        console.log(data)
    }
  return (
    <>
        <div className='containers w-full'>
            <div className='space-y-3 mb-3'>
            <h1 className='text-2xl font-bold'>Qayta aloqa</h1>
            <p className='font-semibold'>Bizning ishimiz haqidagi fikir mulohazalaringiz bilan bo’lishing yoki izohlar maydonida o’zingizni qiziqtirgan savolingizni yo’llang</p>
            </div>
            <form onSubmit={handleSupportSubmit} className='w-full'>
                <div className='grid grid-cols-2 grid-rows-4 gap-1'>
                <div className='flex flex-col space-y-2 col-span-2   sm:col-span-1'>
                    <label className='font-semibold'>Ism</label>
                    <Input type='text' placeholder='Ism' name='username'/>
                </div>

                <div className='flex flex-col space-y-2 col-span-2   sm:col-span-1'>
                    <label className='font-semibold'>Familiya</label>
                    <Input type='text' placeholder='Familiya' name='surname'/>
                </div>

                <div className='flex flex-col space-y-2 col-span-2   sm:col-span-1'>
                    <label className='font-semibold'>Telefon raqam</label>
                    <Input type='text' placeholder='Telefon raqami' name='phone'/>
                </div>
                <div className='flex flex-col space-y-2 col-span-2   sm:col-span-1'>
                    <label className='font-semibold'>Email</label>
                    <Input type='email' placeholder='Email' name='email'/>
                </div>

                <div className='flex flex-col space-y-2 col-span-2'>
                    <label className='font-semibold'>O’z fikirlaringizni qoldiring</label>
                    <textarea className='focus:shadow focus:shadow-[#134E9B] duration-300 bg-[#EBEFF3] w-full outline-none py-[17px] px-[26px] rounded-[6px] text-[14px] leading-[#EBEFF3] resize-none' name='userquestion'></textarea>
                </div>
                <div className='col-span-2 mt-2'>
                <Button title='Yuborish' type='submit' extrClass='h-[40px] w-full'></Button>
                </div>
                
                </div>
            </form>
        </div>

        <Footer/>
    </>

  )
}

export default ContactPage