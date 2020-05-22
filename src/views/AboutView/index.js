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

import profilePhoto from '../../static/img/raster/about_profilePhoto.png'

import LinkedInIcon from '@material-ui/icons/LinkedIn'
import PictureAsPdfOutlinedIcon from '@material-ui/icons/PictureAsPdfOutlined'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined'

import bladeCXLead from '../../static/img/raster/about_cxLead.jpg'
import bladeAthlinksUXTeam from '../../static/img/raster/about_athlinks_uxTeam.jpg'
import bladeLeadvilleTrailFriends from '../../static/img/raster/about_leadvillTrail_friends.jpg'
import bladeLT100RaceCrew from '../../static/img/raster/about_lt100_raceCrew.jpg'
import bladeColfax from '../../static/img/raster/about_colfax.jpg'
import bladeEngineer from '../../static/img/raster/about_blade_engineer.jpg'
import thumbMiamiSelfie from '../../static/img/raster/about_miami_finishSelfie.jpg'
import thumbHopePass from '../../static/img/raster/about_dd_hopePass.jpg'
import thumbLT100Crew from '../../static/img/raster/about_lt100Crew.jpg'
import thumbBackcountryTrail from '../../static/img/raster/about_thumb_backcountryTrail.jpg'
import thumbShred from '../../static/img/raster/about_thumb_shred.jpg'
import thumbRideRockies from '../../static/img/raster/about_thumb_rideRockies.jpg'

import thumbDDTaxonomy from '../../static/img/raster/about_thumb_ddTaxonomy.jpg'
import thumbDDBrand from '../../static/img/raster/about_thumb_DDBrand.jpg'
import thumbSketch from '../../static/img/raster/about_thumb_sketchDesign.jpg'

import thumbReact from '../../static/img/raster/about_thumb_react.jpg'
import thumbTailwind from '../../static/img/raster/about_thumb_tailwind.jpg'
import thumbMUI from '../../static/img/raster/about_thumb_mui.jpg'

import miamiReel from '../../static/vid/miamiMarathon_2018_uxReel_compressed.mp4'



import bladeClientServices from '../../static/img/raster/planfu_clientLanding_services.jpg'
import bladeClientSchedLg from '../../static/img/raster/planfu_clientLanding_schedLg.jpg'


import brandDemmer from '../../static/img/svg/brand_demmer.svg'
import './styles.scss'


const SectionBorder = () => {
  return (
    <div className='border-b py-8 mx-8 md:mx-24 lg:mx-24 border-gray-400' />
  )
}

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

const VideoBlade = (props) => {

  const thumbWire1Caption = `The service offering along with pricing upfront was the most 
  appealing to our customers and their clients. `
  return (
    <div>
      <SectionTitleBlock
        sectionTitle='Athlete Interviews'
        copy={thumbWire1Caption}/>
      <div className='w-full lg:w-5/6 mx-auto '>
        <video className='lg:m-8' controls src={miamiReel}/>
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

const UXDesignThumbs = (props) => {

  const thumb1Caption = `For my portfolio site, I went through several UX paces of designing and 
  implementation, including taxonomy, flows and layouts. `

  const thumb2Caption = `Refreshing my brand for the sole purpose of my portfolio. `

  const thumb3Caption = `Sketch has been my tool of choice along with many others.`


  return (
    <div className='flex flex-col md:flex-row lg:flex-row'>
      <ThumbInfo
          thumb={thumbDDTaxonomy}
          caption={thumb1Caption} />
      <ThumbInfo
          thumb={thumbDDBrand}
          caption={thumb2Caption} />
      <ThumbInfo
          thumb={thumbSketch}
          caption={thumb3Caption} />
    </div>
  )
}

const EngineerThumbs = (props) => {

  const thumb1Caption = `This portfolio was developed as a single-page application using React and React 
  Router built on top of Create React App. `

  const thumb2Caption = `Tailwind CSS is leading the charge with utility first CSS as a functional approach 
  to writing CSS. This portfolio was my second project using Tailwind. `

  const thumb3Caption = `Material UI (MUI) is the most exhaustive collection of customizable UI components 
  for React. I used MUI for this portfolio for layout containers, modals, and floating action buttons. `


  return (
    <div className='flex flex-col md:flex-row lg:flex-row'>
      <ThumbInfo
          thumb={thumbReact}
          caption={thumb1Caption} />
      <ThumbInfo
          thumb={thumbTailwind}
          caption={thumb2Caption} />
      <ThumbInfo
          thumb={thumbMUI}
          caption={thumb3Caption} />
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

const ContactDetails = (props) => {
  const title = props.title ?? '' 
  const email = props.email ?? '' 
  const phone = props.phone ?? '' 
  const resume = props.resume ?? '' 
  const social = props.social ?? '' 
  return(
    <div className='w-full md:9/12 lg:w-9/12 align-center text-center mx-auto px-4 my-8'>
      <h2 className='text-4xl md:text-6xl lg:text-6xl font-semibold my-16 md:my-32 lg:my-8'>{props.title}</h2>
      {/**Table */}
      <div className='w-full text-left mx-auto'>
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
          <div className='flex flex-col w-5/6 m-2 md:m-4 lg:m-4 xl:m-4 border-b pb-4 border-gray-400'>
            <h2 className='text-4xl font-semibold my-2'>Background</h2>
            <p>{props.background}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const CareerHistory = (props) => {

  return(
    <div className='w-full md:9/12 lg:w-9/12 align-center text-center mx-auto px-4 my-8'>
      {/**Table */}
      <div className='w-full text-left mx-auto'>
        <div className='flex flex-row my-4 border-b pb-4 border-gray-400'>
          <span className='font-semibold w-64'>Athlinks - A Life Time Company</span>
          <p className='w-5/6'>Director of User Experience</p>
        </div>
        <div className='flex flex-row my-4 border-b pb-4 border-gray-400'>
          <span className='font-semibold w-64'>Planfu</span>
          <p className='w-5/6'>Co-Founder, Product Manager, Designer, Developer, Marketing, Business Development</p>
        </div>
        <div className='flex flex-row my-4 border-b pb-4 border-gray-400'>
          <span className='font-semibold w-64'>ReadyTalk</span>
          <p className='w-5/6'>User Experience Designer</p>
        </div>
        <div className='flex flex-row my-4 border-b pb-4 border-gray-400'>
          <span className='font-semibold w-64'>MapMyFitness</span>
          <p className='w-5/6'>Head of User Experience</p>
        </div>
        <div className='flex flex-row my-4 border-b pb-4 border-gray-400'>
          <span className='font-semibold w-64'>Fuser/Confluence Commons</span>
          <p className='w-5/6'>Sr. User Experience Designer</p>
        </div>
        <div className='flex flex-row my-4 border-b pb-4 border-gray-400'>
          <span className='font-semibold w-64'>Rally</span>
          <p className='w-5/6'>Interaction Designer, Automation Engineer</p>
        </div>
        <div className='flex flex-row my-4 border-b pb-4 border-gray-400'>
          <span className='font-semibold w-64'>IBM/Rational Software</span>
          <p className='w-5/6'>Development Program Manager</p>
        </div>
        <div className='flex flex-row my-4 border-b pb-4 border-gray-400'>
          <span className='font-semibold w-64'>Quark, Inc.</span>
          <p className='w-5/6'>Software Engineer</p>
        </div>
      </div>
    </div>
  )
}


export default function AboutView(props){

  const challenge = `Provide a way for health and wellness professionals without 
  sufficient websites or mobile apps the ability to let their clients schedule online.`

  const background = `I started on my journey working as a support technician for Quark, Inc., supporting 
  their industry-leading desktop publish software, QuarkXPress. During my tenure with Quark, I started attending 
  classes in programming where I began to pursue a computer science degree. Developing my technical acumen, I ended 
  up there as a Software Engineer I writing C/C++ for QuarkXPress’s support of AppleScript for prepress automation. 
  From there I led development teams in test automation framework development using C/C++ and Java. I made a career 
  switch in 2004 to Interaction Designer while working as one of the original team members for Rally Software Development 
  Corp. I began to hone in on my talents as a designer and a developer, mastering the different UX design disciplines as 
  well as front-end development for web, desktop and native mobile platforms. `

  const careerHistoryCopy = `As a side project in developing Planfu during the evenings and weekends, 
  I’ve learned to embrace usability studies on a shoestring budget. `


  const uxCopy = (
    <div>
      <p>The experience goes far beyond designing user interfaces and hoping your users complete their tasks and overarching 
        goals from the system. Over the years, I have been utilized in areas of generative research, synthesizing qualitative 
        data from field research using various methods of presenting insights to the business for data informed decisions. </p>
      <br/>
      <p>Leveraging rapid iterative testing and evaluating (RITE) prototypes for design validation in the early wireframed flows. 
        The passion of what I do comes together with the visual design language meeting the front-end development, creating 
        reusable components in an atomic design system composition. </p>
    </div>
  )

  const engineeringCopy = (
    <div>
      <p>Early on in my software engineering career, I took an interest in user interface development. I’ve dabbled in game 
        development using physics engines and designing 3D interactive content in platforms such as Maya, Blender, and 3DS Max. 
        As more modern UI frameworks started to evolve, I kept my chops up in some of the latest and greatest and bleeding 
        edge technologies </p>
      <br/>
      <p>Currently, I’ve been developing front-ends using ReactJS and React-Native, I recently moved to utility first CSS. Coming 
        from Tachyons for utility first CSS and now working on my second project with Tailwind CSS, a larger utility driven CSS 
        framework. By adopting new patterns in front-end development, I am able to take my design creation quicker to market for 
        real world evaluation and learning. </p>
    </div>
  )

  const ResumeLinks = (props) => {
    return (
      <div className='flex'>
        <div>
          <a href='/files/ddemmer_resume_2020.pdf' target='_blank' rel='noopener noreferrer' download><PictureAsPdfOutlinedIcon/>Demmer Resume PDF</a>
        </div>
        <div>
          <a href='/files/ddemmer_resume_2020.docx' target='_blank' rel='noopener noreferrer' download><DescriptionOutlinedIcon/>Demmer Resume docx</a>
        </div>
      </div>
    )
  }

  const SocialLinks = (props) => {
    return (
      <div className='flex'>
        <div>
          <a href='https://www.linkedin.com/in/daviddemmer/' target='_blank' rel='noopener noreferrer'><LinkedInIcon/></a>
        </div>
        <div>
          <a href='https://www.athlinks.com/athletes/56793064' target='_blank' rel='noopener noreferrer'>Athlinks Profile</a>
        </div>
        <div>
          <a href='https://www.strava.com/athletes/797750' target='_blank' rel='noopener noreferrer'>Strava Profile</a>
        </div>
      </div>
    )
  }


  const EmailLink = (props) => {
    return (
      <a href='mailto:david@demmer.design' target='_blank'>david@demmer.design</a>
    )
  }

  const ProfilePhoto = (props) => {
    return (
      <div className='flex flex-col items-center w-full mt-24 p-10'>
        <div className='border p-4 rounded-full w-64 h-auto avatar'>
          <div className=''>
            <img src={profilePhoto}/>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div>
      <Hero
        copy=''
        workHero='about'/>
      <div className='text-lg'>
        <div className='container mx-auto'>
          <ProfilePhoto/>
          <ContactDetails
            title='About Me'
            email={<EmailLink/>}
            phone='(303) 243-2795'
            resume={(<ResumeLinks/>)}
            social={<SocialLinks/>}
            background={background}/>
          <Blade
            sectionTitle='UX Designer'
            red={false}
            img={bladeCXLead}
            imgShadow={true }
            title='Multi-Faceted Approach'
            titleColor='demmer-red-h2'
            copyLeft={true}
            copy={uxCopy}/>
         
          <UXDesignThumbs/>
          <SectionBorder/>

          
          <Blade
            sectionTitle='Engineer'
            red={false}
            img={bladeEngineer}
            imgShadow={true}
            title='Code as a Design Tool'
            titleColor='demmer-red-h2'
            copyLeft={false}
            copy={engineeringCopy}>
          </Blade>
          <EngineerThumbs/>
          <SectionBorder/>


          <SectionTitleBlock 
            sectionTitle='Career History'
            copy={careerHistoryCopy}/>

          <CareerHistory
            title='Career History'/>

          {/* <SectionBorder/>


          <Blade
            sectionTitle='Leadville Trail 100 Race Crew'
            red={false}
            img={bladeLT100RaceCrew}
            imgShadow={true }
            title='Multi-Faceted Approach'
            titleColor='demmer-red-h2'
            copyLeft={true}
            copy={engineeringCopy}/>
          <FieldResearchThumbs/>  

          <VideoBlade/>

          <Blade
            sectionTitle='Defining the Problem'
            red={false}
            img={bladeLeadvilleTrailFriends}
            imgShadow={true }
            title='Schedule Now Widget Feedback Themes'
            titleColor='demmer-red-h2'
            copyLeft={true}
            copy={engineeringCopy}/>

          <Blade
            red={false}
            img={bladeAthlinksUXTeam}
            imgShadow={true}
            title='Scaling Insufficiencies'
            titleColor='demmer-red-h2'
            copyLeft={false}
            copy={engineeringCopy}>
          </Blade>
          
          <DDActivities/> */}
          

        </div>
      </div>
    </div>
  )
}