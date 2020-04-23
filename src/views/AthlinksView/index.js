import React from 'react'
import Fade from 'react-reveal/Fade'

import Hero from '../../components/Hero'

import Button from '@material-ui/core/Button'
import { isMobile } from 'react-device-detect'

import screenCX from '../../static/img/raster/work_athlinks_cx.jpg'
import bladeOnsite from '../../static/img/raster/work_athlinks_blade_onsite.jpg'
import bladeDSExpert from '../../static/img/raster/work_athlinks_blade_dsExpert.jpg'
import bladeCollab from '../../static/img/raster/work_athlinks_blade_dsCollab.jpg'
import bladeSolSketch from '../../static/img/raster/work_athlinks_blade_solSketch.jpg'
import bladeVisLang from '../../static/img/raster/work_athlinks_blade_visLang.jpg'
import thumbBooth from '../../static/img/raster/work_thumb_booth.jpg'
import thumbStart from '../../static/img/raster/work_thumb_startLine.jpg'
import thumbTimers from '../../static/img/raster/work_thumb_timers.jpg'
import thumbSolSketch from '../../static/img/raster/work_athlinks_thumb_solSketch.jpg'
import thumbEventDashboard from '../../static/img/raster/work_thumb_evnetDashboard.jpg'
import thumbTestBoard from '../../static/img/raster/work_thumb_usertestBoard.jpg'

import miamiReel from '../../static/vid/miamiMarathon_2018_uxReel_compressed.mp4'

import brandAthlinks from '../../static/img/svg/brand_athlinks.svg'

import './styles.scss'



export default function AthlinksView(props){

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
        copy='Athlinks is owned by Life Time Fitness along with Chronotrack providing 
        race registration, timing and scoring, and race results for endurance athletic events 
        including the New York Marathon and Spartan events.'
        brand={brandAthlinks}/>
      
    </div>
  )
}