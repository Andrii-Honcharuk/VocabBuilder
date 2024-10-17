// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Register from "../../pages/Register";
import { AppBar } from "../AppBar/AppBar";

// import './App.css'

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
