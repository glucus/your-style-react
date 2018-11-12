import React from 'react';
import { clothes, categories } from './data';

const Context = React.createContext();


const alreadyExists = (arr, id) => {
  const result = arr.filter (item => item.id === id);
  return result;
}

const reducer = (state, action) => {
  switch (action.type) {

    case 'DELETE_ITEM': {
      const { clothes } = state;

      const clothesAfterDeletion = clothes.filter(
        item => item.id.toString() !== action.payload.id.toString()
      );

      const answer = window.confirm (`Are you sure you want to delete ${action.payload.name}?`);
      if (answer) { 
        return {
           ...state,
            clothes: clothesAfterDeletion
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


    case 'EDIT_ITEM': {
      const newItem = action.payload;

      const found = alreadyExists(clothes, newItem.id);
      console.log ('item found: ', found);

      const result = found.length > 0 ? found[0] : null ;

      if (result) {

        console.log (`replacing ${result.name} with ${newItem.name}`);
        //array.splice(start, deleteCount[, item1[, item2[, ...]]])

        const updatedClothes = clothes.splice(result.id, 1, newItem);
        return {
          ...state,
          clothes: updatedClothes
        }
      }

      console.log ('item not found, add item action should be called');
      return state;
    }


    case 'ADD_NEW_ITEM': {

      const newItem = action.payload;
      const newClothes = [...state.clothes, newItem];

      // const newFilteredClothes = () => {
      //   if (state.categoryName === newItem.category || state.categoryName === '') {
      //     return [newItem, ...state.filteredClothes];
      //   }
      //   return [...state.filteredClothes];
      // }

      console.log('newClothes', newClothes);

      return { 
        ...state,
         clothes: newClothes
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