import React from 'react';
import './Gallery.scss';

import Cards from '../Cards';
import CategoryTabs from '../CategoryTabs';

class Gallery extends React.Component {

  state = {
    categories: this.props.categories,
    galleryItems: this.props.galleryItems,
    categoryName: '',
    categoryDescription: '',
    filteredItems: this.props.galleryItems
  };

  filterByCategory = (item, category) => item.category === category;

  filterItems = (category) => {
    const filteredItems = [...this.state.galleryItems].filter(
      item => this.filterByCategory(item, category)
    );
    return filteredItems;
  }

  categoryClick = (e) => {

    const categoryName = e.target.dataset.name;
    const categoryDescription = e.target.dataset.description;

    this.setState({
      categoryName: categoryName,
      categoryDescription: categoryDescription,
      filteredItems: this.filterItems(categoryName)
    });
  }

  render () {
    const { categoryName, categoryDescription, filteredItems } = this.state;

    console.log (filteredItems);

    return (
      <React.Fragment>
        <CategoryTabs categories={this.props.categories} 
                      handleClick={this.categoryClick} />
      <h1>{categoryDescription}</h1>
      <div className="gallery">
          <Cards cards={filteredItems} />
      </div>
    </React.Fragment>
    );
  }
}

export default Gallery;