import React from 'react';
import './Gallery.scss';

import Cards from '../Cards';

const Gallery = (props) => {

  const { galleryItems, categories } = props;


  const filterByCategory = (item, targetCategory) => item.category === targetCategory;

  const initialData = [...galleryItems];
  const filteredItems = initialData.filter(item => filterByCategory(item, "pants"));
  const filteredCategory = [...categories].filter(category => category.name === "pants");

  return (
    <React.Fragment>
      <h1>{filteredCategory && filteredCategory[0] && filteredCategory[0].description}</h1>
      <div className="gallery">
          {filteredItems && <Cards cards={filteredItems} />}
      </div>
    </React.Fragment>
  );
};

export default Gallery;