import { Overlay } from 'components/EditModal/EditModal.styled';
import { useEffect } from 'react';
import { Button } from 'components/ContactListItem/ContactListItem.styled';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import {
  DeleteModalContainer,
  DeleteButonsContainer,
} from './DeleteModal.styled';

export const DeleteModal = ({
  contact,
  isDeleteModalShow,
  setIsDeleteModalShow,
}) => {
  const [deleteContact, { isLoading, isSuccess }] = useDeleteContactMutation();

  const handleBackdropCklick = e => {
    if (e.currentTarget !== e.target) {
      return;
    }

    setIsDeleteModalShow(false);
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setIsDeleteModalShow(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    isSuccess && setIsDeleteModalShow(false);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setIsDeleteModalShow, isSuccess]);

  return (
    isDeleteModalShow && (
      <Overlay onClick={handleBackdropCklick}>
        <DeleteModalContainer>
          <h3>{`Are you sure to delete contact ${contact.name}?`}</h3>
          <DeleteButonsContainer>
            <Button
              type="button"
              onClick={() => deleteContact(contact.id)}
              disabled={isLoading}
            >
              {isLoading ? 'Wait...' : 'Accept'}
            </Button>
            <Button
              onClick={() => {
                setIsDeleteModalShow(false);
              }}
            >
              Decline
            </Button>
          </DeleteButonsContainer>
        </DeleteModalContainer>
      </Overlay>
    )
  );
};
