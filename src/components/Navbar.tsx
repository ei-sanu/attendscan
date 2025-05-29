import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { QrCode, Users, Home, Info, Phone, Menu, X } from 'lucide-react';

const navItems = [
  { path: '/', name: 'Home', icon: <Home size={20} /> },
  { path: '/participant', name: 'Participant', icon: <Users size={20} /> },
  { path: '/volunteer', name: 'Volunteer', icon: <QrCode size={20} /> },
  { path: '/about', name: 'About Us', icon: <Info size={20} /> },
  { path: '/contact', name: 'Contact', icon: <Phone size={20} /> },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1a1a25] border-b border-[#A020F033] sticky top-0 z-50 backdrop-blur-lg bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <QrCode className="h-8 w-8 text-[#A020F0]" />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A020F0] to-[#c27ff8]">
                AttendScan
              </span>
            </NavLink>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center px-4 py-2 rounded-md transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#A020F033] text-[#A020F0]' 
                      : 'text-gray-300 hover:text-white hover:bg-[#A020F022]'
                  }`
                }
              >
                <span className="mr-2">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden"
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `flex items-center px-3 py-2 rounded-md transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#A020F033] text-[#A020F0]' 
                    : 'text-gray-300 hover:text-white hover:bg-[#A020F022]'
                }`
              }
            >
              <span className="mr-2">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;