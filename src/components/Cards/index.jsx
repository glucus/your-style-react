import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

const Cards = (props) => {

    const { cards, deleteCard } = props;

    return (
      <React.Fragment>
        {cards && cards.map (card => (
          <Card 
            key={card.id}
            id={card.id}
            name={card.name}
            description={card.description}
            image={card.image}
            deleteCard={deleteCard}
          />
          ))}
      </React.Fragment>
    );
};

Cards.propTypes = {
  cards: PropTypes.array.isRequired
};


export default Cards;