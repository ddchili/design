import React from 'react'

import Blade, { BladeColumn } from '../../../components/Blade'
import {BladeLarge} from '../../../components/Blade'
import Synopsis from '../../../components/Synopsis'
import ThumbInfo from '../../../components/ThumbInfo'

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

import feedsARP_pre from '../../../static/img/raster/feeds_arp_pre.jpg'
import feedARP_pre from '../../../static/img/raster/feed_arp_pre.jpg'
import feedARP_post from '../../../static/img/raster/feed_arp_post.jpg'
import feedThumbMiamiInterview1 from '../../../static/img/raster/feeds_thumb_miamiInterview1.jpg'
import feedThumbMiamiInterview2 from '../../../static/img/raster/feeds_thumb_miamiInterview2.jpg'
import feedThumbMiamiInterview3 from '../../../static/img/raster/feeds_thumb_miamiInterview3.jpg'

import feedThumbMiamiStart from '../../../static/img/raster/feeds_thumb_miami_start.jpg'
import feedThumbLeadvilleTime from '../../../static/img/raster/feeds_thumb_leadville_mosquitoTime.jpg'
import feedThumbMiamiInterview4 from '../../../static/img/raster/feeds_thumb_miamiInterview4.jpg'

import brandAthlinks from '../../../static/img/svg/brand_athlinks.svg'

import './styles.scss'


const MiamiInterviewThumbs = (props) => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row'>
      <ThumbInfo
          thumb={feedThumbMiamiInterview1} />
      <ThumbInfo
          thumb={feedThumbMiamiInterview2} />
      <ThumbInfo
          thumb={feedThumbMiamiInterview3} />
    </div>
  )
}

const MiamiRaceDayThumbs = (props) => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row'>
      <ThumbInfo
          thumb={feedThumbMiamiStart} />
      <ThumbInfo
          thumb={feedThumbMiamiInterview4} />
      <ThumbInfo
          thumb={feedThumbLeadvilleTime} />
    </div>
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
        img={feedARP_pre}
        title='Design Evolution'
        titleColor='athlinks-blue'
        copyLeft={true}
        copy={athlinksCopy}>
      </BladeColumn>
      <BladeColumn
        sectionTitle='Athlete Race Pages'
        red={false}
        img={feedARP_post}
        title='Design Evolution'
        titleColor='athlinks-blue'
        copyLeft={true}
        copy={athlinksCopy}>
      </BladeColumn>
    </div>
  )
}

const SectionBorder = () => {
  return (
    <div className='border-b py-8 mx-8 md:mx-24 lg:mx-24 border-gray-400' />
  )
}


export default function ActivityFeeds(props){

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
        title='Activity Feeds'
        target='Athletes'
        challenge={challenge}
        role='Director, facilitaor, researcher, usability tester'
        background={background}/>
      <div className='container mx-auto'>
        <MiamiInterviewThumbs title='Hello There This is a title'/>
        <SectionBorder/>
        <BladeColumns/>
        <BladeLarge
          sectionTitle='Visual Language'
          red={false}
          img={feedsARP_pre}
          title='The experts in the room'
          titleColor='athlinks-blue'
          copyLeft={true}
          copy={athlinksCopy}/>
        <MiamiRaceDayThumbs/>
      </div>
    </div>
  )
}