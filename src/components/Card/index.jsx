import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import { Consumer } from '../../context';

import CardInner from './CardInner';
import Form from '../Form';

class Card extends React.Component {

  state = {
    formHidden: this.props.formHidden
  }

  onClickDelete = (id, name, dispatch) => {
    
    dispatch ({
      type: 'DELETE_ITEM',
      payload: { id: id, name: name }
    })
  }

  toggleNewCard = (dispatch) => {
    // console.log (`toggling form for card with id ${id}`);
    dispatch ({type: 'TOGGLE_NEW_CARD'});
  }


  toggleForm = (id, e) => {
    // console.log (`toggling form for card with id ${id}`);
    this.setState ({
      formHidden: !this.state.formHidden
    })
  }

  // toggleNewCard = (id, dispatch) => {
  //   console.log (`toggling form for card with id ${id}`);
  //   dispatch ({type: 'TOGGLE_NEW_CARD'});
  // }

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
                      <Form card={card} toggleForm={this.toggleForm} />
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

// Card.defaultProps = {
//   formHidden: true
// };

Card.propTypes = {
  card: PropTypes.object.isRequired,
  formHidden: PropTypes.bool
};

export default Card;
