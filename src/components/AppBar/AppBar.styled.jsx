import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  background-color: #fff4d8;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  align-items: center;
  border-bottom: 1px solid black;
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const CustomLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 700;
  :hover {
    color: #6994f1;
  }
`;

export const ListItem = styled.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`;
