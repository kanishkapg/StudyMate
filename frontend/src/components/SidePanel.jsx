import React from 'react';
import { UserIcon, HomeIcon, ClockIcon, PencilIcon, BellIcon, ArrowLeftOnRectangleIcon, 
QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const SidePanel = () => {
  return (
    <div className="w-[60px] ml-[20px] bg-blue-500 bg-opacity-240 flex flex-col justify-between 
    items-center py-4 rounded-full bg-opacity-80">
      {/* Top section icons */}
      <div className="space-y-6 mt-4">
        <UserIcon className="h-8 w-8 text-white" />

        {/* Wrap the HomeIcon with Link */}
        <Link to="/home">
          <HomeIcon className="h-8 w-8 mt-4 text-white hover:text-blue-950 cursor-pointer" />
        </Link>

        <ClockIcon className="h-8 w-8 text-white" />
        <Link  to="/to-do-before">
          <PencilIcon className="h-8 w-8 mt-4 text-white hover:text-blue-950 cursor-pointer" />
        </Link>
        <BellIcon className="h-8 w-8 text-white" />
        <ArrowLeftOnRectangleIcon className="h-8 w-8 text-white" />
        <Link to="/contact">
          <QuestionMarkCircleIcon className="h-8 w-8 mt-4 text-white hover:text-blue-950 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default SidePanel;
