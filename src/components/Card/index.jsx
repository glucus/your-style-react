import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import { Consumer } from '../../context';

import CardInner from './CardInner';
import Form from '../Form';

class Card extends React.Component {

  state = {
    formHidden: true
  }

  onClickDelete = (id, name, dispatch) => {
    dispatch ({
      type: 'DELETE_ITEM',
      payload: { id: id, name: name }
    })
  }

  toggleForm = (id, e) => {
    // console.log (`form toggled for card with id: ${id}`);

    this.setState ({
      formHidden: !this.state.formHidden
    })
  }

  render () {

    const { formHidden } = this.state;

    return (
      <Consumer>
        {
          value => {

            const { card } = this.props;
            const { dispatch } = value;

            return (
              <div className="card" key={card.id}>
                  <div className="card-info">
                  {formHidden ? 
                      <CardInner card={card} />
                        :
                      <Form card={card} />
                  }
                  </div>
                  {formHidden && <div className="icons-bottom">
                    <i className="far fa-edit"
                      onClick={this.toggleForm.bind (this, card.id)} />
                    <i className="far fa-trash-alt" 
                        onClick={this.onClickDelete.bind (this, card.id, card.name, dispatch)}
                    />
                  </div>}
              </div>
            );
          }
        }
        </Consumer>
    );
  }
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
