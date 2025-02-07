import { Button, Input } from "@/components";
import { Spinner } from "@heroui/spinner";

import React, { SetStateAction } from 'react'

const SignIn: React.FC<{ isLoading: boolean, setAuthStatus: React.Dispatch<SetStateAction<"sign_in" | "sign_up" | "forgot_password" | "reset_password">> }> = ({ isLoading,setAuthStatus }) => {
  return (
    <>
      <Input name='email' placeholder='Enter your email' type='text' />
      <Input name='password' placeholder='Password' type='password' />
      <Button loading={<Spinner color='white' size='md' />} isLoading={isLoading} extrClass='!w-full' type='submit' title='Sign In'/>
      <span onClick={()=>setAuthStatus("forgot_password")} className="text-blue-700 font-semibold mt-2 float-end cursor-pointer">Forgot password</span>
    </>
  )
}

export default SignIn
 