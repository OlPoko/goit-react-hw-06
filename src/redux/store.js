import { configureStore, createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact");
export const dellContact = createAction("contacts/dellContact");

export const setFilter = createAction("filters/setFilter");

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "contacts/addContact":
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, action.payload],
        },
      };

    case "contacts/dellContact":
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(
            (contact) => contact.id !== action.payload
          ),
        },
      };

    case "filters/setFilter":
      return {
        ...state,
        filters: {
          ...state.filters,
          name: action.payload,
        },
      };

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});
