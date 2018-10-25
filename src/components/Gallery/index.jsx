import React from 'react';
import './Gallery.scss';

import Card from '../Card/index';

const Gallery = (props) => {

  const { galleryItems } = props;

  return (
    <div className="gallery">
      {galleryItems && galleryItems.map (
        item => <Card 
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
      )}
    </div>
  );
};

export default Gallery;