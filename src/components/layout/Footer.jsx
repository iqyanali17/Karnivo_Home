import React from 'react';

// Standard footer component to be rendered at the bottom of the layout.
const Footer = () => {
  return (
    <footer className="mx-10 mt-6 pt-6 pb-8 border-t border-gray-200">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[13px] text-gray-400 m-0">© 2026 Kanrivo. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-[13px] text-gray-400 hover:text-gray-600 transition-colors decoration-transparent hover:underline">Help & Support</a>
          <a href="#" className="text-[13px] text-gray-400 hover:text-gray-600 transition-colors decoration-transparent hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
