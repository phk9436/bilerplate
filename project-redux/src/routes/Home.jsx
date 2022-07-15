import React, { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { addToDo } from "../Store";
import { useDispatch } from "react-redux/es/exports";
import Todos from "../components/Todos";

function Home() {
  const [text, setText] = useState("");
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(text));
    text && setText("");
  };

  return (
    <div>
      <h1>to do</h1>
      <form action="" onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((e) => (
          <Todos text={e.text} id={e.id} key={e.id}/>
        ))}
      </ul>
    </div>
  );
}

export default Home;
