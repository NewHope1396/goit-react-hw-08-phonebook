import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
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
  const [createUser, { isLoading, isSuccess, isError, data, error }] =
    useCreateUserMutation();

  // const onSubmit = (values, actions) => {
  //   createUser(values)
  //     .then(res => {
  //       if (res.data) {
  //         dispatch(setUser(res.data));
  //         actions.resetForm();
  //       } else {
  //         alert(
  //           'Wrong passwor or email. Password must be at least 7 characters long'
  //         );
  //       }
  //     })
  //     .catch(err => console.log(err));
  // };

  const onSubmit = (values, actions) => {
    createUser(values);
    isSuccess && actions.resetForm();
  };

  useEffect(() => {
    const getErrorMessage = () => {
      const isEmailInvalid = error?.data?.errors?.email;
      const isPasswordInvalid = error?.data?.errors?.password;
      if (isEmailInvalid && isPasswordInvalid) {
        alert(
          'Invalid email and password. Password must be at least 7 characters long'
        );
        return;
      }
      error?.data?.errors?.email && alert('Invalid email');
      error?.data?.errors?.password &&
        alert('Invalid password. Password must be at least 7 characters long');
    };

    isSuccess && dispatch(setUser(data));
    isError && getErrorMessage();
  }, [data, dispatch, error, isError, isSuccess]);

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
