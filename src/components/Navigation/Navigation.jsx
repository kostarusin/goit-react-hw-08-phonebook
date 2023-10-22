import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './Navigation.module.css';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <NavLink
        exact
        className={style.link}
        activeClassName={style.active}
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          exact
          className={style.link}
          activeClassName={style.active}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
