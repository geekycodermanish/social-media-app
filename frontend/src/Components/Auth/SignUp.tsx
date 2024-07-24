import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Registerservice } from "../../Services/api";

const SignUp = () => {
  const [userData, setUserData] = useState({
    username: "",
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

    try {
      const response = await Registerservice(userData);

      if (response.status === 201) {
        navigate("/auth/login");
      }
    } catch (err) {
      alert("Oops! something went wrong...");
    }
  };

  return (
    <div className="bg-blue-400 text-white rounded-2xl shadow-2xl flex flex-col gap-y-4 w-full  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">
      <div className="flex flex-col gap-y-1">
        <h2 className="text-xl font-semibold text-white pt-2">
          Create Account!
        </h2>
        <div className="inline-block border-[1px] w-full justify-center w-20 border-white border-solid"></div>
      </div>
      {/* Inputs */}
      <form
        onChange={ChangeHandler}
        onSubmit={SubmitHandler}
        className="flex flex-col items-center justify-center mt-2"
      >
        <input
          type="test"
          name="username"
          className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0 text-black"
          placeholder="username"
        ></input>
        <input
          type="email"
          name="email"
          className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0 text-black"
          placeholder="Email"
        ></input>
        <input
          type="password"
          name="password"
          className="rounded-2xl px-2 py-1 w-4/5 md:w-full text-black border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
          placeholder="Password"
        ></input>
        <button
          type="submit"
          className="rounded-2xl m-4 text-blue-400 bg-white w-3/5 px-4 py-2 shadow-md hover:text-white hover:bg-blue-400 transition duration-200 ease-in"
        >
          Sign Up
        </button>
      </form>

      <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>

      <Link
        to={"/auth/login"}
        className="text-white mb-4 text-sm font-medium cursor-pointer"
      >
        Sign In to your Account?
      </Link>
    </div>
  );
};

export default SignUp;
