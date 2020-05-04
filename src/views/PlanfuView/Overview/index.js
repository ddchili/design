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

import {OverviewBlade, OverviewBackground} from '../../../components/Blade'

import productDev from '../../../static/img/raster/overview_planfu_cal.jpg'
import overviewClinetLanding from '../../../static/img/raster/overview_planfu_clientLandingPages.jpg'
import overviewStaff from '../../../static/img/raster/overview_planfu_staffList.jpg'
import overviewMarketing from '../../../static/img/raster/overview_planfu_marketing.jpg'

import brandAthlinks from '../../../static/img/svg/brand_athlinks.svg'
import './styles.scss'

function Overview(props){

  const challenge = `Timers use our hardware to time athletic events, but they may use 
  different scoring platforms to push results to. How do we ensure Athlinks members 
  can rely on Athlinks for all of their race results in one place?`

  const background = `Athlinks and Chronotrack are entities owned and operated by 
  Life Time as they’re complimentary to each other's strengths in the endurance athletic 
  event industry.`

  const createEventCopy = `Connecting the source of the event from its inception all the way 
  to race day final results, a commitment to the athlete.`

  const ARPCopy = `“How do I share my race details with my friends so they can track me?” 
  That was one the biggest problems with athletes where they wanted to share all their race 
  details with friends and family before the event. `

  const feedsCopy = `Activity feeds enabled social engagement with the main point in answering 
  the question, “What races are my friends doing?”`

  const vrCopy = `WIth the advent of COVID-19, we’ve witnessed a shutdown of many aspects of 
  everyday our lives, including endurance athletic events. Virtual Races are here to stay. `

  // const  match = useRouteMatch()
  let { path, url } = useRouteMatch()

  let { topicId } = useParams()

  console.log('topocId: ' , topicId)

  const productLink = (<div><Link to={`${path}/product`}><h1>Product</h1></Link></div>)
  const arpLink = (<div><Link to={`${url}/arp`}><h1>Athlete Race Page</h1></Link></div>)
  const feesdsLink = (<div><Link to={`${url}/feeds`}><h1>Activity Feeds</h1></Link></div>)
  const vrLink = (<div><Link to={`${url}/vr`}><h1>Virtual Races</h1></Link></div>)

  return (
    <div className='text-lg'>
      <OverviewBackground
          title='Planfu'
          target='Athletic Endurance Events'
          copy={background}/>
      <div className='container mx-auto'>
        <OverviewBlade
          img={productDev}
          imgShadow={true}
          title='Product Development'
          titleColor='planfu-orange'
          copyLeft={false}
          copy={createEventCopy}
          view='product'/>
        <OverviewBlade
          img={overviewClinetLanding}
          imgShadow={true}
          title='Client Landing Pages'
          titleColor='planfu-orange'
          copyLeft={false}
          copy={ARPCopy}
          view='client'/>
        <OverviewBlade
          img={overviewStaff}
          imgShadow={true}
          title='Staff Members'
          titleColor='planfu-orange'
          copyLeft={false}
          copy={feedsCopy}
          view='staff'/>
        <OverviewBlade
          img={overviewMarketing}
          imgShadow={true}
          title='Marketing'
          titleColor='planfu-orange'
          copyLeft={false}
          copy={vrCopy}
          view='marketing'/>
      </div>
    </div>
  )
}

export default Overview