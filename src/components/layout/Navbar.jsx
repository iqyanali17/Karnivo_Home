import React, { useState, useEffect, useRef } from 'react';
import NavbarItems from './NavbarItems';
import { House, Users, Box, CirclePlus, Clock, Dot, Bell, ChevronDown } from 'lucide-react';
import NavDropDown from './NavDropDown';

// Main navigation bar component. Contains the brand logo, navigation links, and the profile dropdown switch.
const Navbar = ({ navItems = [
  { label: 'Dashboard', icon: <House size={18} /> },
  { label: 'Book a Space', icon: <CirclePlus size={18} /> },
  { label: 'My Requests', icon: <Clock size={18} /> },
  { label: 'Team', icon: <Users size={18} /> },
  { label: 'Plans', icon: <Box size={18} /> }
] }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white sticky top-0 z-[1000] border-b border-gray-200">
      <div className="flex items-center justify-between py-2 px-6 relative">
        <a href="/" className="flex items-center gap-2.5 decoration-transparent hover:opacity-90 transition-opacity">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.5" y="1.5" width="17" height="17" rx="5" stroke="#0A66C2" strokeWidth="1.9"></rect>
            <rect x="11.5" y="11.5" width="17" height="17" rx="5" stroke="#111827" strokeWidth="1.9"></rect>
            <circle cx="20.5" cy="20.5" r="2" fill="#0A66C2"></circle>
          </svg>
          <div className="flex flex-col">
            <p className="m-0 leading-tight font-semibold text-lg text-gray-900">Karnivo</p>
            <p className="m-0 text-xs text-gray-500">Company Portal</p>
          </div>
        </a>
        <NavbarItems items={navItems} />

        {/* Right group: JP Nagar + Notification + Profile — kept tight together */}
        <div className="flex items-center gap-1 ml-8">
          <div className="hidden md:flex flex-row border border-gray-300 rounded py-1.5 px-3 w-auto font-semibold h-9 items-center bg-gray-50">
            <Dot className="h-8 w-8 text-green-500 flex-shrink-0 -ml-2" />
            <p className="m-0 text-xs whitespace-nowrap text-gray-700">JP Nagar Incubation</p>
          </div>
          <button className="relative w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition-colors">
            <Bell className="w-[18px] h-[18px] text-gray-600" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          <button className="flex items-center gap-2.5 border-none py-1 px-2.5 rounded hover:bg-gray-100 cursor-pointer bg-transparent transition-colors" onClick={() => setShowDropdown(!showDropdown)}>
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#0A66C2] flex items-center justify-center overflow-hidden">
              <span className="text-white font-semibold text-sm uppercase">TV</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 flex-shrink-0 text-left">
              <div className="flex flex-col">
                <h6 className="m-0 text-sm font-semibold text-gray-900 leading-none">Tech VenTures pvt ltd</h6>
                <p className="m-0 text-[10px] text-gray-500 mt-0.5">Company Admin</p>
              </div>
              <ChevronDown className="flex-shrink-0 text-gray-500 w-4 h-4" />
            </div>
          </button>
        </div>
        {showDropdown && (
          <div ref={dropdownRef} className="absolute top-[calc(100%+4px)] right-6 z-[2000] bg-white shadow-lg border border-gray-200 rounded-lg">
            <NavDropDown />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
