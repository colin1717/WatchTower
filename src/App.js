import React, { Component } from 'react';
import Header from './children_components/Header.js';
import ClientDropdown from './children_components/ClientDropdown.js';
import StandardCard from './children_components/StandardCard.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';
import $ from 'jquery';
import * as sortData from "./sortData";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: {},
      showCards: false
    }
  }

  _fetchData(client) {
    console.log(`client: ${client}`)

    $.ajax({
      method: "GET",
      url: `http://127.0.0.1:8000/clients/${client}`,
      success: ((data) => { this._saveDataToState(sortData.sortData(data)) })
    })
  }

  _saveDataToState(data){
    this.setState({
      data: data
    });
    this._showCards()
  }

  _showCards() {
    this.setState({
      showCards : !this.state.showCards
    })
  }

  render() {

    let cardSection;
    if (this.state.showCards) {
      cardSection =
      <div>
      <div className="row">
        <div className="col s1"></div>
        <div className="col s10">
          <StandardCard title='Implementation Last Modified' text={this.state.data["Last Modified"] ? this.state.data["Last Modified"].msg : "No implementation initialized"} badge={this.state.data["Last Modified"] ? "success" : "error"} />
        </div>
        <div className="col s1"></div>
      </div>

      <div className='row'>
        <div className='col s6'>
          <StandardCard title="Staging Container Page" text={this.state.data["Staging Container URL"] ? this.state.data["Staging Container URL"].msg : " "} badge={this.state.data["Staging Container URL"] ? (this.state.data["Staging Container URL"].msg === "BV Hosted" ? "error" : "success") : "error"}/>
        </div>
        <div className='col s6'>
          <StandardCard title="Production Container Page" text={this.state.data["Production Container URL"] ? this.state.data["Production Container URL"].msg : " "} badge={this.state.data["Production Container URL"] ? (this.state.data["Production Container URL"].msg === "BV Hosted" ? "error" : "success") : "error"} />
        </div>
      </div>

      <div className='row'>
      <div className="col s1"></div>
      <div className="col s10">
        <StandardCard title='BV Loader' text={this.state.data["Javascript URL"] ? (!this.state.data["Javascript URL"].msg ?  "The BVAPI file is not detected on this page" : this.state.data["Javascript URL"].msg ) : " "} badge={this.state.data["Javascript URL"] ? (!this.state.data["Javascript URL"].msg ? "error" : "success") : "error"}/>
      </div>
      <div className="col s1"></div>
      </div>

      <div className="row">
        <div className="col s4">
          <StandardCard title="BVRRSummary" text={this.state.data["BVRRSummary Container Has Content"] ? "BVRRSummary Div detected and has content" : (this.state.data["BVRRSummary Container Loading"] ? "BVRRSummary div detected without content" : "BVRRSummary div not detected")} badge={this.state.data["BVRRSummary Container Has Content"] ? "success" : "error"} />
        </div>
        <div className="col s4">
          <StandardCard title="BVRR" text={this.state.data["BVRR Container Has Content"] ? "BVRR Div detected and has content" : (this.state.data["BVRR Container Loading"] ? "BVRR div detected without content" : "BVRR div not detected")} badge={this.state.data["BVRR Container Has Content"] ? "success" : "error"} />
        </div>
        <div className="col s4">
          <StandardCard title="BVQA" text={this.state.data["BVQA Container Has Content"] ? "BVQA Div detected and has content" : (this.state.data["BVQA Container Loading"] ? "BVQA div detected without content" : "BVQA div not detected")} badge={this.state.data["BVQA Container Has Content"] ? "sucess" : "error"} />
        </div>
      </div>

      <div className='row'>
        <div className='col s3'></div>
        <div className='col s6'>
          <StandardCard title="BV SEO" text={this.state.data["SEO Pagination Working"] ? "SEO Content and Pagination detected" : (this.state.data["SEO Content Loading"] ? "SEO content loading without pagination" : "SEO content is not detected")} badge={this.state.data["SEO Pagination Working"] ? "success" : (this.state.data["SEO Content Loading"] ? "success" : "error")} />
        </div>
        <div className='col s3'></div>
      </div>
      </div>
    }

    const transitionOptions = {
      transitionName: 'fade',
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    }

    return (
      <div className="App">
        <Header />
        <ClientDropdown fetchData={this._fetchData.bind(this)}/>

        <ReactCSSTransitionGroup {...transitionOptions}>
          {cardSection}
        </ReactCSSTransitionGroup>

      </div>
    );
  }
}

export default App;
