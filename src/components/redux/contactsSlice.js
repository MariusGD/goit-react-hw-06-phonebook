import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-4', name: 'John Smith', number: '145-965-985' },
    { id: 'id-3', name: 'Oscar White', number: '666-985-320' },
    { id: 'id-2', name: 'Alex Harrison', number: '741-962-526' },
    { id: 'id-1', name: 'Robert Myller', number: '400-913-995' },
  ],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
