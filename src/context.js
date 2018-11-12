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


    case 'SUBMIT_ITEM': {
      const newItem = action.payload;
      console.log ('newItem', newItem);

      const found = alreadyExists(clothes, newItem.id);
      console.log ('found', found);

      const result = found[0] || null ;

      if (result) {
        console.log (`replacing existing item`, result, 'by', newItem);

        const restClothes = clothes.filter (item => item.id !== newItem.id);
        const updatedClothes = [newItem, ...restClothes];

        // console.log ('rest clothes', restClothes);
        // console.log (`updated clothes: `, updatedClothes);

        return {
          ...state,
          clothes: updatedClothes
        }   
      }

        const updatedClothes = [...state.clothes, {...newItem, id: clothes.length}];
        console.log (`new item with id ${clothes.length} added`, updatedClothes);

        return {
          ...state,
          clothes: updatedClothes
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