import React from 'react';
import SignUpTest from '../components/SignUp/SignUpTest';
import logo2 from '../assets/images/HomePageIcons/logo2.png'
import studentImg from '../assets/images/LoginPageIcons/student.png'
import parentImg from '../assets/images/LoginPageIcons/parent.png'

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg pl-8 pr-8 pb-8 w-full max-w-md">
        
        <div className="flex justify-center">
            <img src={logo2} alt="" className="w-[160px]"/>
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">
          Create your Account
        </h2>

        <div className="text-left text-headingColor mb-4">
          <p className='text-[20px] font-bold'>Which account fits you best?</p>
          <p className='text-[16px] font-semibold'>Choose your role.</p>
        </div>

        <div className="w-full ">
          <div className="flex justify-between w-full items-center space-x-4">
            <div>
              <img src={studentImg} alt="" className="w-[160px]" />
            </div>
            <button className="bg-skyBlue w-[350px] px-4 py-2 rounded-md text-left shadow-custom-dark">Student</button>
          </div>
          <div className="flex justify-between w-full items-center space-x-4">
            <div>
              <img src={parentImg} alt="" className="w-[160px]" />
            </div>
            <button className="bg-skyBlue w-[350px] px-4 py-2 rounded-md text-left shadow-custom-dark">Parent</button>
          </div>
        </div>

        {/* Log In Button */}
        <button className="w-full bg-blue-700 text-white mt-6 py-2 px-4 rounded-lg mb-4 
          hover:bg-blue-800">
            Log in
        </button>
        
        {/* Links */}
        <div className="flex justify-center text-sm text-blue-500">
          <a href="#" className="hover:underline">Back to Login</a>
        </div>

      </div>
    </div>
  );
};

export default SignUp;
