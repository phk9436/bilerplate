import { createSlice, configureStore } from "@reduxjs/toolkit";

const toDo = createSlice({
  name: "toDo",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const stateVal = { text: action.payload, id: Date.now() };
      state.unshift(stateVal);
    },
    del: (state, action) => {
      const stateArr = state.filter((e) => e.id !== action.payload);
      return stateArr;
    },
  },
});

const { reducer, actions } = toDo;
const store = configureStore({ reducer });
export const { add, del } = actions;

export default store;
