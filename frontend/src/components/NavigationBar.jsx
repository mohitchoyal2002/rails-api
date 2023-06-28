import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="w-screen fixed min-h-28 bg-gray-900 text-white pt-6">
      <div className="w-full h-full flex justify-around items-center py-2">
        <Link to="/" className="text-3xl font-semibold">
          BookStore
        </Link>
        <div className="flex items-center gap-5">
          <Link to="about">About Us</Link>
          <Link to='login'>Login</Link>
          {/* <Link to='signup'>Sign Up</Link> */}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
