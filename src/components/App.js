import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './layout/Landing';
import Navbar from './layout/Navbar';
import Login from './auth/Login';
import Register from './auth/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Route exact path='/' component={ Landing }/>
          <Route path='/login' component={ Login }/>
          <Route path='/register' component={ Register }/>
        </div>
      </Router>
    );
  }
}

export default App;
