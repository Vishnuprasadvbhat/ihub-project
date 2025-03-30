import React, { useState, useContext} from "react";
import LoginImage from "../../assets/mainpage.png";
import BackIcon from "../../assets/back.png";
import { useNavigate} from "react-router-dom";
import { AuthContext } from "../context/Authcontext";

const OTPVerification = () => {

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [message, setMessage] = useState("");
  const [verificationStatus, setVerificationStatus] = useState(null);
  const navigate = useNavigate();

  const { user, otp_verify } = useContext(AuthContext);

  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // Allow only digits
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value !== "" && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleBackspace = (index, event) => {
    if (event.key === "Backspace" && index > 0 && otp[index] === "") {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  // const verifyOtp = () => {
  //   if (otp.join("").length !== 6) {
  //     setMessage("Please enter a 6-digit OTP.");
  //     return;
  //   }
  
  // };
    

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      <header className="bg-black h-12 flex items-center px-6 shadow-md">
        <h1 className="text-white font-bold text-lg">OpportunityHub</h1>
      </header>


      <main className="flex flex-1 justify-center items-center px-4">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm text-center">
          <h2 className="text-xl font-bold mb-4">Enter OTP</h2>


          <div className="flex justify-center mb-4">
            <img src={LoginImage} alt="OTP Verification" className="w-40" />
          </div>


          <div className="flex justify-between gap-1 mb-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleBackspace(index, e)}
                className="w-10 h-12 text-center text-lg font-semibold border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              />
            ))}
          </div>


          {message && (
            <p className={`text-sm mt-3 ${verificationStatus === "error" ? "text-red-500" : "text-green-500"}`}>
              {message}
            </p>
          )}


          <button
            onClick={() => otp_verify(otp, navigate)}
            className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800 transition mt-4"
          >
            Verify OTP
          </button>


          <div
            className="flex justify-center items-center gap-2 mt-4 cursor-pointer text-blue-500 hover:underline"
            onClick={() => navigate("/")}
          >
            <img src={BackIcon} alt="Back" className="w-5 h-5" />
            <span>Back to Login</span>
          </div>
        </div>
      </main>

  
      <footer className="bg-black h-8 flex items-center justify-center text-white text-sm">
        <p>© 2025 OpportunityHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default OTPVerification;
