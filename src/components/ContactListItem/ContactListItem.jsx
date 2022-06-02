import { Button, Item } from './ContactListItem.styled';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsSlice';

export const ContactListItem = ({ contact }) => {
  const [deleteContact, result] = useDeleteContactMutation();

  return (
    <Item>
      <p>
        {contact.name}: {contact.phone}
      </p>
      <Button
        type="button"
        onClick={() => deleteContact(contact.id)}
        disabled={result.isLoading}
      >
        {result.isLoading ? 'Wait...' : 'Delete'}
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    createdAt: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
