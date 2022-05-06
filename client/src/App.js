import React from 'react';
import { Routes, Route } from 'react-router-dom';

import GlobablStyle from './components/GlobalStyles';
import Nav from './components/Nav/index';
import Home from './pages/Home';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
      <GlobablStyle />
      <Nav />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App