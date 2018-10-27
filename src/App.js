import React, { Component } from 'react';
import Gallery from '../src/components/Gallery';
import { clothes, categories } from './data';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
          <Gallery
            galleryItems={clothes}
            categories={categories} />
      </div>
    );
  }
}

export default App;
