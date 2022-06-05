import {
  Container,
  NavList,
  CustomLink,
  ListItem,
} from 'components/AppBar/AppBar.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
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
      </NavList>
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
      <UserMenu></UserMenu>
    </Container>
  );
};
