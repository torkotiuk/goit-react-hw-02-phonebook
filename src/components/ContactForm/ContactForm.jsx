import { Component } from 'react';
import shortid from 'shortid';
import './ContactForm.module.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    gender: 'male',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  //this pattern doesn't work for checkbox, but work for radio buttons
  handleChange = event => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    //send data to App
    this.props.getData(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Phonebook</h3>
        <label htmlFor={this.nameInputId}>
          Name:
          <input
            id={this.nameInputId}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label htmlFor={this.numberInputId}>
          Number:
          <input
            id={this.numberInputId}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <br />

        <p>Gender</p>
        <label htmlFor="">
          Male
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleChange}
            checked={this.state.gender === 'male'}
          />
        </label>
        <label htmlFor="">
          Female
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleChange}
            checked={this.state.gender === 'female'}
          />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default ContactForm;
