//App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage';
import Evenement from './Pages/Evenement'
import Menu from './Pages/Menu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/evenement" element={<Evenement />} />
      </Routes>
    </Router>
  );
}

export default App;
