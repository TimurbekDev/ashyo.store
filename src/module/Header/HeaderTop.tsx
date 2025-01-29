import { LocationIcon } from '@/icons';
import Link from 'next/link';
import React from 'react';
import Lang from './Lang';
import { HeaderTopListType } from '@/types';


const HeaderTop = () => {
  const navList: HeaderTopListType[] = [
    {
      id: 1,
      title: 'Tashkent',
      path: '/',
      icon: <LocationIcon />,
    },
    {
      id: 2,
      title: 'About Us',
      path: '/about-us',
      icon: null,
    },
    {
      id: 3,
      title: 'Products',
      path: '/products',
      icon: null,
    },
    {
      id: 4,
      title: 'Contacts',
      path: '/contacts',
      icon: null,
    },
  ];

  return (
    <div className='bg-[#EBFFF3] hidden sm:block py-[11px]'>
      <div className='flex items-center justify-between containers'>
        <div className='flex items-center gap-[20px]'>
          {navList.map((item: HeaderTopListType) => (
            <Link
              className={`flex items-center text-[14px] text-[#545D6A] leading-[16.41px] ${
                item.icon && 'gap-[11px]'
              }`}
              key={item.id}
              href={item.path}
            >
              {item.icon && item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
        <div className='flex items-center gap-[25px]'>
          <Link
            className='text-[14px] font-semibold leading-[18.2px] text-[#545D6A]'
            href={'tel:+998711234567'}
          >
            +998 (71) 123-45-67
          </Link>
          <Lang />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
