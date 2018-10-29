import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

const Cards = (props) => {

    const { cards, deleteCard } = props;
    // console.log ('render Cards');

    return (
      <React.Fragment>
        {cards && cards.map(
          card => <Card key={card.id}
                        card={card}
                  />
        )}
      </React.Fragment>
    );
};

Cards.propTypes = {
  cards: PropTypes.array.isRequired
};


export default Cards;