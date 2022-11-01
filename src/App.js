import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Qoute';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/calculator"
        element={(
          <div className="App">
            <h1>Let&apos;s do some math!</h1>
            <Calculator />
          </div>
      )}
      />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
