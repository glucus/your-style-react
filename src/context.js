import React from 'react';
import { clothes, categories } from './data';

const Context = React.createContext();

const reducer = (state, action) => {

  switch (action.type) {

    case 'DELETE_ITEM': 
        const { clothes } = state;

        const filteredClothes = clothes.filter(
          item => item.id.toString() !== action.payload.id.toString()
        );

        const answer = window.confirm (`Are you sure you want to delete ${action.payload.name}?`);
        if (answer) { 
          return { ...state, clothes: filteredClothes };
        } return state;

    default: 
        return state;

    }
}

export class Provider extends React.Component {
    // global state
  state = {
    clothes: clothes,
    categories: categories,
    dispatch: action => this.setState (state => reducer (state, action))
  }

  render () {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;