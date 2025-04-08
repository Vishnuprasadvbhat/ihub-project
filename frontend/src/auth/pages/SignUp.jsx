import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import { jwtDecode } from "jwt-decode";
import GoogleAuthLogin from "../context/GoogleOAuth";

const SignupForm = () => {
  var [Name, setFullName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [Picture, setPicture] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const isFormValid = () => {
    return Name && email && validatePassword(password) && termsAccepted;
  };

  const onSubmitHandler = async (e) => {

    e.preventDefault();

    if (!isFormValid()) {
      toast.error("Please fill all required fields correctly.");
      return;
    }

    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post(`${backendUrl}/api/auth/users`, {Name, email,password, Picture});

      console.log("API Response:", response.data);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      
      if (response?.data?.success) {
        toast.success("User signed up successfully!");
         
      } else {
        toast.error(response.data.message || "Signup failed.");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "An error occurred during signup.");
      } else {
        toast.error("Unable to connect to server. Please try again.");
      }
    }
  };


  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-200 px-8">
      <div className="w-full bg-black py-4 text-center fixed top-0 left-0 z-10">
        <span className="text-white text-xl font-bold">OpportunityHub</span>
      </div>

      <div className="flex justify-center items-center w-full flex-grow mt-20">
        <form onSubmit={onSubmitHandler} className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md min-h-[400px]">
          <h2 className="text-center text-xl font-semibold text-gray-800 mb-4">Sign up now</h2>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name"
              value={Name}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="mb-4 relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-10"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-2.5 text-blue-600 text-sm"
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
            {password && !validatePassword(password) && (
              <p className="text-red-500 text-xs mt-2">
                Password must be at least 8 characters, including a number and a special character.
              </p>
            )}
            {errors.password && <p className="text-red-500 text-xs mt-2">{errors.password}</p>}
          </div>

          <div className="flex items-start space-x-2 mb-2">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              required
              className="mt-1"
            />
            <label className="text-gray-600 text-sm">
              By creating an account, I agree to your {" "}
              <Link to="/" className="text-blue-600 underline">Terms of Service</Link> and {" "}
              <Link to="/" className="text-blue-600 underline">Privacy Policy</Link>.
            </label>
          </div>

          <button
            type="submit"
            disabled={!isFormValid()}
            className="w-full py-2 text-white bg-blue-700 rounded-lg hover:bg-black transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Create Account
          </button>
          
          <div className="mt-4">
            <GoogleLogin onSuccess={(CredentialResponse) => {
              GoogleAuthLogin(CredentialResponse);}}></GoogleLogin>
          </div>

          <p className="text-center text-sm mt-4">
            Already have an account? {" "}
            <Link to="/login" className="text-blue-600 underline">Log in</Link>
          </p>
        </form>
      </div>

      <div className="w-full bg-black py-4 text-center fixed bottom-0 left-0 z-10 text-white">
        <p>© 2025 OpportunityHub. All rights reserved.</p>
      </div>
    </div>
  );
};

export default SignupForm;