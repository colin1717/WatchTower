import React, { Component } from 'react';
import './css/standardcard.css';

class ImplementationModCard extends Component {

  render() {
    return (
      <div>
          <div className='standard-card z-depth-1'>
            <div className='standard-card-top'>
              <span className='standard-card-title'>{this.props.title}</span>
              <span className='icon'>{ (this.props.badge === 'success') ? <i className="material-icons icon-success">done</i> : <i className="material-icons icon-error">warning</i> }</span>
            </div>
            <div className='standard-card-bottom'>
              <span className='standard-card-text'>{ (this.props.badge === "success") ? this.props.text : <span className='text-error'>{this.props.text}</span>}</span>
            </div>
          </div>
      </div>
    )
  }
}

export default ImplementationModCard;
