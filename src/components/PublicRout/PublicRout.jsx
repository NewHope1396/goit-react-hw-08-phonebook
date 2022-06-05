import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PublicRout = ({ children }) => {
  const isLogedIn = useSelector(state => state.auth.isLogedIn);

  return !isLogedIn ? children : <Navigate to={'/contacts'} />;
};
