import { Container } from './ContactsSection.styled';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';

export const ContactsSection = ({ filter, setFilter }) => {
  return (
    <>
      <ContactForm />
      <Container>
        <h2>Contacts</h2>
        <Filter onChange={setFilter} filter={filter}></Filter>
        <ContactList filter={filter}></ContactList>
      </Container>
    </>
  );
};
