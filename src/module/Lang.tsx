"use client";
import { ArrowIcon } from '@/icons';
import React, { useState } from 'react';

const Lang = () => {
  const [showLang, setShowLang] = useState<boolean>(false);
  const [lang, setLang] = useState<string | null>('Uz');

  function langChange(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    const prevValue = (e.target as HTMLLIElement).textContent;
    setLang(prevValue);
  }

  return (
    <div
      onMouseEnter={() => setShowLang(true)}
      onMouseLeave={() => setShowLang(false)}
      className='relative'
    >
      <div className='flex items-center gap-[7px] px-2 text-[#545D6A] cursor-pointer'>
        <span className='font-medium text-[14px]'>{lang}</span>
        <ArrowIcon classList={`${showLang ? 'rotate-[-180deg]' : ''} duration-300`} />
      </div>
      <ul
        className={`bg-white z-40 shadow absolute w-full rounded-md duration-300 overflow-hidden ${
          showLang ? 'h-[55.98px]' : 'h-0 overflow-hidden'
        }`}
      >
        <li
          onClick={langChange}
          className='py-[2px] px-1 hover:bg-[#EBEFF3] text-[#545D6A] cursor-pointer'
        >
          En
        </li>
        <li
          onClick={langChange}
          className='py-[2px] px-1 hover:bg-[#EBEFF3] text-[#545D6A] cursor-pointer'
        >
          Ru
        </li>
      </ul>
    </div>
  );
};

export default Lang;
