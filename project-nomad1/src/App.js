import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Detail from './Routes/Detail';

function App () {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>}/>
          <Route path='/movie/:id' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
