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

import Blade from '../../../components/Blade'
import {BladeColumn} from '../../../components/Blade'
import Synopsis from '../../../components/Synopsis'
import ThumbInfo from '../../../components/ThumbInfo'

import bladeARPStates from '../../../static/img/raster/arp_blade_states.jpg'
import thumbMiamiStart from '../../../static/img/raster/work_thumb_arp_miamiStart.jpg'
import thumbMiamiAthlete from '../../../static/img/raster/work_thumb_arp_miamiAthlete.jpg'
import thumbMosquito from '../../../static/img/raster/work_thumb_arp_mosquitoTimer.jpg'
import thumbDesignEvo from '../../../static/img/raster/arp_thumb_designEvo.jpg'
import thumbDesignEvoContent from '../../../static/img/raster/arp_thumb_designEvoContent.jpg'
import thumbDesignEvoStates from '../../../static/img/raster/arp_thumb_designEvoStates.jpg'
import bladeARP_preRace from '../../../static/img/raster/arp_blade_pre.jpg' 
import bladeARP_postRace from '../../../static/img/raster/arp_blade_post.jpg'
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

const BladeColumns = () => {

  const athlinksCopy = `In at libero varius, rutrum leo eu, eleifend purus. Etiam 
  vulputate fringilla neque sit amet gravida. Vestibulum id turpis vestibulum felis 
  suscipit faucibus. Donec et sollicitudin velit. Vivamus nec diam non lacus suscipit 
  varius ac ut risus. Aliquam erat volutpat. Vivamus elementum vestibulum ligula.`

  return (
    <div className='flex flex-col lg:flex-row'>
      <BladeColumn
        sectionTitle='Athlete Race Pages'
        red={false}
        img={bladeARP_preRace}
        title='Design Evolution'
        titleColor='athlinks-blue'
        copyLeft={true}
        copy={athlinksCopy}>
      </BladeColumn>
      <BladeColumn
        sectionTitle='Athlete Race Pages'
        red={false}
        img={bladeARP_postRace}
        title='Design Evolution'
        titleColor='athlinks-blue'
        copyLeft={true}
        copy={athlinksCopy}>
      </BladeColumn>
    </div>
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
        <BladeColumns/>
        
      </div>
    </div>
  )
}