// import React from 'react'
import { Link } from "react-router-dom";
import { FaMicrosoft } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import "../../App.css";

export default function Signup() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-[#fff]">
        <img className="absolute top-7" src={Logo} alt="logo" />
        <div className="bg-white p-8 rounded-lg max-w-md w-full mt-10">
          <h1 className="text-2xl text-bold text-center font-bold">
            Create your account
          </h1>
          <form className="space-y-4 mt-8">
            <div className="relative">
              <input
                type="text"
                id="mui-style-input"
                placeholder=" "
                className="form-input block w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-900"
              />
              <label
                htmlFor="mui-style-input"
                className="absolute left-2 -top-2.5 text-gray-500 bg-white px-1 text-sm"
              >
                Email address
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 button-auth-gradient "
            >
              Continue
            </button>
          </form>
          <div className="mt-4">
            <div className="text-sm text-center">
              Already have an account?{" "}
              <Link
                to="/Signin"
                className="font-medium text-[#C553ED] hover:text-indigo-500"
              >
                Log in
              </Link>
            </div>
            <div className="flex items-center justify-center my-4">
              <div className="or-separator text-sm">OR</div>
            </div>
            <div className="mt-4">
              <button className="w-full flex items-center justify-start py-3 px-4 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <FaMicrosoft className="h-5 w-5 mr-2" />
                Continue with Google
              </button>
              <button className="mt-2 w-full flex items-center justify-start py-3 px-4 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <FaGoogle className="h-5 w-5 mr-2" />
                Continue with Microsoft Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
