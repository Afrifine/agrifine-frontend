import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Products, About, Login, Register } from './pages'
import {Confirm} from './components';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/about' element={<About />} />
      <Route path='/confirm' element={<Confirm />} /> 
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;
