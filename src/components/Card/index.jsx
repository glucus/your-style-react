import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import { Consumer } from '../../context';
import Form from '../Form';

class Card extends React.Component {

  state={
    formHidden: true
  }

  onClickDelete = (id, name, dispatch) => {
    dispatch ({
      type: 'DELETE_ITEM',
      payload: { id: id, name: name }
    })
  }

  toggleForm = () => {
    this.setState ({
      formHidden: !this.state.formHidden
    })
  }

  render () {
    return (
      <Consumer>
        {
          value => {

            const { card } = this.props;
            const { dispatch } = value;
            const { formHidden } = this.state;

            return (
              <div className="card">
                  <img className="thumbnail" src={card.image} alt="" />
                  {
                    formHidden ? 
                    <React.Fragment>
                      <h4>{card.name}</h4>
                      <div>{card.description}</div>
                    </React.Fragment>
                    :
                    <Form />
                  }
                  <div className="icons-bottom">
                    {
                      formHidden ? 
                        <i className="far fa-edit" onClick={this.toggleForm} /> :
                        <i className="fas fa-check" onClick={this.toggleForm} />
                    }
                    {formHidden && <i className="far fa-trash-alt" 
                        onClick={this.onClickDelete.bind (this, card.id, card.name, dispatch)}
                      />}
                  </div>
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
