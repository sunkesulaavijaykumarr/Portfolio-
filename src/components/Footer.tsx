import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Code2 } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <footer className="bg-[#0B0B0B] mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-6 py-16">
        {/* Logo and Description */}
        <div className="flex flex-col items-center text-center mb-12">
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 mb-3 hover:opacity-80 transition-opacity"
          >
            <Code2 className="w-8 h-8 text-[#4F46E5]" />
            <span className="text-[22px] font-bold text-[#4F46E5]">VK</span>
          </button>
          <p className="text-[#94A3B8] text-base">
            
          </p>
        </div>
        
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavigation('home')} className="text-[#94A3B8] hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('about')} className="text-[#94A3B8] hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('skills')} className="text-[#94A3B8] hover:text-white transition-colors">
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('education')} className="text-[#94A3B8] hover:text-white transition-colors">
                  Education
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('projects')} className="text-[#94A3B8] hover:text-white transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('contact')} className="text-[#94A3B8] hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
            </div>

          {/* Legal */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-[#94A3B8] hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-[#94A3B8] hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:sunkesulaavijaykumarr@gmail.com" className="text-[#94A3B8] hover:text-white transition-colors">
                  sunkesulaavijaykumarr@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-[#94A3B8] text-sm">
          <p>&copy; {new Date().getFullYear()} Sunkesula Vijay Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;