import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import { Consumer } from '../../context';
import Form from '../Form';

class Card extends React.Component {

  state={
    formHidden: true,
    name: this.props.card.name,
    description: this.props.card.description
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

  handleSubmit = (name, description, e) => {
    
    this.setState ({
      name: name,
      description: description,
      formHidden: !this.state.formHidden
    })
  };

  render () {
    return (
      <Consumer>
        {
          value => {

            const { card } = this.props;
            const { dispatch } = value;
            const { formHidden, name, description } = this.state;

            return (
              <div className="card">
                  <img className="thumbnail" src={card.image} alt="" />
                  {
                    formHidden ? 
                    <React.Fragment>
                      <h4>{name}</h4>
                      <div>{description}</div>
                    </React.Fragment>
                    :
                    <Form name={name} description={description} handleSubmit={this.handleSubmit} />
                  }
                  {formHidden && <div className="icons-bottom">
                    <i className="far fa-edit" onClick={this.toggleForm} />
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
