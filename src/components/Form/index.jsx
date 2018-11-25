import React from 'react';
import PropTypes from 'prop-types';

import './Form.scss';
import { Consumer } from '../../context';

class Form extends React.Component {

  constructor (props) {
    super(props);

    const { card } = this.props;

    this.state = {
      id: card.id,
      image: card.image,
      name: card.name,
      description: card.description,
      category: card.category
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {

    const field = e.target.name;
    const value = e.target.value;

    this.setState ({
      [field]: value
    })
  };


  handleSubmit = (newItem, dispatch) => {
       console.log ('submitting item with id', newItem.id);

        dispatch ({
        type: 'SUBMIT_ITEM',
        payload: newItem
    })
}

onClickSubmit = (id, name, description, image, category, dispatch) => {
  this.props.toggleForm (id);

  const newItem = {id, name, description, image, category};
  this.handleSubmit (newItem, dispatch);
}


  render () {

    return (
        <Consumer>
          {
            value => {
            
              const fieldsArr = ['image', 'name', 'description'];

              // const fieldsArr = Object.keys(this.state); // Object.getOwnPropertyNames();
            // console.log(fieldsArr);

            const { dispatch, categories } = value;

            const { id, name, description, image, category } = this.state;

              return (
                <form>
                  {fieldsArr.map (
                    item => <div className="form-row" key={item}>
                              <label className="form-label">{item}</label>
                              <input type='text'
                                    name={item}
                                    value={this.state[item]}
                                    onChange={this.handleChange}
                                    placeholder={this.props[item]}
                              />
                            </div>
                  )}
                   <div className="form-row">
                    <label className="form-label">category</label>
                    <select value={this.state.category} name='category' onChange={this.handleChange}>
                      {categories.map (category => <option 
                                                      key={category.name}
                                                      value={category.name}
                                                  >
                                                        {category.description}
                                                    </option>
                      )}
                    </select>
                    </div>
                  <div className="icons-bottom">
                    <i className="fas fa-check"
                       onClick = {this.onClickSubmit.bind (
                         this, id, name, description, image, category, dispatch
                       )}
                    />
                    <i className="fas fa-times" onClick = {this.props.toggleForm} />
                  </div>
                </form>
              );
            }
          }
        </Consumer>
    )
  }
}


Form.propTypes = {
  card: PropTypes.object.isRequired//,
  // categories: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Form;