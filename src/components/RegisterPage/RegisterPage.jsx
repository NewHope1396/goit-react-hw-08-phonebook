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
      .then(res => {
        if (res.data) {
          dispatch(setUser(res.data));
          actions.resetForm();
        } else {
          alert(
            'Wrong passwor or email. Password must be at least 7 characters long'
          );
        }
      })
      .catch(err => console.log(err));
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
