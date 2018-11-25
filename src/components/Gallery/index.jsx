import React from 'react';
import './Gallery.scss';
import { Consumer } from '../../context';

import CategoryTabs from '../CategoryTabs';
import Card from '../Card';
import Cards from '../Cards';

class Gallery extends React.Component {

  filterClothes = (arr, categoryName) => {
    if (categoryName) {
      return arr.filter(
        item => item.category === categoryName
      );
    } return arr;
  };

  toggleNewCard = (id, dispatch) => {
    console.log (`toggling form for card with id ${id}`);
    dispatch ({type: 'TOGGLE_NEW_CARD'});
  }

  render () {
    return (
      <Consumer>
        {value => {

          const { clothes, categories, categoryName, categoryDescription, showNewCard, dispatch } = value;

          const filteredClothes = this.filterClothes(clothes, categoryName);
          const newId = clothes.length;

          const newCard = {
            id: newId,
            name: 'new item',
            image: 'https://via.placeholder.com/210x250.png?text=your-style.com',
            description: 'new item',
            category: '',
            target: ''
        };

          return (
            <React.Fragment>
              <div className="tabsAndHeading">
                <CategoryTabs categories={categories}
                              categoryName={categoryName}
                />
                <div className="headingAndButton">
                  <h2>{categoryDescription}</h2>
                  {
                    !showNewCard ? 
                      <button className="addNewButton"
                        onClick={this.toggleNewCard.bind (this, newId, dispatch)}>
                          Add new item
                          <i className="fas fa-plus" />
                      </button>
                    :
                      <button className="addNewButtonCancel"
                        onClick = {this.toggleNewCard.bind (this, newId, dispatch)}>
                          Cancel
                          <i className="fas fa-times" />
                      </button>
                  }
                </div>
              </div>
              <div className="gallery">
                  {showNewCard && <Card card={newCard} formHidden={false} />} 
                  <Cards cards={filteredClothes} />
              </div>
            </React.Fragment>
          );
        }
      }
      </Consumer>
    )
  }
}

export default Gallery;