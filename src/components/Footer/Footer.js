import React, { Component } from 'react';
import './Footer.css'

class Footer extends React.Component {

  scrollTo = (e) => {
    let main = document.querySelector('.main')
    main.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  render() {
    return (
      <div className='footer-component'>
        <button onClick={this.scrollTo} className="fas fa-angle-double-up fa-2x" href="#" />
        <div className="to-top">To Top</div>
      </div>
    )
  }

}

export default Footer