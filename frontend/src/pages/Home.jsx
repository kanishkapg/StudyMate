import React from 'react'
import workingImg from '../assets/images/HomePageIcons/home_gif2.gif'
import HomeImg2 from '../assets/images/HomePageIcons/home_img2.png'
import HomeImg3 from '../assets/images/HomePageIcons/home_img3.png'
import HomeImg4 from '../assets/images/HomePageIcons/home_img4.png'
import googlePlayIcon from '../assets/images/FooterIcons/googlePlayIcon.png'
import appleStoreIcon from '../assets/images/FooterIcons/appleStoreIcon.jpg'


import StudyMateSection from '../components/Downloads'
import Features from '../components/Features'

import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <>
    {/* Hero section starts */}
    <section className='flex pb-12 pt-0'>
    <div className="container relative w-full bg-[url('./assets/images/HomePageIcons/bg_img_math.png')] 
    bg-right bg-center bg-no-repeat" >
      <div className="absolute inset-0 bg-gradient-to-b from-[#065CDD] to-[#E6EDF6] opacity-90 "></div> 
      <div className="relative z-10 flex items-center justify-between pt-[50px] max-w-7xl mx-auto px-6 pb-8">
        
        <div className="flex flex-col space-y-4 text-white w-2/3 pb-0">
          <h1 className="text-[54px] font-bold leading-[75px]">
            <span className="text-headingColor">Your  </span>
            <span className="text-white">Smart Learning </span>
            <span className="text-headingColor text-[72px]">Companion</span>
          </h1>
          <p className="text-[26px] leading-[27px] text-headingColor font-extra-bold">
            Welcome to StudyMate!
          </p>
          <p className="pt-4 text-[22px] leading-[27px] font-semibold text-headingColor">
          Take control of your study time with our innovative app. Join us for a smarter,
           more engaging way to study and achieve your academic goals!
          </p>
          <div className="flex space-x-4 pb-8 pt-4">
            <button className="bg-[#005FED] text-white py-2 px-4 rounded-full">
              <Link to='/login'>Log In</Link>
            </button>
            <button className="bg-[#003687] text-white py-2 px-4 rounded-full">Get Started Free</button>
          </div>
        </div>

        <div className="w-1/3 flex justify-center items-center">
          <div className="w-[400px]"><img src={workingImg} alt="" /></div>
        </div>
        
      </div>
    </div>
    </section>

    {/* Downloads section starts */}
    <section className="py-4 px-20">
      <div>
        <h2 className="text-[40px] font-extra-bold text-center mb-6 tracking-super-wide text-headingColor">
          DOWNLOADS
        </h2>

        <div className="flex items-center justify-between mb-6">
          <div>
            <img src={HomeImg2} alt="" className="w-[600px]" />
          </div>
          <div>
            <p className="text-[40px] font-bold text-primaryColor mt-4 text-center md:text-left">
              Your perfect study partner is
            </p>
            <p className="text-[50px] font-bold text-headingColor text-center md:text-left">
            Just a Tap Away!
            </p>
          
            <p className="text-[20px] text-gray-600 mt-4 text-center md:text-left">
              Take control of your study plans or keep track of your child's progress
              effortlessly with StudyMate. <br />
              <span className="text-[22px] font-bold">Best of all, it's free!</span> <br />
              Get started today by downloading from the Play Store or App Store.
            </p>
            <div className="flex justify-center items-center space-x-4 pt-4 mt-4">
              <div className="bg-black h-12 w-40 text-white flex items-center justify-center rounded-[8px]">
                <img src={googlePlayIcon} alt="" className='h-11'/>
              </div> {/* Google Play button */}
              <div className="bg-black h-12 w-40 text-white flex items-center justify-center rounded-[8px]">
                <img src={appleStoreIcon} alt="" className='h-11'/>
              </div> {/* App Store button */}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className='w-2/3'>
            <p className="text-[40px] font-bold text-primaryColor mt-4 text-center md:text-left">
              Master Your Time with the
            </p>
            <p className="text-[50px] font-bold text-headingColor text-center md:text-left">
              Pomodoro Technique
            </p>
          
            <p className="text-[20px] text-gray-600 mt-4 text-center md:text-left">
            Our app uses the Pomodoro Technique to help you stay focused and productive. 
            Alternate between work and short breaks with customizable timers, 
            ensuring you make the most out of every study session.
            </p>
          </div>
          <div>
            <img src={HomeImg3} alt="" className="w-[500px]" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div >
            <img src={HomeImg4} alt="" className="w-[500px]" />
          </div>
          <div className='w-2/3'>
            <p className="text-[40px] font-bold text-primaryColor mt-4 text-center md:text-left">
              Parents, Stay involved in
            </p>
            <p className="text-[50px] font-bold text-headingColor text-center md:text-left">
            Your Child's Progress 
            </p>
          
            <p className="text-[20px] text-gray-600 mt-4 text-center md:text-left">
            With StudyMate, parents can easily monitor their child's study habits and progress. 
            Receive detailed reports and stay informed about their academic journey.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* Downloads section ends */}

    {/* Features section starts */}
    <section className='pt-8'>
      <Features />
    </section>
    {/* Features section ends */}
    </>
  )
}

export default Home