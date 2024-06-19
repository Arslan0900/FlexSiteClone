import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './globle.scss';
import Contact from './components/Contact'; // Ensure this path and component name are correct
import MainPage from './components/Mainpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
