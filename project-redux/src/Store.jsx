import { legacy_createStore as createStore } from "redux";

const Add = "Add";
const Delete = "Delete";

export const addToDo = (text) => {
  return {
    type: Add,
    text,
  };
};

export const deleteToDo = (id) => {
  return {
    type: Delete,
    id
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case Add:
      return [{ text: action.text, id: Date.now() }, ...state];
    case Delete:
      return state.filter((e) => e.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
