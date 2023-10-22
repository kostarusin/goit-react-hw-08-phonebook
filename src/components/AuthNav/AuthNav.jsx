import { NavLink } from 'react-router-dom';
import style from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        exact
        className={style.link}
        activeClassName={style.active}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        exact
        className={style.link}
        activeClassName={style.active}
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav
