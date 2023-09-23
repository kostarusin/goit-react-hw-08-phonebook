import style from './ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { requestAddContact } from 'redux/contacts/operations';

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    setContact(prevContact => ({ ...prevContact, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = contact;
    onAddContact(name, number);
    setContact({ name: '', number: '' });
  };

  const onAddContact = (name, number) => {
    const contactExists = contacts.items.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (contactExists) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = { name, number };

    dispatch(requestAddContact(newContact));
  };

  const { name, number } = contact;
  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.formLabel}>
          Name
          <input
            className={style.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className={style.formLabel}>
          Number
          <input
            className={style.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>

        <button className={style.formButton} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
