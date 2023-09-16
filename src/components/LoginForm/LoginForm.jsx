import style from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from 'redux/auth/authOperations';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.formLabel}>
          Email
          <input
            className={style.formInput}
            type="email"
            name="email"
            required
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={style.formLabel}>
          Password
          <input
            className={style.formInput}
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={style.formButton} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
