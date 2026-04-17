import { Building, LogOut, Settings } from "lucide-react";

// Dropdown menu showing company profile, settings, and sign-out options when triggered from the Navbar.
const NavDropDown = () => {
  return (
        <div className="bg-white border border-gray-200 rounded-lg py-2 min-w-[240px] shadow-xl">
            <div className="py-3 px-4 border-b border-gray-100 text-sm bg-gray-50/50 rounded-t-lg">
                <strong className="text-gray-900 block mb-0.5">TechVentures pvt Ltd</strong>
                <span className="text-[10px] text-gray-500 font-medium">admin@techventures.com</span>
            </div>
            <div className="flex items-center gap-3 py-3 px-4 cursor-pointer transition-all duration-200 hover:bg-gray-100">
                <Building size={16} className="text-gray-400 group-hover:text-blue-600" />
                <span className="text-sm text-gray-600 group-hover:text-blue-700 font-medium">Company Profile</span>
            </div>
            <div className="flex items-center gap-3 py-3 px-4 cursor-pointer transition-all duration-200 hover:bg-gray-100">
                <Settings size={16} className="text-gray-400 group-hover:text-blue-600" />
                <span className="text-sm text-gray-600 group-hover:text-blue-700 font-medium">Settings</span>
            </div>
            <hr className="my-1 border-gray-100" />
            <div className="flex items-center gap-3 py-3 px-4 cursor-pointer transition-all duration-200 hover:bg-red-50 group">
                <LogOut size={16} className="text-gray-400 group-hover:text-red-600" />
                <span className="text-sm text-gray-600 group-hover:text-red-700 font-medium">Sign Out</span>
            </div>
        </div>
    );
};

export default NavDropDown;