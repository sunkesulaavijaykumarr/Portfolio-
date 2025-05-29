import { useState, useEffect, useRef } from 'react';
import { Menu, X, Code2, Mail } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import 'animate.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEmailOptions, setShowEmailOptions] = useState(false);
  const [logoText, setLogoText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef<number | null>(null);
  const fullLogoText = 'VK';

  const emailSubject = "Job Opportunity for Full Stack Developer";
  const emailBody = "Hi Vijaykumar,%0A%0AI came across your portfolio and I'm interested in discussing a potential job opportunity with you.%0A%0ACompany: %0APosition: %0ALocation: %0A%0ALooking forward to hearing from you.%0A%0ABest regards,%0A";
  const emailAddress = "sunkesulaavijaykumarr@gmail.com";

  const emailLinks = {
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${emailSubject}&body=${emailBody}`,
    default: `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowEmailOptions(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowEmailOptions(false);
    }, 300); // 300ms delay before closing
  };

  const EmailOptions = ({ className = "", onSelect = () => {} }) => (
    <div className={`backdrop-blur-lg bg-slate-900/90 rounded-lg p-1.5 ${className}`}>
      <a
        href={emailLinks.gmail}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-3 py-1.5 text-[13px] text-white bg-[#4F46E5] hover:bg-[#4338CA] rounded-md transition-colors mb-1"
        onClick={onSelect}
      >
        Gmail
      </a>
      <a
        href={emailLinks.default}
        className="block px-3 py-1.5 text-[13px] text-white bg-[#4F46E5] hover:bg-[#4338CA] rounded-md transition-colors"
        onClick={onSelect}
      >
        Mail App
      </a>
    </div>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullLogoText.length) {
        setLogoText(fullLogoText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    const blinkInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(blinkInterval);
    };
  }, []);

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0B0B0B]/95 backdrop-blur-sm shadow-lg' : 'bg-[#0B0B0B]'
      } py-2 md:py-3`}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-10 md:h-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 md:w-8 md:h-8 text-[#4F46E5]" />
            <a 
              href="#" 
              className="flex items-center"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              <span className="text-lg md:text-[22px] font-bold text-[#4F46E5]">{logoText}</span>
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-[#4F46E5] ml-[1px] text-lg md:text-[22px] font-bold`}></span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#" 
              className="text-[15px] text-[#94A3B8] hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Home
            </a>
            {[
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'education', label: 'Education' },
              { id: 'projects', label: 'Projects' },
              { id: 'testimonials', label: 'Testimonials' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[15px] text-[#94A3B8] hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Hire Me Button with Options */}
          <div className="hidden md:block relative"
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}>
            <div
              className="px-4 py-1.5 text-[14px] font-medium text-white bg-[#4F46E5] rounded hover:bg-[#4338CA] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Mail size={14} />
              Hire Me
            </div>
            {showEmailOptions && (
              <div className="absolute right-0 mt-1 w-32">
                <EmailOptions onSelect={() => setShowEmailOptions(false)} />
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1.5 text-[#94A3B8] hover:text-white rounded-lg transition-colors relative z-50"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 }
              }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 top-[56px] md:top-[60px] bg-[#0B0B0B]/98 backdrop-blur-lg md:hidden z-40"
          >
            <div className="h-[calc(100vh-56px)] md:h-[calc(100vh-60px)] flex flex-col px-4 py-6 overflow-y-auto">
              <div className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="text-base font-medium text-[#94A3B8] hover:text-white transition-colors flex items-center gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                >
                  Home
                </a>
                {[
                  { id: 'about', label: 'About' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'education', label: 'Education' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'testimonials', label: 'Testimonials' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-base font-medium text-[#94A3B8] hover:text-white transition-colors capitalize"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.id);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
                
                {/* Mobile Hire Me Button */}
                <div className="pt-4 space-y-3">
                  <a
                    href={emailLinks.gmail}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2.5 text-center text-white bg-[#4F46E5] hover:bg-[#4338CA] rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Mail size={16} />
                    Contact via Gmail
                  </a>
                  <a
                    href={emailLinks.default}
                    className="block w-full py-2.5 text-center text-white bg-[#4F46E5] hover:bg-[#4338CA] rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Mail size={16} />
                    Open Mail App
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;