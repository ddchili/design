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

  const athlinksCopy = `In at libero varius, rutrum leo eu, eleifend purus. Etiam 
  vulputate fringilla neque sit amet gravida. Vestibulum id turpis vestibulum felis 
  suscipit faucibus. Donec et sollicitudin velit. Vivamus nec diam non lacus suscipit 
  varius ac ut risus. Aliquam erat volutpat. Vivamus elementum vestibulum ligula.`

  

  return (
    <div className='flex flex-col lg:flex-row'>
      <BladeColumn
        sectionTitle='Athlete Race Pages'
        red={false}
        img={bladeClientHome}
        imgShadow={false}
        title='Design Evolution'
        titleColor='planfu-orange'
        copyLeft={true}
        copy={athlinksCopy}>
      </BladeColumn>
      <BladeColumn
        sectionTitle='Athlete Race Pages'
        red={false}
        img={bladeClientServicesMobile}
        imgShadow={false}
        title='Design Evolution'
        titleColor='planfu-orange'
        copyLeft={true}
        copy={athlinksCopy}>
      </BladeColumn>
    </div>
  )
}

const BladeMobileSchedColumns = () => {

  const athlinksCopy = `In at libero varius, rutrum leo eu, eleifend purus. Etiam 
  vulputate fringilla neque sit amet gravida. Vestibulum id turpis vestibulum felis 
  suscipit faucibus. Donec et sollicitudin velit. Vivamus nec diam non lacus suscipit 
  varius ac ut risus. Aliquam erat volutpat. Vivamus elementum vestibulum ligula.`

  

  return (
    <div className='flex flex-col lg:flex-row'>
      <BladeColumn
        sectionTitle='Athlete Race Pages'
        red={false}
        img={bladeClientSchedMobile}
        imgShadow={false}
        title='Design Evolution'
        titleColor='planfu-orange'
        copyLeft={true}
        copy={athlinksCopy}>
      </BladeColumn>
      <BladeColumn
        sectionTitle='Athlete Race Pages'
        red={false}
        img={bladeClientFormMobile}
        imgShadow={false}
        title='Design Evolution'
        titleColor='planfu-orange'
        copyLeft={true}
        copy={athlinksCopy}>
      </BladeColumn>
    </div>
  )
}

const SectionTitleBlock = (props) => {
  const sectionTitle = props.sectionTitle ?? ''
  return (
    <div className='text-3xl font-semibold text-left ml-8 mt-24'>
      <h3>{sectionTitle}</h3>
    </div>
  )
}


const ClientWireThumbsRow1 = (props) => {

  const thumbWire1Caption = `Sed quis diam quis quam pellentesque rutrum ornare mattis ante. 
  Quisque ac urna tincidunt, vulputate metus ut, feugiat nunc.`

  const thumbWire2Caption = `Sed quis diam quis quam pellentesque rutrum ornare mattis ante. 
  Quisque ac urna tincidunt, vulputate metus ut, feugiat nunc.`

  const thumbWire3Caption = `Sed quis diam quis quam pellentesque rutrum ornare mattis ante. 
  Quisque ac urna tincidunt, vulputate metus ut, feugiat nunc.`


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

  const thumbWire1Caption = `Sed quis diam quis quam pellentesque rutrum ornare mattis ante. 
  Quisque ac urna tincidunt, vulputate metus ut, feugiat nunc.`

  const thumbWire2Caption = `Sed quis diam quis quam pellentesque rutrum ornare mattis ante. 
  Quisque ac urna tincidunt, vulputate metus ut, feugiat nunc.`

  const thumbWire3Caption = `Sed quis diam quis quam pellentesque rutrum ornare mattis ante. 
  Quisque ac urna tincidunt, vulputate metus ut, feugiat nunc.`


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

  const thumbWire1Caption = `Sed quis diam quis quam pellentesque rutrum ornare mattis ante. 
  Quisque ac urna tincidunt, vulputate metus ut, feugiat nunc.`

  const thumbWire2Caption = `Sed quis diam quis quam pellentesque rutrum ornare mattis ante. 
  Quisque ac urna tincidunt, vulputate metus ut, feugiat nunc.`

  const thumbWire3Caption = `Sed quis diam quis quam pellentesque rutrum ornare mattis ante. 
  Quisque ac urna tincidunt, vulputate metus ut, feugiat nunc.`


  return (
    <div className='flex flex-col md:flex-row lg:flex-row'>
      <ThumbInfo
          thumb={thumbServiceCrimson}
          caption={thumbWire1Caption} />
      <ThumbInfo
          thumb={thumbSchedForrest}
          caption={thumbWire2Caption} />
      <ThumbInfo
          thumb={thumbFormYellow}
          caption={thumbWire3Caption} />
    </div>
  )
}


const WidgetThumbs = (props) => {

  const thumbWire1Caption = `Sed quis diam quis quam pellentesque rutrum ornare mattis ante. 
  Quisque ac urna tincidunt, vulputate metus ut, feugiat nunc.`

  const thumbWire2Caption = `Sed quis diam quis quam pellentesque rutrum ornare mattis ante. 
  Quisque ac urna tincidunt, vulputate metus ut, feugiat nunc.`

  const thumbWire3Caption = `Sed quis diam quis quam pellentesque rutrum ornare mattis ante. 
  Quisque ac urna tincidunt, vulputate metus ut, feugiat nunc.`


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

  const athlinksCopy = `In at libero varius, rutrum leo eu, eleifend purus. Etiam 
  vulputate fringilla neque sit amet gravida. Vestibulum id turpis vestibulum felis 
  suscipit faucibus. Donec et sollicitudin velit. Vivamus nec diam non lacus suscipit 
  varius ac ut risus. Aliquam erat volutpat. Vivamus elementum vestibulum ligula.`

  const challenge = `Timers use our hardware to time athletic events, but they may use 
  different scoring platforms to push results to. How do we ensure Athlinks members 
  can rely on Athlinks for all of their race results in one place?`

  const background = `In at libero varius, rutrum leo eu, eleifend purus. Etiam 
  vulputate fringilla neque sit amet gravida. Vestibulum id turpis vestibulum felis 
  suscipit faucibus. Donec et sollicitudin velit. Vivamus nec diam non lacus suscipit 
  varius ac ut risus. Aliquam erat volutpat. Vivamus elementum vestibulum ligula.`
  
  let { path, url } = useRouteMatch();


  const overviewLink = (<div><Link to={`/planfu`}><h1>Overview</h1></Link></div>)
  const productLink = (<div><Link to={`/planfu/product`}><h1>Product</h1></Link></div>)

  return (
    <div className='text-lg'>
        {overviewLink}
        {productLink}
      <Synopsis
        title='Client Landing Pages'
        target='Athletes and Race Directors'
        challenge={challenge}
        role='Director, facilitaor, researcher, usability tester'
        background={background}/>
      <div className='container mx-auto'>
        <Blade
          sectionTitle='Defining the Problem'
          red={false}
          img={bladeWidgetSrvc}
          imgShadow={true }
          title='Customer Expereince Journey Mapping'
          titleColor='planfu-orange'
          copyLeft={true}
          copy={athlinksCopy}/>
        <Blade
          red={false}
          img={bladeWidgetDate}
          imgShadow={true}
          title='Onsite - Building Empathy for the Human'
          titleColor='planfu-orange'
          copyLeft={false}
          copy={athlinksCopy}>
        </Blade>
        <SectionBorder/>

        <SectionTitleBlock sectionTitle='Wireframed and Tested'/>
        <ClientWireThumbsRow1 title='Hello There This is a title'/>
        <ClientWireThumbsRow2 title='Hello There This is a title'/>
        <SectionBorder/>

        <SectionTitleBlock sectionTitle='Visual Designs for the Client Experience'/>
        <BladeLarge
          img={bladeClientServices}
          copy={athlinksCopy}/>

        <BladeLarge
          img={bladeClientSchedLg}
          copy={athlinksCopy}>
          <ClientThemeThumbs/>
        </BladeLarge>

        <SectionBorder/>

        <SectionTitleBlock sectionTitle='Mobile Scaling'/>

        <BladeMobileServiceColumns/>
        <BladeMobileSchedColumns/>

        <Blade
          sectionTitle='Defining the Problem'
          red={false}
          img={bladeAdminLanding}
          imgShadow={true }
          title='Customer Expereince Journey Mapping'
          titleColor='planfu-orange'
          copyLeft={true}
          copy={athlinksCopy}/>
        <Blade
          red={false}
          img={bladeAdminWidget}
          imgShadow={true}
          title='Onsite - Building Empathy for the Human'
          titleColor='planfu-orange'
          copyLeft={false}
          copy={athlinksCopy}>
            <WidgetThumbs/>
        </Blade>
        <Blade
          sectionTitle='Defining the Problem'
          red={false}
          img={bladeAdminThemes}
          imgShadow={true }
          title='Customer Expereince Journey Mapping'
          titleColor='planfu-orange'
          copyLeft={true}
          copy={athlinksCopy}/>
      </div>
    </div>
  )
}