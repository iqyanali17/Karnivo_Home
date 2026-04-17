import React from 'react';
import { Dot } from 'lucide-react';
import Card from '../shared/Card';
import BookingList from './BookingList';
import Subscriptions from './Subscriptions';
import TeamPanel from './TeamPanel';
import Alert from '../shared/Alert';

// Main dashboard container. Assembles Cards, BookingList, Subscriptions, and TeamPanel in a grid layout.
const Credits = () => {
  return (
    <div>
      {/* Credits Section */}
      <div className="p-5 bg-white rounded-lg mx-5 mb-2.5 relative">
        <div className="flex justify-between items-center mb-0.25">
          <p className='text-lg font-bold text-gray-700 m-0'>Space Credits — April 2026</p>
          <a href="#" className="font-semibold text-[#0A66C2] hover:text-[#0A66C2] transition-colors duration-300 cursor-pointer">view Breakdown</a>
        </div>
        <p className='text-sm text-gray-600 flex items-center m-0'>
          Combined Across 2 active plans 
          <Dot className="w-4 h-4 text-green-500 flex-shrink-0 mr-2" /> 
          Resets May 2, 2026 (24h)
        </p>
      </div>

      {/* Room Booking Cards */}
      <div className="mx-5 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Meeting Room Card */}
          <Card
            variant="meeting"
            title="MEETING ROOM"
            hoursLeft="15"
            totalHours="25"
            hoursUsed="10"
            percentage="60%"
            buttonText="Book Meeting Room"
            onClick={() => window.location.href = 'company-booking-request.html?type=meeting'}
          />

          {/* Conference Room Card */}
          <Card
            variant="conference"
            title="CONFERENCE ROOM"
            hoursLeft="3"
            totalHours="15"
            hoursUsed="12"
            percentage="20%"
            status="Low"
            buttonText="Book Conference Room"
            onClick={() => window.location.href = 'company-booking-request.html?type=conference'}
          />

          {/* Auditorium Card */}
          <Card
            variant="auditorium"
            title="AUDITORIUM"
            hoursLeft="4"
            totalHours="4"
            hoursUsed="0"
            percentage="100%"
            status="Full"
            buttonText="Book Auditorium"
            onClick={() => window.location.href = 'company-booking-request.html?type=auditorium'}
          />
        </div>
      </div>

      {/* Main Grid: 3 + 2 columns */}
      <div className="mx-5 mb-5 grid grid-cols-1 lg:grid-cols-5 gap-5">

        {/* LEFT column: Booking List + Alert (no gap between them) */}
        <div className="lg:col-span-3 space-y-5">
          <BookingList />
          <Alert
            count="3"
            description="Conference Room B (Apr 7), Meeting Room 3 (Apr 8), and 1 more"
            linkText="Track Requests"
            linkHref="company-bookings.html?filter=pending"
            variant="warning"
          />
        </div>

        {/* RIGHT column: Subscriptions + Team */}
        <div className="lg:col-span-2 space-y-5">
          <Subscriptions />
          <TeamPanel />
        </div>

      </div>
    </div>
  );
};

export default Credits;
