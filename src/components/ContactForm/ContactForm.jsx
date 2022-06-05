import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { StyledForm, Input, Label, Button } from './ContactForm.styled';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSlice';

const nameInputId = nanoid();
const numberInputId = nanoid();

export const ContactForm = () => {
  const [addContact, result] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  const onFormSubmit = (values, actions) => {
    const isDublicate = data.find(contact => {
      return contact.name === values.name;
    });

    if (isDublicate) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    addContact(values);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
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

        <Button type="submit" disabled={result.isLoading}>
          {result.isLoading ? 'Adding...' : 'Add contact'}
        </Button>
      </StyledForm>
    </Formik>
  );
};
