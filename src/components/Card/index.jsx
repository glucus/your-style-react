import React from 'react';
import './Card.scss';

const Card = (props) => {

  const { name, image, description, category } = props;

  return (
    <div>
      <img className="thumbnail" src={image} alt='' />
      <h4>{name}</h4>
      <div>{description}</div>
    </div>
  );
};

export default Card;