import React from 'react'
import workingImg from '../assets/images/HomePageIcons/home_gif2.gif'
import Features from '../components/Features'

const Home = () => {
  return (
    <>
    {/* Hero section starts */}
    <section className='flex py-0'>
    <div className="container relative w-full h-screen bg-[url('./assets/images/HomePageIcons/bg_img_math.png')] 
    bg-right bg-center bg-no-repeat" >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 opacity-90"></div>
      
      <div className="relative z-10 flex items-center justify-between pt-[50px] max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col space-y-4 text-white w-2/3">
          <h1 className="text-[54px] font-bold leading-[75px]">
            <span className="text-headingColor">Your  </span>
            <span className="text-white">Smart Learning </span>
            <span className="text-headingColor text-[72px]">Companion</span>
          </h1>
          <p className="text-[26px] leading-[27px] text-headingColor font-bold">
            Welcome to StudyMate!
          </p>
          <p className="pt-4 text-[22px] leading-[27px] text-headingColor">
          Take control of your study time with our innovative app. Join us for a smarter,
           more engaging way to study and achieve your academic goals!
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded-full">Log In</button>
            <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-full">Get Started Free</button>
          </div>
        </div>

        <div className="w-1/3 flex justify-center items-center">
          <div className="w-[400px]"><img src={workingImg} alt="" /></div>
        </div>
        
      </div>
    </div>
    </section>

    {/* Downloads section starts */}
    <section className='bg-green-100'></section>
    {/* Downloads section ends */}

    {/* Features section starts */}
    <section>
      <Features />
    </section>
    {/* Features section ends */}
    </>
  )
}

export default Home