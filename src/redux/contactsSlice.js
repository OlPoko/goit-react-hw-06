import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact(state, action) {
      state.items.push({
        id: nanoid(),
        ...action.payload,
      });
    },
    dellContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, dellContact } = contactsSlice.actions;
export default contactsSlice.reducer;

// export const addContact = createAction("contacts/addContact");
// export const dellContact = createAction("contacts/dellContact");

// const initialState = {
//   items: [],
// };

// export default function contactsSliceReducer(state = initialState, action) {
//   switch (action.type) {
//     case addContact.type:
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };

//     case dellContact.type:
//       return {
//         ...state,
//         items: state.items.filter((contact) => contact.nanoid !== action.payload),
//       };

//     default:
//       return state;
//   }
// }
