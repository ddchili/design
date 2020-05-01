import React from 'react'
import Fade from 'react-reveal/Fade'

import Hero from '../../components/Hero'

import brandAthlinks from '../../static/img/svg/brand_planfu.svg'

import './styles.scss'



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
        copy='Athlinks is owned by Life Time Fitness along with Chronotrack providing 
        race registration, timing and scoring, and race results for endurance athletic events 
        including the New York Marathon and Spartan events.'
        workHero='planfu'
        brand={brandAthlinks}/>
      
    </div>
  )
}