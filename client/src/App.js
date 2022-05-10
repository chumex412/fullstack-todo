import React from 'react';
import { Routes, Route } from 'react-router-dom';

import GlobablStyle from './components/GlobalStyles';
import Home from './pages/Home';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <>
      <GlobablStyle />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Route>
      </Routes>
    </>
  )
}

export default App