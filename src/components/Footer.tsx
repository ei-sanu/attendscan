import React from 'react';
import { Link } from 'react-router-dom';
import { QrCode, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a25] border-t border-[#A020F033] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <QrCode className="h-8 w-8 text-[#A020F0]" />
              <span className="ml-2 text-xl font-bold text-white">AttendScan</span>
            </div>
            <p className="mt-4 text-gray-400 max-w-xs">
              Simplifying attendance tracking with QR code technology for events and organizations.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/ei-sanu" className="text-gray-400 hover:text-[#A020F0] transition-colors">
                <Github size={20} />
              </a>
              <a href="https://x.com/SomeshR82674271" className="text-gray-400 hover:text-[#A020F0] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/in/somesh-biswal-b73576320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-[#A020F0] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#A020F0] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/participant" className="text-gray-400 hover:text-[#A020F0] transition-colors">
                  Participant
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-gray-400 hover:text-[#A020F0] transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#A020F0] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#A020F0] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <p className="text-gray-400 mb-2">
              <a
                href="https://somesh.social"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#A020F0] transition-colors"
              >
                somesh.social
              </a>
            </p>
            <p className="text-gray-400 mb-2">+91 7008450074</p>
            <p className="text-gray-400">BH-1 Lovely Professional University<br></br>

              Phagwara, Punjab - 144411

</p>
          </div>
        </div>

        <div className="border-t border-[#A020F033] mt-8 pt-6">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} AttendScan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
