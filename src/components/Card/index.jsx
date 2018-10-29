import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

class Card extends React.Component {

  state = {};

  render () {
    const { card, deleteCard } = this.props;

    return (
      <div className="card">
          <i className="far fa-edit"
              onClick={deleteCard.bind (this, card.id, card.name)} 
          />
          <img className="thumbnail" src={card.image} alt="" />
          <h4>{card.name}</h4>
          <div>{card.description}</div>
      </div>
    );
  }
} 

Card.propTypes = {
  card: PropTypes.object.isRequired,
  deleteCard: PropTypes.func.isRequired
};

export default Card;
