import React from 'react'

import Overview from '../Overview'
import Blade, {BladeColumn, BladeLarge} from '../../../components/Blade'
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

import screenCX from '../../../static/img/raster/work_athlinks_cx.jpg'

import bladeClientServicesMobile from '../../../static/img/raster/planfu_clientlanding_clientServiceMobile.png'
import bladeClientHome from '../../../static/img/raster/planfu_clientlanding_clientHomeMobile.png'

import bladeWidgetSrvc from '../../../static/img/raster/planfu_widget_service.jpg'
import bladeWidgetDate from '../../../static/img/raster/planfu_widget_date.jpg'
import thumbClientWire1 from '../../../static/img/raster/planfu_thumb_client_wire1.jpg'
import thumbClientWire2 from '../../../static/img/raster/planfu_thumb_client_wire2.jpg'
import thumbClientWire3 from '../../../static/img/raster/planfu_thumb_client_wire3.jpg'
import thumbClientWire4 from '../../../static/img/raster/planfu_thumb_client_wire4.jpg'
import thumbClientWire5 from '../../../static/img/raster/planfu_thumb_client_wire5.jpg'
import thumbClientWire6 from '../../../static/img/raster/planfu_thumb_client_wire6.jpg'
import thumbServiceCrimson from '../../../static/img/raster/planfu_thumb_client_serviceCrimson.jpg'
import thumbSchedForrest from '../../../static/img/raster/planfu_thumb_client_schedForrest.jpg'
import thumbFormYellow from '../../../static/img/raster/planfu_thumb_client_formYellow.jpg'
import thumbWidgetHeader from '../../../static/img/raster/planfu_thumb_widgetHeader.jpg'
import thumbWidgetFooter from '../../../static/img/raster/planfu_thumb_widgetFooter.jpg'
import thumbWidgetNone from '../../../static/img/raster/planfu_thumb_widgetNone.jpg'
import bladeAdminLanding from '../../../static/img/raster/planfu_blade_adminLanding.jpg'
import bladeAdminWidget from '../../../static/img/raster/planfu_blade_adminWidget.jpg'
import bladeAdminThemes from '../../../static/img/raster/planfu_blade_adminThemes.jpg'

import bladeClientServices from '../../../static/img/raster/planfu_clientLanding_services.jpg'
import bladeClientSchedLg from '../../../static/img/raster/planfu_clientLanding_schedLg.jpg'
import bladeClientSchedMobile from '../../../static/img/raster/planfu_clientlanding_clientSchedMobile.png'
import bladeClientFormMobile from '../../../static/img/raster/planfu_clientlanding_clientFormMobile.png'


import './styles.scss'


const BladeMobileServiceColumns = () => {

  const clientHomeCopy = `Clear messaging, contrast and familiarity with their practitioner was 
  important to the client to build trust from the start of the scheduling experience. `

  const servicesCopy = `Clients were more prone to wanting to understand the cost options along 
  with the service and the service times available. We developed a simple price/duration spinner 
  to reduce the number of screens.`

  return (
    <div className='flex flex-col lg:flex-row'>
      <BladeColumn
        img={bladeClientHome}
        imgShadow={false}
        title='Empowering the Client with Confidence'
        titleColor='planfu-orange'
        copy={clientHomeCopy}>
      </BladeColumn>
      <BladeColumn
        img={bladeClientServicesMobile}
        imgShadow={false}
        title='Options with the Required Data Upfront'
        titleColor='planfu-orange'
        copy={servicesCopy}>
      </BladeColumn>
    </div>
  )
}

const BladeMobileSchedColumns = () => {

  const schedCopy = `Slider affordances on mobile for selecting dates when the date is in 
  the near term future required the least amount of user interaction.`

  const notesCopy = `In our experimentation, we introduced the Appointment Needs with a 
  description to auto-populate the appointment notes for the practitioner to view before they 
  confirm the appointment. `

  return (
    <div className='flex flex-col lg:flex-row'>
      <BladeColumn
        img={bladeClientSchedMobile}
        imgShadow={false}
        title='Progressive Disclosure for Availability'
        titleColor='planfu-orange'
        copy={schedCopy}>
      </BladeColumn>
      <BladeColumn
        img={bladeClientFormMobile}
        imgShadow={false}
        title='Notes Automation'
        titleColor='planfu-orange'
        copy={notesCopy}>
      </BladeColumn>
    </div>
  )
}

const SectionTitleBlock = (props) => {
  const sectionTitle = props.sectionTitle ?? ''
  const copy = props.copy ?? ''
  return (
    <div className='ml-8 lg:ml-12 text-left'>
      <div className='text-3xl font-semibold text-left mt-24'>
        <h3>{sectionTitle}</h3>
      </div>
      <div className='mt-12'>
        {copy}
      </div>
    </div>
  )
}


const ClientWireThumbsRow1 = (props) => {

  const thumbWire1Caption = `The service offering along with pricing upfront was the most 
  appealing to our customers and their clients. `

  const thumbWire2Caption = `Displaying in a grid format assisted in better responsive scaling.`

  const thumbWire3Caption = `Header information to showcase their business as a themeable element.`


  return (
    <div className='flex flex-col md:flex-row lg:flex-row'>
      <ThumbInfo
          thumb={thumbClientWire1}
          caption={thumbWire1Caption} />
      <ThumbInfo
          thumb={thumbClientWire2}
          caption={thumbWire2Caption} />
      <ThumbInfo
          thumb={thumbClientWire3}
          caption={thumbWire3Caption} />
    </div>
  )
}

const ClientWireThumbsRow2 = (props) => {

  const thumbWire1Caption = `Minimizing the weight of the header balanced out with the average 
  number of services to be listed below.`

  const thumbWire2Caption = `Swipeable date selection for mobile and desktop would progressively 
  disclose the availability  for a client.`

  const thumbWire3Caption = `Clear receipt-like checkout format was a solid convention that resonated 
  with our audience. `


  return (
    <div className='flex flex-col md:flex-row lg:flex-row'>
      <ThumbInfo
          thumb={thumbClientWire4}
          caption={thumbWire1Caption} />
      <ThumbInfo
          thumb={thumbClientWire5}
          caption={thumbWire2Caption} />
      <ThumbInfo
          thumb={thumbClientWire6}
          caption={thumbWire3Caption} />
    </div>
  )
}

const ClientThemeThumbs = (props) => {

  const visClientThumb1 = `Predefined layouts with themeable options by matching visual language colors with raster 
  images for a unified experience.`

  const visClientThumb2 = `Themes could be customized through the customer’s administration experience within Planfu. `

  const visClientThumb3 = `Users are able to select from 6 predefined themes to customize the scheduling experience 
  for their clients.`

  return (
    <div className='flex flex-col md:flex-row lg:flex-row'>
      <ThumbInfo
          thumb={thumbServiceCrimson}
          caption={visClientThumb1} />
      <ThumbInfo
          thumb={thumbSchedForrest}
          caption={visClientThumb2} />
      <ThumbInfo
          thumb={thumbFormYellow}
          caption={visClientThumb3} />
    </div>
  )
}


const WidgetThumbs = (props) => {

  const thumbWire1Caption = `With the header and without the footer for users that wanted the business information 
  available on top of the scheduling system.`

  const thumbWire2Caption = `With the footer and without the header for the business information to be displayed at 
  the bottom.`

  const thumbWire3Caption = `No header and no footer was the final option based on some of our customer’s feedback 
  where the information was redundant to what they already had on their website.`


  return (
    <div className='flex flex-col md:flex-row lg:flex-row'>
      <ThumbInfo
          thumb={thumbWidgetHeader}
          caption={thumbWire1Caption} />
      <ThumbInfo
          thumb={thumbWidgetFooter}
          caption={thumbWire2Caption} />
      <ThumbInfo
          thumb={thumbWidgetNone}
          caption={thumbWire3Caption} />
    </div>
  )
}

const SectionBorder = () => {
  return (
    <div className='border-b py-8 mx-8 md:mx-24 lg:mx-24 border-gray-400' />
  )
}


export default function ClientLanding(props){

  const athlinksCopy = `Nam feugiat purus a eros commodo, sed facilisis sem vehicula. Pellentesque tincidunt 
  orci sed dui rhoncus, eu finibus est commodo. Suspendisse maximus, nisl sed rhoncus mattis, ligula justo 
  hendrerit lorem, non tristique elit arcu ut diam. `

  const challenge = `Provide a way for health and wellness professionals without 
  sufficient websites or mobile apps the ability to let their clients schedule online.`

  const background = `Before we had all the bells and whistles, we developed a simple 
  reverse scheduling widget that could be installed onto our customers’ websites, 
  the Schedule Now Widget. This widget allows for their clients to view their availability 
  and request appointments. After fulfilling expanding the feature set for managing your 
  business, we decided to revisit the Schedule Now Widget.`

  const wireframedtestedCopy = `As a side project in developing Planfu during the evenings and weekends, 
  I’ve learned to embrace usability studies on a shoestring budget. `

  const resonsiveLayoutsCopy = `Asking the client to do the scheduling work comes inherently with a cognitive 
  load that is unfamiliar. In the testing process, we found success with conventional designs and minimal 
  steps in the process.`

  const whitespaceCopy = `Clear and unobstructed display of the actions for the user was key to the visual design. 
  Whitespace afforded the user of progressively disclosing selectable elements in the layout. `

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
  
  const clientPageAdminCopy = (
    <div>
      <p>A large number of customers were lacking a sufficient way to add the Schedule Now widget to their website, 
        or customers without a website. </p>
      <br/>
      <p>We developed a one button click deployment of their website with scheduling integrated. </p>
    </div>
  )

  const siteIntegrationCopy = (
    <div>
      <p>To best compliment the practitioner's website, we offered 3 options for the layout of the embeddable widget. </p>
      <br/>
      <p>Offering a preview with the selected option displayed with scaling behavior so the user would be confident 
        that the widget would fit their website. </p>
    </div>
  )

  const themeCopy = (
    <div>
      <p>Users could easily select a theme and preview the effects on their website. </p>
      <br/>
      <p>The theme would be applied to both theor Schedule Now widget and the Client Landing Page. </p>
    </div>
  )

  let { path, url } = useRouteMatch();


  const overviewLink = (<div><Link to={`/planfu`}><h1>Overview</h1></Link></div>)
  const productLink = (<div><Link to={`/planfu/product`}><h1>Product</h1></Link></div>)

  return (
    <div className='text-lg'>
        {overviewLink}
        {productLink}
      <Synopsis
        title='Client Landing Pages'
        target='Health, Wellness, & Fitness Professionals'
        challenge={challenge}
        role='R&D, Designer, Front-End Developer, BizDev'
        background={background}/>
      <div className='container mx-auto'>
        <Blade
          sectionTitle='Defining the Problem'
          red={false}
          img={bladeWidgetSrvc}
          imgShadow={true }
          title='Schedule Now Widget Feedback Themes'
          titleColor='planfu-orange'
          copyLeft={true}
          copy={defineTheProbCopy}/>
        <Blade
          red={false}
          img={bladeWidgetDate}
          imgShadow={true}
          title='Scaling Insufficiencies'
          titleColor='planfu-orange'
          copyLeft={false}
          copy={scalingInsufficiencies}>
        </Blade>
        <SectionBorder/>

        <SectionTitleBlock
          sectionTitle='Wireframes and Testing Iterations'
          copy={wireframedtestedCopy}/>
        <ClientWireThumbsRow1 title='Hello There This is a title'/>
        <ClientWireThumbsRow2 title='Hello There This is a title'/>
        <SectionBorder/>

        <SectionTitleBlock
          sectionTitle='Visual Designs for the Client Experience'/>
        <BladeLarge
          titleColor='planfu-orange'
          title='Responsive Themeable Layouts'
          img={bladeClientServices}
          copy={resonsiveLayoutsCopy}/>

        <BladeLarge
          img={bladeClientSchedLg}
          titleColor='planfu-orange'
          title='Whitespace Usage'
          copy={whitespaceCopy}>
          <ClientThemeThumbs/>
        </BladeLarge>

        <SectionBorder/>

        <SectionTitleBlock
          sectionTitle='Mobile as the Primary Scale for Clients'/>
        <BladeMobileServiceColumns/>
        <BladeMobileSchedColumns/>

        <Blade
          sectionTitle='Administering the Client Experience'
          red={false}
          img={bladeAdminLanding}
          imgShadow={true }
          title='Client Landing Pages'
          titleColor='planfu-orange'
          copyLeft={true}
          copy={clientPageAdminCopy}/>
        <Blade
          red={false}
          img={bladeAdminWidget}
          imgShadow={true}
          title='Website Integrations'
          titleColor='planfu-orange'
          copyLeft={false}
          copy={siteIntegrationCopy}>
            <WidgetThumbs/>
        </Blade>
        <Blade
          img={bladeAdminThemes}
          imgShadow={true }
          title='Themable Sections'
          titleColor='planfu-orange'
          copyLeft={true}
          copy={themeCopy}/>
      </div>
    </div>
  )
}