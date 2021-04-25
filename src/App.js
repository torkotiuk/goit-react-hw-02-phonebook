import React, { Component } from 'react';
import shortid from 'shortid';
import Section from './components/share/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import initialContacts from './data/contacts.json';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  getDataFromContactForm = ({ name, number }) => {
    console.log(name);
    console.log(number);
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContact = name => {
    const contact = {
      id: shortid.generate(),
      name,
    };

    this.setState(prevState => ({
      contact: [contact, ...prevState.contact],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const normalizedThisFilterState = this.state.filter.toLowerCase();

    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedThisFilterState),
    );

    // const visibleContacts = this.state.contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    // );

    // const visibleContactsByTel = this.state.contacts.filter(contact =>
    //   contact.number.includes(this.state.filter),
    // );

    return (
      <Section>
        <ContactForm getData={this.getDataFromContactForm} />
        <br />
        <Filter
          valueState={this.state.filter}
          filterByName={this.changeFilter}
        />
        <ContactList
          items={visibleContacts}
          // items={this.state.contacts}
          onDeleteContact={this.deleteContact}
        />
      </Section>
    );
  }
}
export default App;
