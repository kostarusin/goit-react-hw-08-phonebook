import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Link } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';
import UserMenu from 'components/UserMenu/UserMenu';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Contacts</Link>
          <Link to="/register">Registration</Link>
          <Link to="/login">Login</Link>
        </nav>
        {<UserMenu />}
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
