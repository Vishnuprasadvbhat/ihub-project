import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { AuthContext } from "../context/Authcontext";

const Login = () => {
  const { login, getUserDetails } = useContext(AuthContext);
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  
    // Check if email or password is empty
    if (!email.trim() || !password.trim()) {
      toast.warning("Please enter both email and password.");
      return;
    }
  
    try {
      axios.defaults.withCredentials = true;
  
      const response = await axios.post(`${backendUrl}/api/auth/login`, { email, password });
      setTimeout(navigate("/user/dashboard"), 2000); 
      
      if (!response.data.success) {
        toast.error(response.data.message || "Login failed.");
        return;
      }
      

      toast.success("User logged in successfully!");
      await getUserDetails()
  
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
  
        if (status === 404) {
          toast.error("User not found. Please Sign Up to proceed");
        } else if (status === 401) {
          toast.error("Invalid credentials. Please check your password.");
        } else {
          toast.error(error.response.data.message || "An error occurred during login.");
        }
      } else {
        toast.error("Unable to connect to server. Please try again.");
      }
    }
  };
  
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-200 bg-[radial-gradient(circle,#ccc_1px,transparent_1px)] bg-[size:20px_20px]">
      {/* Header */}
      <header className="bg-black h-16 flex items-center px-5 shadow-md">
        <h1 className="text-white text-xl font-bold">OpportunityHub</h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 justify-center items-center px-5 mt-14">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-5">Log In</h2>

          <form onSubmit={onSubmitHandler} className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            />

            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md text-sm pr-10"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 text-xs cursor-pointer text-gray-500 hover:text-black"
                aria-label="Toggle password visibility"
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>

            <div className="text-right text-xs">
              <Link to="/otp" className="text-blue-500 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-black text-white rounded-md text-lg font-bold hover:bg-gray-700 transition"
            >
              Log In
            </button>
          </form>

          <p className="mt-4 text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </main>


      <footer className="bg-black h-10 flex items-center justify-center">
        <p className="text-xs text-white">
          © {new Date().getFullYear()} OpportunityHub. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Login;
