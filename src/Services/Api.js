import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function onRegister(credentials) {
  const { data } = await axios.post('/users/signup', credentials);
  token.set(data.token);
  return data;
}

export async function onLogin(credentials) {
  const { data } = await axios.post('/users/login', credentials);
  token.set(data.token);
  return data;
}

export async function onLogout() {
  const { data } = await axios.post('/users/logout');
  token.unset();
  return data;
}

export async function getContacts() {
  const { data } = await axios.get(`/contacts`);
  token.set(data.token);
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post(contact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(id);
  return data;
}
