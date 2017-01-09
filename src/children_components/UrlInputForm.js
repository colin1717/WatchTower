import React, { Component } from 'react';

class UrlInputForm extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row url-input-div">
          <div className="col s12">
            <div className="row">
              <div className="input-field col s4">
                <input id="staging-url-input" type="text" className="validate" placeholder='www.dev.socks.com/greensocks' />
                <label htmlFor="first_name">Add New Staging URL</label>
              </div>
              <div className="col s2">
                <a className="waves-effect waves-light btn submit-btn teal accent-4">Go</a>
              </div>
              <div className="input-field col s4">
                <input id="prod-url-input" type="text" className="validate" placeholder='www.socks.com/greensocks' />
                <label htmlFor="last_name">Add New Production URL</label>
              </div>
              <div className="col s2">
                <a className="waves-effect waves-light btn submit-btn teal accent-4">Go</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UrlInputForm;
