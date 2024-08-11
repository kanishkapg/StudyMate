import React from 'react'
import workingImg from '../assets/images/HomePageIcons/home_gif2.gif'

const Home = () => {
  return (
    <>
    {/* Hero section starts */}
    <section className='flex pt-0'>
    <div className="container relative w-full h-screen bg-[url('./assets/images/HomePageIcons/bg_img_math.png')] 
    bg-right bg-center bg-no-repeat" >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 opacity-90"></div>
      
      <div className="relative z-10 flex items-center justify-between pt-[50px] max-w-7xl mx-auto px-6">
        
        {/* Left Column */}
        <div className="flex flex-col space-y-4 text-white w-2/3">
          <h1 className="text-5xl font-bold leading-tight">
            <span className="text-headingColor">Your  </span>
            <span className="text-white">Smart Learning </span>
            <span className="text-headingColor">Companion</span>
          </h1>
          <p className="text-lg font-light">
            Welcome to StudyMate!
          </p>
          <p className="text-md">
            Take control of your study time with our innovative app. Harness the power of the 
            Pomodoro technique to stay focused, track your progress, and keep your spirits high 
            with motivating rewards and inspiring quotes. Join us for a smarter, more engaging way 
            to study and achieve your academic goals!
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded-full">Log In</button>
            <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-full">Get Started Free</button>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="w-1/3 flex justify-center items-center">
          <div className="w-[400px]"><img src={workingImg} alt="" /></div>
        </div>
        
      </div>
    </div>
    </section>
    </>
  )
}

export default Home