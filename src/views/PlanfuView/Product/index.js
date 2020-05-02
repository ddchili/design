import React from 'react'

import Overview from '../Overview'
import Blade from '../../../components/Blade'
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
import bladeDSExpert from '../../../static/img/raster/work_athlinks_blade_dsExpert.jpg'
import bladeCollab from '../../../static/img/raster/work_athlinks_blade_dsCollab.jpg'
import bladeSolSketch from '../../../static/img/raster/work_athlinks_blade_solSketch.jpg'
import bladeVisLang from '../../../static/img/raster/work_athlinks_blade_visLang.jpg'
import thumbBooth from '../../../static/img/raster/work_thumb_booth.jpg'
import thumbStart from '../../../static/img/raster/work_thumb_startLine.jpg'
import thumbTimers from '../../../static/img/raster/work_thumb_timers.jpg'
import thumbSolSketch from '../../../static/img/raster/work_athlinks_thumb_solSketch.jpg'
import thumbEventDashboard from '../../../static/img/raster/work_thumb_evnetDashboard.jpg'
import thumbTestBoard from '../../../static/img/raster/work_thumb_usertestBoard.jpg'

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

const CXThumbs = (props) => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row'>
      <ThumbInfo
          thumb={thumbBooth} />
      <ThumbInfo
          thumb={thumbStart} />
      <ThumbInfo
          thumb={thumbTimers} />
    </div>
  )
}

const DS1Thumbs = (props) => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row'>
      <ThumbInfo
          thumb={thumbSolSketch} />
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
            <CXThumbs title='Hello There This is a title'/>
            <SectionBorder/>
        </Blade>
      </div>
    </div>
  )
}