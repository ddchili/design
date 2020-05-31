import React, { Fragment, useEffect, useRef, useState } from 'react'
import { isMobile } from 'react-device-detect'
import AppBar from '@material-ui/core/AppBar'
import './styles.scss'




export default function ContextNav(props){

  const [isSticky, setSticky] = useState(false)
  const ref = useRef(null)
  const top = isMobile ? 0 : 94
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= top)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])


  const navItems = props.navItems ?? []

  return (
    <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
        <div className='flex flex-col lg:flex-row w-full md:w-2/3 lg:w-2/3 align-center justify-center text-center mx-auto px-4 py-4 sticky-inner'>
        {
          navItems.map((link, index) => (
            navItems[index]
          ))
        }
      </div>
    </div>
  )
}