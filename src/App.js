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
    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

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

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const normalizedThisFilterState = this.state.filter.toLowerCase();

    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedThisFilterState),
    );

    return (
      <Section>
        <ContactForm getData={this.getDataFromContactForm} />
        <ContactList
          items={visibleContacts}
          onDeleteContact={this.deleteContact}
        >
          <Filter
            valueState={this.state.filter}
            filterByName={this.changeFilter}
          />
        </ContactList>
      </Section>
    );
  }
}
export default App;
