import React from 'react';
import F1 from '../assets/images/HomePageIcons/feature_img1.png';
import F2 from '../assets/images/HomePageIcons/feature_img2.png';
import F3 from '../assets/images/HomePageIcons/feature_img3.png';
import F4 from '../assets/images/HomePageIcons/feature_img4.png';
import F5 from '../assets/images/HomePageIcons/feature_img5.png';
import F6 from '../assets/images/HomePageIcons/feature_img6.png';
import F7 from '../assets/images/HomePageIcons/feature_img7.png';
import F8 from '../assets/images/HomePageIcons/feature_img8.png';

const Features = () => {
  const featuresData = [
    {
      image: F1,
      title: "Pomodoro Timers",
      description: "Customizable Intervals For Study Sessions And Breaks.",
    },
    {
      image: F2,
      title: "Detailed Reports",
      description: "Visual Tools To Track And Display Study Progress.",
    },
    {
      image: F3,
      title: "Synchronization",
      description: "Seamless Web And Mobile App Synchronization.",
    },
    {
      image: F4,
      title: "Reminders",
      description: "Alerts And Notifications To Keep You On Track.",
    },
    {
      image: F5,
      title: "To-Do Lists",
      description: "Create, Manage, And Organize Tasks With Ease.",
    },
    {
      image: F6,
      title: "Rewards",
      description: "Stay Motivated By Earning Rewards For Your Progress.",
    },
    {
      image: F7,
      title: "Motivational Quotes",
      description: "Get Inspired With Uplifting Quotes To Keep You Going.",
    },
    {
      image: F8,
      title: "Parent View",
      description: "Parents Can View And Monitor Their Child's Progress.",
    }
  ];

  return (
    <div className="py-4 px-20">
      <h2 className="text-[40px] font-extra-bold text-center mb-6 tracking-super-wide text-headingColor">
        FEATURES
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-8">
        {featuresData.map((feature, index) => (
          <div key={index} className="text-center">
            {/* Image Placeholder */}
            <img src={feature.image} alt={feature.title} className="w-32 mx-auto mb-4" />

            {/* Feature Title */}
            <h3 className="font-bold text-[24px] mb-2">{feature.title}</h3>

            {/* Feature Description */}
            <p className="text-gray-600 text-[16px]">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
