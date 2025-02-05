"use client"
import { Button, Input } from '@/components'
import { instance } from '@/hooks'
import Footer from '@/module/Footer'
import React, { useState, FormEvent } from 'react'
import { toast } from 'react-toastify'

const ContactPage = () => {
    const [name,setName] = useState<string>("")
    const [surname,setSurname] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    const [phone,setPhone] = useState<string>("")
    const [text,setText] = useState<string>("")

    
    function handleSupportSubmit (e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        const data = {
            name: name,
            email: email,
            phone: phone,
            surname: surname,
            text: text,
        }

       
        instance().post("/mailer",{...data}).then(res=>{
            if(res.status==200 || res.status==201){
                toast.success("Muvaffaqiyatli adminlarimiz tez orada siz bilan bog'lanishadi")
            
            } else{ 
                toast.error("Qandaydir xato yuz berdi.")
                return
            }
        })
        setEmail("")
        setName("")
        setPhone("")
        setText("")
        setSurname("")
     
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
                    <div className='flex flex-col space-y-2 col-span-2 sm:col-span-1'>
                        <label className='font-semibold'>Ism</label>
                        <Input type='text' placeholder='John' name='name' value={name} onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <div className='flex flex-col space-y-2 col-span-2 sm:col-span-1'>
                        <label className='font-semibold'>Familiya</label>
                        <Input type='text' placeholder='Doe' name='surname' value={surname} onChange={(e)=>setSurname(e.target.value)} />
                    </div>
                    <div className='flex flex-col space-y-2 col-span-2 sm:col-span-1'>
                        <label className='font-semibold'>Telefon raqam</label>
                        <Input type='text' placeholder='998991210416' name='phone' value={phone} onChange={(e)=>setPhone(e.target.value)} />
                    </div>
                    <div className='flex flex-col space-y-2 col-span-2 sm:col-span-1'>
                        <label className='font-semibold'>Email</label>
                        <Input type='email' placeholder='johndoe@gmail.com' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className='flex flex-col space-y-2 col-span-2'>
                        <label className='font-semibold'>O’z fikirlaringizni qoldiring</label>
                        <textarea className='focus:shadow focus:shadow-[#134E9B] duration-300 bg-[#EBEFF3] w-full outline-none py-[17px] px-[26px] rounded-[6px] text-[14px] leading-[#EBEFF3] resize-none' name='userquestion' value={text} onChange={(e)=>setText(e.target.value)}></textarea>
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

export default ContactPage;