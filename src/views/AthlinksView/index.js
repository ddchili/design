import React from 'react'
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom'
import ContextNav from './../../components/ContextNav'
import Hero from '../../components/Hero'
import brandAthlinks from '../../static/img/svg/brand_athlinks.svg'

import './styles.scss'

export default function AthlinksView(props){

  const overViewLink = (<div className='mx-4'><Link to={`/athlinks`}><h1>Overview</h1></Link></div>)
  const createEventLink = (<div className='mx-4'><Link to={`/athlinks/event`}><h1>Create Event</h1></Link></div>)
  const arpLink = (<div className='mx-4'><Link to={`/athlinks/arp`}><h1>Athlete Race Page</h1></Link></div>)
  const feedsLink = (<div className='mx-4'><Link to={`/athlinks/feeds`}><h1>Activity Feeds</h1></Link></div>)
  const vrLink = (<div className='mx-4'><Link to={`/athlinks/vr`}><h1>Virtual Races</h1></Link></div>)

  const navLinks = [overViewLink, createEventLink, arpLink, feedsLink, vrLink]

  return (
    <div className='text-lg'>
      <Hero
        copy=''
        brand={brandAthlinks}
        workHero='athlinks'/>
          <ContextNav
            navItems={navLinks}/>
    </div>
  )
}