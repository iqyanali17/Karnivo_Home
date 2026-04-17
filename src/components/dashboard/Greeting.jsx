import { Dot, Box, Clock, Users } from 'lucide-react';
import React from 'react';

// Greeting header component displaying current date, quick stats, and New Booking button.
const Greeting = () => {
  return (
    <div className="px-8 pt-6 pb-2 rounded-xl relative mx-6 mt-4 mb-0 bg-transparent">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Good morning, TechVentures!</h1>
      <div>
        <p className="mb-1 text-gray-500 text-sm flex items-center gap-2">
          <span>Monday, 6th April 2026</span>
          <Dot className="w-4 h-4 text-green-500 flex-shrink-0" />
          <span>JP Nagar Center</span>
        </p>
        <div className="flex flex-wrap gap-0 mb-2">
          <div className="flex items-center py-2 pl-0 pr-3 transition-transform">
            <Box className="text-blue-600 flex-shrink-0 mr-2 w-5 h-5" />
            <p className="m-0 text-sm font-medium text-gray-700 whitespace-nowrap">2 active plans</p>
          </div>
          <div className="flex items-center py-2 px-3 transition-transform">
            <Users className="text-blue-600 flex-shrink-0 mr-2 w-5 h-5" />
            <p className="m-0 text-sm font-medium text-gray-700 whitespace-nowrap">4 team members</p>
          </div>
          <div className="flex items-center py-2 px-3 transition-transform">
            <Clock className="text-orange-500 flex-shrink-0 mr-2 w-5 h-5" />
            <p className="m-0 text-sm font-medium text-orange-500   whitespace-nowrap">3 request pending</p>
          </div>
        </div>
      </div>
      
      <button className="absolute top-8 right-8 bg-[#0A66C2] text-white border-none py-3 px-8 rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:bg-[#0A66C2] active:scale-95 hidden sm:block">
        + New Booking Request
      </button>
    </div>
  );
};

export default Greeting;
