import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSucces = createAction('contacts/addContactSucces');
const addContactError = createAction('contacts/addContactError');
const deleteContact = createAction('contacts/Delete');

const changeFilter = createAction('contacts/Filter');

// eslint-disable-next-line
export default {
  deleteContact,
  changeFilter,
  addContactRequest,
  addContactSucces,
  addContactError,
};
