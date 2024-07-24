import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Wrapper() {
  return (
    <main className="h-screen flex flex-col">
      <Navbar />

      <Outlet />
    </main>
  );
}

export default Wrapper;
