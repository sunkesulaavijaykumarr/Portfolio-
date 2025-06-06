import { useState, useEffect, useRef } from 'react';
import { Mail, Code2 } from 'lucide-react';
import 'animate.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoText, setLogoText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showEmailOptions, setShowEmailOptions] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isHiding, setIsHiding] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const fullLogoText = 'VK';

  const emailSubject = "Opportunity for Full Stack Developer Role – Let's Connect";
  const emailBody = "Hi Vijay Kumar,%0A%0A I recently had the chance to review your portfolio and was genuinely impressed by your background in full stack development, as well as your diverse skills in both hardware and software. continuous learning and hands-on experience in modern web technologies align closely with what we're looking for. %0A%0AWe currently have an opening for a Full Stack Developer and I believe your profile could be a great fit. %0A%0ACompany: %0APosition: %0ALocation: %0AJob Type: %0A%0A If you're open to exploring this opportunity, I'd love to schedule a quick call to share more details about the role, our team, and how we could potentially work together.%0A%0APlease let me know your availability, and feel free to share your updated resume if convenient.%0A%0ALooking forward to hearing from you!%0A%0ABest regards,%0A[Your Full Name],%0A[Your Job Title / Department],%0A[Company Name],%0A[Phone Number / Email / LinkedIn]";
  const emailAddress = "sunkesulaavijaykumarr@gmail.com";

  const emailLinks = {
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${emailSubject}&body=${emailBody}`,
    default: `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Cancel any ongoing hide animation
      setIsHiding(false);
      setIsVisible(true);
      
      // Update scrolled state
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Clear any existing timeouts
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      // Set new timeout to start hide animation after no scrolling
      timeoutRef.current = window.setTimeout(() => {
        if (currentScrollY > 100 && !isMenuOpen) {
          setIsHiding(true); // Start fade out
          // Actually hide after animation completes
          timeoutRef.current = window.setTimeout(() => {
            setIsVisible(false);
          }, 1500); // Match the CSS transition duration
        }
      }, 2500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [isMenuOpen]);

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

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowEmailOptions(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setShowEmailOptions(false);
    }, 100); // 1 seconds delay before closing
  };

  const EmailOptions = ({ className = "" }) => (
    <div 
      className={`backdrop-blur-lg bg-slate-900/90 rounded-lg p-1.5 ${className}`}
      onMouseEnter={() => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={emailLinks.gmail}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-3 py-1.5 text-[13px] text-white bg-[#4F46E5] hover:bg-[#4338CA] rounded-md transition-colors mb-1"
        onClick={() => setShowEmailOptions(false)}
      >
        Gmail
      </a>
      <a
        href={emailLinks.default}
        className="block px-3 py-1.5 text-[13px] text-white bg-[#4F46E5] hover:bg-[#4338CA] rounded-md transition-colors"
        onClick={() => setShowEmailOptions(false)}
      >
        Mail App
      </a>
    </div>
  );

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-[1500ms] ease-in-out ${
        isScrolled 
          ? 'top-6 left-0 flex justify-center' 
          : 'top-0 left-0'
      } ${
        !isVisible
          ? '-translate-y-full opacity-0'
          : isHiding
            ? 'translate-y-1 opacity-30'
            : 'translate-y-0 opacity-100'
      }`}
      onMouseEnter={() => {
        setIsHiding(false);
        setIsVisible(true);
      }}
      onMouseLeave={() => {
        if (window.scrollY > 100 && !isMenuOpen) {
          setIsHiding(true);
        }
      }}
    >
      <div className={`relative transition-all duration-[1500ms] ease-in-out ${
        isScrolled 
          ? 'w-auto mx-auto rounded-full bg-[#000000] shadow-[0_8px_32px_rgba(0,0,0,0.4)]' 
          : 'w-full bg-[#000000]/95'
      }`}>
        {/* Main Navbar Content */}
        <div className={`flex items-center h-14 justify-between transition-all duration-300 ${
          isScrolled ? 'px-6 max-w-none gap-8' : 'container mx-auto px-4 md:px-6'
        }`}>
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center gap-2.5 group flex-shrink-0"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
          >
            <Code2 className="w-6 h-6 text-[#4F46E5] transition-transform group-hover:scale-110" />
            <span className="text-lg font-bold text-[#4F46E5] group-hover:text-[#4338CA] transition-colors">
              {logoText}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} ml-[1px]`}></span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className={`hidden md:flex items-center transition-all duration-300 ${
            isScrolled ? 'gap-6' : 'gap-10'
          }`}>
            <a 
              href="#" 
              className="text-sm text-white/90 hover:text-white transition-colors px-1"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Home
            </a>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-white/90 hover:text-white transition-colors px-1"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Section: Hire Me Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Hire Me Button */}
            <div 
              className="hidden md:block relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`transition-all duration-300 text-sm font-medium text-white flex items-center cursor-pointer rounded-md ${
                  isScrolled
                    ? 'px-4 py-1.5 bg-[#4F46E5] hover:bg-[#4338CA] gap-1.5'
                    : 'px-5 py-2 bg-[#4F46E5] hover:bg-[#4338CA] gap-2'
                } hover:shadow-lg hover:shadow-[#4F46E5]/20`}
              >
                <Mail size={isScrolled ? 14 : 16} className="ml-0" />
                <span className={isScrolled ? '' : 'font-semibold'}>Hire Me</span>
              </div>
              {showEmailOptions && (
                <div className="absolute right-0 mt-1 w-32 z-50">
                  <EmailOptions />
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden relative z-50 w-8 h-8 flex items-center justify-center transition-all duration-300 rounded-full ${
                isMenuOpen ? 'bg-white/5' : ''
              }`}
              aria-label="Toggle Menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span
                  className={`absolute h-[2px] bg-current transition-all duration-300 ${
                    isMenuOpen 
                      ? 'w-5 rotate-45 bg-[#4F46E5]' 
                      : 'w-4 translate-y-[-4px] bg-white'
                  }`}
                ></span>
                <span
                  className={`absolute h-[2px] bg-current transition-all duration-300 ${
                    isMenuOpen 
                      ? 'w-5 -rotate-45 bg-[#4F46E5]' 
                      : 'w-3 translate-y-[4px] bg-white'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Expands from the navbar */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-3 mx-4 rounded-2xl bg-[#000000] shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden md:hidden">
            <div className="py-4">
              <div className="flex flex-col items-stretch px-4 space-y-1">
                <a
                  href="#"
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors capitalize w-full text-center py-2.5 rounded-lg hover:bg-white/5"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                >
                  Home
                </a>
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-sm font-medium text-white/90 hover:text-white transition-colors capitalize w-full text-center py-2.5 rounded-lg hover:bg-white/5"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.id);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
                
                {/* Mobile Contact Buttons */}
                <div className="pt-3 space-y-2">
                  <a
                    href={emailLinks.gmail}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-2.5 text-sm font-medium text-white bg-[#4F46E5] hover:bg-[#4338CA] rounded-xl transition-all hover:shadow-lg hover:shadow-[#4F46E5]/20 flex items-center justify-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Mail size={16} />
                    Contact via Gmail
                  </a>
                  <a
                    href={emailLinks.default}
                    className="block w-full px-4 py-2.5 text-sm font-medium text-white bg-[#4F46E5] hover:bg-[#4338CA] rounded-xl transition-all hover:shadow-lg hover:shadow-[#4F46E5]/20 flex items-center justify-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Mail size={16} />
                    Open Mail App
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;