import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    const { name, email, password } = formData;

    if (!name || !email || !password) {
      toast.error("All fields are required");
      return;
    }

    localStorage.setItem("charitix_user", JSON.stringify(formData));
    sessionStorage.setItem("charitix_session", "true");

    toast.success("Registration successful 🎉");
    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Charitix Logo" className="h-10 mb-2" />
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-600">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter Your Name"
            className="mt-1 w-full px-4 py-2 border rounded-lg bg-[#f9f9f9]"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-600">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter Your Email"
            className="mt-1 w-full px-4 py-2 border rounded-lg bg-[#f9f9f9]"
          />
        </div>

        <div className="mb-2">
          <label className="text-sm text-gray-600">Password</label>
          <div className="relative mt-1">
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full px-4 py-2 border rounded-lg bg-[#f9f9f9]"
            />

            {/* 👁️ Toggle Button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-500"
            >
              {showPassword ? <LuEyeOff /> : <LuEye />}
            </button>
          </div>
        </div>

        <button
          onClick={handleRegister}
          className="w-full mt-4 bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-lg cursor-pointer"
        >
          Register
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-emerald-600 hover:underline cursor-pointer"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;