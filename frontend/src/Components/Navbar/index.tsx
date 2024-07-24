import React, { useMemo } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useLocation, useNavigate, Link } from "react-router-dom";
import cn from "classnames";
import { IoIosAddCircleOutline } from "react-icons/io";

function Navbar() {
  const location = useLocation();

  const userData = useMemo(() => {
    const data = localStorage.getItem("user");

    if (!data) return undefined;

    return JSON.parse(data);
  }, [location.pathname]);

  const isLoggedIn = userData?.isLoggedIn;

  return (
    <div
      className={cn(
        "flex items-center w-full gap-x-12 md:gap-x-52 py-4 border-b border-b-[#dbdbdb] px-4 md:px-40",
        {
          "justify-center": isLoggedIn,
          "gap-x-28 md:justify-between": !isLoggedIn,
        }
      )}
    >
      <p className="text-lg font-semibold">Ｔｒｙ－Ｘ</p>

      {isLoggedIn && (
        <div className="relative hidden md:flex items-center justify-start">
          <input
            className="rounded-full bg-[#efefef] py-1 pl-10 pr-4 placeholder:text-lg placeholder:text-[#737373]"
            placeholder="Search"
          />
          <IoSearchOutline className="absolute left-4 text-[#737373]" />
        </div>
      )}

      {isLoggedIn ? (
        <Avatar userData={userData} />
      ) : (
        <div className="flex items-center gap-x-4">
          <Link
            to={"/auth/login"}
            className="px-4 py-1.5 text-sm text-white bg-[#0094f6] hover:bg-[#00376b] font-semibold rounded-lg"
          >
            Log in
          </Link>
          <Link
            to={"/auth/sign-up"}
            className="py-2 text-[#0094f6] hover:text-black font-semibold text-sm"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;

function Avatar({ userData }) {
  const navigate = useNavigate();

  const { name, email } = userData;

  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/auth/login");
  };

  return (
    <div className="flex items-center gap-x-6">
      <div className="group flex items-center flex-col relative">
        <button className="bg-blue-300 rounded-full h-12 w-12 flex items-center justify-center">
          <p className="text-blue-700 text-lg font-semibold capitalize">
            {name[0]}
          </p>
        </button>

        <div className="z-10 hidden divide-y rounded-lg shadow w-44 bg-gray-700 divide-gray-500 group-hover:block absolute top-12 overflow-hidden">
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <p className="capitalize">{name}</p>
            <p className="font-medium truncate">{email}</p>
          </div>

          <button
            className="w-full px-4 py-2 text-sm hover:bg-red-500 text-gray-200 hover:text-white"
            type="button"
            onClick={logoutHandler}
          >
            Sign out
          </button>
        </div>
      </div>

      <Link
        to={"/add-post"}
        className="flex items-center gap-x-2 bg-[#0094f6] hover:bg-[#00376b] text-white rounded-lg px-4 py-1 text-sm"
      >
        <IoIosAddCircleOutline size={24} />
        <p className="font-semibold">Add Post</p>
      </Link>
    </div>
  );
}
