import React from 'react'

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

import Blade from '../../../components/Blade'
import {BladeColumn} from '../../../components/Blade'
import Synopsis from '../../../components/Synopsis'
import ThumbInfo from '../../../components/ThumbInfo'

import bladeARPStates from '../../../static/img/raster/arp_blade_states.jpg'
import thumbMiamiStart from '../../../static/img/raster/work_thumb_arp_miamiStart.jpg'
import thumbMiamiAthlete from '../../../static/img/raster/work_thumb_arp_miamiAthlete.jpg'
import thumbMosquito from '../../../static/img/raster/work_thumb_arp_mosquitoTimer.jpg'
import thumbDesignEvo from '../../../static/img/raster/arp_thumb_designEvo.jpg'
import thumbDesignEvoContent from '../../../static/img/raster/arp_thumb_designEvoContent.jpg'
import thumbDesignEvoStates from '../../../static/img/raster/arp_thumb_designEvoStates.jpg'
import bladeARP_concierge from '../../../static/img/raster/arp_blade_concierge.jpg'
import bladeARP_preRace from '../../../static/img/raster/arp_blade_pre.jpg' 
import bladeARP_postRace from '../../../static/img/raster/arp_blade_post.jpg'
import bladeLeadvilleTent from '../../../static/img/raster/work_athlinks_blade_arp_leadvilletent.jpg'
import bladeJerika from '../../../static/img/raster/work_athlinks_blade_arp_jerika.jpg'


import brandAthlinks from '../../../static/img/svg/brand_athlinks.svg'

import './styles.scss'

const ARPRaceDayThumbs = (props) => {

  const miamiRaceDayCaption = `From the start of the Miami Marathon and Half Marathon, Athlinks was 
  ingesting start times each time an athletes bib tag was read. `

  const athleteInterviewCaption = `Field research discovering the unmet needs of an athlete during race day.`

  const leadvilleCaption = `Athlete tracking would source the timing data as an athlete crosses a timing 
  point. Here, we see the timer box and antenna on top of Mosquito Pass (13,186′) for the Leadville Trail 
  Marathon and Heavy Half. `

  return (
    <div className='flex flex-col md:flex-row lg:flex-row'>
      <ThumbInfo
          thumb={thumbMiamiStart}
          caption={miamiRaceDayCaption} />
      <ThumbInfo
          thumb={thumbMiamiAthlete}
          caption={athleteInterviewCaption} />
      <ThumbInfo
          thumb={thumbMosquito}
          caption={leadvilleCaption} />
    </div>
  )
}

const DesignStatesThumbs = (props) => {

  const contentThumbCaption=`Information architecture defined in order to prioritize the data needed on 
  a simple page layout. `

  const feedbackCaption= `Test iterations and notes to guide feedback using UsabilityHub and in-person 
  testing. `

  const diagramCaption= `Flow diagramming to align teams on the flow for the experience.`

  return (
    <div className='flex flex-col md:flex-row lg:flex-row'>
      <ThumbInfo
          thumb={thumbDesignEvo} 
          caption={contentThumbCaption}/>
      <ThumbInfo
          thumb={thumbDesignEvoContent}
          caption={feedbackCaption} />
      <ThumbInfo
          thumb={thumbDesignEvoStates}
          caption={diagramCaption} />
    </div>
  )
}

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


const VisualARPBladeColumns = () => {

  const preRaceCaption = (
    <div>
      <p>The pre-race experience afforded the user data drive analysis based on their previous races. 
        Such metrics would include, predicted pace and finish time, age, gender and overall bracket 
        comparisons, and follower comparisons. </p>
      <br/>
      <p>Social posts from the athlete, their followers, events and system generated entries would 
        display in a feed-style chronological order. </p>
    </div>
  ) 

  const postRaceCaption = (
    <div>
      <p>During and after the race, each split time from a timing point would update the tabular data.</p>
      <br/>
      <p>The finisher result data would be prioritized at the top while collapsing the pre-race goal data.</p>
        <br/>
      <p>Post race information displays the athletes finish time, age, gender and overall rankings, pace 
        for each split and their split times. </p>
    </div>
  ) 

  return (
    <div className='flex flex-col lg:flex-row'>
      <BladeColumn
        sectionTitle='Athlete Race Pages'
        red={false}
        img={bladeARP_preRace}
        title='Pre-Race Visual Hierarchy'
        titleColor='athlinks-blue'
        copyLeft={true}
        copy={postRaceCaption}>
      </BladeColumn>
      <BladeColumn
        sectionTitle='Athlete Race Pages'
        red={false}
        img={bladeARP_postRace}
        title='Post-Race Visual Hierarchy'
        titleColor='athlinks-blue'
        copyLeft={true}
        copy={preRaceCaption}>
      </BladeColumn>
    </div>
  )
}


export default function AthleteRacePage(props){

  const athlinksCopy = `In at libero varius, rutrum leo eu, eleifend purus. Etiam 
  vulputate fringilla neque sit amet gravida. Vestibulum id turpis vestibulum felis 
  suscipit faucibus. Donec et sollicitudin velit. Vivamus nec diam non lacus suscipit 
  varius ac ut risus. Aliquam erat volutpat. Vivamus elementum vestibulum ligula.`

  const defineProbCopy = `Our UX team attended quite a few events, from local 5k runs 
  to the Leadville Trail 100 Run. Each of these events had very prevalent themes emerge 
  from speaking with athletes and their spectors. These themes included athlete tracking, 
  event and race day information, event logistics and changes, and finisher results. Athletes 
  would periodically say, “just give me a URL I can share with my family and friends.”`

  const challenge = `Athletes needed a single URL for their upcoming races to share out 
  to their spectators, friends, and family. Important details such as race date and time, 
  their start of the race, crossing a timing split and their finish. Other details include 
  fundraising promotions for charitable contributions, corral information, and packet pickup. 
  Even down to the course map and the location of all the porta-potties. `

  const background = `Athlinks aggregates results from different registration and race timing 
  providers where we had only direct access to about 12% of all the events in the world. For 
  the athlete, they just want friends and family to be able to track them during their race. 
  Sometimes that was difficult without having the source of the race until after the event 
  has occurred. `

  const raceDayScenarioCopy = (
    <div>
      <p>Once a month, our teams including product, UX, development, events, customer support, 
        sales, marketing and the volunteer athletes would hold a 5k event to demonstrate and test 
        race day scenarios. </p>
      <br/>
      <p>Some of the scenarios would include different race types, bike and run, on the same 
        course at the same time. Athlete switching races as it happens, (doing the half marathon 
        versus the full)...etc. Testing included different registration sources. </p>
        <br/>
      <p>Having the data synchronized into our platform before the race occurred was a point of 
        leverage to offer the athlete a persistent url, the Athlete Race Page.  </p>
    </div>
  )

  const raceStatesCopy = (
    <div>
      <p>State transitions depicted helped identify scenarios needed for how the data and its actions
        would be rendered in an UI. </p>
      <br/>
      <p>States included onboarding, claimed versus unclaimed race pages, pre, during and post race...etc. </p>
        <br/>
    </div>
  )

  const regConciergeCopy = (
    <div>
      <p>Once an athlete has completed their registration in a partner third party system, Athlete Race Page 
        onboarding would kick off. </p>
      <br/>
      <p>This was then reinforced through a redundant email campaign to make sure the athlete had their race 
        day informati</p>
        <br/>
    </div>
  )
  
  let { path, url } = useRouteMatch();
  const overviewLink = (<div><Link to={`/athlinks`}><h1>Overview</h1></Link></div>)

  return (
    <div className='text-lg'>
        {overviewLink}
      <Synopsis
        title='Athlete Race Page'
        target='Athletes'
        challenge={challenge}
        role='Director, facilitaor, researcher, designer, usability tester'
        background={background}/>
      <div className='container mx-auto'>
        <Blade
          sectionTitle='Defining the Problem'
          red={false}
          img={bladeLeadvilleTent}
          imgShadow={true}
          title='Customer Expereince Journey Mapping'
          titleColor='athlinks-blue'
          copyLeft={true}
          copy={defineProbCopy}/>
        <Blade
          red={false}
          img={bladeJerika}
          imgShadow={true}
          title='Race Day Scenario Emulation'
          titleColor='athlinks-blue'
          copyLeft={false}
          copy={raceDayScenarioCopy}>
            <ARPRaceDayThumbs title='Hello There This is a title'/>
            <SectionBorder/>
        </Blade>
        <Blade
          sectionTitle='Athlete Race Page State Transitions'
          red={false}
          img={bladeARPStates}
          imgShadow={true}
          title='Changing of the Data'
          titleColor='athlinks-blue'
          copyLeft={true}
          copy={raceStatesCopy}/>
        <Blade
          red={false}
          img={bladeARP_concierge}
          imgShadow={true}
          title='Registration Concierge'
          titleColor='athlinks-blue'
          copyLeft={false}
          copy={regConciergeCopy}>
            <DesignStatesThumbs/>
            <SectionBorder/>
        </Blade>
        <SectionTitleBlock
          sectionTitle='Visual Designs'/>
        <VisualARPBladeColumns/>
        
      </div>
    </div>
  )
}