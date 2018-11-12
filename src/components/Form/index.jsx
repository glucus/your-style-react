import React from 'react';
import './Form.scss';
import { Consumer } from '../../context';

        //   const newCard = {
        //     id: clothes.length,
        //     name: 'new item',
        //     image: 'https://via.placeholder.com/210x250.png?text=your-style.com',
        //     description: 'new item',
        //     category: '',
        //     target: ''
        // }

class Form extends React.Component {

  constructor (props) {
    super(props);

    const { card } = this.props;

    this.state = {
      id: card.id,
      image: card.image,
      name: card.name,
      description: card.description
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

onClickSubmit = (id, name, description, image, dispatch) => {
  this.props.toggleForm (id);

  const newItem = {id, name, description, image};
  this.handleSubmit (newItem, dispatch);
}


  render () {

    return (
        <Consumer>
          {
            value => {
            
              const fieldsArr = Object.keys(this.state); // Object.getOwnPropertyNames();
            // console.log(fieldsArr);

            const { dispatch } = value;

            const { id, name, description, image } = this.state;

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
                                    required
                              />
                            </div>
                  )}
                  <div className="icons-bottom">
                    <i className="fas fa-check"
                       onClick = {this.onClickSubmit.bind (this, id, name, description, image, dispatch)}
                    />
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