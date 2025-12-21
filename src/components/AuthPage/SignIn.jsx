import React from "react";
import { LuEye } from "react-icons/lu";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        {/* Logo & Title */}
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Charitix Logo" className="h-10 mb-2" />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="mt-1 w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-[#f9f9f9]"
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <div className="flex justify-between items-center">
            <label className="text-sm text-gray-600">Password</label>
            <button className="text-xs text-emerald-600 hover:underline">
              Forgot password?
            </button>
          </div>
          <div className="relative mt-1">
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-[#f9f9f9]"
            />
            <LuEye className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 cursor-pointer" />
          </div>
        </div>

        {/* Login Button */}
        <button className="w-25 mt-4 bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-lg text-sm font-medium">
          Login
        </button>

        {/* Register */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-emerald-600 hover:underline">
            Register
          </Link>
        </p>

        {/* Google Login */}
        <button className="w-full border rounded-lg py-2 mt-6 flex items-center justify-center gap-2 text-sm text-gray-600 hover:bg-gray-50">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="h-4 w-4"
          />
          login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;