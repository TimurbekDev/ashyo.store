import { Button, Input } from '@/components'
import React, { SetStateAction } from 'react'

const ForgotPassword: React.FC<{ isLoading: boolean, setAuthStatus: React.Dispatch<SetStateAction<"sign_in" | "sign_up" | "forgot_password" | "reset_password">> }> = ({ isLoading,setAuthStatus }) => {
  return (
    <div className='w-full h-full flex items-center justify-center flex-col space-y-3'>
        <Input type='email' placeholder='Enter your email' name='forgot_email'/>
        <Button type='submit' title='SEND' extrClass='!w-full'/>
    </div>
  )
}

export default ForgotPassword