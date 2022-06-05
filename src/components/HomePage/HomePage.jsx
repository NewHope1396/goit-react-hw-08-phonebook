import { useSelector } from 'react-redux';

export const HomePage = () => {
  const userName = useSelector(state => state.auth.user?.name ?? 'Guest');

  return (
    <>
      <h2>Welcome, {userName}</h2>
      <h3>Here is the HomePage of the Phonebook</h3>
    </>
  );
};
