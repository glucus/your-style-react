import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

class Cards extends React.Component {


  render () {

    const { cards } = this.props;

    return (
      <React.Fragment>
        {cards && cards.map (
          card => <Card key={card.id} card={card} formHidden={true} />
        )}
      </React.Fragment>
    );
  }
}


Cards.propTypes = {
  cards: PropTypes.array.isRequired
};


export default Cards;