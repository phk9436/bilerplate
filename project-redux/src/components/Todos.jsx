import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { del } from "../Store";
import { Link } from "react-router-dom";

function Todos({ text, id }) {
  const dispatch = useDispatch();
  const delState = () => {
    dispatch(del(id))
  };
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={delState}>Del</button>
    </li>
  );
}

export default Todos;
