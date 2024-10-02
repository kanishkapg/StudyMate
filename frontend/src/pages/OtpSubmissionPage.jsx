import React, { useState } from 'react';
import otpImg from '../assets/images/LoginPageIcons/otp.png';
import { Link } from 'react-router-dom';

const OtpSubmissionPage = () => {
  const [otp, setOtp] = useState(new Array(5).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="flex flex-col items-center justify-between ">
      {/* Header and OTP form */}
      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center min-h-screen">
        
        {/* Left Phone Image with Tilt */}
        <div className="w-full md:w-1/2 flex justify-center ">
          <img 
            src={otpImg} 
            alt="OTP Verification Illustration" 
            className="w-[450px] transform rotate-[-18deg]"
          />
        </div>

        {/* Right OTP Input and Button */}
        <div className="w-full md:w-1/2 flex flex-col items-center mt-10 md:mt-0">
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-5">
            Please enter the code sent to your email to continue
          </h2>
          
          {/* OTP Input Fields */}
          <div className="flex justify-center space-x-6 my-5">
            {otp.map((data, index) => (
              <input
                className="w-12 h-12 text-center border-2 border-blue-300 rounded-md focus:outline-none 
                focus:ring-2 focus:ring-blue-500 bg-blue-200 text-2xl"
                type="text"
                name="otp"
                maxLength={1}
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>

          {/* Submit Button */}
          <button className="btn py-[7px] transition-all duration-200 mb-4">
            Submit
          </button>

          {/* Navigation Links */}
          <div className="flex space-x-4 text-blue-600 underline">
            <Link to='/register'>Back to Create Account Page</Link>
            <Link to='/login'>Back to Login Page</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpSubmissionPage;
