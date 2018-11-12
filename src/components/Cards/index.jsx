import React from 'react';
import PropTypes from 'prop-types';


import Card from '../Card';
import Form from '../Form';

class Cards extends React.Component {

  state = {
    formHidden: true
  }

  // toggleForm = () => {

  //   this.setState ({
  //     formHidden: !this.state.formHidden
  //   })
  // }

  toggleForm = (id, e) => {
    console.log (`form toggled for card with id: ${id}`);
  }

  render () {

    const { cards } = this.props;
    const { formHidden } = this.state;

    return (
      <React.Fragment>
        {cards && cards.map (
          card => formHidden ? 
              <Card key={card.id} card={card} toggleForm={this.toggleForm} />
                :
              <Form key={card.id} card={card} />
        )}
      </React.Fragment>
    );
  }
}


Cards.propTypes = {
  cards: PropTypes.array.isRequired
};


export default Cards;