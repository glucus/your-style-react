import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import { Consumer } from '../../context';

class Card extends React.Component {

  onClickDelete = (id, name, dispatch) => {

    dispatch ({
      type: 'DELETE_ITEM',
      payload: {
        id: id,
        name: name
      }
    })
    
  }

  render () {
    return (
      <Consumer>
        {
          value => {

            const { card } = this.props;
            const { dispatch } = value;

            return (
              <div className="card">
                  <i className="far fa-edit"
                      onClick={ this.onClickDelete.bind (this, card.id, card.name, dispatch) }
                  />
                  <img className="thumbnail" src={card.image} alt="" />
                  <h4>{card.name}</h4>
                  <div>{card.description}</div>
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
