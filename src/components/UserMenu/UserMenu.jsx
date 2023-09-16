import style from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={style.userMenu}>
      <p className={style.user}>mango@mail.com</p>
      <button type="button" className={style.LogoutBtn}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
