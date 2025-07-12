import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginSignup from './LoginSignup';
import Dashboard from './Dashboard';
import AddNewItem from "./pages/AddNewItem";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-item" element={<AddNewItem />} />
      </Routes>
    </Router>
  );
}
