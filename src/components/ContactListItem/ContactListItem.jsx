import { Button, Item } from './ContactListItem.styled';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { EditModal } from 'components/EditModal/EditModal';
import { useState } from 'react';

export const ContactListItem = ({ contact }) => {
  const [deleteContact, result] = useDeleteContactMutation();

  const [isModalShow, setIsModalShow] = useState(false);

  return (
    <Item>
      <p>
        {contact.name}: {contact.number}
      </p>
      <Button
        onClick={() => {
          setIsModalShow(true);
        }}
      >
        Edit
      </Button>
      <Button
        type="button"
        onClick={() => deleteContact(contact.id)}
        disabled={result.isLoading}
      >
        {result.isLoading ? 'Wait...' : 'Delete'}
      </Button>
      <EditModal
        setIsModalShow={setIsModalShow}
        isModalShow={isModalShow}
        contact={contact}
      ></EditModal>
    </Item>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
