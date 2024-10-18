// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
// import Register from "../../pages/Register";
import { AppBar } from "../AppBar/AppBar";
import Home from "../../pages/Home";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import LoginForm from "../LoginForm/LoginForm";

// import './App.css'

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home>
                <LoginForm />
              </Home>
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <Home>
              <LoginForm />
            </Home>
          }
        />
        <Route
          path="/register"
          element={
            <Home>
              <RegistrationForm />
            </Home>
          }
        />
      </Routes>
    </>
  );
}

export default App;
