import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import { isMobile } from 'react-device-detect'

import './styles.scss'




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
              <div>{props.copy}</div>
            </div>
            <div className='shadow-lg self-center m-8'>
              <img className='rounded-md' src={img}/>
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
              <img className='rounded-md' src={img}/>
            </div>
            <div className='flex flex-col w-5/6 md:w-5/6 lg:w-1/2 m-8'>
              <h2 className='text-1xl font-semibold tracking-widest uppercase'>{props.title}</h2>
              <div>{props.copy}</div>
            </div>
          </div>
          {props.children}
        </div>
      </Fade>
    )
  }
}

export function  OverviewBlade(props){
  const img = props.img ? props.img : 'no img src'
  const title = props.title ? props.title : 'no title'
  const titleColor = props.titleColor ? props.titleColor : 'black'
  const copy = props.copy ? props.copy : 'no copy supplied'
  const sectionTitle = props.sectionTitle ?? false
  const view = props.view ?? ''
  const imgShadow = props.imgShadow ?? false
  const { path, url } = useRouteMatch()

  const sectionTitleBlock = (
    <div className='text-3xl font-semibold text-left ml-8 lg:ml-12 mt-24'>
          <h3>{sectionTitle}</h3>
        </div>
  )

  const handleOnClick = (target) =>{

  }
 
  if(isMobile){
    return (
      <Fade bottom>
        <div className={`${titleColor} my-12 md:my-24`}>
          <div className='flex flex-col md:flex-col lg:flex-row justify-center text-center lg:text-left h-full md:w-5/6 mx-auto'>
          <h2 className='text-4xl font-semibold'>{title}</h2>
            <div className={`${imgShadow ? 'shadow-lg' : ''} self-center m-8`}>
              <img className='overview-img lg:max-w-none rounded-md' src={img}/>
            </div>
            <div className='flex flex-col w-5/6 md:w-5/6 lg:w-1/2 m-8 mt-0 justify-center items-center lg:items-start'>
              <p>{copy}</p>
              <Link to={`${url}/${view}`} className='bg-gray-800 hover:bg-gray-700 w-4/5 py-2 px-4 my-8 rounded-full text-center'>
                <button className='text-base tracking-wide text-white font-bold  uppercase'
                  onClick={handleOnClick}>
                  View Case Study
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Fade>
    )
  }
  else{
    return (
      <Fade bottom>
        <div className={`${titleColor} my-12 md:my-24`}>
          <div className='flex flex-col md:flex-col lg:flex-row justify-center text-center lg:text-left h-full md:w-5/6 mx-auto'>
            <div className={`${imgShadow ? 'shadow-lg' : ''} self-center m-8`}>
              <img className='overview-img lg:max-w-none rounded-md' src={img}/>
            </div>
            <div className='flex flex-col w-5/6 md:w-5/6 lg:w-1/2 m-8 justify-center items-center lg:items-start'>
              <h2 className='text-4xl font-semibold'>{title}</h2>
              <p>{copy}</p>
              <Link to={`${url}/${view}`} className='bg-gray-800 hover:bg-gray-700 w-4/5 py-2 px-4 my-8 rounded-full text-center'>
                <button className='text-base tracking-wide text-white font-bold  uppercase'
                  onClick={handleOnClick}>
                  View Case Study
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Fade>
    )
  }
}

export function OverviewBackground(props){
  const title = props.title ?? '' 
  const copy = props.copy ?? ''
  return(
    <div className='w-full md:w-2/3 lg:w-2/3 align-center text-center mx-auto my-16 px-4'>
      <div className={``}>
        <div className='flex flex-col md:flex-col items-center justify-center text-left h-full'>
          <div className='w-full md:w-full lg:w-5/6 m-2 md:m-6 lg:m-6 xl:m-6 border-b pb-4 border-gray-400'>
            <h2 className='text-4xl font-semibold my-2 uppercase'>{title}</h2>
            <p>{copy}</p>
          </div>
        </div>
      </div>
      {/* <video width='800' height='450' src={miamiReel} controls/> */}
    </div>
  )
}

export function BladeLarge(props){

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

  return(
    <Fade bottom duration={500}>
      <div className={`${titleColor} flex flex-col h-full mb-8 w-full`}>
        {sectionTitle ? sectionTitleBlock : null}
        <div className='text-left m-12'>
            <h2 className='text-1xl font-semibold tracking-widest uppercase'>{title}</h2>
            <div>{copy}</div>
          </div>
          <div className='shadow-lg self-center m-4'>
            <img className='rounded-md' src={img}/>
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
            <h2 className='text-1xl font-semibold tracking-widest uppercase'>{title}</h2>
            <div>{copy}</div>
          </div>
          <div className='shadow-lg self-center m-2'>
            <img className='rounded-md'src={img}/>
          </div>
        </div>
        {props.children}
      </div>
    </Fade>
  )
}