import React from 'react'

import Overview from '../Overview'

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

import screenCX from '../../../static/img/raster/work_athlinks_cx.jpg'
import bladeOnsite from '../../../static/img/raster/work_athlinks_blade_onsite.jpg'
import bladeARPStates from '../../../static/img/raster/arp_blade_states.jpg'
import bladeCollab from '../../../static/img/raster/work_athlinks_blade_dsCollab.jpg'
import bladeSolSketch from '../../../static/img/raster/work_athlinks_blade_solSketch.jpg'
import bladeVisLang from '../../../static/img/raster/work_athlinks_blade_visLang.jpg'
import thumbMiamiStart from '../../../static/img/raster/work_thumb_arp_miamiStart.jpg'
import thumbMiamiAthlete from '../../../static/img/raster/work_thumb_arp_miamiAthlete.jpg'
import thumbMosquito from '../../../static/img/raster/work_thumb_arp_mosquitoTimer.jpg'
import thumbDesignEvo from '../../../static/img/raster/arp_thumb_designEvo.jpg'
import thumbDesignEvoContent from '../../../static/img/raster/arp_thumb_designEvoContent.jpg'
import thumbDesignEvoStates from '../../../static/img/raster/arp_thumb_designEvoStates.jpg'
import thumbTestBoard from '../../../static/img/raster/work_thumb_usertestBoard.jpg'
import bladeLeadvilleTent from '../../../static/img/raster/work_athlinks_blade_arp_leadvilletent.jpg'
import bladeJerika from '../../../static/img/raster/work_athlinks_blade_arp_jerika.jpg'


import brandAthlinks from '../../../static/img/svg/brand_athlinks.svg'

import './styles.scss'


const Hero = (props) => {
  return (
    <section className='bg-cover bg-center work-hero w-full text-left athlinks-blue'>
      <div className='md:w-3/6 lg:w-3/6 m-auto flex flex-wrap'>
        <div className='flex flex-col items-center md:flex-col lg:flex-row w-full mb-8 p-10'>
          <div className='w-full lg:w-2/3 m-2 lg:ml-12'>
            <div className='mb-4'>
              <img src={brandAthlinks}/>
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

const Blade = (props)=> {
  const red = props.red ? 'background-red' : ''
  const copyLeft = props.copyLeft ? props.copyLeft : false
  const img = props.img ? props.img : 'no img src'
  const title = props.title ? props.title : 'no title'
  const titleColor = props.titleColor ? props.titleColor : 'black'
  const copy = props.copy ? props.copy : 'no copy supplied'
  const sectionTitle = props.sectionTitle ?? false

  const sectionTitleBlock = (
    <div className='text-3xl font-semibold text-left ml-8 lg:ml-12 mt-24'>
          <h3>{sectionTitle}</h3>
        </div>
  )

  // isMobile - force col layout text first img second
  if(isMobile ? true : copyLeft){
    return (
      <Fade bottom>
        <div className={`${titleColor} mb-8`}>
          {sectionTitle ? sectionTitleBlock : null}
          <div className='flex flex-col md:flex-col lg:flex-row justify-center text-left h-full'>
            <div className='flex flex-col w-5/6 md:w-5/6 lg:w-1/2 m-8'>
              <h2 className='text-1xl font-semibold tracking-widest uppercase'>{props.title}</h2>
              <p>{props.copy}</p>
            </div>
            <div className='shadow-lg self-center m-8'>
              <img src={img}/>
            </div>
          </div>
          {props.children}
        </div>
      </Fade>
    ) 
  }
  else{
    return (
      <Fade bottom>
        <div className={`${titleColor} mb-8`}>
          <div className='flex flex-col md:flex-col lg:flex-row justify-center text-left h-full'>
            <div className='shadow-lg self-center m-8'>
              <img src={img}/>
            </div>
            <div className='flex flex-col w-5/6 md:w-5/6 lg:w-1/2 m-8'>
              <h2 className='text-1xl font-semibold tracking-widest uppercase'>{props.title}</h2>
              <p>{props.copy}</p>
            </div>
          </div>
          {props.children}
        </div>
      </Fade>
    )
  }
}

const Synopsis = (props) => {
  const title = props.title ?? '' 
  return(
    <div className='w-full md:w-2/3 lg:w-2/3 align-center text-center mx-auto px-4'>
      <h2 className='text-4xl md:text-6xl lg:text-6xl font-semibold my-16 md:my-32 lg:my-32'>{props.title}</h2>
      {/**Table */}
      <div className='w-full text-left mx-auto md:w-1/2 lg:w-1/2'>
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
          <div className='flex flex-col w-5/6 md:w-5/6 lg:w-1/2 m-2 md:m-6 lg:m-6 xl:m-6 border-b pb-4 border-gray-400'>
            <h2 className='text-4xl font-semibold my-2'>Background</h2>
            <p>{props.background}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ThumbInfo = (props) => {
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

const ARPRaceDayThumbs = (props) => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row'>
      <ThumbInfo
          thumb={thumbMiamiStart} />
      <ThumbInfo
          thumb={thumbMiamiAthlete} />
      <ThumbInfo
          thumb={thumbMosquito} />
    </div>
  )
}

const DesignEvoThumbs = (props) => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row'>
      <ThumbInfo
          thumb={thumbDesignEvo} />
      <ThumbInfo
          thumb={thumbDesignEvoContent} />
      <ThumbInfo
          thumb={thumbDesignEvoStates} />
    </div>
  )
}

const SectionBorder = () => {
  return (
    <div className='border-b py-8 mx-8 md:mx-24 lg:mx-24 border-gray-400' />
  )
}


export default function AthleteRacePage(props){

  const athlinksCopy = `In at libero varius, rutrum leo eu, eleifend purus. Etiam 
  vulputate fringilla neque sit amet gravida. Vestibulum id turpis vestibulum felis 
  suscipit faucibus. Donec et sollicitudin velit. Vivamus nec diam non lacus suscipit 
  varius ac ut risus. Aliquam erat volutpat. Vivamus elementum vestibulum ligula.`

  const challenge = `Timers use our hardware to time athletic events, but they may use 
  different scoring platforms to push results to. How do we ensure Athlinks members 
  can rely on Athlinks for all of their race results in one place?`

  const background = `In at libero varius, rutrum leo eu, eleifend purus. Etiam 
  vulputate fringilla neque sit amet gravida. Vestibulum id turpis vestibulum felis 
  suscipit faucibus. Donec et sollicitudin velit. Vivamus nec diam non lacus suscipit 
  varius ac ut risus. Aliquam erat volutpat. Vivamus elementum vestibulum ligula.`
  
  // const  match = useRouteMatch()
  let { path, url } = useRouteMatch();

  // let { topicId } = useParams()

  const overviewLink = (<div><Link to={`/athlinks`}><h1>Overview</h1></Link></div>)
  // console.log('path: ', path)
  // console.log('url: ', url)

  // console.log('topocId: ' , topicId)

  return (
    <div className='text-lg'>
      {/* <Hero
        copy='Athlinks is owned by Life Time Fitness along with Chronotrack providing 
        race registration, timing and scoring, and race results for endurance athletic events 
        including the New York Marathon and Spartan events.'/> */}
        {overviewLink}
      <Synopsis
        title='Athlete Race Page'
        target='Athletes'
        challenge={challenge}
        role='Director, facilitaor, researcher, usability tester'
        background={background}/>
      <div className='container mx-auto'>
        <Blade
          sectionTitle='Defining the Problem'
          red={false}
          img={bladeLeadvilleTent}
          title='Customer Expereince Journey Mapping'
          titleColor='athlinks-blue'
          copyLeft={true}
          copy={athlinksCopy}/>
        <Blade
          red={false}
          img={bladeJerika}
          title='Onsite - Building Empathy for the Human'
          titleColor='athlinks-blue'
          copyLeft={false}
          copy={athlinksCopy}>
            <ARPRaceDayThumbs title='Hello There This is a title'/>
            <SectionBorder/>
        </Blade>
        <Blade
          sectionTitle='Athlete Race Pages'
          red={false}
          img={bladeARPStates}
          title='Design Evolution'
          titleColor='athlinks-blue'
          copyLeft={true}
          copy={athlinksCopy}>
            <DesignEvoThumbs/>
            <SectionBorder/>
        </Blade>
      </div>
    </div>
  )
}