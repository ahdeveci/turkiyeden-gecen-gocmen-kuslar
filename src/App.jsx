import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ramsar from './pages/Ramsar';

const App = () => {
  return (
    <Router basename="/turkiyeden-gecen-gocmen-kuslar/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ramsar" element={<Ramsar />} />
      </Routes>
    </Router>
  );
};

export default App;