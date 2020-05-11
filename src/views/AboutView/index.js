import React from 'react'

// import Overview from '../Overview'
import Hero from '../../components/Hero'
import Blade, {BladeColumn, BladeLarge} from '../../components/Blade'
import ThumbInfo from '../../components/ThumbInfo'

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

import bladeCXLead from '../../static/img/raster/about_cxLead.jpg'
import bladeAthlinksUXTeam from '../../static/img/raster/about_athlinks_uxTeam.jpg'
import bladeLeadvilleTrailFriends from '../../static/img/raster/about_leadvillTrail_friends.jpg'
import bladeColfax from '../../static/img/raster/about_colfax.jpg'
import thumbMiamiSelfie from '../../static/img/raster/about_miami_finishSelfie.jpg'
import thumbHopePass from '../../static/img/raster/about_dd_hopePass.jpg'
import thumbLT100Crew from '../../static/img/raster/about_lt100Crew.jpg'
import thumbBackcountryTrail from '../../static/img/raster/about_thumb_backcountryTrail.jpg'
import thumbShred from '../../static/img/raster/about_thumb_shred.jpg'
import thumbRideRockies from '../../static/img/raster/about_thumb_rideRockies.jpg'




import bladeClientServices from '../../static/img/raster/planfu_clientLanding_services.jpg'
import bladeClientSchedLg from '../../static/img/raster/planfu_clientLanding_schedLg.jpg'

import brandDemmer from '../../static/img/svg/brand_demmer.svg'
import './styles.scss'


const SectionTitleBlock = (props) => {
  const sectionTitle = props.sectionTitle ?? ''
  const copy = props.copy ?? ''
  return (
    <div className='ml-8 text-left'>
      <div className='text-3xl font-semibold text-left mt-24'>
        <h3>{sectionTitle}</h3>
      </div>
      <div className='mt-12'>
        {copy}
      </div>
    </div>
  )
}


const FieldResearchThumbs = (props) => {

  const thumbWire1Caption = `The service offering along with pricing upfront was the most 
  appealing to our customers and their clients. `

  const thumbWire2Caption = `Displaying in a grid format assisted in better responsive scaling.`

  const thumbWire3Caption = `Header information to showcase their business as a themeable element.`


  return (
    <div className='flex flex-col md:flex-row lg:flex-row'>
      <ThumbInfo
          thumb={thumbMiamiSelfie}
          caption={thumbWire1Caption} />
      <ThumbInfo
          thumb={thumbHopePass}
          caption={thumbWire2Caption} />
      <ThumbInfo
          thumb={thumbLT100Crew}
          caption={thumbWire3Caption} />
    </div>
  )
}

const DDActivities = (props) => {

  const thumbWire1Caption = `Minimizing the weight of the header balanced out with the average 
  number of services to be listed below.`

  const thumbWire2Caption = `Swipeable date selection for mobile and desktop would progressively 
  disclose the availability  for a client.`

  const thumbWire3Caption = `Clear receipt-like checkout format was a solid convention that resonated 
  with our audience. `


  return (
    <div className='flex flex-col md:flex-row lg:flex-row'>
      <ThumbInfo
          thumb={thumbBackcountryTrail}
          caption={thumbWire1Caption} />
      <ThumbInfo
          thumb={thumbShred}
          caption={thumbWire2Caption} />
      <ThumbInfo
          thumb={thumbRideRockies}
          caption={thumbWire3Caption} />
    </div>
  )
}

const SectionBorder = () => {
  return (
    <div className='border-b py-8 mx-8 md:mx-24 lg:mx-24 border-gray-400' />
  )
}

const ContactDetails = (props) => {
  const title = props.title ?? '' 
  const email = props.email ?? '' 
  const phone = props.phone ?? '' 
  const resume = props.resume ?? '' 
  const social = props.social ?? '' 
  return(
    <div className='w-full md:w-2/3 lg:w-2/3 align-center text-center mx-auto px-4'>
      <h2 className='text-4xl md:text-6xl lg:text-6xl font-semibold my-16 md:my-32 lg:my-32'>{props.title}</h2>
      {/**Table */}
      <div className='w-full text-left mx-auto md:w-8/12 lg:8/12'>
        <div className='flex flex-row my-4 border-b pb-4 border-gray-400'>
          <span className='font-semibold w-48'>Email</span>
          <p className='w-5/6'>{email}</p>
        </div>
        <div className='flex flex-row my-4 border-b pb-4 border-gray-400'>
          <span className='font-semibold w-48'>Phone</span>
          <p className='w-5/6'>{phone}</p>
        </div>
        <div className='flex flex-row my-4 border-b pb-4 border-gray-400'>
          <span className='font-semibold w-48'>Resume</span>
          <p className='w-5/6'>{resume}</p>
        </div>
        <div className='flex flex-row my-4 border-b pb-4 border-gray-400'>
          <span className='font-semibold w-48'>Social</span>
          <p className='w-5/6'>{social}</p>
        </div>
      </div>
      {/**Background */}
      <div className={``}>
        <div className='flex flex-col md:flex-col items-center justify-center text-left h-full'>
          <div className='flex flex-col w-5/6 md:w-8/12 lg:w-7/12 m-2 md:m-6 lg:m-6 xl:m-6 border-b pb-4 border-gray-400'>
            <h2 className='text-4xl font-semibold my-2'>Background</h2>
            <p>{props.background}</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default function AboutView(props){

  const challenge = `Provide a way for health and wellness professionals without 
  sufficient websites or mobile apps the ability to let their clients schedule online.`

  const background = `Before we had all the bells and whistles, we developed a simple 
  reverse scheduling widget that could be installed onto our customers’ websites, 
  the Schedule Now Widget. This widget allows for their clients to view their availability 
  and request appointments. After fulfilling expanding the feature set for managing your 
  business, we decided to revisit the Schedule Now Widget.`

  const defineTheProbCopy = (
    <div>
      <p>Feedback has been consistent with the primary themes being, customers do not have 
        websites that can be customized by adding a widget; customers do not have the expertise 
        to add the widget to their websites; customers wanted to change the colors of the widget.  </p>
      {/* <br/>
      <p>While they had unmet needs of bringing their scheduling to an online platform, these 
        professionals felt that they were paying too much for features they never used. </p> */}
    </div>
  )

  const scalingInsufficiencies = (
    <div>
      <p>When our customers wanted to resize to better fit the layout of their website, we exposed 
        a custom parameter to the widget where they could set the width and height within the script 
        tag of the widget. </p>
      <br/>
      <p>We needed to rethink the widget to be scalable and responsive on every device and within the bounds 
        of the customer’s website parent container without the customer having to add any parameters to 
        their widget. We just wanted it to work.</p>
    </div>
  )

  const ResumeLinks = (props) => {
    return (
      <a href="/files/ddemmer_resume_2020.pdf" target="_blank" rel="noopener noreferrer" download>Demmer Resume PDF</a>
    )
  }

  const EmailLink = (props) => {
    return (
      <a href='mailto:david@demmer.design' target='_blank'>david@demmer.design</a>
    )
  }

  return (
    <div>
      <Hero
        copy=''
        workHero='about'
        brand={brandDemmer}/>
      <div className='text-lg'>
        <ContactDetails
          title='About Me'
          email={<EmailLink/>}
          phone='(303) 243-2795'
          resume={(<ResumeLinks/>)}
          social='LinkedIn, Athlinks, Strava, Instagram'
          background={background}/>
        <div className='container mx-auto'>
          <Blade
            sectionTitle='UX Designer'
            red={false}
            img={bladeCXLead}
            imgShadow={true }
            title='Multi-Faceted Approach'
            titleColor='demmer-red-h2'
            copyLeft={true}
            copy={defineTheProbCopy}/>
          <Blade
            red={false}
            img={bladeAthlinksUXTeam}
            imgShadow={true}
            title='Scaling Insufficiencies'
            titleColor='demmer-red-h2'
            copyLeft={false}
            copy={scalingInsufficiencies}>
          </Blade>
          <FieldResearchThumbs/>
          <SectionBorder/>

          {/* <ContactDetails
            target='Health, Wellness, & Fitness Professionals'
            challenge={challenge}
            role='R&D, Designer, Front-End Developer, BizDev'/> */}

          <Blade
            sectionTitle='Defining the Problem'
            red={false}
            img={bladeLeadvilleTrailFriends}
            imgShadow={true }
            title='Schedule Now Widget Feedback Themes'
            titleColor='demmer-red-h2'
            copyLeft={true}
            copy={defineTheProbCopy}/>
          <Blade
            red={false}
            img={bladeColfax}
            imgShadow={true}
            title='Scaling Insufficiencies'
            titleColor='demmer-red-h2'
            copyLeft={false}
            copy={scalingInsufficiencies}>
          </Blade>
          <DDActivities/>
          <SectionBorder/>

        </div>
      </div>
    </div>
  )
}