import React, { Component } from 'react';
import Card from './components/Card/index';

import './App.css';
import { pants } from '../src/data';

class App extends Component {
  render() {
    return (
      <div className="App">
        {pants && pants.map (
          item => <Card 
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    category='pants'
                  />
        )}
        <Card />
      </div>
    );
  }
}

export default App;
