import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../src/auth/pages/Login';
import SignupForm from './auth/pages/SignUp';
import { ToastContainer } from 'react-toastify';
import OTPVerification from './auth/pages/Otp';
import Jobs from './user/pages/Jobs';
import HomePage from './auth/pages/HomePage';
import Dashboard from './user/pages/Dashboard';
import Profile from './user/pages/Profile';



const App = () => {
  return (
    <>

    <ToastContainer />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<SignupForm />} />
      <Route path='/otp' element={<OTPVerification/>} />
      <Route path='/user/jobs' element={<Jobs/>} />
      <Route path='/user/dashboard' element={<Dashboard/>} />
      <Route path='/user/profile' element={<Profile/>} />


    </Routes>
    </>
    

  );
};

export default App;
