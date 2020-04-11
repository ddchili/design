import React from 'react'

import Button from '@material-ui/core/Button'
import { isMobile } from 'react-device-detect'

import demmerFinish from '../../static/img/raster/demmerFinish.png'
import screenAthlinks from '../../static/img/raster/blade_athlinks.jpg'
import screenPlanfu from '../../static/img/raster/blade_planfu.jpg'
import screenReadyTalk from '../../static/img/raster/blade_readyTalk.jpg'
import screenMmf from '../../static/img/raster/blade_mmf.jpg'

import './styles.scss'


const Hero = (props) => {
  return (
    <section className='w-full md:w-3/6 lg:w-3/6 m-auto flex flex-wrap text-left hero items-center'>
      <div className='flex flex-wrap'>
        <div className='flex flex-col items-center md:flex-col lg:flex-row w-full mb-8 p-10'>
          <div className='border p-4 rounded-full w-64 h-auto avatar'>
            <div className=''>
              <img src={demmerFinish}/>
            </div>
          </div>
          <div className='w-full lg:w-1/2 m-2 lg:ml-12'>
            <h1 style={{fontWeight: 900 }}
                className='z-10 relative text-6xl font-bold demmer-red absolute'>
              Hi!
            </h1>
            <h1 className='z-10 relative text-3xl font-semibold absolute'>
              I'm David Demmer
            </h1>
            <p className='text-gray-700 text-lg'>
              I’m a Human-Cenetred Designer specializing in enterprise and consumer design 
              for the health and wellness space.
            </p>
            <p className='text-gray-700 text-lg'>
              Check out my resume and my recent work.
            </p>
          </div>
        </div>
        {/* <Button variant="contained" color="primary">
          Material-UI Btn
        </Button> */}
      </div>
    </section>
  )
}


const Blade = (props)=> {
  const red = props.red ? 'background-red' : ''
  const copyLeft = props.copyLeft ? props.copyLeft : false
  const img = props.img ? props.img : 'no img src'
  const title = props.title ? props.title : 'no title'
  const titleColor = props.titleColor ? props.titleColor : 'black'
  const copy = props.copy ? props.copy : 'no copy supplied'

  // isMobile - force col layout text first img second
  if(isMobile ? true : copyLeft){
    return (
      <div className={`${titleColor} blade ${red} mb-64`}>
        <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center text-left h-full'>
          <div className='flex flex-col w-5/6 md:w-5/6 lg:w-1/4 m-2 md:m-8 lg:m-8 xl:m-8'>
            <h2 className='text-3xl font-semibold'>{props.title}</h2>
            <p>{props.copy}</p>
          </div>
          <div className='shadow-lg self-center m-8 blade-screen'>
            <img src={img}/>
          </div>
        </div>
      </div>
    )
  }
  else{
    return (
      <div className={`${titleColor} blade ${red} mb-64`}>
        <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center text-left h-full'>
          <div className='shadow-lg self-center m-8 blade-screen'>
            <img src={img}/>
          </div>
          <div className='flex flex-col w-5/6 md:w-5/6 lg:w-1/4 m-2 md:m-8 lg:m-8 xl:m-8'>
            <h2 className='text-3xl font-semibold'>{props.title}</h2>
            <p>{props.copy}</p>
          </div>
        </div>
      </div>
    )
  }
}


export default function HomeView(props){

  const athlinksCopy = `In at libero varius, rutrum leo eu, eleifend purus. Etiam 
  vulputate fringilla neque sit amet gravida. Vestibulum id turpis vestibulum felis 
  suscipit faucibus. Donec et sollicitudin velit. Vivamus nec diam non lacus suscipit 
  varius ac ut risus. Aliquam erat volutpat. Vivamus elementum vestibulum ligula.`

  const planfuCopy = `In at libero varius, rutrum leo eu, eleifend purus. Etiam 
  vulputate fringilla neque sit amet gravida. Vestibulum id turpis vestibulum felis 
  suscipit faucibus. Donec et sollicitudin velit. Vivamus nec diam non lacus suscipit 
  varius ac ut risus. Aliquam erat volutpat. Vivamus elementum vestibulum ligula.`

  const readyTalkCopy = `In at libero varius, rutrum leo eu, eleifend purus. Etiam 
  vulputate fringilla neque sit amet gravida. Vestibulum id turpis vestibulum felis 
  suscipit faucibus. Donec et sollicitudin velit. Vivamus nec diam non lacus suscipit 
  varius ac ut risus. Aliquam erat volutpat. Vivamus elementum vestibulum ligula.`

  const mmfCopy = `In at libero varius, rutrum leo eu, eleifend purus. Etiam 
  vulputate fringilla neque sit amet gravida. Vestibulum id turpis vestibulum felis 
  suscipit faucibus. Donec et sollicitudin velit. Vivamus nec diam non lacus suscipit 
  varius ac ut risus. Aliquam erat volutpat. Vivamus elementum vestibulum ligula.`

  const rallyCopy = `In at libero varius, rutrum leo eu, eleifend purus. Etiam 
  vulputate fringilla neque sit amet gravida. Vestibulum id turpis vestibulum felis 
  suscipit faucibus. Donec et sollicitudin velit. Vivamus nec diam non lacus suscipit 
  varius ac ut risus. Aliquam erat volutpat. Vivamus elementum vestibulum ligula.`

  return (
    <div>
      <Hero/>
      <Blade
        red={true}
        img={screenAthlinks}
        title='Athlinks'
        titleColor='athlinks-blue'
        copyLeft={true}
        copy={athlinksCopy}/>
      <Blade
        red={false}
        img={screenPlanfu}
        title='Planfu'
        titleColor='planfu-orange'
        copyLeft={false}
        copy={athlinksCopy}/>
      <Blade
        red={true}
        img={screenReadyTalk}
        title='ReadyTalk'
        titleColor='readytalk-green'
        copyLeft={true}
        copy={readyTalkCopy}/>
      <Blade
        red={false}
        img={screenMmf}
        title='MapMyFitness'
        titleColor='mmf-blue'
        copyLeft={false}
        copy={mmfCopy}/>
      <Blade
        red={true}
        img={screenMmf}
        title='Rally'
        titleColor='rally-red'
        copyLeft={true}
        copy={rallyCopy}/>
    </div>
  )
}