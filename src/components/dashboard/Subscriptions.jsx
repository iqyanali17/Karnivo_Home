import React from 'react';
import { Mic, MonitorDot, Plus, Circle, Info } from 'lucide-react';
import { FaUsers, FaChalkboard } from 'react-icons/fa';

// Single subscription plan card. Uses 'variant' prop to display standard plans or add-ons.
const PlanCard = ({ 
  variant = 'plan',
  planName,
  renewalDate,
  price,
  status,
  sinceDate,
  credits = [] 
}) => {
  
  // Helper to fetch the right icon for the room/feature type
  const getCreditIcon = (creditType) => {
    switch (creditType) {
      case 'meeting':
        return <FaUsers className="text-blue-400 w-3 h-3" />;
      case 'conference':
        return <FaChalkboard className="text-blue-400 w-3 h-3" />;
      case 'auditorium':
        return <Mic className="text-blue-400 w-3 h-3" />;
      case 'hotdesk':
        return <MonitorDot className="text-blue-400 w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white">
      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="text-sm font-semibold text-gray-900">{planName}</p>
          <p className="text-xs text-gray-400 mt-0.5">Renews {renewalDate}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-bold text-gray-900">₹{price}</p>
          <p className="text-[10px] text-gray-400">/ month</p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-3">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold whitespace-nowrap bg-green-50 text-green-700">
          <Circle className="w-1.5 h-1.5 fill-current" />
          {status}
        </span>
        <span className="text-[10px] text-gray-400">{sinceDate}</span>
      </div>

      <div className="border-t border-gray-100 pt-2.5 space-y-0.5">
        {credits.map((credit, index) => (
          <div key={index} className="flex items-center gap-1.5 text-xs text-gray-500 py-0.5">
            {/* If it's an add-on variant, show a green plus instead of a room icon */}
            {variant === 'addon' ? (
              <Plus className="text-green-500 w-3 h-3" />
            ) : (
              getCreditIcon(credit.type)
            )}
            <span>{credit.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Container component to display active subscription plans and add-ons
const Subscriptions = () => {
  const plans = [
    {
      id: 1,
      variant: 'plan', // Renders standard room icons
      planName: 'Innovate Package',
      renewalDate: 'May 2, 2026',
      price: '15,000',
      status: 'Active',
      sinceDate: 'Since Oct 2025',
      credits: [
        { type: 'meeting', text: '20 hrs Meeting Room / mo' },
        { type: 'conference', text: '10 hrs Conference Room / mo' },
        { type: 'auditorium', text: '4 hrs Auditorium / mo' },
        { type: 'hotdesk', text: '4 Hot Desk seats included' }
      ]
    },
    {
      id: 2,
      variant: 'addon', // Renders green plus icons for extra credits
      planName: 'Flex Credits Add-on',
      renewalDate: 'May 2, 2026',
      price: '5,000',
      status: 'Active',
      sinceDate: 'Added Feb 2026',
      credits: [
        { type: 'addon', text: '+5 hrs Meeting Room / mo' },
        { type: 'addon', text: '+5 hrs Conference Room / mo' }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <h3 className="font-semibold text-gray-900 text-sm">Active Subscriptions</h3>
        <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">Manage</a>
      </div>

      <div className="p-4 space-y-3">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            {...plan}
          />
        ))}

        <div className="bg-blue-50 rounded-lg px-3 py-2.5 flex items-center gap-2">
          <Info className="text-blue-500 w-4 h-4 flex-shrink-0" />
          <p className="text-xs text-blue-700">Combined monthly allocation: 25 MR · 15 CR · 4 Aud hrs</p>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
