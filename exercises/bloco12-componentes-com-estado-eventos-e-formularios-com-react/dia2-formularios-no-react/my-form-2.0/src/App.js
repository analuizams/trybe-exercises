import React, { Component } from 'react';
import './App.css';
import Form from './Form.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      type: '',
    };
  }

    handleChange = event => {
      let { name, value } = event.target;

      if (name === 'name') value = value.toUpperCase();

      this.changeState(name, value);
    }

    changeState(name, value) {
      this.setState(() => ({
        [name]: value,
      }));
    }
  render() {
    return (
      <Form
        handleChange={this.handleChange}
      />

    )
  }
}



export default App;
