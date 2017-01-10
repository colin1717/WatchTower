import React, { Component } from 'react';
import './css/clientDropdown.css';

class ClientDropdown extends Component {
  render() {

    return (
      <div className="row">
        <div className="col s12 search-bar z-depth-1">
          <div className="row">
            <div className="col m2"></div>
            <form onSubmit={ this._handleSubmit.bind(this) }>
              <div className="input-field col s8 m7">
                <i className="material-icons prefix">input</i>
                <input id="client-name" type='text' ref={(input) => this._client = input}/>
              </div>
              <div className="col s2 m3">
                <button className="waves-effect waves-light btn submit-btn teal accent-4" type='submit'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  _handleSubmit(event){
    event.preventDefault();

    let client = this._client.value;
    this.props.fetchData(client);
  }
}

export default ClientDropdown;
