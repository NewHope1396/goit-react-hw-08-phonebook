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
  const userEmail = useSelector(state => state.auth.user?.email);

  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();

  return (
    <ProfileLabel>
      <ProfileIcon>{userName.slice(0, 1).toUpperCase()}</ProfileIcon>{' '}
      {userEmail}
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
