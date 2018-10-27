import React from 'react';
import './Gallery.scss';

import Cards from '../Cards';

const Gallery = (props) => {

  const { galleryItems } = props;

  return (
    <div className="gallery">
        {galleryItems && <Cards cards={galleryItems} />}
    </div>
  );
};

export default Gallery;