//App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage';
import Evenement from './Pages/Evenement';
import Menu from './Pages/Menu';
import BoissonDetails from './Pages/BoissonDetails';
import { boissons } from './Data/boissons.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu boissons={boissons} />} />
        <Route path="/evenement" element={<Evenement />} />
        <Route path="/boisson/:id" element={<BoissonDetails boissons={boissons} />} />
      </Routes>
    </Router>
  );
}

export default App;
