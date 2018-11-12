import React from 'react';
import './Gallery.scss';

import { Consumer } from '../../context';
import Cards from '../Cards';
import Card from '../Card';
import CategoryTabs from '../CategoryTabs';

class Gallery extends React.Component {

  state = {
    showNewCard: false   
  }

  render () {
    return (
      <Consumer>
        {value => {
          const { filteredClothes, clothes, categories, categoryName, categoryDescription, dispatch } = value;

          const selectCategory = (categoryName, categoryDescription) => {
            dispatch ({
              type: 'SELECT_CATEGORY',
              payload: { categoryName, categoryDescription }
            })
          };

          const addNewItem = (item) => {
            // console.log ('Add new item clicked');

            // dispatch ({
            //   type: 'ADD_NEW_ITEM',
            //   payload: item 
            // })

            this.setState({
              showNewCard: !this.state.showNewCard
            })
          }

          const newCard = {
            id: clothes.length,
            name: 'new item',
            image: 'https://via.placeholder.com/210x250.png?text=your-style.com',
            description: 'new item',
            category: '',
            target: ''
        }

          return (
            <React.Fragment>
              <div className="tabsAndHeading">
                <CategoryTabs categories={categories}
                              categoryName={categoryName}
                />
                <div className="headingAndButton">
                  <h2>{categoryDescription}</h2>
                  <button className="addNewButton"
                          onClick = {addNewItem.bind(this, newCard)}>
                    Add new item
                    <i className="fas fa-plus" />
                  </button>
                </div>
              </div>
              <div className="gallery">
                  {this.state.showNewCard && <Card key={clothes.length} card={newCard} formHidden={false} />}
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