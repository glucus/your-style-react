import React from 'react';
import './Gallery.scss';

import { Consumer } from '../../context';
import Cards from '../Cards';
import CategoryTabs from '../CategoryTabs';

class Gallery extends React.Component {

  state = {
    categoryName: '',
    categoryDescription: 'All items',
    filteredItems: []
  };

  filterByCategory = (item, category) => item.category === category;

  filterItems = (category) => {
    const { galleryItems } = this.props;
    const filteredItems = galleryItems.filter(
      item => this.filterByCategory(item, category)
    );
    this.setState ({
      filteredItems: filteredItems
    })
  }

  categoryClick = (name, description, e) => {
    this.filterItems(name);
    this.setState({
      categoryName: name,
      categoryDescription: description
    });
  }

  render () {
    return (
      <Consumer>
        {value => {

          const { clothes, categories } = value;
          const { categoryName, categoryDescription } = this.state; 

          return (
            <React.Fragment>
              <div className="tabsAndHeading">
                <CategoryTabs categories={categories}
                              categoryName={categoryName}
                              handleClick={this.categoryClick} />
                <h2>{categoryDescription}</h2>
              </div>
              <div className="gallery">
                  <Cards cards={clothes} />
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