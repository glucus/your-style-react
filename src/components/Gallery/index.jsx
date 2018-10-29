import React from 'react';
import './Gallery.scss';

import Cards from '../Cards';
import CategoryTabs from '../CategoryTabs';

class Gallery extends React.Component {

  state = {
    categoryName: '',
    categoryDescription: 'All items',
    filteredItems: this.props.galleryItems
  };

  filterByCategory = (item, category) => item.category === category;

  filterItems = (category) => {

    const { galleryItems } = this.props;

    const filteredItems = galleryItems.filter(
      item => this.filterByCategory(item, category)
    );
    return filteredItems;
  }

  categoryClick = (name, description, e) => {

    this.setState({
      categoryName: name,
      categoryDescription: description,
      filteredItems: this.filterItems(name)
    });
  }

  deleteItem = (id, name, e) => {

    const { filteredItems } = this.state;
    const answer = window.confirm (`Are you sure you want to delete ${name}?`);

    const remainingItems = filteredItems.filter(
      card => card.id.toString() !== id.toString()
    );

    if (answer) {
      this.setState ({
        filteredItems: remainingItems
      });
    }
  };

  render () {
    const { categoryDescription, filteredItems } = this.state;

    return (
      <React.Fragment>
        <CategoryTabs categories={this.props.categories} 
                      handleClick={this.categoryClick} />
        <h1>{categoryDescription}</h1>
        <div className="gallery">
            <Cards cards={filteredItems}
                  deleteCard={this.deleteItem}
            />
        </div>
    </React.Fragment>
    );
  }
}

export default Gallery;