import React, { useState } from 'react';

// Child component of Navbar. Takes an array of navigation items and renders clickable link buttons with icons.
const NavbarItems = ({ items }) => {
  // Track which navigation item is currently active. Default to the first item.
  const [activeItem, setActiveItem] = useState(items[0]?.label || items[0]);

  return (
    <div className="flex gap-2 list-none m-0 p-0">
      {items.map((item, index) => {
        const itemLabel = item.label || item;
        const isActive = activeItem === itemLabel;

        return (
          <li key={index}>
            <a 
              href={item.href || "#"} 
              onClick={(e) => {
                // If it's just a # link, prevent scrolling to the top of the page
                if (!item.href || item.href === '#') {
                  e.preventDefault();
                }
                setActiveItem(itemLabel); // Set this item as the active one
              }}
              className={`flex items-center gap-1.5 cursor-pointer text-sm py-1.5 px-3 rounded-lg transition-all duration-300 font-medium decoration-transparent ${
                isActive 
                  ? 'bg-[#EBF3FB] text-[#0A66C2] font-semibold' // Active state matching original design
                  : 'bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900' // Normal state
              }`}
            >
              {item.icon && (
                <span className={`flex items-center justify-center w-4 h-4 text-center ${isActive ? 'text-[#0A66C2]' : ''}`}>
                  {React.cloneElement(item.icon, { size: 16 })}
                </span>
              )}
              <span>{itemLabel}</span>
            </a>
          </li>
        );
      })}
    </div>
  );
};

export default NavbarItems;