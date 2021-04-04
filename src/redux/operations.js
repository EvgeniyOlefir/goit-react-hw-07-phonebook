import axios from 'axios';
import {
  addContactRequest,
  addContactSucces,
  addContactError,
} from './actions';

axios.defaults.baseURL = 'http://localhost:4040';

const addContact = text => dispatch => {
  const contact = { text };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSucces(data)))
    .catch(error => dispatch(addContactError(error)));
};

export default { addContact };
