  import Header from "../components/Header";
  import Footer from "../components/Footer";
  import { useNavigate } from "react-router-dom";
  import { AuthContext } from "../context/Authcontext";
  import { useContext, useEffect, useState } from "react";
  import { toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

  const Home = () => {

    const navigate = useNavigate();
    const { user, loading, logout, getUserDetails, email_verify, isAuthenticated } = useContext(AuthContext);
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
      const fetchUserAndCheckAuth = async () => {
        await getUserDetails(); 
    
        if (user?._id) {
          const verified = await isAuthenticated(user?._id);
          setIsVerified(verified); 
        }
      };
    
      fetchUserAndCheckAuth();
    }, [user?._id]); 

    const handleEmailVerify = async () => {
      await email_verify(navigate);
      toast.success("OTP sent to the registered email ID!", { position: "top-right" });
    
      const verified = await isAuthenticated(user?._id);
      setIsVerified(verified); 
    };
    

    return (
      <>
        <Header />
        <div className="flex items-center justify-center h-screen bg-gray-100">
          {loading ? (
            <h1 className="text-2xl font-bold text-gray-800">Loading...</h1>
          ) : (
            <>
              <h1 className="text-4xl font-bold text-gray-800">
                Welcome {user ? user.Name : ""} to MyApp
              </h1>
              {user ? (
              <div>
                  <button
                  onClick={() => navigate("/profile")}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
                >
                  Profile
                </button>
                { user.isVerified ? (''):(
                  <button
                    onClick={handleEmailVerify}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
                  >
                    Verify Email
                  </button>
                )}
                <button
                  onClick={logout}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
                >
                  Logout
                </button>
                </div>
                
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
                >
                  Get Started
                </button>
              )}
            </>
          )}
        </div>
        <Footer />
      </>
    );
  };


  export default Home;
