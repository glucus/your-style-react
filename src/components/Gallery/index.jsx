import React from 'react';
import './Gallery.scss';

import { Consumer } from '../../context';
import Cards from '../Cards';
import CategoryTabs from '../CategoryTabs';

class Gallery extends React.Component {

  render () {
    return (
      <Consumer>
        {value => {
          const { filteredClothes, categories, categoryName, categoryDescription } = value;

          return (
            <React.Fragment>
              <div className="tabsAndHeading">
                <CategoryTabs categories={categories}
                              categoryName={categoryName}
                />
                <div className="headingAndButton">
                  <h2>{categoryDescription}</h2>
                  <button className="addNewButton"
                          onClick = {() => console.log ('Add new item')}>
                    Add new item
                    <i class="fas fa-plus" />
                  </button>
                </div>
              </div>
              <div className="gallery">
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