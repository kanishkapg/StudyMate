import React from 'react';
import logo2 from '../assets/images/HomePageIcons/logo2.png'
import googleIcon from '../assets/images/LoginPageIcons/google_img.png'
import {Link} from 'react-router-dom'


const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg pl-8 pr-8 pb-8 w-full max-w-md">
        
        <div className="flex justify-center">
            <img src={logo2} alt="" className="w-[160px]"/>
        </div>
        <h2 className="text-2xl font-bold text-center mb-8">
          Log in to your Account
        </h2>
        
        {/* Google Login Button */}
        <button className="flex items-center justify-center w-full bg-gray-100 text-semibold
        py-2 px-4 shadow-custom-dark rounded-lg mb-8">
          <img src={googleIcon} alt="" className="w-8 mr-2" />
          Continue with Google
        </button>
        
        <form action="">
          {/* User Name Input */}
          <label className="block text-gray-700 text-sm font-bold mb-2">User Name</label>
          <input 
            className="w-full bg-blue-100 text-gray-700 border border-gray-300 rounded-lg py-2 px-4 mb-4" 
            type="text" 
            placeholder="Enter Your User Name" 
          />
        
          {/* Password Input */}
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input 
            className="w-full bg-blue-100 text-gray-700 border border-gray-300 rounded-lg py-2 px-4 mb-1" 
            type="password" 
            placeholder="Enter Your Password" 
          />
        
          {/* Error Message */}
          <p className="text-red-500 text-sm italic text-right hidden">
            *Incorrect Username or Password
          </p>
        
          {/* Log In Button */}
          <button className="w-full bg-blue-700 text-white mt-6 py-2 px-4 rounded-lg mb-4 
          hover:bg-blue-800">
            Log in
          </button>
        
          {/* Links */}
          <div className="flex justify-between text-sm text-blue-500">
            <p> <Link to='/register' className="hover:underline">Create a new account</Link> </p>
            <a href="#" className="hover:underline">Forgot Password</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
