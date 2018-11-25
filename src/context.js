import React from 'react';
import { clothes, categories } from './data';

const Context = React.createContext();


const alreadyExists = (arr, id) => {
  const result = arr.filter (item => item.id === id);
  return result;
}

const reducer = (state, action) => {
  switch (action.type) {

    case 'TOGGLE_NEW_CARD': {

      const { showNewCard } = state;

      return {
         ...state,
         showNewCard: !showNewCard
      };
    }

    case 'DELETE_ITEM': {
      const { clothes, showNewCard } = state;

      const clothesAfterDeletion = clothes.filter(
        item => item.id.toString() !== action.payload.id.toString()
      );

      const answer = window.confirm (`Are you sure you want to delete ${action.payload.name}?`);
      if (answer) {

        console.log (`deleting ${action.payload.name}`);
        return {
           ...state,
            clothes: clothesAfterDeletion,
            showNewCard: !showNewCard
        };
      } return state;
    }
          
    case 'SELECT_CATEGORY': {

      const categoryName = action.payload.categoryName;

      return {
        ...state, 
        categoryName: categoryName
       };
    }


    case 'SUBMIT_ITEM': {

      const { clothes, showNewCard } = state;

      const newItem = action.payload;
      // console.log ('newItem: ', newItem);

      const found = alreadyExists(clothes, newItem.id);
      // console.log ('found: ', found);

      const result = found[0] || null;

      if (result) {

        const restClothes = clothes.filter (item => item.id !== newItem.id);
        const updatedClothes = [newItem, ...restClothes];

        console.log (`updated clothes with id ${newItem.id}`, updatedClothes);

        return {
          ...state,
          clothes: updatedClothes,
          showNewCard: !showNewCard
        }   
      }

      else {
        const updatedClothes = [newItem, ...state.clothes];
        console.log (`added new item with id ${newItem.id}`, updatedClothes);

        return {
          ...state,
          clothes: updatedClothes,
          showNewCard: !showNewCard
        }  
      } 

    }

    default: 
        return state;
    }
}

export class Provider extends React.Component {
    // global state
  state = {
    clothes: clothes,
    categories: categories,
    categoryName: '',
    categoryDescription: 'All items',
    showNewCard: false,
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