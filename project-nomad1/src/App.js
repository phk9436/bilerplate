import React, { useState } from 'react';

function App () {
  const [toDo, settoDo] = useState('');
  const [toDoLi, settoDoLi] = useState([]);
  const onChange = (e) => settoDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === '') {
      return false;
    } else {
      settoDo('');
      settoDoLi((array) => [toDo, ...array]);
    }
  };

  return (
    <div className="App">
      <h1>My To Dos ({toDoLi.length})</h1>
      <ul>
        {toDoLi.map((e, i) => {
          return (
            <li key={i}>{e}</li>
          );
        })}
      </ul>
      <form action="" onSubmit={onSubmit}>
        <input type="text" placeholder='Write to do' value={toDo} onChange={onChange}/>
        <button>Add to do</button>
      </form>
    </div>
  );
}

export default App;
