import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { NavContainer } from './Header.styled';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 32px;
  color: #7a7a7a;
  &.active {
    color: white;
  }
`;

const Main = styled.main`
  padding-left: 20px;
  padding-right: 20px;
`;

const Header = () => {
  return (
    <>
      <header>
        <NavContainer>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
        </NavContainer>
      </header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
export default Header;
