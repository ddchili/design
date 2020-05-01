import React from 'react'

import Fade from 'react-reveal/Fade'

import { isMobile } from 'react-device-detect'



export default function Hero(props) {
  const brand = props.brand ?? ''
  const workHero = props.workHero ?? ''
  return (
    <section className={`bg-cover bg-center work-${workHero}-hero w-full text-left athlinks-blue`}>
      <div className='md:w-3/6 lg:w-3/6 m-auto flex flex-wrap h-full'>
        <div className='flex flex-col items-center md:flex-col lg:flex-row w-full mb-8 p-10'>
          <div className='w-full lg:w-2/3 m-2 lg:ml-12'>
            <div className='mb-4'>
              <img src={brand}/>
            </div>
            <p className='text-white text-lg'>
              {props.copy}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}