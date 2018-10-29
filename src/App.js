import React, { Component } from 'react';
import Gallery from '../src/components/Gallery';

import { Provider } from './context';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="container">
            <Gallery />
        </div>
      </Provider>
    );
  }
}

export default App;
