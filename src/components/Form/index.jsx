import React from 'react';
import './Form.scss';
import { throws } from 'assert';
import { Consumer } from '../../context';

class Form extends React.Component {

  constructor () {
    super();

    this.state = {
      image: '',
      name: '',
      description: '',
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

  handleSubmit = (name, description, image, id, dispatch) => {

    const newItem = {name, description, image, id};

    dispatch ({
        type: 'ADD_NEW_ITEM',
        payload: newItem
    })
}


  render () {

    return (
        <Consumer>
          {
            value => {
            
              const fieldsArr = Object.keys(this.state); // Object.getOwnPropertyNames();
            // console.log(fieldsArr);

            const { dispatch } = value;

              const updatedName = this.state.name || this.props.name;
              const updatedDescription = this.state.description || this.props.description;
              const updatedImage = this.state.image || this.props.image;
              const id = this.props.id;

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
                  <div className="icons-bottom">
                    <i className="fas fa-check" onClick={
                      this.handleSubmit.bind(this, updatedName, updatedDescription, updatedImage, id, dispatch)
                    } />
                  </div>
                </form>
              );
            }
          }
        </Consumer>
    )
  }
}

export default Form;