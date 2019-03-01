import React, { Component } from 'react';
import './Header.css'

class Header extends React.Component {

    scrollTo = (e) => {
      let target = e.target.firstChild.data.toLowerCase()
      let page = document.getElementById(target)
      page.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    render(){
    return (
      <div className='header-component'>
        <div onClick={this.scrollTo}>About</div>
        <div onClick={this.scrollTo}>Portfolio</div>
      </div>
    )
  }

}


export default Header