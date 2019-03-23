import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Landing from './layout/Landing';
import Navbar from './layout/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>

          <Navbar />
          <Landing/>
        </div>
      </Router>
    );
  }
}

export default App;
