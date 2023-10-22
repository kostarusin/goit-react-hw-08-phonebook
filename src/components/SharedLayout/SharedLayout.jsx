import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import style from './SharedLayout.styled.module.css';
import Loader from 'components/Loader/Loader';
import AppBar from 'components/AppBar/AppBar';

const SharedLayout = () => {
  return (
    <div className={style.container}>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};

export default SharedLayout;
