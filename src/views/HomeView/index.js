import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from 'react-router-dom'

import Fade from 'react-reveal/Fade'

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
              I create People-Cenetred Design experiences specializing in enterprise and consumer design 
              for the health, wellness, and fitness space.
            </p>
            <p className='text-gray-700 text-lg'>
              My portfolio is currently being updated for 2020 but feel free to browse as I'm updating it daily. 
            </p>
          </div>
        </div>
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
  const route = props.route ?? '/'
  const view = props.view ?? ''

  const { path, url } = useRouteMatch()

  // isMobile - force col layout text first img second
  if(isMobile ? true : copyLeft){
    return (
      <div className={`${titleColor} blade ${red} mb-6 md:mb-64 text-lg`}>
        <Fade bottom>
          <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center text-left h-full py-12'>
            <div className='flex flex-col w-5/6 md:w-5/6 lg:w-1/4 m-2 md:m-8 lg:m-8 xl:m-8'>
              <h2 className='text-3xl font-semibold'><Link to={`/${view}`}>{title}</Link></h2>
              <p>{copy}</p>
              <button className='bg-gray-800 hover:bg-gray-700 text-white font-bold w-2/3 py-2 px-4 my-8 rounded-full uppercase'>
                <Link to={`/${view}`}>View Athlinks Projects</Link>
              </button>
            </div>
            <div className='shadow-lg self-center m-8 blade-screen'>
              <img src={img}/>
            </div>
          </div>
        </Fade>
      </div>
    )
  }
  else{
    return (
      <div className={`${titleColor} blade ${red} mb-6 md:mb-64 text-lg`}>
        <Fade bottom>
          <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center text-left h-full py-12'>
            <div className='shadow-lg self-center m-8 blade-screen'>
              <img src={img}/>
            </div>
            <div className='flex flex-col w-5/6 md:w-5/6 lg:w-1/4 m-2 md:m-8 lg:m-8 xl:m-8'>
              <h2 className='text-3xl font-semibold'><Link to={`/${view}`}>{title}</Link></h2>
              <p>{copy}</p>
            </div>
          </div>
        </Fade>
      </div>
    )
  }
}


export default function HomeView(props){

  const athlinksCopy = `Designing products for the endurance athletic markets has been 
  a memorable experience for me. Whether we were in the midst of a Design Sprint or 
  having conversations with athletes on race day, the domain is incredibly inspiring 
  to be a part of.`

  const planfuCopy = `Helping physical therapist practitioners conduct their craft by 
  eliminating overhead in their client scheduling flows. As a founder, designer, marketer, 
  product manager and front-end engineer, Planfu allows me to work with a small team of 
  close friends as a side project to keep our chops up on the technical side of product 
  development.`

  const readyTalkCopy = `Enterprise communications for all sorts of business, ReadyTalk 
  was the standard for quality. We focused on experiences for small collaborative customers 
  to large-scale webinars for conducting business using remote conferencing solutions.`

  const mmfCopy = `The same team that developed Planfu, we also designed mapping technology 
  for snow sports enthusiasts which was acquired by MapMyFitness. Along with the acquisition, 
  I was assigned to the helm of their user experience design team of the efforts across all 
  the MapMyFitness brand family.`

  const rallyCopy = `As one of the first hires for Rally, I was brought on as an automation 
  engineer and transitioned into the role of an Interaction Designer where I was responsible 
  for working with the original design contractor and evolving the experience for their agile 
  project management SaaS platform. `

  return (
    <div>
      <Hero/>
      <Blade
        red={true}
        img={screenAthlinks}
        title='Athlinks'
        titleColor='athlinks-blue'
        route='/athlinks'
        copyLeft={true}
        copy={athlinksCopy}
        view='athlinks'/>
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