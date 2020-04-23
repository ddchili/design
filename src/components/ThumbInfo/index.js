import React from 'react'

import Fade from 'react-reveal/Fade'

import { isMobile } from 'react-device-detect'



export default function ThumbInfo(props) {
  const thumb = props.thumb ?? 'no img'
  return (
    <div className='w-full md:w-1/3 lg:w-1/3 mt-24'>
      <div className='flex flex-col items-center px-12 text-left'>
        <div className=''>
          <img src={thumb}/>
        </div>
        <div>
          <p className='text-sm mt-2'>In at libero varius, rutrum leo eu, eleifend purus. Etiam 
            vulputate fringilla neque sit amet gravida. Vestibulum id turpis vestibulum felis 
            suscipit faucibus. Donec et sollicitudin velit.</p>
        </div>
      </div>
    </div>
  )
}