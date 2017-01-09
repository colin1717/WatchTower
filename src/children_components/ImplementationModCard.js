import React, { Component } from 'react';
import './css/implementationModCard.css';

class ImplementationModCard extends Component {
  render() {

    return (
      <div className="row">
        <div className='col s1'></div>
        <div className='col s10'>
          <div className='impModCard'>
            <div className='impModCard-top'>
              <span className='impModCard-title'>Implementation</span>
            </div>
            <div className='impModCard-bottom'>
              <span className='impModCard-text'>{this.props.date}</span>
            </div>
          </div>
        </div>
        <div className='col s1'></div>
      </div>
    )
  }
}

export default ImplementationModCard;
