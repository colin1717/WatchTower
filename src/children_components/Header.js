import React, { Component } from 'react';
import './css/header.css';

class Header extends Component {
  render() {
    return (
      <header className='z-depth-3'>
        <img className='logo' src="./pictures/bv.jpg" alt="bv" />
        <span className='title'>WatchTower</span>
      </header>
    )
  }
}

export default Header;
