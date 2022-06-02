import { List } from './ContactList.styled';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useGetContactsQuery } from 'redux/contactsSlice';
import PropTypes from 'prop-types';

export const ContactList = ({ filter }) => {
  const { data, isLoading } = useGetContactsQuery();

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = data?.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return isLoading ? (
    <h2>Загрузка...</h2>
  ) : (
    <List>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact}></ContactListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
};
