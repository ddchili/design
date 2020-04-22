import React from 'react'
import Fade from 'react-reveal/Fade'

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from 'react-router-dom'

// import Button from '@material-ui/core/Button'
import { isMobile } from 'react-device-detect'

import overviewCreateEvent from '../../../static/img/raster/overview_athlinks_createEvent.jpg'
import overviewARP from '../../../static/img/raster/overview_athlinks_ARP.jpg'
import overviewFeeds from '../../../static/img/raster/overview_athlinks_feeds.jpg'
import overviewVirRace from '../../../static/img/raster/overview_athlinks_VR.jpg'

import brandAthlinks from '../../../static/img/svg/brand_athlinks.svg'
import './styles.scss'

const Blade = (props)=> {
  const img = props.img ? props.img : 'no img src'
  const title = props.title ? props.title : 'no title'
  const titleColor = props.titleColor ? props.titleColor : 'black'
  const copy = props.copy ? props.copy : 'no copy supplied'
  const sectionTitle = props.sectionTitle ?? false
  const view = props.view ?? ''
  const { path, url } = useRouteMatch()

  const sectionTitleBlock = (
    <div className='text-3xl font-semibold text-left ml-8 lg:ml-12 mt-24'>
          <h3>{sectionTitle}</h3>
        </div>
  )

  const handleOnClick = (target) =>{

  }

  return (
    <Fade bottom>
      <div className={`${titleColor} my-12 md:my-24`}>
        <div className='flex flex-col md:flex-col lg:flex-row justify-center text-center lg:text-left h-full md:w-5/6 mx-auto'>
          <div className='shadow-lg self-center m-8'>
            <img src={img}/>
          </div>
          <div className='flex flex-col w-5/6 md:w-5/6 lg:w-1/2 m-8 justify-center items-center lg:items-start'>
            <h2 className='text-4xl font-semibold'>{title}</h2>
            <p>{copy}</p>
            {/* <Link to={`${url}/event`}> */}
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold w-2/3 py-2 px-4 my-8 rounded-full uppercase"
                onClick={handleOnClick}>
                <Link to={`${url}/${view}`}>View Case Study</Link>
              </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </Fade>
  )
}

const OverviewBackground = (props) => {
  const title = props.title ?? '' 
  const copy = props.copy ?? ''
  return(
    <div className='w-full md:w-2/3 lg:w-2/3 align-center text-center mx-auto my-16 px-4'>
      <div className={``}>
        <div className='flex flex-col md:flex-col items-center justify-center text-left h-full'>
          <div className='w-full md:w-full lg:w-5/6 m-2 md:m-6 lg:m-6 xl:m-6 border-b pb-4 border-gray-400'>
            <h2 className='text-4xl font-semibold my-2 uppercase'>{title}</h2>
            <p>{copy}</p>
          </div>
        </div>
      </div>
      {/* <video width='800' height='450' src={miamiReel} controls/> */}
    </div>
  )
}


function Overview(props){

  const challenge = `Timers use our hardware to time athletic events, but they may use 
  different scoring platforms to push results to. How do we ensure Athlinks members 
  can rely on Athlinks for all of their race results in one place?`

  const background = `Athlinks and Chronotrack are entities owned and operated by 
  Life Time as they’re complimentary to each otehrs strengths in the endurance athletic 
  event industry. Combined, for events they represents the registration, timing, scoring,  
  and results aspect of endurance events and its customers range from New York Road Runners 
  for the New York Marathon to Spartan obstacle race events around the world.`

  const createEventCopy = `Integer ornare ornare aliquet. Nunc eu tellus ultrices, efficitur 
  eros nec, porttitor erat. In id ante nunc. Aenean feugiat fermentum libero, vitae faucibus 
  urna vulputate ac.`

  const ARPCopy = `Integer ornare ornare aliquet. Nunc eu tellus ultrices, efficitur 
  eros nec, porttitor erat. In id ante nunc. Aenean feugiat fermentum libero, vitae faucibus 
  urna vulputate ac.`

  const feedsCopy = `Integer ornare ornare aliquet. Nunc eu tellus ultrices, efficitur 
  eros nec, porttitor erat. In id ante nunc. Aenean feugiat fermentum libero, vitae faucibus 
  urna vulputate ac.`

  const vrCopy = `Integer ornare ornare aliquet. Nunc eu tellus ultrices, efficitur 
  eros nec, porttitor erat. In id ante nunc. Aenean feugiat fermentum libero, vitae faucibus 
  urna vulputate ac.`

  // const  match = useRouteMatch()
  let { path, url } = useRouteMatch()

  let { topicId } = useParams()

  console.log('topocId: ' , topicId)

  const createEventLink = (<div><Link to={`${url}/event`}><h1>Create Event</h1></Link></div>)
  const arpLink = (<div><Link to={`${url}/arp`}><h1>Athlete Race Page</h1></Link></div>)
  const feesdsLink = (<div><Link to={`${url}/feeds`}><h1>Activity Feeds</h1></Link></div>)
  const vrLink = (<div><Link to={`${url}/vr`}><h1>Virtual Races</h1></Link></div>)

  return (
    <div className='text-lg'>
      <OverviewBackground
          title='Athlinks, Chronotrack, & Life Time'
          target='Athletic Endurance Events'
          copy={background}/>
      <div className='container mx-auto'>
        <Blade
          img={overviewCreateEvent}
          title='Create Event'
          titleColor='athlinks-blue'
          copyLeft={false}
          copy={createEventCopy}
          view='event'/>
        <Blade
          img={overviewARP}
          title='Athlete Race Pages'
          titleColor='athlinks-blue'
          copyLeft={false}
          copy={ARPCopy}
          view='arp'/>
        <Blade
          img={overviewFeeds}
          title='Activity Feeds'
          titleColor='athlinks-blue'
          copyLeft={false}
          copy={feedsCopy}
          view='feeds'/>
        <Blade
          img={overviewVirRace}
          title='Virtual Races'
          titleColor='athlinks-blue'
          copyLeft={false}
          copy={vrCopy}
          view='vr'/>
      </div>
    </div>
  )
}

export default Overview