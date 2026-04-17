import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';

// Reusable alert banner. Uses 'variant' prop (warning/info) to change background and text colors.
const Alert = ({ 
  count,
  description,
  linkText,
  linkHref,
  variant = 'warning'
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'info':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          icon: <Clock className="text-blue-600 text-sm" />,
          titleColor: 'text-blue-900',
          descColor: 'text-blue-600',
          linkBg: 'bg-white border-blue-300 hover:border-blue-400',
          linkColor: 'text-blue-700'
        };
      default: // warning
        return {
          bg: 'bg-amber-50',
          border: 'border-amber-200',
          icon: <Clock className="text-amber-600 text-sm" />,
          titleColor: 'text-amber-900',
          descColor: 'text-amber-600',
          linkBg: 'bg-white border-amber-300 hover:border-amber-400',
          linkColor: 'text-amber-700'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={`flex items-center gap-3 ${styles.bg} ${styles.border} rounded-xl px-4 py-3.5`}>
      <div className="w-9 h-9 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
        <Clock className="text-amber-600 text-sm" />
      </div>
      <div className="flex-1">
        <p className={`text-sm font-semibold ${styles.titleColor}`}>{count} requests awaiting admin approval</p>
        <p className={`text-xs ${styles.descColor} mt-0.5`}>{description}</p>
      </div>
      <a 
        href={linkHref} 
        className={`hidden sm:flex items-center gap-1.5 text-xs font-semibold ${styles.linkColor} ${styles.linkBg} rounded-lg px-3 py-1.5 whitespace-nowrap transition-colors`}
      >
        {linkText} <ArrowRight className="w-[10px] h-[10px]" />
      </a>
    </div>
  );
};

export default Alert;
