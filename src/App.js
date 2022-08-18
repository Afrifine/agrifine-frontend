import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Products, About } from './pages'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/about' element={<About />} />
    </Routes>
  );
}

export default App;
