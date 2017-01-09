import React, { Component } from 'react';
import Header from './children_components/Header.js';
import ClientDropdown from './children_components/ClientDropdown.js';
import ImplementationModCard from './children_components/ImplementationModCard.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ClientDropdown />
        <ImplementationModCard date='blah'/>
      </div>
    );
  }
}

export default App;
