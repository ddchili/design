import React from 'react'

import Overview from '../Overview'
import Blade, {BladeLarge} from '../../../components/Blade'
import Synopsis from '../../../components/Synopsis'
import ThumbInfo from '../../../components/ThumbInfo'

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

import personas from '../../../static/img/raster/planfu_prod_personas.jpg'
import featureContext from '../../../static/img/raster/planfu_prod_featureContext.jpg'
import thumbSchedWire from '../../../static/img/raster/thumb_planfu_scheduleWire.jpg'
import thumbStaffSched from '../../../static/img/raster/thumb_planfu_staffSched.jpg'
import thumbMobileSched from '../../../static/img/raster/thumb_planfu_mobileSched.jpg'
import scheduleLarge from '../../../static/img/raster/planfu_product_cal_lg.jpg'
import clientMgmt from '../../../static/img/raster/planfu_product_clientMgmt.jpg'
import integration from '../../../static/img/raster/planfu_product_integration.jpg'

import thumbEventDashboard from '../../../static/img/raster/work_thumb_evnetDashboard.jpg'
import thumbTestBoard from '../../../static/img/raster/work_thumb_usertestBoard.jpg'

import homeTarget from '../../../static/img/raster/planfu_product_homeTarget.jpg'
import prodFeedback from '../../../static/img/raster/planfu_product_feedback.jpg'

import brandAthlinks from '../../../static/img/svg/brand_athlinks.svg'

import './styles.scss'


const SchedThumbs = (props) => {
  
  const schedWire = `Donec et sollicitudin velit. Vivamus nec diam non lacus suscipit varius 
  ac ut risus.`

  const schedView = `Donec et sollicitudin velit. Vivamus nec diam non lacus suscipit varius 
  ac ut risus.`

  const schedMobile = `Donec et sollicitudin velit. Vivamus nec diam non lacus suscipit varius 
  ac ut risus.`

  return (
    <div className='flex flex-col md:flex-row lg:flex-row'>
      <ThumbInfo
          thumb={thumbSchedWire} 
          caption={schedWire}/>
      <ThumbInfo
          thumb={thumbStaffSched}
          caption={schedView} />
      <ThumbInfo
          thumb={thumbMobileSched}
          caption={schedMobile} />
    </div>
  )
}

const DS1Thumbs = (props) => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row'>
      <ThumbInfo
          thumb={thumbSchedWire} />
      <ThumbInfo
          thumb={thumbEventDashboard} />
      <ThumbInfo
          thumb={thumbTestBoard} />
    </div>
  )
}

const SectionBorder = () => {
  return (
    <div className='border-b py-8 mx-8 md:mx-24 lg:mx-24 border-gray-400' />
  )
}


export default function Product(props){

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

  const overviewLink = (<div><Link to={`/planfu`}><h1>Overview</h1></Link></div>)
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
        title='Product'
        target='Athletes and Race Directors'
        challenge={challenge}
        role='Director, facilitaor, researcher, usability tester'
        background={background}/>
      <div className='container mx-auto'>
        <Blade
          sectionTitle='Defining the Problem'
          red={false}
          img={personas}
          title='Customer Expereince Journey Mapping'
          titleColor='athlinks-blue'
          copyLeft={true}
          copy={athlinksCopy}/>
        <Blade
          red={false}
          img={featureContext}
          title='Onsite - Building Empathy for the Human'
          titleColor='athlinks-blue'
          copyLeft={false}
          copy={athlinksCopy}>
            <SchedThumbs title='Hello There This is a title'/>
            <SectionBorder/>
        </Blade>

        <Blade
          sectionTitle='Defining the Problem'
          red={false}
          img={homeTarget}
          title='Customer Expereince Journey Mapping'
          titleColor='athlinks-blue'
          copyLeft={true}
          copy={athlinksCopy}/>
        <Blade
          red={false}
          img={prodFeedback}
          title='Onsite - Building Empathy for the Human'
          titleColor='athlinks-blue'
          copyLeft={false}
          copy={athlinksCopy}>
            <SchedThumbs title='Hello There This is a title'/>
            <SectionBorder/>
        </Blade>

        <BladeLarge
          red={false}
          img={scheduleLarge}
          title='Event Dashboard'
          titleColor='athlinks-blue'
          copyLeft={true}
          copy={athlinksCopy}/>

        <BladeLarge
          red={false}
          img={clientMgmt}
          title='Event Dashboard'
          titleColor='athlinks-blue'
          copyLeft={true}
          copy={athlinksCopy}/>

        <BladeLarge
          red={false}
          img={integration}
          title='Event Dashboard'
          titleColor='athlinks-blue'
          copyLeft={true}
          copy={athlinksCopy}/>
      </div>
    </div>
  )
}