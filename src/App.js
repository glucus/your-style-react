import React, { Component } from 'react';
import Gallery from '../src/components/Gallery';
import { pants } from './data';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Gallery galleryItems={pants} />
      </div>
    );
  }
}

export default App;
