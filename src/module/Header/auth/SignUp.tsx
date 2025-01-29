import { Button, Input } from '@/components'
import { Spinner } from '@heroui/spinner'
import React from 'react'

const SignUp: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <>
      <Input name='fullName' placeholder='Enter your fullname' type='text' />
      <Input name='email' placeholder='Enter your email' type='email' />
      <Input name='password' placeholder='Password' type='password' />
      <Button loading={<Spinner color='white' size='md' />} isLoading={isLoading} extrClass='!w-full' type='submit' title='Sign Up'/>
    </>
  )
}

export default SignUp
