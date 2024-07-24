import React from "react";
import { Routes, Route } from "react-router-dom";
import Wrapper from "./Components/Wrapper";
import AuthWrapper from "./Components/Auth/AuthWrapper";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import HomePage from "./pages/HomePage";
import AddPost from "./pages/AddPost";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route path="auth" element={<AuthWrapper />}>
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>

        <Route path="home" element={<HomePage />} />
        <Route path="add-post" element={<AddPost />} />
      </Route>
    </Routes>
  );
}

export default Router;
