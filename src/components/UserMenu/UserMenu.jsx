import { useSelector, useDispatch } from 'react-redux';
import style from './UserMenu.module.css';
import { getUserEmail } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);

  return (
    <div className={style.userMenu}>
      <p className={style.user}>{userEmail}</p>
      <button
        type="button"
        onClick={() => dispatch(logout())}
        className={style.LogoutBtn}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
