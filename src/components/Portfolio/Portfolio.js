import React, { Component } from 'react';
import './Portfolio.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



class Portfolio extends React.Component {

  render() {
    return(
      <div id='portfolio'> 
        <div class='port'>
          Portfolio
        </div>
        <div className='projects'>     
          <div className='project-container'>
            <p class='project-title'>React Weather API</p>
            <p class='project-description'>React app that makes API calls to get current weather</p>
            <div className="icons">
              <i className="fab fa-js" />
              <i className="fab fa-react" />
              <i className="fab fa-html5" />
            </div>
            <div className='visit'>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/zackclan/ReactWeather"><i className="fab fa-github"></i></a>
              <Link to="/weather">Visit</Link>
            </div>
          </div>
          <div className='project-container'>
            <p class='project-title'>React Library</p>
            <p class='project-description'>React app for managing your home library, makes calls to a REST API server set up using mongoDB/node to save/load libraries</p>
            <div className="icons">
              <i className="fab fa-js" />
              <i className="fab fa-react" />
              <i className="fab fa-html5" />
            </div>
            <div className='visit'>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/zackclan/ReactLibrary"><i className="fab fa-github"></i></a>
              <Link to="/library">Visit</Link>
            </div>
            
          </div>
          <div className='project-container'>
            <p class='project-title'>To-Do App</p>
            <p class='project-description'>Web App built with Vanilla JS</p>
            <div className="icons">
              <i className="fab fa-js" />
              <i className="fab fa-html5" />
            </div>
            <div className='visit'>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/zackclan/ToDo"><i className="fab fa-github"></i></a>
              <a href="https://zackclan.github.io/ToDo">Visit</a>
            </div>
          </div>
        </div> 
          
      </div>
    )
  }
}

export default Portfolio

//<Link to="/weather">Weather</Link>
//<Link to="/library">Library</Link>
//<a href="https://zackclan.github.io/ToDo">Todo</a>
