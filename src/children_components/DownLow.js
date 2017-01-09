import React, { Component } from 'react';

class DownLow extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className="col s12 feature-card">
            <div className="feature-card-header">The Down Low</div>
            <div className="feature-card-content">
              <div className="feature-card-content-center">
                Welcome to WatchTower! This tool is here to help you easily review the Bazaarvoice code implemented on specified PDPs.  We'll tell you if code is present on the page and if content is rendering.
                <ul>
                  <li>1. Select the client you're wanting to check the code for</li>
                  <li>2. Select or enter in a PDP url in the desired environment (staging or production)</li>
                  <li>3. Review your results!</li>
                  <li>4. Next time you visit, we'll have your results saved and updated to reflect any updates that have been made to the code.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DownLow;
