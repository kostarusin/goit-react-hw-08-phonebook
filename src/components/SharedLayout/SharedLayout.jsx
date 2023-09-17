import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Link } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

const SharedLayout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Contacts</Link>
          {!isLoggedIn && <Link to="/register">Registration</Link>}
          {!isLoggedIn && <Link to="/login">Login</Link>}
        </nav>
        {isLoggedIn && <UserMenu />}
      </Header>
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
