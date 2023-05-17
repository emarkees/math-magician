import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Calculator from './Component/Calculator';
import Quote from './Component/Quote';
import Nav from './Component/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Quote" element={<Quote />} />
        <Route path="/Calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
