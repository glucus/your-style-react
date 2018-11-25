import React from 'react';
import './Gallery.scss';

import { Consumer } from '../../context';
import Cards from '../Cards';
import Form from '../Form';
import CategoryTabs from '../CategoryTabs';

class Gallery extends React.Component {

  state = {
    showNewCard: false 
  }

  filterClothes = (arr, categoryName) => {
    if (categoryName) {
      return arr.filter(
        item => item.category === categoryName
      );
    } return arr;
  };


  toggleForm = (id, e) => {
    // console.log (`toggling form for card with id ${id}`);

    this.setState ({
      formHidden: !this.state.formHidden,
      showNewCard: !this.state.showNewCard
    })
  }

  render () {
    return (
      <Consumer>
        {value => {
          const { clothes, categories, categoryName, categoryDescription } = value;

          const { showNewCard } = this.state;

          const filteredClothes = this.filterClothes(clothes, categoryName);

          // const newCard = {};

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
                  {!this.state.showNewCard ? 
                  <button className="addNewButton"
                          onClick={this.toggleForm.bind (this, newId)}
                  >
                    Add new item
                    <i className="fas fa-plus" />
                  </button>
                  :
                  <button className="addNewButtonCancel"
                    onClick = {this.toggleForm.bind (this, newId)}>
                    Cancel
                    <i className="fas fa-times" />
                  </button>
                }

                </div>
              </div>
              <div className="gallery">
                  {showNewCard && <div className="card">
                      <Form card={newCard} toggleForm={this.toggleForm} />
                  </div>} 
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