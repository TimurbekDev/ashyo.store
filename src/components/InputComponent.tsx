
import { InputType } from '@/types'
import React from 'react'

const Input: React.FC<InputType> = ({ type, placeholder, extraClass, onChange, onBlur, name }) => {
  return (
    <input
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      className={`${extraClass} focus:shadow focus:shadow-[#134E9B] duration-300 bg-[#EBEFF3] w-full outline-none py-[17px] px-[26px] rounded-[6px] text-[14px] leading-[#EBEFF3]`}
      type={type}
      placeholder={placeholder}
      autoComplete='off'
    />
  )
}

export default Input
