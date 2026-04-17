import React from 'react';
import { Plus,ArrowRight } from 'lucide-react';

// Single team member row. Uses 'variant' prop (admin/member) for different role badges.
const MemberRow = ({
  variant = 'member',
  initials,
  name,
  email,
  avatarBg,
  avatarText
}) => {
  
  // Style details for different roles
  const roleConfig = {
    admin: {
      label: 'Admin',
      labelClass: 'text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-md font-semibold'
    },
    member: {
      label: 'Member',
      labelClass: 'text-gray-500 font-medium'
    }
  };

  // Pick the correct styles based on the given role variant
  const config = roleConfig[variant] || roleConfig.member;

  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-b-0">
      <div className={`w-8 h-8 ${avatarBg} ${avatarText} rounded-full flex items-center justify-center flex-shrink-0 text-[11px] font-bold`}>
        {initials}
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{name}</p>
        <p className="text-xs text-gray-400 truncate">{email}</p>
      </div>

      <span className={`text-[10px] flex-shrink-0 ${config.labelClass}`}>
        {config.label}
      </span>
    </div>
  );
};

// Container component that holds the list of team members
const TeamPanel = () => {
  const members = [
    {
      initials: 'RS',
      name: 'Rajesh Sharma',
      email: 'rajesh@techventures.com',
      variant: 'admin', // Shows blue admin badge
      avatarBg: 'bg-blue-100',
      avatarText: 'text-blue-700'
    },
    {
      initials: 'PK',
      name: 'Priya Kapoor',
      email: 'priya@techventures.com',
      variant: 'member', // Shows normal member text
      avatarBg: 'bg-purple-100',
      avatarText: 'text-purple-700'
    },
    {
      initials: 'AK',
      name: 'Arjun Kumar',
      email: 'arjun@techventures.com',
      variant: 'member',
      avatarBg: 'bg-green-100',
      avatarText: 'text-green-700'
    },
    {
      initials: 'SM',
      name: 'Sunita Mehta',
      email: 'sunita@techventures.com',
      variant: 'member',
      avatarBg: 'bg-orange-100',
      avatarText: 'text-orange-700'
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <h3 className="font-semibold text-gray-900 text-sm">Team Members</h3>
        <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">Manage</a>
      </div>

      <div className="px-4 py-3 space-y-0.5">
        {members.map((member, index) => (
          <MemberRow
            key={index}
            {...member}
          />
        ))}
      </div>

      <div className="px-4 pb-4">
        <button className="w-full mt-1 flex items-center justify-center gap-1.5 text-xs text-gray-400 hover:text-blue-600 border border-dashed border-gray-200 hover:border-blue-600 rounded-lg py-2 transition-colors">
          <Plus className="w-2.5 h-2.5" /> Invite Team Member
        </button>
      </div>
    </div>
  );
};

export default TeamPanel;
