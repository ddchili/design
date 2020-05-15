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


  const background = `After our success with MapMyFitness, I started  a venture with the same two colleagues 
  to address needs in the market for a simple online client scheduling tool. While we are completely self-funded, 
  we continue to grow our opportunities and keep our chops up in the nitty-gritty of software development.`

  const prodDevCopy = `Being a small team. our product development life cycle encompasses all aspects of business 
  development. We each learned to wear many hats.  `

  const clientlandingCopy = `While we have an embeddable widget for our customers to add to their websites, 
  we found that a lot of them did not have a website presence. Enter our latest feature release, 
  Client Landing Pages.`

  const staffCopy = `We initially released Planfu for the one-person shop. We started getting feedback 
  and our customers using multiple accounts for their staff members. To expand our market, we developed 
  Staff Members features for larger facilities.`

  const marketingCopy = `Diving into digital campaigns, we developed our muscle for channel markets and which worked 
  and which ones did not. We also learned that the best channels are more authentic, not always just an ad on 
  your Facebook feed. `


  return (
    <div className='text-lg'>
      <OverviewBackground
          title='Planfu'
          target='Health, Wellness, & Fitness Professionals'
          copy={background}/>
      <div className='container mx-auto'>
        <OverviewBlade
          img={productDev}
          imgShadow={true}
          title='Product Development'
          titleColor='planfu-orange'
          copyLeft={false}
          copy={prodDevCopy}
          view='product'/>
        <OverviewBlade
          img={overviewClinetLanding}
          imgShadow={true}
          title='Client Landing Pages'
          titleColor='planfu-orange'
          copyLeft={false}
          copy={clientlandingCopy}
          view='client'/>
        <OverviewBlade
          img={overviewStaff}
          imgShadow={true}
          title='Staff Members'
          titleColor='planfu-orange'
          copyLeft={false}
          copy={staffCopy}
          view='staff'/>
        <OverviewBlade
          img={overviewMarketing}
          imgShadow={true}
          title='Marketing'
          titleColor='planfu-orange'
          copyLeft={false}
          copy={marketingCopy}
          view='marketing'/>
      </div>
    </div>
  )
}

export default Overview