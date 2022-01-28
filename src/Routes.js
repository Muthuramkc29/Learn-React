import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import About from "./Pages/About/about";
import Blogs from "./Pages/Blog/blogs";
import Login, { FormikFormDemo } from "./Pages/Login/login";
import Team from "./Pages/Team/team";

function PrivateRoute({ children }) {
  const auth = false;
  return auth ? children : <Navigate to="/login" />;
}

function AppRoutes(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<FormikFormDemo />} />
        <Route
          path="/team"
          element={
            <PrivateRoute>
              <Team />
            </PrivateRoute>
          }
        />
        <Route
          path="/blogs"
          element={
            <PrivateRoute>
              <Blogs />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default AppRoutes;
