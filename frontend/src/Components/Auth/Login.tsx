import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginService } from "../../Services/api";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const ChangeHandler = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();

    if (!userData.email || !userData.password) {
      alert("field missing");
      return;
    }

    try {
      const {
        status,
        data: { user },
      } = await LoginService(userData);

      if (status === 200) {
        const payload = {
          ...user,
          isLoggedIn: true,
        };

        localStorage.setItem("user", JSON.stringify(payload));
        localStorage.setItem("token", user.token);

        navigate("/home");
        return;
      }

      alert("Invalid Email and Password");
    } catch (err) {
      alert("Invalid Email and Password");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl flex flex-col gap-y-4 w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
      <div className="flex flex-col gap-y-1 items-center">
        <h2 className="text-xl font-semibold text-blue-400 pt-2">Sign In!</h2>
        <div className="inline-block border-[1px] justify-center w-20 w-full border-blue-400 border-solid"></div>
      </div>
      {/* Inputs */}
      <form
        onChange={ChangeHandler}
        onSubmit={SubmitHandler}
        className="flex flex-col items-center justify-center"
      >
        <input
          type="email"
          name="email"
          className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
          placeholder="Email"
        ></input>
        <input
          type="password"
          name="password"
          className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
          placeholder="Password"
        ></input>
        <button className="rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in">
          Sign In
        </button>
      </form>
      <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
      <Link
        to={"/auth/sign-up"}
        className="text-blue-400 mb-4 text-sm font-medium cursor-pointer"
      >
        Create a New Account?
      </Link>
    </div>
  );
};

export default Login;
