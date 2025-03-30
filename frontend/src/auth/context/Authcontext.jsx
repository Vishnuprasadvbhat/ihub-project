import { createContext, useState, useEffect, useNavigate, } from "react";
import axios from "axios";




axios.defaults.withCredentials = true; 

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    getUserDetails(); 
  }, []);

  const getUserDetails = async () => {
    try {
      console.log("Fetching user from:", `${backendUrl}/api/auth/me`); 
  
      const response = await axios.get(`${backendUrl}/api/auth/me`, { withCredentials: true });
      setUser(response.data.user);

      console.log("Fetched User Data:", response.data.user);

    } catch (error) {
      setUser(null);
      console.error("Error fetching user:", error.response?.data || error.message);
    }
  };

  
  
  const logout = async () => {
    try {
      await axios.post(`${backendUrl}/api/auth/logout`, {}, { withCredentials: true });
  
      setUser(null); 
      navigate("/login"); 
    } catch (error) {
      console.error("Logout failed:", error.response?.data?.message || error.message);
    }
  };

  const email_verify = async (navigate) => { 
    try {
      const response = await axios.post(
        `${backendUrl}/api/auth/otp`, 
        { userId: user?._id }, 
        { withCredentials: true }
      );

      console.log(response.data);
      navigate("/otp"); 

      if (response.data.success) {
        alert("OTP sent successfully! Check your email.");
      }
    } catch (error) {
      console.error("Verification failed:", error.response?.data?.message || error.message);
    }
  };
  
  const otp_verify = async (otp, navigate) => { 
    try {
      const response = await axios.post(
        `${backendUrl}/api/auth/verify`, 
        { 
          userId: user?._id, 
          otp: otp.join("")  // Convert OTP array to a string
        }, 
        { withCredentials: true }
      );
      console.log(response.data);
  
      if (response.data.success) {
        alert("Email Verified Successfully");
        navigate("/"); 
      } else {
        alert(response.data.message);  // Show server message if verification fails
      }
    } catch (error) {
      console.error("Verification failed:", error.response?.data?.message || error.message);
      alert("Verification failed: " + (error.response?.data?.message || error.message));
    }
  };

  const isAuthenticated = async (userId) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/auth/status`,
        { userId },
        { withCredentials: true }
      );
      return response.data.isVerified; 
    } catch (error) {
      console.error("Authentication check failed:", error.response?.data?.message || error.message);
      return false;
    }
  };
  
  return (
    <AuthContext.Provider value={{ user, getUserDetails, logout, email_verify, otp_verify, isAuthenticated}}>
      {children}
    </AuthContext.Provider>
  );
};
