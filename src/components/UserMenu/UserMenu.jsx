import {
  LogoutBtn,
  ProfileLabel,
  ProfileIcon,
} from 'components/UserMenu/UserMenu.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { resetUser } from 'redux/authSlice';
import { useLogoutMutation } from 'redux/authApi';

export const UserMenu = () => {
  const userName = useSelector(state => state.auth.user?.name);
  const isLogedIn = useSelector(state => state.auth.isLogedIn);
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();

  return (
    <ProfileLabel>
      <ProfileIcon>A</ProfileIcon>{' '}
      {isLogedIn ? `Hello, ${userName}` : 'Need LogIn'}
      <LogoutBtn
        type="button"
        onClick={() => {
          logout().then(dispatch(resetUser()));
        }}
      >
        Logout
      </LogoutBtn>
    </ProfileLabel>
  );
};
