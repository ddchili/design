import React from 'react'

import Button from '@material-ui/core/Button'

import demmerFinish from '../../static/img/raster/demmerFinish.png'


export default function HomeView(props){
  return (
    <div>
      <section className='w-3/6 m-auto flex flex-wrap mt-20 text-left'>
        <div className='flex flex-wrap'>
          <div className='flex flex-row w-full mb-8 p-10'>
            <div className='w-1/4'>
              <img src={demmerFinish}/>
            </div>
            <div className='w-1/2 ml-12'>
              <h1 style={{fontWeight: 900}}
                  className='z-10 relative text-6xl demmer-red absolute'>
                Hi!
              </h1>
              <h1 className='z-10 relative text-2xl text-gray-900 absolute'>
                I'm David Demmer
              </h1>
              <p className='text-gray-700'>
                I’m a Human-Cenetred Designer specializing in enterprise and consumer design 
                for the health and wellness space.
              </p>
              <p className='text-gray-700'>
                Check out my resume and my recent work.
              </p>
            </div>
          </div>
          <Button variant="contained" color="primary">
            Material-UI Btn
          </Button>
        </div>
      </section>
    </div>
  )
}