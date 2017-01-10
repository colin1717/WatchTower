import React, { Component } from 'react';
import Header from './children_components/Header.js';
import ClientDropdown from './children_components/ClientDropdown.js';
import StandardCard from './children_components/StandardCard.js';
import './App.css';
import $ from 'jquery';
import * as sortData from "./sortData";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: {}
    }
  }

  _fetchData(client) {
    console.log(`client: ${client}`)

    $.ajax({
      method: "GET",
      url: `http://127.0.0.1:8000/clients/${client}`,
      success: (data) => { this._saveDataToState(sortData.sortData(data)) }
    })
  }

  _saveDataToState(data){
    this.setState({
      data: data
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ClientDropdown fetchData={this._fetchData.bind(this)}/>

        { /* Implementation Card */ }
        <div className="row">
          <div className="col s1"></div>
          <div className="col s10">
            <StandardCard title='Implementation Last Modified' text={this.state.data["Last Modified"] ? this.state.data["Last Modified"].msg : " "}/>
          </div>
          <div className="col s1"></div>
        </div>

        { /* Container Page Cards */ }
        <div className='row'>
          <div className='col s6'>
            <StandardCard title="Staging Container Page" text={this.state.data["Staging Container URL"] ? this.state.data["Staging Container URL"].msg : " "} />
          </div>
          <div className='col s6'>
            <StandardCard title="Production Container Page" text={this.state.data["Production Container URL"] ? this.state.data["Staging Container URL"].msg : " "} />
          </div>
        </div>

        { /* BvLoader Card */ }
        <div className='row'>
        <div className="col s1"></div>
        <div className="col s10">
          <StandardCard title='BV Loader' text={this.state.data["Javascript URL"] ? this.state.data["Javascript URL"].msg : " "}/>
        </div>
        <div className="col s1"></div>
        </div>

        { /* PDP Cards */ }
        <div className="row">
          <div className="col s4">
            <StandardCard title="BVRRSummary" text={this.state.data["BVRRSummary Container Loading"] ? "BVSummary Div Detected" : " "}/>
          </div>
          <div className="col s4">
            <StandardCard title="BVRR" text={this.state.data["BVRR Container Loading"] ? "BVRR Div Detected" : " "}/>
          </div>
          <div className="col s4">
            <StandardCard title="BVQA" text={this.state.data["BVQA Container Loading"] ? "BVQA Div Detected" : " "}/>
          </div>
        </div>

        { /* SEO Card */ }
        <div className='row'>
          <div className='col s3'></div>
          <div className='col s6'>
            <StandardCard title="BV SEO" text={this.state.data["SEO Content Loading"] ? "SEO Content Loading" : " "} />
          </div>
          <div className='col s3'></div>
        </div>

      </div>
    );
  }
}

export default App;
