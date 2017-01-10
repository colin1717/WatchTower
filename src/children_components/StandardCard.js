import React, { Component } from 'react';
import './css/standardcard.css';

class ImplementationModCard extends Component {
  render() {

    return (
      <div>
          <div className='standard-card z-depth-1'>
            <div className='standard-card-top'>
              <span className='standard-card-title'>{this.props.title}</span>
              <span className='icon'><i className="material-icons">done</i></span>
            </div>
            <div className='standard-card-bottom'>
              <span className='standard-card-text'>{this.props.text}</span>
            </div>
          </div>
      </div>
    )
  }
}

export default ImplementationModCard;
