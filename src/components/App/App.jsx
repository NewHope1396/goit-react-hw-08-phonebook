import { Container } from './App.styled';
import { AppBar } from 'components/AppBar/AppBar';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ContactsSection } from 'components/ContactsSection/ContactsSection';
import { HomePage } from 'components/HomePage/HomePage';
import { RegisterPage } from 'components/RegisterPage/RegisterPage';
import { LoginPage } from 'components/LoginPage/LoginPage';
import { PrivateRout } from 'components/PrivateRout/PrivateRout';
import { PublicRout } from 'components/PublicRout/PublicRout';
import { useRefreshUserQuery } from 'redux/authApi';
import { setUser } from 'redux/authSlice';

export const App = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const { isLogedIn, token } = useSelector(state => state.auth);
  const { data } = useRefreshUserQuery();
  token && !isLogedIn && dispatch(setUser({ ...data, token }));

  return (
    <Container>
      <AppBar></AppBar>
      <h1>Phonebook</h1>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/contacts"
          element={
            <PrivateRout>
              <ContactsSection filter={filter} setFilter={setFilter} />
            </PrivateRout>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <PublicRout>
              <RegisterPage />
            </PublicRout>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <PublicRout>
              <LoginPage />
            </PublicRout>
          }
        ></Route>
        <Route path="*" element={<Navigate to={'/'} />}></Route>
      </Routes>
    </Container>
  );
};
