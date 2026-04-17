import React from 'react';
import { Users, Monitor, Mic, ChevronRight } from 'lucide-react';

// Dashboard stat card. Uses 'variant' prop (meeting/conference/auditorium) to apply specific icons, progress bar colors, and text styles.
const Card = ({ 
  variant = 'meeting', 
  title, 
  icon, 
  hoursLeft, 
  totalHours, 
  hoursUsed, 
  percentage, 
  status, 
  buttonText,
  onClick 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'conference':
        return {
          icon: <Monitor className="text-orange-500" />,
          iconBg: 'bg-orange-50',
          progressColor: 'bg-[#FF6B35]',
          buttonColor: 'text-orange-500',
          hoverColor: 'hover:text-orange-600'
        };
      case 'auditorium':
        return {
          icon: <Mic className="text-green-500" />,
          iconBg: 'bg-green-50',
          progressColor: 'bg-[#10B981]',
          buttonColor: 'text-green-500',
          hoverColor: 'hover:text-green-600'
        };
      default: // meeting
        return {
          icon: <Users className="text-blue-500" />,
          iconBg: 'bg-blue-50',
          progressColor: 'bg-[#0A66C2]',
          buttonColor: 'text-blue-500',
          hoverColor: 'hover:text-blue-600'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div 
      className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm cursor-pointer hover:border-[#0A66C2] hover:shadow-[0_4px_16px_rgba(10,102,194,0.08)] transition-all duration-200"
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{title}</p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl font-bold text-gray-900">{hoursLeft}</span>
            <span className="text-sm text-gray-400 font-medium">hrs left</span>
          </div>
          <p className="text-xs text-gray-400 mt-0.5">of {totalHours} hrs this month</p>
        </div>
        <div className={`w-10 h-10 ${styles.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
          {icon || styles.icon}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-100 rounded-full h-[5px] mt-4 overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-300 ${styles.progressColor}`}
          style={{ width: percentage }}
        ></div>
      </div>

      {/* Usage Info */}
      <div className="flex items-center justify-between mt-2">
        <span className="text-xs text-gray-400">{hoursUsed} hrs used</span>
        <span className={`text-xs font-semibold ${styles.buttonColor}`}>{percentage} remaining</span>
      </div>

      {/* Button */}
      <div className="mt-4 pt-3 border-t border-gray-100">
        <a 
          href="#" 
          className={`flex items-center justify-center gap-1.5 text-xs font-semibold ${styles.buttonColor} ${styles.hoverColor} transition-colors duration-200`}
          onClick={(e) => {
            e.preventDefault();
            if (onClick) onClick();
          }}
        >
          {buttonText} <ChevronRight className="w-[10px] h-[10px]" />
        </a>
      </div>
    </div>
  );
};

export default Card;
