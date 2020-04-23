import React from 'react'

import Fade from 'react-reveal/Fade'

import { isMobile } from 'react-device-detect'




export default function Blade(props) {
  const red = props.red ? 'background-red' : ''
  const copyLeft = props.copyLeft ? props.copyLeft : false
  const img = props.img ? props.img : 'no img src'
  const title = props.title ? props.title : 'no title'
  const titleColor = props.titleColor ? props.titleColor : 'black'
  const copy = props.copy ? props.copy : 'no copy supplied'
  const sectionTitle = props.sectionTitle ?? false

  const sectionTitleBlock = (
    <div className='text-3xl font-semibold text-left ml-8 lg:ml-12 mt-24'>
          <h3>{sectionTitle}</h3>
        </div>
  )

  // isMobile - force col layout text first img second
  if(isMobile ? true : copyLeft){
    return (
      <Fade bottom duration={500}>
        <div className={`${titleColor} mb-8`}>
          {sectionTitle ? sectionTitleBlock : null}
          <div className='flex flex-col md:flex-col lg:flex-row justify-center text-left h-full'>
            <div className='flex flex-col w-5/6 md:w-5/6 lg:w-1/2 m-8'>
              <h2 className='text-1xl font-semibold tracking-widest uppercase'>{props.title}</h2>
              <p>{props.copy}</p>
            </div>
            <div className='shadow-lg self-center m-8'>
              <img src={img}/>
            </div>
          </div>
          {props.children}
        </div>
      </Fade>
    ) 
  }
  else{
    return (
      <Fade bottom duration={500}>
        <div className={`${titleColor} mb-8`}>
          <div className='flex flex-col md:flex-col lg:flex-row justify-center text-left h-full'>
            <div className='shadow-lg self-center m-8'>
              <img src={img}/>
            </div>
            <div className='flex flex-col w-5/6 md:w-5/6 lg:w-1/2 m-8'>
              <h2 className='text-1xl font-semibold tracking-widest uppercase'>{props.title}</h2>
              <p>{props.copy}</p>
            </div>
          </div>
          {props.children}
        </div>
      </Fade>
    )
  }
}

export function BladeLarge(props){

  const img = props.img ? props.img : 'no img src'
  const title = props.title ? props.title : 'no title'
  const titleColor = props.titleColor ? props.titleColor : 'black'
  const copy = props.copy ? props.copy : 'no copy supplied'

  return(
    <Fade bottom duration={500}>
      <div className={`${titleColor} mb-8`}>
        <div className='flex flex-col md:flex-col lg:flex-row justify-center text-left h-full'>
          <div className='flex flex-col w-5/6 md:w-5/6 lg:w-1/2 m-8'>
            <h2 className='text-1xl font-semibold tracking-widest uppercase'>{props.title}</h2>
            <p>{props.copy}</p>
          </div>
          <div className='shadow-lg self-center m-8'>
            <img src={img}/>
          </div>
        </div>
        {props.children}
      </div>
    </Fade>
  )
}

export function BladeColumn(props){

  const img = props.img ? props.img : 'no img src'
  const title = props.title ? props.title : 'no title'
  const titleColor = props.titleColor ? props.titleColor : 'black'
  const copy = props.copy ? props.copy : 'no copy supplied'

  return(
    <Fade bottom duration={500}>
      <div className={`${titleColor} mb-8 w-full lg:w-1/2`}>
        <div className='flex flex-col text-left h-full'>
          <div className='flex flex-col m-8'>
            <h2 className='text-1xl font-semibold tracking-widest uppercase'>{props.title}</h2>
            <p>{props.copy}</p>
          </div>
          <div className='shadow-lg self-center m-2'>
            <img src={img}/>
          </div>
        </div>
        {props.children}
      </div>
    </Fade>
  )
}