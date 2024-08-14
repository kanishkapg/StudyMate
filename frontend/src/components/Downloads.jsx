import React from 'react';
import HomeImg2 from '../assets/images/HomePageIcons/home_img2.png';
import HomeImg3 from '../assets/images/HomePageIcons/home_img3.png';

const StudyMateSection = () => {
  return (
    <div className="flex flex-col items-center bg-white py-10">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4">
        <div className="flex flex-col items-center md:items-start md:w-1/2">
          <img src={HomeImg2} alt="StudyMate App" className="w-64 h-auto" />
          <p className="text-3xl font-bold text-blue-600 mt-4 text-center md:text-left">
            Your perfect study partner is <br />
            Just a Tap Away!
          </p>
          <p className="text-gray-600 mt-4 text-center md:text-left">
            Take control of your study plans or keep track of your child's progress
            effortlessly with StudyMate. <br />
            <span className="font-bold">Best of all, it's free!</span> <br />
            Get started today by downloading from the Play Store or App Store.
          </p>
          <div className="flex space-x-4 mt-4">
            <button className="bg-black text-white px-4 py-2 rounded-lg w-36">Google Play</button>
            <button className="bg-black text-white px-4 py-2 rounded-lg w-36">App Store</button>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img src={HomeImg3} alt="Pomodoro Technique" className="w-64 h-auto" />
        </div>
      </div>

      <div className="flex flex-col items-center text-center mt-10 w-full max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-blue-600">Master Your Time with the Pomodoro Technique</h2>
        <p className="text-gray-600 mt-4 max-w-2xl">
          Our app uses the Pomodoro Technique to help you stay focused and productive. Alternate between work and short breaks with customizable timers, ensuring you make the most out of every study session.
        </p>
      </div>
    </div>
  );
};

export default StudyMateSection;