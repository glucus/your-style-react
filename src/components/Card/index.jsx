import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

class Card extends React.Component {

  state = {};

  render () {
    const { card, deleteCard } = this.props;

    return (
      <React.Fragment>
        <div className="card">
        <div className="edit">
          <i
            className="far fa-edit"
            data-id={card.id}
            data-name={card.name}
            onClick={deleteCard} 
          />
        </div>
          <img className="thumbnail" src={card.image} alt="" />
          <h4>{card.name}</h4>
          <div>{card.description}</div>
        </div>
      </React.Fragment>
    );
  }
} 

Card.propTypes = {
  card: PropTypes.object.isRequired,
  deleteCard: PropTypes.func.isRequired
};

export default Card;
