import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

class Cards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.cards
    };
  }

  render() {
    const { cards } = this.state;

    return (
      <React.Fragment>
        {cards && cards.map (
          card => <Card 
                    key={card.id}
                    name={card.name}
                    description={card.description}
                    image={card.image}
                  />
        )}
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