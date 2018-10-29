import React from 'react';
import './Gallery.scss';

import Cards from '../Cards';
import CategoryTabs from '../CategoryTabs';

class Gallery extends React.Component {

  state = {
    categories: this.props.categories,
    galleryItems: this.props.galleryItems,
    categoryName: "tops"
  };

  selectCategory = () => {
    const selectedCategory = [...this.state.categories].filter(
      category => category.name === this.state.categoryName
    );
    return selectedCategory;
  }

  filterByCategory = (item, targetCategory) => item.category === targetCategory;

  filterItems = (selectedCategory) => {
    const filteredItems = [...this.state.galleryItems].filter(
      item => this.filterByCategory(item, selectedCategory)
    );
    return filteredItems;
  }

  render () {
    const { categoryName } = this.state;

    const selectedCategory = this.selectCategory();
    const categoryDescription = selectedCategory && selectedCategory[0] && 
          selectedCategory[0].description;
    const selectedItems = this.filterItems(categoryName);

    return (
      <React.Fragment>
        <CategoryTabs categories={this.props.categories} 
                      handleClick={e => console.log(e.target)} />
      <h1>{categoryDescription}</h1>
      <div className="gallery">
          {selectedItems && <Cards cards={selectedItems} />}
      </div>
    </React.Fragment>
    );
  }
}

export default Gallery;