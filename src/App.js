import React, { Component } from 'react';
import Header from './children_components/Header.js';
import ClientDropdown from './children_components/ClientDropdown.js';
import StandardCard from './children_components/StandardCard.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ClientDropdown />

        { /* Implementation Card */ }
        <div className="row">
          <div className="col s1"></div>
          <div className="col s10">
            <StandardCard title='Implementation Last Modified' text='some date'/>
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
