import React from 'react';
import logo2 from '../../assets/images/HomePageIcons/logo2.png';
import linkedInImg from '../../assets/images/FooterIcons/linkedIcon.png';
import facebookImg from '../../assets/images/FooterIcons/facebookIcon.png';
import youtubeImg from '../../assets/images/FooterIcons/youtubeIcon.png';
import googlePlayIcon from '../../assets/images/FooterIcons/googlePlayIcon.png'
import appleStoreIcon from '../../assets/images/FooterIcons/appleStoreIcon.jpg'

const Footer = () => {
  return (
    <footer className='pt-10'>
      <div className="container bg-skyBlue w-full h-auto py-8">
      <div className="flex space-x-16 justify-center items-center">
        <div className="flex items-center space-x-0.5">
          <div >
            <img src={logo2} alt="Logo" className="w-[120px] h-auto" />
          </div> {/* Dummy logo */}
          <span className="font-semibold text-lg">| 2024</span>
        </div>
        <span className="font-semibold">www.studymate.com</span>
      </div>

      <div className="flex justify-center items-center space-x-[100px] my-4">
        <div className="h-10 w-10"><img src={linkedInImg} alt="" /></div> {/* LinkedIn icon */}
        <div className="h-10 w-10"><img src={facebookImg} alt="" /></div> {/* Facebook icon */}
        <div className="h-10 w-10"><img src={youtubeImg} alt="" /></div> {/* YouTube icon */}
      </div>

      <div className="text-center text-sm font-semibold">
        Department of Electrical and Information Engineering, Faculty of Engineering <br />
        University of Ruhuna.
      </div>

      <div className="flex justify-center items-center space-x-4 mt-4">
        <div className="bg-black h-12 w-40 text-white flex items-center justify-center rounded-[8px]">
          <img src={googlePlayIcon} alt="" className='h-11'/>
        </div> {/* Google Play button */}
        <div className="bg-black h-12 w-40 text-white flex items-center justify-center rounded-[8px]">
          <img src={appleStoreIcon} alt="" className='h-11'/>
        </div> {/* App Store button */}
      </div>
    </div>
    </footer>
  );
};

export default Footer;
