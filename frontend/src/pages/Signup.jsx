import React, {useState} from 'react';
import SignUpTest from '../components/SignUp/SignUpTest';
import logo2 from '../assets/images/HomePageIcons/logo2.png'
import studentImg from '../assets/images/LoginPageIcons/student.png'
import parentImg from '../assets/images/LoginPageIcons/parent.png'
import studentImg2 from '../assets/images/LoginPageIcons/student2.png'
import parentImg2 from '../assets/images/LoginPageIcons/parent2.png'

import {Link} from 'react-router-dom'


const SignUp = () => {
  const [role, setRole] = useState(null);

  console.log(role);

  return (
    <>
    {!role && (
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
            <button 
             className="bg-skyBlue hover:bg-[#0E3167] hover:text-white w-[350px] px-4 py-2 
             rounded-md text-left shadow-custom-dark "
             onClick={() => setRole('student')}
            >
              Student
            </button>
          </div>
          <div className="flex justify-between w-full items-center space-x-4">
            <div>
              <img src={parentImg} alt="" className="w-[160px]" />
            </div>
            <button 
             className="bg-skyBlue hover:bg-[#0E3167] hover:text-white w-[350px] px-4 py-2 
             rounded-md text-left shadow-custom-dark "
             onClick={() => setRole('parent')}
            >
              Parent
            </button>
          </div>
        </div>

        {/* Log In Button */}
        <button className="w-full bg-blue-700 text-white mt-6 py-2 px-4 rounded-lg mb-4 
          hover:bg-blue-800">
            Continue
        </button>
        
        {/* Links */}
        <div className="flex justify-center text-sm text-blue-500">
          <a href="#" className="hover:underline">Back to Login</a>
        </div>

      </div>
    </div>
    )}

    {role === 'student' && (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[800px] shadow-md p-8 ">
        <div className="flex items-center justify-center">
            <img src={logo2} alt="" className="w-[160px]"/>
            <img src={studentImg2} alt="" className="w-[100px]"/>
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Ready to Rock Your Studies? Let's Go!</h2>

        <form action="">
          <div className="w-full pl-4 pr-4 flex items-center justify-between space-x-12">
            <div className='w-1/2'>
              <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
              <input 
                className="w-full bg-blue-100 text-gray-700 border border-gray-300 rounded-lg py-2 px-4 mb-4" 
                type="text" 
                placeholder="Enter Your Full Name" 
              />
            </div>
            <div className='w-1/2'>
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input 
                className="w-full bg-blue-100 text-gray-700 border border-gray-300 rounded-lg py-2 px-4 mb-4" 
                type="password" 
                placeholder="Enter Your Password" 
              />
            </div>
          </div>

          <div className="w-full pl-4 pr-4 flex items-center justify-between space-x-12">
            <div className='w-1/2'>
              <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
              <input 
                className="w-full bg-blue-100 text-gray-700 border border-gray-300 rounded-lg py-2 px-4 mb-4" 
                type="email" 
                placeholder="Enter Your Email Address" 
              />
            </div>
            <div className='w-1/2'>
              <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
              <input 
                className="w-full bg-blue-100 text-gray-700 border border-gray-300 rounded-lg py-2 px-4 mb-4" 
                type="password" 
                placeholder="Confirm Your Password" 
              />
            </div>
          </div>

          <div className="w-full pl-4 pr-4 flex items-center justify-between space-x-12">
            <div className='w-1/2'>
              <label className="block text-gray-700 text-sm font-bold mb-2">Grade or Educational Level</label>
              <input 
                className="w-full bg-blue-100 text-gray-700 border border-gray-300 rounded-lg py-2 px-4 " 
                type="text" 
                placeholder="Enter Your Grade or Educational Level" 
              />
            </div>
            <div className='w-1/2'>
              <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
              <input 
                className="w-full bg-blue-100 text-gray-700 border border-gray-300 rounded-lg py-2 px-4 " 
                type="text" 
                placeholder="Enter Your Phone Number" 
              />
            </div>
          </div>

          <div className="w-full flex pl-4 pr-4 justify-end items-center space-x-12">
            <div className="w-1/2"></div>
            <div className="w-1/2">
              <button className="w-full justify-end bg-blue-700 text-white mt-6 py-2 px-4 rounded-lg mb-4 hover:bg-blue-800">
                Continue
              </button>
              <p className="text-center">
                <Link to="/login" className="text-sm text-blue-500 hover:underline">Back to Login Page</Link>
              </p>
            </div>
          </div>

        </form>

      </div>
    </div>
    )}

    {role === 'parent' && (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[800px] shadow-md p-8 ">
        <div className="flex items-center justify-center">
            <img src={logo2} alt="" className="w-[160px]"/>
            <img src={parentImg2} alt="" className="w-[100px]"/>
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Welcome, Super Parent! Let's Get Started!</h2>

        <form action="">
          <div className="w-full pl-4 pr-4 flex items-center justify-between space-x-12">
            <div className='w-1/2'>
              <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
              <input 
                className="w-full bg-blue-100 text-gray-700 border border-gray-300 rounded-lg py-2 px-4 mb-4" 
                type="text" 
                placeholder="Enter Your Full Name" 
              />
            </div>
            <div className='w-1/2'>
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input 
                className="w-full bg-blue-100 text-gray-700 border border-gray-300 rounded-lg py-2 px-4 mb-4" 
                type="password" 
                placeholder="Enter Your Password" 
              />
            </div>
          </div>

          <div className="w-full pl-4 pr-4 flex items-center justify-between space-x-12">
            <div className='w-1/2'>
              <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
              <input 
                className="w-full bg-blue-100 text-gray-700 border border-gray-300 rounded-lg py-2 px-4 mb-4" 
                type="email" 
                placeholder="Enter Your Email Address" 
              />
            </div>
            <div className='w-1/2'>
              <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
              <input 
                className="w-full bg-blue-100 text-gray-700 border border-gray-300 rounded-lg py-2 px-4 mb-4" 
                type="password" 
                placeholder="Confirm Your Password" 
              />
            </div>
          </div>

          <div className="w-full pl-4 pr-4 flex items-center justify-between space-x-12">
            <div className='w-1/2'>
              <label className="block text-gray-700 text-sm font-bold mb-2">Child's Full Name</label>
              <input 
                className="w-full bg-blue-100 text-gray-700 border border-gray-300 rounded-lg py-2 px-4 mb-4" 
                type="text" 
                placeholder="Enter Your Grade or Educational Level" 
              />
            </div>
            <div className='w-1/2'>
              <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
              <input 
                className="w-full bg-blue-100 text-gray-700 border border-gray-300 rounded-lg py-2 px-4 mb-4" 
                type="text" 
                placeholder="Enter Your Phone Number" 
              />
            </div>
          </div>
        </form>

      </div>
    </div>
    )}
    </>
    
  );
};

export default SignUp;
