import React from 'react';
import './Form.scss';
import { throws } from 'assert';

class Form extends React.Component {

  constructor () {
    super();

    this.state = {
      name: '',
      description: ''
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


  render () {

    const fieldsArr = ['name', 'description'];

    const updatedName = this.state.name || this.props.name;
    const updatedDescription = this.state.description || this.props.description;

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
            this.props.handleSubmit.bind(this, updatedName, updatedDescription)
          } />
        </div>
      </form>
    );
  }
}

export default Form;