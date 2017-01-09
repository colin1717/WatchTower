import React, { Component } from 'react';

class FeatureCard extends Component {
  render() {
    return (
        <div className='container'>
          <div className="row">
            <div className='col s1'></div>
            <div className="col s10 feature-card">
              <div className="feature-card-header">{ this.props.title }</div>
              <div className="feature-card-content">
                <div className="feature-card-content-left">
                  { this.props.message }
                </div>
                <div className="feature-card-content-right">
                  <span className='tag present'>Present = {this.props.present.toString()}</span>
                </div>
              </div>
            </div>
            <div className='col s1'></div>
          </div>
        </div>
    )
  }
}

export default FeatureCard;
