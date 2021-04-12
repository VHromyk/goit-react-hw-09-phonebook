import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const fetchContacts = () => {
  return axios.get(`/contacts`).then(response => console.log(response));
};

const addContact = () => {
  return axios
    .post(`/contacts`, contact)
    .then(response => console.log(response.data));
};

const api = {
  fetchContacts,
  addContact,
};

export default api;
