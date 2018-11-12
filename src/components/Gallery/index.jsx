import React from 'react';
import './Gallery.scss';

import { Consumer } from '../../context';
import Cards from '../Cards';
import Card from '../Card';
import CategoryTabs from '../CategoryTabs';
import { dispatch } from 'rxjs/internal/observable/pairs';

class Gallery extends React.Component {

  state = {
    showNewCard: false, 
    buttonText: 'Add new item'
  }

  filterClothes = (arr, categoryName) => {
    if (categoryName) {
      return arr.filter(
        item => item.category === categoryName
      );
    } return arr;
  };

  render () {
    return (
      <Consumer>
        {value => {
          const { clothes, categories, categoryName, categoryDescription, dispatch } = value;

          const filteredClothes = this.filterClothes(clothes, categoryName);

          const addNewItem = (newItem, dispatch) => {
            // this.setState({
            //   showNewCard: !this.state.showNewCard
            // })

            dispatch ({
              type: 'EDIT_ITEM',
              payload: newItem
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
                  {!this.state.showNewCard ? 
                  <button className="addNewButton"
                          onClick = {addNewItem.bind(this, newCard, dispatch)}>
                    Add new item
                    <i className="fas fa-plus" />
                  </button>
                  :
                  <button className="addNewButtonCancel"
                    onClick = { () => this.setState({ showNewCard: !this.state.showNewCard }) }>
                    Cancel
                    <i className="fas fa-times" />
                  </button>
                }

                </div>
              </div>
              <div className="gallery">
                  {/* {this.state.showNewCard && <Card key={clothes.length} id={clothes.length} card={newCard} formHidden={false} />} */}
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