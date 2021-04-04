import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSucces = createAction('contacts/addContactSucces');
export const addContactError = createAction('contacts/addContactError');
export const deleteContact = createAction('contacts/Delete');
export const changeFilter = createAction('contacts/Filter');
