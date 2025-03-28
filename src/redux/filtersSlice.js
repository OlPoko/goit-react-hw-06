import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;

// export const setFilter = createAction("filters/setFilter");

// const initialState = {
//   name: "",
// };

// export default function filterSliceReducer(state = initialState, action) {
//   switch (action.type) {
//     case setFilter.type:
//       return {
//         ...state,
//         name: action.payload,
//       };
//     default:
//       return state;
//   }
// }
