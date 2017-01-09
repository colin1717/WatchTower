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
            <StandardCard title='Implementation' text='blah'/>
          </div>
          <div className="col s1"></div>
        </div>

        

      </div>
    );
  }
}

export default App;
