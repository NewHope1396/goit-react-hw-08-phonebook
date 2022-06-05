import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import {
  StyledForm,
  Input,
  Label,
  Button,
} from 'components/ContactForm/ContactForm.styled';
import { useCreateUserMutation } from 'redux/authApi';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/authSlice';

const nameInputId = nanoid();
const emailInputId = nanoid();
const passwordInputId = nanoid();

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [createUser, { isLoading }] = useCreateUserMutation();

  const onSubmit = (values, actions) => {
    createUser(values)
      .then(res => dispatch(setUser(res.data)))
      .catch(err => console.log(err));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={onSubmit}
    >
      <StyledForm>
        <Label htmlFor={nameInputId}>Name</Label>
        <Input id={nameInputId} type="text" name="name" />

        <Label htmlFor={emailInputId}>Email</Label>
        <Input id={emailInputId} type="email" name="email" />

        <Label htmlFor={passwordInputId}>Password</Label>
        <Input id={passwordInputId} type="password" name="password" />

        <Button type="submit" disabled={isLoading}>
          Create Account
        </Button>
      </StyledForm>
    </Formik>
  );
};