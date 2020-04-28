import React from 'react'

import Fade from 'react-reveal/Fade'

import { isMobile } from 'react-device-detect'



export default function Synopsis(props) {
  const title = props.title ?? '' 
  return(
    <div className='w-full md:w-2/3 lg:w-2/3 align-center text-center mx-auto px-4'>
      <h2 className='text-4xl md:text-6xl lg:text-6xl font-semibold my-16 md:my-32 lg:my-32'>{props.title}</h2>
      {/**Table */}
      <div className='w-full text-left mx-auto md:w-8/12 lg:8/12'>
        <div className='flex flex-row my-4 border-b pb-4 border-gray-400'>
          <span className='font-semibold w-48'>Target</span>
          <p className='w-5/6'>{props.target}</p>
        </div>
        <div className='flex flex-row my-4 border-b pb-4 border-gray-400'>
          <span className='font-semibold w-48'>Challenge</span>
          <p className='w-5/6'>{props.challenge}</p>
        </div>
        <div className='flex flex-row my-4 border-b pb-4 border-gray-400'>
          <span className='font-semibold w-48'>My Roles</span>
          <p className='w-5/6'>{props.role}</p>
        </div>
      </div>
      {/**Background */}
      <div className={``}>
        <div className='flex flex-col md:flex-col items-center justify-center text-left h-full'>
          <div className='flex flex-col w-5/6 md:w-8/12 lg:w-7/12 m-2 md:m-6 lg:m-6 xl:m-6 border-b pb-4 border-gray-400'>
            <h2 className='text-4xl font-semibold my-2'>Background</h2>
            <p>{props.background}</p>
          </div>
        </div>
      </div>
    </div>
  )
}