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
import Recommend from "../Recommend/Recommend";
import { RestrictedRoute } from "../RestrictredRoute";
import { PrivateRoute } from "../PrivateRoute";
import Layout from "../Layout/Layout";

// import { selectIsLoggedIn } from "../../redux/auth/selectors";

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
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <RestrictedRoute
                component={
                  <Home>
                    <LoginForm />
                  </Home>
                }
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={
                  <div>
                    <Home>
                      <LoginForm />
                    </Home>
                  </div>
                }
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={
                  <div>
                    <Home>
                      <RegistrationForm />
                    </Home>
                  </div>
                }
              />
            }
          />
          <Route
            path="/dictionary"
            element={<PrivateRoute component={<Dictionary />} />}
          />
          <Route
            path="/recommend"
            element={<PrivateRoute component={<Recommend />} />}
          />
        </Routes>
      </Layout>
    </>
  );
}
