import './App.css';
import React, { useState } from 'react';
import LoginForm from './components/ui/LoginForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/ui/Home';
import SignUpForm from './components/ui/SignUpForm';
import Dashboard from './components/Dashboard';
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignUpForm />} />

            <Route path="dashboard" element={< Dashboard />} />



          </Route>
        </Routes>
      </BrowserRouter>
    </div>



  );
}

export default App;
