import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post('http://localhost:3000/users/sign_in', {user:{email, password}})
      console.log(res.data);
    }
    catch(err){
      console.log(err);
    }
  };

  return (
    <div className="pt-28 flex flex-col items-center">
      <h1 className="text-3xl mb-4 text-center">User Login</h1>
      <div className="border p-4 w-1/2 flex flex-col justify-center gap-5 shadow-2xl rounded-lg">
      <form
        onSubmit={(e) => {
          login(e);
        }}
        className="flex flex-col justify-center gap-5"
      >
        <div className="flex flex-col gap-2">
          <span>Email</span>
          <input
            className="border border-gray-200 outline-none p-2 rounded-md text-lg"
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <span className="name text-sm text-red-500"></span>
        </div>
        <div className="flex flex-col gap-2">
          <span>Password</span>
          <input
            type="password"
            className="border border-gray-200 outline-none p-2 rounded-md text-lg"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span className="body text-sm text-red-500"></span>
        </div>
        <div>
          <button className="flex items-center gap-1 bg-green-600 rounded-md cursor-pointer p-3 text-white text-lg shadow-md">
            Login
          </button>
        </div>
      </form>
      <span className="text-center">New Member? <Link to='/signup' className="text-blue-600">Sign up</Link></span>
      </div>
    </div>
  );
};

export default Login;
