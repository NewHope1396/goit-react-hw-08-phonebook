import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container, ContactsSection } from './App.styled';
import { useState } from 'react';

export const App = () => {
  const [filter, setFilter] = useState('');

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>

      <h2>Contacts</h2>
      <ContactsSection>
        <Filter onChange={setFilter} filter={filter}></Filter>
        <ContactList filter={filter}></ContactList>
      </ContactsSection>
    </Container>
  );
};
