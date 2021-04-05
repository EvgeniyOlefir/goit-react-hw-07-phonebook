import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSucces = createAction('contacts/addContactSucces');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction('contacts/addContactRequest');
export const deleteContactSucces = createAction('contacts/addContactSucces');
export const deleteContactError = createAction('contacts/addContactError');

export const changeFilter = createAction('contacts/Filter');
