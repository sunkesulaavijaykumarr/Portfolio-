import { useEffect, useState, useMemo, useRef } from 'react';
import {  Linkedin, ChevronDown, Code2, Database, Brain, Terminal, Cloud, Lock, Mail } from 'lucide-react';
import 'animate.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [showScroll, setShowScroll] = useState(true);
  const [showEmailOptions, setShowEmailOptions] = useState(false);
  const roles = useMemo(() => [
    'Full Stack Developer',
    'AI Learner',
    'Problem Solver'
  ], []);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const timeoutRef = useRef<number | null>(null);
  
  const emailSubject = "Job Opportunity for Full Stack Developer";
  const emailBody = "Hi Vijay Kumar,%0A%0A I recently had the chance to review your portfolio and was genuinely impressed by your background in full stack development, as well as your diverse skills in both hardware and software. continuous learning and hands-on experience in modern web technologies align closely with what we're looking for. %0A%0AWe currently have an opening for a Full Stack Developer and I believe your profile could be a great fit. %0A%0ACompany: %0APosition: %0ALocation: %0AJob Type: %0A%0A If you're open to exploring this opportunity, I’d love to schedule a quick call to share more details about the role, our team, and how we could potentially work together.%0A%0APlease let me know your availability, and feel free to share your updated resume if convenient.%0A%0ALooking forward to hearing from you!%0A%0ABest regards,%0A[Your Full Name],%0A[Your Job Title / Department],%0A[Company Name],%0A[Phone Number / Email / LinkedIn]";
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

  const EmailOptions = ({ className = "" }) => (
    <div className={`backdrop-blur-lg bg-slate-900/90 rounded-lg p-1.5 ${className}`}>
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

  useEffect(() => {
    setIsVisible(true);
    
    // Hide scroll button on first scroll
    const handleScroll = () => {
      setShowScroll(false);
      // Remove listener after first scroll
      window.removeEventListener('scroll', handleScroll);
    };
    window.addEventListener('scroll', handleScroll);

    let index = 0;
    let isDeleting = false;
    
    const typingInterval = setInterval(() => {
      const currentRole = roles[currentRoleIndex];
      
      if (!isDeleting && index <= currentRole.length) {
        setText(currentRole.slice(0, index));
        index++;
        if (index > currentRole.length) {
          isDeleting = true;
          setTimeout(() => {
            setIsTyping(false);
          }, 1500);
        }
      } else if (isDeleting && index >= 0) {
        setText(currentRole.slice(0, index));
        index--;
        if (index === 0) {
          isDeleting = false;
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, 100);
    
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    
    return () => {
      clearInterval(typingInterval);
      clearInterval(blinkInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentRoleIndex, roles]);

  const orbitingTechnologies = [
    { icon: <Code2 size={25} />, label: 'Frontend', color: 'text-blue-500', tech: 'React, Vue, Next.js' },
    { icon: <Database size={25} />, label: 'Backend', color: 'text-green-500', tech: 'Node.js, Python, Java' },
    { icon: <Brain size={25} />, label: 'AI/ML', color: 'text-purple-500', tech: 'TensorFlow, PyTorch' },
    { icon: <Cloud size={25} />, label: 'Cloud', color: 'text-cyan-500', tech: 'AWS, Azure, GCP' },
    { icon: <Terminal size={25} />, label: 'DevOps', color: 'text-yellow-500', tech: 'Docker, K8s' },
    { icon: <Lock size={25} />, label: 'Security', color: 'text-red-500', tech: 'OAuth, JWT' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16 sm:pt-20" id="home">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className={`flex flex-col items-center lg:items-start text-center lg:text-left transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
            Hi, I'm Sunkesula  <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              VIJAY KUMAR
              </span>
            </h1>
            
            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 min-h-[32px] flex items-center">
              <span className="mr-2">I'm a</span>
              <span className="text-blue-500">{text}</span>
              <span className={`${showCursor && isTyping ? 'opacity-100' : 'opacity-0'} text-blue-500`}>|</span>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mb-4 sm:mb-6 leading-relaxed px-4 sm:px-0">
              I transform ideas into clean, functional, and beautifully designed web solutions, 
              Let's build something extraordinary together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 w-full sm:w-auto">
              <div className="relative"
                   onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}>
                <div
                  className="px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white bg-[#4F46E5] rounded-md hover:bg-[#4338CA] transition-colors flex items-center gap-1.5 cursor-pointer w-full sm:w-auto flex justify-center"
                >
                  <Mail size={16} className="ml-0" />
                  <span>Hire Me</span>
                </div>
                {showEmailOptions && (
                  <div className="absolute left-0 sm:left-auto sm:right-0 mt-1 w-32 z-50">
                    <EmailOptions />
                  </div>
                )}
              </div>
              <a 
                href="https://www.linkedin.com/in/sunkesulaavijaykumarr" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-[#0077B5] to-[#0A66C2] rounded-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-0.5 animate__animated animate__fadeIn group w-full sm:w-auto flex justify-center"
              >
                <span className="relative flex items-center group-hover:animate__animated group-hover:animate__rubberBand">
                  LinkedIn
                  <Linkedin size={16} className="ml-2" />
                </span>
              </a>
            </div>
          </div>

          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] flex items-center justify-center">
            {/* Outer rotating technologies */}
            <div className="absolute w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] animate-spin-reverse-slow">
              {orbitingTechnologies.map((tech, index) => {
                const angle = (index * 360) / orbitingTechnologies.length;
                const radius = window.innerWidth < 640 ? 170 : window.innerWidth < 768 ? 200 : window.innerWidth < 1024 ? 230 : 260;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={index}
                    className={`absolute w-11 sm:w-12 md:w-14 lg:w-16 h-11 sm:h-12 md:h-14 lg:h-16 rounded-xl bg-slate-800/80 backdrop-blur-sm flex items-center justify-center
                      group ${tech.color} border border-slate-700 hover:scale-110 transition-transform cursor-pointer`}
                    style={{
                      transform: `translate(${x}px, ${y}px) rotate(${-angle}deg)`,
                      left: '50%',
                      top: '50%',
                      marginLeft: '-20px',
                      marginTop: '-20px',
                    }}
                  >
                    {tech.icon}
                    <div className="absolute invisible group-hover:visible bg-slate-900 text-white p-2 rounded-lg -translate-y-16 min-w-[120px] text-center z-20">
                      <p className="font-medium mb-1 text-sm">{tech.label}</p>
                      <p className="text-xs text-slate-300">{tech.tech}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center profile image with animations */}
            <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] z-10">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-full overflow-hidden animate-borderRotate">
                <div className="absolute inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"></div>
              </div>
              
              {/* Profile image */}
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <img 
                  src="https://ik.imagekit.io/0q5aygovy/DSC_2460.JPG?updatedAt=1748407367827" 
                  alt="Professional developer" 
                  className="w-full h-full object-cover scale-105 animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down button */}
      <div 
        className={`fixed left-1/2 -translate-x-1/2 transition-all duration-500 ${
          showScroll ? 'opacity-100 bottom-6 sm:bottom-8' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <a 
          href="#about" 
          className="flex flex-col items-center justify-center text-slate-400 hover:text-white transition-colors mx-auto"
          onClick={(e) => {
            e.preventDefault();
            setShowScroll(false);
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-xs sm:text-sm mb-1 sm:mb-2 animate-pulse text-center">Scroll down</span>
          <ChevronDown size={16} className="animate-bounce mx-auto" />
        </a>
      </div>
    </section>
  );
};

export default Hero;