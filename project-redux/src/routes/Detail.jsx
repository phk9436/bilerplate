import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

function Detail() {
  const {id} = useParams();
  const toDos = useSelector((state) => state);
  const toDoText = toDos.find(e => e.id === parseInt(id))
  console.log(toDos)
  const nowDate = dayjs(toDoText.id);
  const formatDate = nowDate.format('YYYY-MM-DD')

  return <div>
    <p>{toDoText.text}</p>
    <p>Created at: {formatDate}</p>
  </div>;
}

export default Detail;
