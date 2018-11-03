import React from 'react';
import { clothes, categories } from './data';

const Context = React.createContext();

// const filterByParameter = (item, parameter, targetValue) => item[parameter] === targetValue;

const reducer = (state, action) => {
  switch (action.type) {

    case 'DELETE_ITEM': {
      const { filteredClothes } = state;

      const clothesAfterDeletion = filteredClothes.filter(
        item => item.id.toString() !== action.payload.id.toString()
      );

      const answer = window.confirm (`Are you sure you want to delete ${action.payload.name}?`);
      if (answer) { 
        return {
           ...state,
            filteredClothes: clothesAfterDeletion
        };
      } return state;
    }
        
    case 'SELECT_CATEGORY': {

      const categoryName = action.payload.categoryName;
      const categoryDescription = action.payload.categoryDescription;

      const filterClothes = (categoryName) => {
        if (categoryName) {
          return clothes.filter(
            item => item.category === categoryName
          );
        } return clothes;
      };

      const filteredClothes = filterClothes(categoryName);

      return {
        ...state, 
        categoryName: categoryName,
        categoryDescription: categoryDescription,
        filteredClothes: filteredClothes
       };
    } 

    default: 
        return state;
    }
}

export class Provider extends React.Component {
    // global state
  state = {
    clothes: clothes,
    filteredClothes: clothes,
    categories: categories,
    categoryName: '',
    categoryDescription: 'All items',
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