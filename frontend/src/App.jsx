import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './Pages/Auth';
import Home from './Pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
