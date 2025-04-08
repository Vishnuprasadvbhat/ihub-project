import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./Authcontext";

const backendUrl = import.meta.env.VITE_BACKEND_URL


const GoogleAuthLogin = async (CredentialResponse) => {

  const [user, setUser] = useState(null);

  try {


    const res = axios.post(`${backendUrl}/api/auth/google/oauth/`, {token:CredentialResponse});

    if (res.data.success){
      setUser(res.data.user);
      console.log('Signing  In');
      navigate("/user/dashboard");
    }

  }
  catch(error) {
    console.log('Sign Up Failed');
  }
};


export default GoogleAuthLogin;