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

import {OverviewBlade, OverviewBackground} from '../../../components/Blade'

// import Button from '@material-ui/core/Button'
import { isMobile } from 'react-device-detect'

import overviewCreateEvent from '../../../static/img/raster/overview_athlinks_createEvent.jpg'
import overviewARP from '../../../static/img/raster/overview_athlinks_ARP.jpg'
import overviewFeeds from '../../../static/img/raster/overview_athlinks_feeds.jpg'
import overviewVirRace from '../../../static/img/raster/overview_athlinks_VR.jpg'

import brandAthlinks from '../../../static/img/svg/brand_athlinks.svg'
import './styles.scss'

// const OverviewBackground = (props) => {
//   const title = props.title ?? '' 
//   const copy = props.copy ?? ''
//   return(
//     <div className='w-full md:w-2/3 lg:w-2/3 align-center text-center mx-auto my-16 px-4'>
//       <div className={``}>
//         <div className='flex flex-col md:flex-col items-center justify-center text-left h-full'>
//           <div className='w-full md:w-full lg:w-5/6 m-2 md:m-6 lg:m-6 xl:m-6 border-b pb-4 border-gray-400'>
//             <h2 className='text-4xl font-semibold my-2 uppercase'>{title}</h2>
//             <p>{copy}</p>
//           </div>
//         </div>
//       </div>
//       {/* <video width='800' height='450' src={miamiReel} controls/> */}
//     </div>
//   )
// }


function Overview(props){

  const challenge = `Timers use our hardware to time athletic events, but they may use 
  different scoring platforms to push results to. How do we ensure Athlinks members 
  can rely on Athlinks for all of their race results in one place?`

  const background = `Athlinks and Chronotrack are entities owned and operated by 
  Life Time as they’re complimentary to each other's strengths in the endurance athletic 
  event industry. Combined, for events they represents the registration, timing, scoring,  
  and results aspect of endurance events and its customers range from New York Road Runners 
  for the New York Marathon to Spartan obstacle race events around the world.`

  const createEventCopy = `Connecting the source of the event from its inception all the way 
  to race day final results, a commitment to the athlete.`

  const ARPCopy = `“How do I share my race details with my friends so they can track me?” 
  That was one the biggest problems with athletes where they wanted to share all their race 
  details with friends and family before the event. `

  const feedsCopy = `Activity feeds enabled social engagement with the main point in answering 
  the question, “What races are my friends doing?”`

  const vrCopy = `With the advent of COVID-19, we’ve witnessed a shutdown of many aspects of 
  everyday our lives, including endurance athletic events. Virtual Races are here to stay. `

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
        <OverviewBlade
          img={overviewCreateEvent}
          title='Create Event'
          titleColor='athlinks-blue'
          copyLeft={false}
          copy={createEventCopy}
          view='event'
          imgShadow={true}/>
        <OverviewBlade
          img={overviewARP}
          title='Athlete Race Pages'
          titleColor='athlinks-blue'
          copyLeft={false}
          copy={ARPCopy}
          view='arp'
          imgShadow={true}/>
        <OverviewBlade
          img={overviewFeeds}
          title='Activity Feeds'
          titleColor='athlinks-blue'
          copyLeft={false}
          copy={feedsCopy}
          view='feeds'
          imgShadow={true}/>
        <OverviewBlade
          img={overviewVirRace}
          title='Virtual Races'
          titleColor='athlinks-blue'
          copyLeft={false}
          copy={vrCopy}
          view='vr'
          imgShadow={true}/>
      </div>
    </div>
  )
}

export default Overview