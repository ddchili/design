import React from 'react'

import Button from '@material-ui/core/Button'

import demmerFinish from '../../static/img/raster/demmerFinish.png'
import screenAthlinks from '../../static/img/raster/blade_athlinks.png'
import './styles.scss'

function athlinksBlade(){
  return (
    <div className='flex flex-col md:flex-row  lg:flex-row items-center 
      justify-center background-red blade text-left athlinks'>
      <div className='flex flex-col w-full md:w-1/4 lg:w-1/4 m-2 md:m-8 lg:m-8 xl:m-8'>
        <h2 className='text-2xl font-semibold'>Athlinks</h2>
        <p>
          I’m a Human-Cenetred Designer specializing in enterprise and consumer design for the health and wellness space.
        </p>
      </div>
      <div className='shadow-lg self-center m-8 blade-screen'>
        <img src={screenAthlinks}/>
      </div>
    </div>
  )
}


export default function HomeView(props){
  return (
    <div>
      <section className='w-3/6 m-auto flex flex-wrap text-left hero items-center'>
        <div className='flex flex-wrap'>
          <div className='flex flex-row w-full mb-8 p-10'>
            <div className='border p-4 rounded-full avatar'>
              <div className=''>
                <img src={demmerFinish}/>
              </div>
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
          {/* <Button variant="contained" color="primary">
            Material-UI Btn
          </Button> */}
        </div>
      </section>
      {athlinksBlade()}
    </div>
  )
}