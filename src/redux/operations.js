import axios from 'axios';
import actions from './actions';

axios.defaults.baseURL = 'http://localhost:4040';

const addContact = text => dispatch => {
  const contact = { text };

  dispatch(actions.addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSucces(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

export default { addContact };
