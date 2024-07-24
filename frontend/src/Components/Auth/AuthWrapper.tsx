import React from "react";
import { Outlet } from "react-router-dom";

function AuthWrapper() {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center h-full md:py-2">
      <section className="flex items-center w-full px-2 md:px-20">
        <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
          <h1 className="text-6xl text-blue-500 font-bold">Ｔｒｙ－Ｘ</h1>
        </div>
        <Outlet />
      </section>
    </div>
  );
}

export default AuthWrapper;
