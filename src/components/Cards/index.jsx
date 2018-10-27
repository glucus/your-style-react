import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

class Cards extends React.Component {

  state = {
    cards: this.props.cards
  };

  deleteCard = (e) => {
    const targetId = e.target.dataset.id;
    console.log (`delete card with id ${targetId}`);

    const copyCards = [...this.state.cards];
    const newCards = copyCards.filter (card => card.id != targetId);
    console.log (newCards);

    this.setState ({
      cards: newCards
    });
  };

  render() {
    const { cards } = this.state;

    return (
      <React.Fragment>
        {cards && cards.map (card => (
          <Card 
            key={card.id}
            id={card.id}
            name={card.name}
            description={card.description}
            image={card.image}
            deleteCard={this.deleteCard}
          />
          ))}
      </React.Fragment>
    );
  }
}

// Cards.defaultProps = {
//   cards: []
// };

Cards.propTypes = {
  cards: PropTypes.array.isRequired
};




export default Cards;