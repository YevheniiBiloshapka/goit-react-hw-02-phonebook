import { Component } from 'react';
import { Box, Section, Results } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
// import { nanoid } from 'nanoid'
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  deleteTodo = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const { deleteTodo, changeFilter, getVisibleTodos } = this;

    return (
      <Section>
        <Box>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />
          {contacts.length === 0 ? (
            <Results>You don't have any contact 😓</Results>
          ) : (
            <>
              <Results>Contact list:</Results>
              <ContactList
                contacts={getVisibleTodos()}
                onDeleteContact={deleteTodo}
              />
            </>
          )}
        </Box>
        <Box>
          <h1>Phonebook</h1>
          <ContactForm />
        </Box>
      </Section>
    );
  }
}