import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = props => {
  const { name, image, description, category } = props;

  return (
    <React.Fragment>
      <div className="card">
        <img className="thumbnail" src={image} alt="" />
        <h4>{name}</h4>
        <div>{description}</div>
      </div>
    </React.Fragment>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired
};

export default Card;
