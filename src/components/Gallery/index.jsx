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
    const filteredItems = [...this.props.galleryItems].filter(
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

  deleteItem = (e) => {
    const targetId = e.target.dataset.id;
    const targetName = e.target.dataset.name;

    const answer = window.confirm (`Are you sure you want to delete ${targetName}?`);

    const afterDeletion = [...this.state.filteredItems].filter(
      card => card.id.toString() !== targetId.toString()
    );

    if (answer) {
      this.setState ({
        filteredItems: afterDeletion
      });
    }
  };

  render () {
    const { categoryDescription, filteredItems } = this.state;
    // console.log (filteredItems);

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