import React from 'react'
import logo from '../../assets/images/logo.jpg'

import { IoIosNotifications } from "react-icons/io";

function navbar() {
  return (
    <div className='w-full flex flex-row justify-between items-center px-6 py-2 gap-10'>

      <p className='text-green-500 font-semibold text-4xl'>zerofit</p>

      <div className='flex flex-row justify-between items-center gap-6 grow shrink bg-neutral-100 shadow-lg shadow-neutral-800 rounded-xl px-6 py-2'>
        <div className='flex flex-col justify-start'>
          <p className='text-xs'>HEALTH BAR</p>
          <div className='p-1 px-[100px] bg-green-500 rounded-full'>

          </div>
        </div>
        <p className='lg:text-lg md:text-md sm:text-sm font-semibold text-neutral-800'>
          24 November 2023
        </p>
        <div className='flex flex-row items-center rounded-full p-1.5 bg-green-600'>
          <IoIosNotifications/>
        </div>
      </div>

      <div className='flex flex-row justify-between items-center gap-2'>
        <div className='h-10 w-10 bg-green-500 rounded-full'>

        </div>

        <div className='flex flex-col justify-start'>
          <p className='text-xs font-semibold text-neutral-800'>
            Sourabh Singh Negi
          </p>
          <p className='text-xs font-base text-neutral-600'>
            negiSourabh@gmail.com
          </p>
        </div>

      </div>
    </div>
  )
}

export default navbar