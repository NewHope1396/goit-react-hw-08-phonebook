import {
  Container,
  NavList,
  CustomLink,
  ListItem,
} from 'components/AppBar/AppBar.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const isLogedIn = useSelector(state => state.auth.isLogedIn);

  return (
    <Container>
      <NavList>
        <ListItem>
          <CustomLink
            to={'/'}
            style={({ isActive }) =>
              isActive
                ? { color: '#6994f1', textDecoration: 'underline' }
                : undefined
            }
          >
            Home
          </CustomLink>
        </ListItem>
        {isLogedIn && (
          <ListItem>
            <CustomLink
              to={'/contacts'}
              style={({ isActive }) =>
                isActive
                  ? { color: '#6994f1', textDecoration: 'underline' }
                  : undefined
              }
            >
              Contacts
            </CustomLink>
          </ListItem>
        )}
      </NavList>
      {isLogedIn ? (
        <UserMenu></UserMenu>
      ) : (
        <NavList>
          <ListItem>
            <CustomLink
              to={'/register'}
              style={({ isActive }) =>
                isActive
                  ? { color: '#6994f1', textDecoration: 'underline' }
                  : undefined
              }
            >
              Register
            </CustomLink>
          </ListItem>
          <ListItem>
            <CustomLink
              to={'/login'}
              style={({ isActive }) =>
                isActive
                  ? { color: '#6994f1', textDecoration: 'underline' }
                  : undefined
              }
            >
              LogIn
            </CustomLink>
          </ListItem>
        </NavList>
      )}
    </Container>
  );
};
