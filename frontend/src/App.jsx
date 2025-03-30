import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/auth/pages/Home';
import Login from '../src/auth/pages/Login';
import SignupForm from './auth/pages/SignUp';
import { ToastContainer } from 'react-toastify';
import OTPVerification from './auth/pages/Otp';

const App = () => {
  return (
    <>

    <ToastContainer />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<SignupForm />} />
      <Route path='/otp' element={<OTPVerification/>} />

    </Routes>
    </>
    

  );
};

export default App;
