import { useDispatch } from 'react-redux';
import style from './RegistrationForm.module.css';
import { useState } from 'react';
import { register } from 'redux/auth/authOperations';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Registration</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.formLabel}>
          Name
          <input
            className={style.formInput}
            type="text"
            name="name"
            required
            value={name}
            onChange={handleChange}
          />
        </label>

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
          Registration
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
