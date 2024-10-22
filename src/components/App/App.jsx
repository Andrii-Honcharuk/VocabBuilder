// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
// import Register from "../../pages/Register";
import { AppBar } from "../AppBar/AppBar";
import Home from "../../pages/Home";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import LoginForm from "../LoginForm/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations";
import Dictionary from "../Dictionary/Dictionary";
import { selectIsRefreshing } from "../../redux/auth/selectors";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";

// import './App.css'

export function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  console.log("isRefreshing", isRefreshing);
  return isRefreshing ? (
    <b>Refreshing loading</b>
  ) : (
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
        <Route path="/dictionary" element={<Dictionary />} />
      </Routes>
    </>
  );
}
