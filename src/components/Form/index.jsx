import React from 'react';
import './Form.scss';

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

    // const { name, description } = this.state;

    const fieldsArr = ['name', 'description'];

    return (
      <form>
        {fieldsArr.map (
          item => <div className="form-row" key={item}>
                    <label>
                      <span className="form-label">{item}</span>
                      <input type='text' name={item} value={this.state[item]} onChange={this.handleChange} />
                     </label>
                  </div>
        )}
      </form>
    );
  }
}

export default Form;