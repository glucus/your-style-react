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
    const { categoryDescription, filteredItems, categoryName } = this.state;

    return (
      <React.Fragment>
        <div className="tabsAndHeading">
          <CategoryTabs categories={this.props.categories}
                        categoryName={categoryName}
                        handleClick={this.categoryClick} />
          <h2>{categoryDescription}</h2>
        </div>
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