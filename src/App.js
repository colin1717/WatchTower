import React, { Component } from 'react';
import Header from './children_components/Header.js';
import ClientDropdown from './children_components/ClientDropdown.js';
import StandardCard from './children_components/StandardCard.js';
import './App.css';
import $ from 'jquery';

class App extends Component {

  _fetchData(client) {
    console.log(`client: ${client}`)

    $.ajax({
      method: "GET",
      url: `http://127.0.0.1:8000/clients/${client}`,
      success: (data) => { this._sortData(data) }
    })
  }

  _sortData(data) {
    console.log('sortData is running');
    let sortedData = {};

    sortedData["Last Modified"] = this._findImplementation(data);
    sortedData["Production Container URL"] = this._findProdContainerPage(data);
    sortedData["Staging Container URL"] = this._findStagingContainerPage(data);
    sortedData["Javascript URL"] = this._findBVLoader(data);
    sortedData["BVRRSummary Container Loading"] = this._findBVRRSummary(data);
    sortedData["BVRRSummary Container Has Content"] = this._findBVRRSummaryPopulating(data);
    sortedData["BVRR Container Loading"] = this._findBVRR(data);
    sortedData["BVRR Container Has Content"] = this._findBVRRPopulating(data);
    sortedData["BVQA Container Loading"] = this._findBVQA(data);
    sortedData["BVQA Container Has Content"] = this._findBVQAPopulating(data);
    sortedData["SEO Content Loading"] = this._findSEO(data);
    sortedData["SEO Pagination Working"] = this._findSEOPagination(data);

    console.log(sortedData);
  }

  _findImplementation(data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].title === "Last Modified") {
        return data[i];
      }
    }
  }
  _findProdContainerPage(data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].title === "Production Container URL"){
        return data[i];
      }
    }
  }
  _findStagingContainerPage(data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].title === "Staging Container URL") {
        return data[i];
      }
    }
  }

  _findBVLoader(data) {
    for (var i = 0; i < data.length; i++)  {
      if (data[i].title === "Javascript URL") {
        return data[i];
      }
    }
  }

  _findBVRRSummary(data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].title === "BVRRSummary Container Loading") {
        return data[i].status;
      }
    }
  }

  _findBVRRSummaryPopulating(data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].title === "BVRRSummary Container Has Content") {
        return data[i].status;
      }
    }
  }

  _findBVRR(data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].title === "BVRR Container Loading") {
        return data[i].status;
      }
    }
  }

  _findBVRRPopulating(data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].title === "BVRR Container Has Content") {
        return data[i].status;
      }
    }
  }

  _findBVQA(data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].title === "BVQA Container Loading") {
        return data[i].status;
      }
    }
  }

  _findBVQAPopulating(data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].title === "BVQA Container Has Content") {
        return data[i].status;
      }
    }
  }

  _findSEO(data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].title === "SEO Content Loading") {
        return data[i].status;
      }
    }
  }

  _findSEOPagination(data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].title === "SEO Pagination Working") {
        return data[i].status;
      }
    }
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
            <StandardCard title='Implementation Last Modified' text='2017-01-10T00:39:48.074+0000'/>
          </div>
          <div className="col s1"></div>
        </div>

        { /* Container Page Cards */ }
        <div className='row'>
          <div className='col s6'>
            <StandardCard title="Staging Container Page" text="https://display.ugc.bazaarvoice.com/bvstaging/static/Apples/ApplesCRM/en_US/container.htm?" />
          </div>
          <div className='col s6'>
            <StandardCard title="Production Container Page" text="https://display.ugc.bazaarvoice.com/static/Apples/ApplesCRM/en_US/container.htm?" />
          </div>
        </div>

        { /* BvLoader Card */ }
        <div className='row'>
        <div className="col s1"></div>
        <div className="col s10">
          <StandardCard title='BV Loader' text='https://display.ugc.bazaarvoice.com/bvstaging/static/ClientName/en_US/bvapi.js'/>
        </div>
        <div className="col s1"></div>
        </div>

        { /* PDP Cards */ }
        <div className="row">
          <div className="col s4">
            <StandardCard title="BVRRSummary" text="Injected Content Detected"/>
          </div>
          <div className="col s4">
            <StandardCard title="BVRR" text="Injected Content Detected"/>
          </div>
          <div className="col s4">
            <StandardCard title="BVQA" text="Injected Content Detected"/>
          </div>
        </div>

        { /* SEO Card */ }
        <div className='row'>
          <div className='col s3'></div>
          <div className='col s6'>
            <StandardCard title="BV SEO" text="Pagination Detected"/>
          </div>
          <div className='col s3'></div>
        </div>

      </div>
    );
  }
}

export default App;
