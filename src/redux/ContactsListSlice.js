const { createSlice } = require('@reduxjs/toolkit');

const contactsInitialState = {
  items: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    onDeleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, onDeleteContact, setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
