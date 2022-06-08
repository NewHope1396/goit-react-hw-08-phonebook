import { Formik } from 'formik';
import { Button } from 'components/ContactListItem/ContactListItem.styled';
import {
  StyledForm,
  Input,
  Label,
} from 'components/ContactForm/ContactForm.styled';
import { Overlay } from './EditModal.styled';
import {
  useEditContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';

export const EditModal = ({ setIsEditModalShow, isEditModalShow, contact }) => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const { id } = contact;

  const [editContact, { isLoading, isSuccess }] = useEditContactMutation();
  const { data } = useGetContactsQuery();

  const onFormSubmit = (values, actions) => {
    const isDublicate = data.find(contact => {
      return contact.name === values.name;
    });

    const isHisOnwName = values.name === contact.name;

    if (isDublicate && !isHisOnwName) {
      alert(`${values.name} is already in contacts`);

      return;
    }

    editContact({ id, values });

    actions.resetForm();
  };

  const handleBackdropCklick = e => {
    if (e.currentTarget !== e.target) {
      return;
    }

    setIsEditModalShow(false);
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setIsEditModalShow(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    isSuccess && setIsEditModalShow(false);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setIsEditModalShow, isSuccess]);

  return (
    isEditModalShow && (
      <Overlay onClick={handleBackdropCklick}>
        <Formik
          initialValues={{
            name: isLoading ? '' : contact.name,
            number: isLoading ? '' : contact.number,
          }}
          onSubmit={onFormSubmit}
        >
          <StyledForm>
            <Label htmlFor={nameInputId}>Name</Label>
            <Input
              id={nameInputId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />

            <Label htmlFor={numberInputId}>Number</Label>
            <Input
              id={numberInputId}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />

            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Adding...' : 'Edit'}
            </Button>
          </StyledForm>
        </Formik>
      </Overlay>
    )
  );
};
