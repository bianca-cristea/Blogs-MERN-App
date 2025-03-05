import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-12 shadow-2xl rounded w-80% md:w-[60%] lg:w-[40%] flex flex-col items-center justify-center">
        <div className="text-2xl flex flex-col lg:flex-row gap-2">
          <h1 className="font-bold">Welcome</h1>
          <span>Login</span>
        </div>
        <form action="" className="flex flex-col w-[100%] mt-8">
          <div className="flex flex-col mb-4">
            <label>Email</label>
            <input
              type="email"
              value={inputs.email}
              name="email"
              className="mt-2 outline-none border px-3 py-2 rounded border-zinc-400"
              required
              onChange={change}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>Password</label>
            <input
              type="password"
              value={inputs.password}
              name="password"
              className="mt-2 outline-none border px-3 py-2 rounded border-zinc-400"
              required
              onChange={change}
            />
          </div>
          <div className="flex mt-4">
            <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-4 py-2 rounded w-[100%]">
              Login
            </button>
          </div>
        </form>
        <h4 className="mt-8">
          Don't have an accout?
          <Link
            to="/signup"
            className="text-blue-600 hover:text-blue-700 hover:font-semibold"
          >
            Signup
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default AdminLogin;
