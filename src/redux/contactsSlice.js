import { createSlice } from '@reduxjs/toolkit';
import { fetchAll, addContact, deleteContact } from './contactsOperations';
import { STATUS } from 'redux/constants';
const { IDLE, PENDING, FULFILLED, REJECTED } = STATUS;

const initialState = {
  contacts: [],
  status: IDLE,
  operation: null,
  error: null,
};

const handlePending = state => {
  state.status = PENDING;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.status = REJECTED;
  state.operation = null;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAll.pending, (state) => {
        handlePending(state);
        state.operation = 'fetchAll';
      })
      .addCase(fetchAll.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(addContact.pending, (state) => {
        handlePending(state);
        state.operation = 'addContact';
      })
      .addCase(addContact.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(deleteContact.pending, (state, action) => {
        handlePending(state);
        state.operation = `${action.meta.arg.id}`;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.contacts = [...action.payload];
        state.status = FULFILLED;
        state.operation = null;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts = [...state.contacts, action.payload];
        state.status = FULFILLED;
        state.operation = null;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(({ id }) => id !== action.payload.id);
        state.status = FULFILLED;
        state.operation = null;
        state.error = null;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;