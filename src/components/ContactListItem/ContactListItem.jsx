import {
  ListItemBtn,
  Item,
  DeleteImg,
  EditImg,
  BtnsContainer,
} from './ContactListItem.styled';
import PropTypes from 'prop-types';
import { EditModal } from 'components/EditModal/EditModal';
import { useState } from 'react';
import { DeleteModal } from 'components/DeleteModal/DeleteModal';

export const ContactListItem = ({ contact }) => {
  const [isEditModalShow, setIsEditModalShow] = useState(false);
  const [isDeleteModalShow, setIsDeleteModalShow] = useState(false);

  return (
    <Item>
      <p>
        {contact.name}: {contact.number}
      </p>
      <BtnsContainer>
        <ListItemBtn
          onClick={() => {
            setIsEditModalShow(true);
          }}
        >
          <EditImg></EditImg>
        </ListItemBtn>
        <ListItemBtn
          onClick={() => {
            setIsDeleteModalShow(true);
          }}
        >
          <DeleteImg></DeleteImg>
        </ListItemBtn>
      </BtnsContainer>
      <EditModal
        setIsEditModalShow={setIsEditModalShow}
        isEditModalShow={isEditModalShow}
        contact={contact}
      ></EditModal>
      <DeleteModal
        setIsDeleteModalShow={setIsDeleteModalShow}
        isDeleteModalShow={isDeleteModalShow}
        contact={contact}
      ></DeleteModal>
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
