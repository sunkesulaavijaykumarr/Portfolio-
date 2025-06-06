import React, { useState } from 'react';
import { Mail, Twitter, Linkedin, Github, X } from 'lucide-react';

const Contact = () => {
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  
  const emailSubject = "Let's Connect!";
  const emailBody = "Hi Vijay Kumar,%0A%0AI came across your portfolio and would love to connect with you.%0A%0ABest regards,%0A[Your Name]";
  const emailAddress = "sunkesulaavijaykumarr@gmail.com";

  const emailLinks = {
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${emailSubject}&body=${emailBody}`,
    default: `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      e.preventDefault();
      setShowEmailPopup(true);
    } else {
      window.open(emailLinks.gmail, '_blank');
    }
  };

  const handleEmailOptionClick = (type: 'gmail' | 'default') => {
    setShowEmailPopup(false);
    window.location.href = emailLinks[type];
  };

  return (
    <section id="contact" className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-slate-900 relative px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-50"></div>
      
      {/* Content Container */}
      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-[#4F46E5] animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Let's Connect
            </h2>
            <div className="space-y-2 sm:space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                Looking for a dedicated full-stack developer to join your team?
              </p>
              <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                I'm actively seeking opportunities to contribute and grow with innovative companies.
              </p>
            </div>
          </div>
          
          <div className="w-full max-w-lg px-4 sm:px-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            {/* Contact Buttons */}
            <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
              {/* Email Button */}
              <div className="w-full transform hover:scale-[1.02] transition-transform duration-300">
                <button
                  onClick={handleEmailClick}
                  className="w-full py-4 sm:py-5 px-6 sm:px-8 bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl font-medium group"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                  Send me a message
                </button>
              </div>

              {/* Email App Selection Popup */}
              {showEmailPopup && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-in fade-in duration-200">
                  <div 
                    className="bg-slate-900/90 rounded-2xl p-6 w-full max-w-md animate-in zoom-in-50 duration-300 text-center"
                    onClick={e => e.stopPropagation()}
                  >
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-semibold text-white w-full text-center pr-8">Choose Email App</h3>
                      <button
                        onClick={() => setShowEmailPopup(false)}
                        className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors absolute right-6"
                      >
                        <X size={20} className="text-slate-400" />
                      </button>
                    </div>
                    
                    <p className="text-slate-300 text-sm mb-6 px-4">
                      Select your preferred email application to send me a message.
                    </p>

                    <div className="space-y-3">
                      <button
                        onClick={() => handleEmailOptionClick('gmail')}
                        className="w-full py-4 px-5 bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#4F46E5]/20 group"
                      >
                        <div className="flex flex-col items-center gap-2">
                          <Mail size={24} className="group-hover:scale-110 transition-transform" />
                          <div className="text-center">
                            <div className="font-medium text-base">Open in Gmail</div>
                            <div className="text-sm text-white/80">Best for Gmail users</div>
                          </div>
                        </div>
                      </button>
                      
                      <button
                        onClick={() => handleEmailOptionClick('default')}
                        className="w-full py-4 px-5 bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#4F46E5]/20 group"
                      >
                        <div className="flex flex-col items-center gap-2">
                          <Mail size={24} className="group-hover:scale-110 transition-transform" />
                          <div className="text-center">
                            <div className="font-medium text-base">Open in Mail App</div>
                            <div className="text-sm text-white/80">Uses your default email client</div>
                          </div>
                        </div>
                      </button>
                    </div>

                    <p className="text-slate-400 text-sm mt-6 text-center">
                      Response time: Usually within 24 hours
                    </p>
                  </div>
                </div>
              )}

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
                <a
                  href="https://github.com/sunkesulaavijaykumarr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 bg-slate-800 hover:bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-slate-300 hover:text-white transform hover:scale-110 active:scale-95 group"
                  title="GitHub"
                >
                  <Github className="w-6 h-6 sm:w-7 sm:h-7 group-hover:animate-wiggle" />
                </a>
                <a
                  href="https://linkedin.com/in/sunkesulaavijaykumarr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 bg-slate-800 hover:bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-slate-300 hover:text-white transform hover:scale-110 active:scale-95 group"
                  title="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 group-hover:animate-wiggle" />
                </a>
                <a
                  href="https://twitter.com/sunkesulaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 bg-slate-800 hover:bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-slate-300 hover:text-white transform hover:scale-110 active:scale-95 group"
                  title="X (Twitter)"
                >
                  <Twitter className="w-6 h-6 sm:w-7 sm:h-7 group-hover:animate-wiggle" />
                </a>
              </div>

              {/* Additional Info */}
              <p className="text-center text-slate-400 text-sm sm:text-base mt-2 sm:mt-4">
                Response time: Usually within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;