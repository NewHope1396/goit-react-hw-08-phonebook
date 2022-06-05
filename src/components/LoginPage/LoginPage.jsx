import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import {
  StyledForm,
  Input,
  Label,
  Button,
} from 'components/ContactForm/ContactForm.styled';
import { setUser } from 'redux/authSlice';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from 'redux/authApi';

const emailInputId = nanoid();
const passwordInputId = nanoid();

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = (values, actions) => {
    login(values)
      .then(res => {
        if (res.data) {
          dispatch(setUser(res.data));
          actions.resetForm();
        } else {
          alert('Wrong password or email');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={onSubmit}
    >
      <StyledForm>
        <Label htmlFor={emailInputId}>Email</Label>
        <Input id={emailInputId} type="email" name="email" />

        <Label htmlFor={passwordInputId}>Password</Label>
        <Input id={passwordInputId} type="password" name="password" />

        <Button type="submit" disabled={isLoading}>
          LogIn
        </Button>
      </StyledForm>
    </Formik>
  );
};
