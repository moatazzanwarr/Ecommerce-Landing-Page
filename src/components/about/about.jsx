// Imports
import React from 'react'
import './about.css'
import WelcomeToNest from '../welcomeToNest/welcomeToNest'
import WhatWeProvide from '../whatWeProvide/whatWeProvide'
import OurPerformance from '../ourPerformance/ourPerformance'

import Footer from '../footer/footer'
import { Link } from 'react-router-dom'

// Icons
import icons from '../../assets/icons'

function About() {
  return (
    <section className='about'>
      <div className="bar">
        <ul>
          <li>
            <Link to='#'><icons.HomeIcon className='i'/>Home</Link>
          </li>
          <icons.ArrowForwardIosIcon className='i'/>
          <li>
            <Link to='#'>Pages</Link>
          </li>
          <icons.ArrowForwardIosIcon className='i'/>
          <li>
            <Link to='#'>About us</Link>
          </li>
        </ul>
      </div>
      <WelcomeToNest/>
      <WhatWeProvide/>
      <OurPerformance/>

    <Footer/>
    </section>
  )
}

export default About
