import React from 'react'

import Blade, { BladeColumn, BladeLarge } from '../../../components/Blade'
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

import screenCX from '../../../static/img/raster/work_athlinks_cx.jpg'
import bladeOnsite from '../../../static/img/raster/work_athlinks_blade_onsite.jpg'
import bladeDSExpert from '../../../static/img/raster/work_athlinks_blade_dsExpert.jpg'
import bladeCollab from '../../../static/img/raster/work_athlinks_blade_dsCollab.jpg'
import bladeSolSketch from '../../../static/img/raster/work_athlinks_blade_solSketch.jpg'
import bladeFLowStates from '../../../static/img/raster/work_athlinks_blade_flowStates.jpg'
import bladeSolProtoTest from '../../../static/img/raster/work_athlinks_blade_protoTest.jpg'
import bladeVotedSolSketch from '../../../static/img/raster/work_athlinks_blade_votedSketch.jpg'
import bladeVisLang from '../../../static/img/raster/work_athlinks_blade_visLang.jpg'
import thumbBooth from '../../../static/img/raster/work_thumb_booth.jpg'
import thumbStart from '../../../static/img/raster/work_thumb_startLine.jpg'
import thumbTimers from '../../../static/img/raster/work_thumb_timers.jpg'
import thumbSolSketch from '../../../static/img/raster/work_athlinks_thumb_solSketch.jpg'
import thumbEventDashboard from '../../../static/img/raster/work_thumb_evnetDashboard.jpg'
import thumbTestBoard from '../../../static/img/raster/work_thumb_usertestBoard.jpg'

import partnerSync from '../../../static/img/raster/work_athlinks_blade_partnerSync.jpg'
import orgCrusher from '../../../static/img/raster/work_athlinks_blade_directoryOrgCrusher.jpg'
import dashboard from '../../../static/img/raster/work_athlinks_blade_dirDashbaord.jpg'

import brandAthlinks from '../../../static/img/svg/brand_athlinks.svg'

import './styles.scss'


const CXThumbs = (props) => {
  const regThumb = `Athlinks team members volunteering at the onsite registration and packet 
  pick-up tent.`

  const startLineThumb = `Checking to make sure the timing controller is online and ready to 
  start reading bib tags.`

  const controller = `Monitoring tag reads through the controllers from the antennas 
  underneath the gators.`

  return (
    <div className='flex flex-col md:flex-row lg:flex-row'>
      <ThumbInfo
          thumb={thumbBooth}
          caption={regThumb} />
      <ThumbInfo
          thumb={thumbStart}
          caption={startLineThumb} />
      <ThumbInfo
          thumb={thumbTimers}
          caption={controller} />
    </div>
  )
}

const DS1Thumbs = (props) => {

  const solSketch = `From a well informed sketch of the ideal outcomes of a desired experience 
  for our business.`

  const protoThumb = `A clickable prototype designed and validated internally.`

  const testBoardThumb = `Validation feedback with real customers.`


  return (
    <div className='flex flex-col md:flex-row lg:flex-row'>
      <ThumbInfo
          thumb={thumbSolSketch} 
          caption={solSketch}/>
      <ThumbInfo
          thumb={thumbEventDashboard} 
          caption={protoThumb}/>
      <ThumbInfo
          thumb={thumbTestBoard} 
          caption={testBoardThumb}/>
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
        red={false}
        img={orgCrusher}
        title='Design Evolution'
        titleColor='athlinks-blue'
        copyLeft={true}
        copy={athlinksCopy}>
      </BladeColumn>
      <BladeColumn
        red={false}
        img={dashboard}
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


export default function CreateEventView(props){

  // Synopsis and Background

  const feedbackMapCopy = `After several interviews with customers, the data was categorized into common 
  themes and mapped out each action step, on-stage and off, a timer of race director encounters while 
  linking their registration, timing and scoring, to Athlinks as the results platform. `

  const partnerSyncCopy = `The evolution of Athlinks Hub became PartnerSync, a directory access 
  application for external registration providers and scoring/timing platforms to integrate 
  their data sources by a series of connections, connecting their races to roster data.`

  const orgCrusherCopy = `Most recent activities made by race director and timer individuals, 
  updating each other for up to date event statuses.`

  const dashboardCopy = `As athletes register for their races, race directors want to know more 
  about their financials impacts and overall health of the race. Timers want to know the number 
  of athletes for each timing bracket. `

  const challenge = `Timers use our Chronotrack hardware to time athletic events, but 
  they may also use different scoring platforms to push results to. How do we ensure 
  Athlinks members can rely on Athlinks for all of their race results in one place?`

  const background = `Connecting the race event when the Timer – someone who is timing 
  and scoring a race – orders all their bib tags for the year to the point that the athlete 
  crosses the finish line, where a lot happens in between has been a challenge for athletic 
  endurance events around the world. With Life Time backing our technologies with Chronotrack 
  and Athlinks, the charter was clear; seamless integration between registration providers, 
  timing and scoring platforms, and results for athletes given all the different use cases. 
  While we started with our own B2B and B2C solutions, we leveraged partners to create an 
  ecosystem for better flexibility. `

  // Defining the Problem

  const defineTheProbCopy = (
    <div>
      <p>Our approach as a design team was to first have a better understanding of all the 
        people, systems and things involved in the process of creating an event. Reveal your 
        team’s Line of Focus by mapping out a customer’s step by step journey throughout their 
        interactions with our systems.</p>
      <br/>
      <p>Our approach as a design team was to understand better all the people involved in the process 
      and their current experiences. We leveraged the Customer Experience Journey Mapping method 
      over a series of days with our customers, subject matter experts, and our product teams. By 
      using CXJM, we were able to uncover the primary line of focus where the most friction occurs 
      for our timer personas and deliver value for our athletes too.</p>
    </div>
  )

  const onsiteEmpathy = (
    <div>
      <p>Our team conducted contextual research in working with our Timer customers and volunteering 
        for events and their various roles.</p>
        <br/>
      <p>Whether it was helping out with registration, race packet pickup and bib assignments, course 
        setup, scoring results as athletes crossed timung points or helping athletes at the Athlinks 
        results kiosks, our experience journeys enabled our ux team to build empathy for what people 
        go through in all facets of a race event.</p>
    </div>
  )

  const designSprints = (
    <div>
      <p>A Design Sprint is a step by step process for solving big problems and testing new and maybe 
        crazy ideas in just 5 days. You start with a big team sitting around and talking about challenges 
        and you end with something tangible.</p>
        <br/>
      <p>We also decided to utilize Design Thinking to help our team align on our Design Sprint challenge 
        which utilizes elements from the designer's toolkit like empathy and experimentation to arrive at 
        innovative solutions.</p>
    </div>
  )


  const dayOne = (
    <div>
      <p>It’s important to stay focused and on task where the team is working together with the expert in 
        the room conducting expert interviews, aligning on the long-term goals, sprint questions, and 
        mapping the experience. </p>
        <br/>
      <p>Solutioning engaged our afternoon where we tackled lightning demos, and a 4-part sketch session, 
        and that was all on day on
      </p>
    </div>
  )
  const dayTwo = (
    <div>
      <p>Much like customer experience journey mapping, focus on a heat map of where our primary focus of 
        friction or opportunity is revealed. A weighted voting system helps create a better alignment given 
        all the opinions in the room. </p>
        <br/>
      <p>Solutioning engaged our afternoon where we tackled lightning demos, and a 4-part sketch session.
      </p>
    </div>
  )

  const dayThreeFour = (
    <div>
      <p>The design came together as we brought the storyboard to life with clickable prototypes. Through 
        onsite and remote testing, we were able to capture feedback and make adjustments based on the patterns. 
        The design came together as we brought the storyboard to life with clickable prototypes. Through onsite 
        and remote testing, we were able to capture feedback and make adjustments based on the patterns. </p>
        <br/>
      <p>We designed a prototype that was solving the problem for timers and race directors to have their 
        registration data seamlessly integrate with their timing and scoring systems. The one place an event 
        would be created and become the single source of truth. 
      </p>
    </div>
  )

  




  
  // const  match = useRouteMatch()
  let { path, url } = useRouteMatch();


  return (
    <div className='text-lg'>
      <Synopsis
        title='Create Event'
        target='Athletic Endurance Events'
        challenge={challenge}
        role='UX Director, Facilitator, Researcher, Designer, Usability Tester'
        background={background}/>
      <div className='container mx-auto'>
        <Blade
          sectionTitle='Defining the Problem'
          red={false}
          img={screenCX}
          title='Customer Expereince Journey Mapping'
          titleColor='athlinks-blue'
          copyLeft={true}
          copy={defineTheProbCopy}
          imgShadow={true}/>
        <Blade
          red={false}
          img={bladeOnsite}
          title='Onsite Research – Building Empathy'
          titleColor='athlinks-blue'
          copyLeft={false}
          copy={onsiteEmpathy}
          imgShadow={true}>
            <CXThumbs title='Hello There This is a title'/>
            <SectionBorder/>
        </Blade>
        <Blade
          sectionTitle='Design Sprints 2.0'
          red={false}
          img={bladeDSExpert}
          title='The experts in the room'
          titleColor='athlinks-blue'
          copyLeft={true}
          copy={designSprints}
          imgShadow={true}/>
        <Blade
          red={false}
          img={bladeCollab}
          title='Define The Challenge'
          titleColor='athlinks-blue'
          copyLeft={false}
          copy={dayOne}
          imgShadow={true}/>
        <Blade
          red={false}
          img={bladeVotedSolSketch}
          title='Decisions and Alignment'
          titleColor='athlinks-blue'
          copyLeft={true}
          copy={dayTwo}
          imgShadow={true}>
        </Blade>
        
        <Blade
          red={false}
          img={bladeSolProtoTest}
          title='Customer Focused Validation'
          titleColor='athlinks-blue'
          copyLeft={false}
          copy={dayThreeFour}
          imgShadow={true}>
            <DS1Thumbs/>
          </Blade>

        <SectionBorder/>
        
        <BladeLarge
          sectionTitle='PartnerSync Directory Integration'
          red={false}
          img={partnerSync}
          title='PartnerSync Directory Integration'
          titleColor='athlinks-blue'
          copyLeft={true}
          copy={partnerSyncCopy}/>

        <BladeLarge
          red={false}
          img={orgCrusher}
          title='Organizational Dasboard'
          titleColor='athlinks-blue'
          copyLeft={true}
          copy={orgCrusherCopy}/>

        <BladeLarge
          red={false}
          img={dashboard}
          title='Event Dashboard'
          titleColor='athlinks-blue'
          copyLeft={true}
          copy={dashboardCopy}/>

        <SectionBorder/>

        <Blade
          sectionTitle='Feedback Mapping & UI States'
          red={false}
          img={bladeFLowStates}
          title='Using CX journey mapping methods'
          titleColor='athlinks-blue'
          copyLeft={true}
          copy={feedbackMapCopy}
          imgShadow={true}/>
      </div>
    </div>
  )
}