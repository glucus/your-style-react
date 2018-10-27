import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = props => {
  
  const { name, image, description, id, deleteCard } = props;

  return (
    <React.Fragment>
      <div className="card">
      <div className="edit">
        <i className="far fa-edit" data-id={id} onClick={deleteCard} />
      </div>
        <img className="thumbnail" src={image} alt="" />
        <h4>{name}</h4>
        <div>{description}</div>
      </div>
    </React.Fragment>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  category: PropTypes.string,
  deleteCard: PropTypes.func.isRequired
};

export default Card;
