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

JSON.parse(localStorage.getItem('todoList')) || localStorage.setItem('todoList', JSON.stringify([]));
const localState = JSON.parse(localStorage.getItem('todoList'));


const reducer = (state = localState, action) => {
  if(action.type === Add) {
    const stateArr = [{ text: action.text, id: Date.now() }, ...state];
    localStorage.todoList = JSON.stringify(stateArr);
    return stateArr;
  } else if (action.type === Delete) {
    const stateArr = state.filter((e) => e.id !== action.id)
    localStorage.todoList = JSON.stringify(stateArr);
    return stateArr;
  } else {
    return state;
  }
};

const store = createStore(reducer);

export default store;
