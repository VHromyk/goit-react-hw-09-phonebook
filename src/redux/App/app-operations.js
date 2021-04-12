import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './app-actions';

// Асинхронный вариант!
export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());

  try {
    const response = await axios.get(`/contacts`);
    dispatch(fetchContactSuccess(response.data));
  } catch (error) {
    dispatch(fetchContactError(error.message));
  }
};

//   axios
//     .get(`/`)
//     .then(response => dispatch(fetchContactSuccess(response.data)))
//     .catch(error => dispatch(fetchContactError(error)));
// };

export const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());
  axios
    .post(`/contacts`, contact)
    .then(response => dispatch(addContactSuccess(response.data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
