import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home, Products, About, /* Login, Register, */
} from './pages';
import { /* Confirm, */ Navbar } from './components';
import { AddProduct } from './admin';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-product" element={<AddProduct />} />
        {/* <Route path="/confirm" element={<Confirm />} /> */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </>
  );
}

export default App;
