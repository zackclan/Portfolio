import React, { Component } from 'react';
import './MainContent.css'
import SocialIcons from './SocialIcons';
import  Header from './Header/Header.js';
import Footer from './Footer/Footer'

export function MainContent () {
  return (
    <div className='main'>
      <Header />
      <div className='hero'>
        
        <div>
          Zack Horwitz
        </div>
        <div className='email'>
          Zack@horwitz.dev
        </div>
        <div className='skills'>
          <i className="fab fa-js" />
          <i className="fab fa-react" />
          <i class="fab fa-node-js" />
          <i className="fab fa-html5" />          
        </div>
        <SocialIcons />
      </div>
      <Footer />
    </div>
  )
}