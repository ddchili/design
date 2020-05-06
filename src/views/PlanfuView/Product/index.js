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

import thumbLifecycle from '../../../static/img/raster/thumb_planfu_product_lifecycle.jpg'
import thumbClientExp from '../../../static/img/raster/thumb_planfu_product_ClientExp.jpg'
import thumbPricing from '../../../static/img/raster/thumb_planfu_prod_pricing.jpg'

import homeTarget from '../../../static/img/raster/planfu_product_homeTarget.jpg'
import prodFeedback from '../../../static/img/raster/planfu_product_feedback.jpg'

import brandAthlinks from '../../../static/img/svg/brand_athlinks.svg'

import './styles.scss'


const SchedThumbs = (props) => {
  
  const schedWire = `The faster a customer could set up their schedule upon onboarding 
  the better feel they would gain from the overall experience.`

  const schedView = `Onboarding Staff Members was crucial for the adoption of a new platform.`

  const schedMobile = `Internally seeing their staff members’ daily availability assisted in 
  the onsite walkin behaviors of our customers’ customers. `

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

const WebsiteThumbs = (props) => {

  const lifecycleCopy = `Using the knowledge of our customer’s appointment lifecycle, 
  we brought empathy to new prospects of our plagtform. `

  const clientExpCopy = `One of the first things our prospective customers asked was 
  how does this look for my clients when they schedule an appointment? `

  const pricingCopy = `Being a self-funded startup, we are able to offer a forever 
  freemium package as part of our onboarding new users. `

  return (
    <div className='flex flex-col md:flex-row lg:flex-row'>
      <ThumbInfo
          thumb={thumbLifecycle} 
          caption={lifecycleCopy}/>
      <ThumbInfo
          thumb={thumbClientExp}
          caption={clientExpCopy} />
      <ThumbInfo
          thumb={thumbPricing}
          caption={pricingCopy} />
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

  const challenge = `Develop a product from ground up to address the unmet needs of 
  a market segment within the health, wellness, and fitness domain. Embark into uncharted 
  waters for my research and inform our team to help steer the product feature development 
  targets. `

  const background = `We started with targeting massage therapists exclusively and expanded 
  into sports rehabilitation and recovery therapists. Learning from having thoughtful 
  conversations with our customers and non-customers has been key to generating customer loyalty. `

  const defineTheProbCopy = (
    <div>
      <p>After conducting initial discovery interviews, we started to form hypotheses around some 
        of the deficiencies in the current market solutions for client scheduling. Following up 
        with competitive analysis and market size analysis, it became apparent that paper and 
        pencil were much more approachable and natural than the digital tooling offered. </p>
      <br/>
      <p>While they had unmet needs of bringing their scheduling to an online platform, these 
        professionals felt that they were paying too much for features they never used. </p>
    </div>
  )

  const onboardingCopy = (
    <div>
      <p>User onboarding is critical to a successful engagement with any platform. Natural user 
        affordances may be complimented with redundant messaging to empower users of the system 
        with confidence to discover and explore. </p>
      <br/>
      <p>Understanding what core questions our non-customers had for any given platform helped 
        us guide what steps they needed to complete in order to bubble-up the feature sets that 
        most directly related to their unmet needs.</p>
    </div>
  )

  const firstImpressionsCopy = (
    <div>
      <p>The immediate impression we valued was an empathetic one. Once a prospect landed on our 
        homepage, we wanted to evoke a viscreal relationship to the content. </p>
      <br/>
      <p>Clearly laying out key messaging and value propositions helped build trust. We optimized 
        our message as we learned more by utilizing click-through rates from Google Analytics.</p>
    </div>
  )

  const feedbackCopy = (
    <div>
      <p>By reflecting our customer testimonials upfront for users to read helped solidify their 
        needs for an easier platform and only the features sets they needed, without the bloat.</p>
      <br/>
    </div>
  )

  const schedLargeCopy = (
    <div>
      <p>Simplifying the schedule view while allowing for the most important data to be revealed 
        without having to dig for it. Availability, unconfirmed versus confirmed appointments, and 
        the details of each. </p>
      <br/>
    </div>
  )
  
  const clientHistoryCopy = (
    <div>
      <p>Ensuring customer satisfaction for each appointment, customers needed to easily access their 
        client’s history for follow-up and to determine what is working and not working. </p>
      <br/>
    </div>
  )

  const integrationsCopy = (
    <div>
      <p>For the users with existing websites, we built custom integrations that allows for them to 
        customize the experience by theming and layouts to fit best with their brand.  </p>
      <br/>
    </div>
  )
  
  // const  match = useRouteMatch()
  let { path, url } = useRouteMatch();

  // let { topicId } = useParams()

  const overviewLink = (<div><Link to={`/planfu`}><h1>Overview</h1></Link></div>)
  // console.log('path: ', path)
  // console.log('url: ', url)

  // console.log('topocId: ' , topicId)

  return (
    <div className='text-lg'>
        {overviewLink}
      <Synopsis
        title='Product Development'
        target='Health, Wellness, & Fitness Professionals'
        challenge={challenge}
        role='R&D, Designer, Front-End Developer, BizDev, Marketer, SEO'
        background={background}/>
      <div className='container mx-auto'>
        <Blade
          sectionTitle='Defining the Problem'
          red={false}
          img={personas}
          title='Customer Expereince Journey Mapping'
          titleColor='planfu-orange'
          copyLeft={true}
          copy={defineTheProbCopy}/>
        <Blade
          red={false}
          img={featureContext}
          title='Onboarding, A First Class Citizen'
          titleColor='planfu-orange'
          copyLeft={false}
          copy={onboardingCopy}>
            <SchedThumbs title='Hello There This is a title'/>
            <SectionBorder/>
        </Blade>

        <Blade
          sectionTitle='Resonating with Our Target'
          red={false}
          img={homeTarget}
          title='First Impressions Are Lasting Ones'
          titleColor='planfu-orange'
          copyLeft={true}
          copy={firstImpressionsCopy}/>
        <Blade
          red={false}
          img={prodFeedback}
          title='Testimonials Build Empathy'
          titleColor='planfu-orange'
          copyLeft={false}
          copy={feedbackCopy}>
            <WebsiteThumbs title='Hello There This is a title'/>
            <SectionBorder/>
        </Blade>

        <BladeLarge
        sectionTitle='Planfu, an Enterprise Product Solution'
          red={false}
          img={scheduleLarge}
          title='Scheduling and Availability'
          titleColor='planfu-orange'
          copyLeft={true}
          copy={schedLargeCopy}/>

        <BladeLarge
          red={false}
          img={clientMgmt}
          title='Client History'
          titleColor='planfu-orange'
          copyLeft={true}
          copy={clientHistoryCopy}/>

        <BladeLarge
          red={false}
          img={integration}
          title='Website Integrations'
          titleColor='planfu-orange'
          copyLeft={true}
          copy={integrationsCopy}/>
      </div>
    </div>
  )
}