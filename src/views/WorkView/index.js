import React from 'react'

import demmerFinish from '../../static/img/raster/demmerFinish.png'


export default function WorkView(props){
  return (
    <div>
      <section className='w-full m-auto flex flex-wrap mt-20 justify-center text-left'>
        <div className='flex flex-wrap'>
          <div className='flex flex-row w-full mb-8 p-10'>
            <div className=''>
              <h1 style={{fontWeight: 900}}
                  className='z-10 relative text-6xl demmer-red absolute'>
                Work!
              </h1>
              <h1 className='z-10 relative text-2xl text-gray-900 absolute'>
                This is the work view.
              </h1>
              <p className='text-gray-700'>
                Let's talk about work. Need nav here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}