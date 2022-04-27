import styles from './App.module.css';
import React, { useState, useEffect } from 'react';

function Hello () {
  useEffect(() => {
    console.log('created');
    return () => console.log('destryed');
  }, []);
  return <h1>Hello</h1>;
}

function App () {
  const [Counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [showing, setshowing] = useState(false);

  const onClick = () => setCounter(Counter + 1);
  const onChange = (e) => setKeyword(e.target.value);
  const onShow = () => setshowing(!showing);

  useEffect(() => console.log('render'), []);
  useEffect(() => { if (keyword !== '' && keyword.length > 5) console.log('Search API'); }, [keyword]);
  useEffect(() => { if (Counter > 0) console.log('Counting'); }, [Counter]);
  useEffect(() => { if (keyword !== '' || Counter > 0) console.log('both changing'); }, [keyword, Counter]);

  return (
    <div className="App">
      <h1 className={styles.title}>React</h1>
      <p>{Counter} {keyword}</p>
      <input type="text" placeholder="Search here" onChange={onChange} value={keyword}/>
      <button onClick={onClick}>Counter</button>

      <button onClick={onShow}>{showing ? 'Hide' : 'Show'}</button>
      {showing ? <Hello/> : null}
    </div>
  );
}

export default App;
