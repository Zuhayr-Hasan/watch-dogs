// import React, { useState } from "react";
import Logo from "../../assets/logo.png";

export default function Varification() {
  return (
    <div className="min-h-screen bg-[#fff] flex flex-col items-center justify-center">
      <img className="absolute top-10" src={Logo} alt="logo" />
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Verify your email
        </h1>
        <p className="text-gray-600 mb-1 text-center">We sent an email to</p>
        <p className="text-gray-600 mb-1 text-center">
          romain.bernus@gmail.com
        </p>
        <p className="text-gray-600 mb-2 text-center">
          Click the link inside to get started.
        </p>
        <button className="w-full bg-[#fff] text-[#C553ED] py-2 rounded transition-colors duration-150 ease-in-out">
          Resend Email
        </button>
      </div>
    </div>
  );
}
