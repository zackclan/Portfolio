import React, { Component } from 'react';
import { MainContent } from './MainContent'
import App from './App'
import About from './About/About'
import './Home.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Portfolio from './Portfolio/Portfolio';

class Home extends React.Component {
  render() {
    return (
      
        <div class='home'>
          <MainContent />
          <About />
          <Portfolio />          
        </div>
      
    )
  }

}

export default Home