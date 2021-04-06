import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSucces = createAction('contacts/addContactSucces');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction('contacts/addContactRequest');
export const deleteContactSucces = createAction('contacts/addContactSucces');
export const deleteContactError = createAction('contacts/addContactError');

export const changeFilter = createAction('contacts/Filter');

export const clearError = createAction('contacts/clearError');
