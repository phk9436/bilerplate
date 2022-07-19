import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

export const addToDo = createAction("Add");
export const deleteToDo = createAction("Delete");

JSON.parse(localStorage.getItem("todoList")) ||
  localStorage.setItem("todoList", JSON.stringify([]));
const localState = JSON.parse(localStorage.getItem("todoList"));

const reducer = createReducer(localState, {
  [addToDo]: (state, action) => {
    const stateVal = { text: action.payload, id: Date.now() };
    localStorage.todoList = JSON.stringify([stateVal, ...state]);
    state.unshift(stateVal);
  },
  [deleteToDo]: (state, action) => {
    const stateArr = state.filter((e) => e.id !== action.payload);
    localStorage.todoList = JSON.stringify(stateArr);
    return stateArr;
  },
});

const store = configureStore({ reducer });

export default store;
