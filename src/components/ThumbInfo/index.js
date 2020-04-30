import React from 'react'

import Fade from 'react-reveal/Fade'

import { isMobile } from 'react-device-detect'



export default function ThumbInfo(props) {
  const thumb = props.thumb ?? 'no img'
  const caption = props.caption ?? ''
  return (
    <div className='w-full md:w-1/3 lg:w-1/3 mt-24'>
      <div className='flex flex-col items-center px-12 text-left'>
        <div className=''>
          <img className='rounded-sm' src={thumb}/>
        </div>
        <div>
          <p className='text-sm mt-2'>{caption}</p>
        </div>
      </div>
    </div>
  )
}