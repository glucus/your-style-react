import React from 'react';
import './Card.scss';

const Card = (props) => {

  const { name, image, description, category } = props;

  return (
    <React.Fragment>
      <div className="card">
        <img className="thumbnail" src={image} alt='' />
        <h4>{name}</h4>
        <div>{description}</div>
      </div>
    </React.Fragment>
  );
};

export default Card;