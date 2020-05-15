import React from 'react'
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom'
import Fade from 'react-reveal/Fade'

import Hero from '../../components/Hero'

import brandAthlinks from '../../static/img/svg/brand_planfu.svg'

import './styles.scss'


const ContextNav = () => {
  const overViewLink = (<div className='mx-4'><Link to={`/planfu`}><h1>Overview</h1></Link></div>)
  const productLink = (<div className='mx-4'><Link to={`/planfu/product`}><h1>Product Development</h1></Link></div>)
  const clientLink = (<div className='mx-4'><Link to={`/planfu/client`}><h1>Client Landing Page</h1></Link></div>)
  const staffLink = (<div className='mx-4'><Link to={`/planfu/staff`}><h1>Staff</h1></Link></div>)
  const marketingLink = (<div className='mx-4'><Link to={`/planfu/marketing`}><h1>Marketing</h1></Link></div>)

  const navLinks = [overViewLink, productLink, clientLink, staffLink, marketingLink]

  return (
    <div className='flex flex-col lg:flex-row w-full md:w-2/3 lg:w-2/3 align-center justify-center text-center mx-auto px-4 py-4'>
      {
        navLinks.map((link, index) => (
          navLinks[index]
        ))
      }
    </div>
  )
}


export default function PlanfuView(props){

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

  return (
    <div className='text-lg'>
      <Hero
        copy=''
        workHero='planfu'
        brand={brandAthlinks}/>
      <ContextNav/>
    </div>
  )
}