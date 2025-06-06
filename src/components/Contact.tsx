import React from 'react';
import { Mail, Twitter, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const emailSubject = "Let's Connect!";
  const emailBody = "Hi Vijay Kumar,%0A%0AI came across your portfolio and would love to connect with you.%0A%0ABest regards,%0A[Your Name]";
  const emailAddress = "sunkesulaavijaykumarr@gmail.com";

  const emailLinks = {
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${emailSubject}&body=${emailBody}`,
    default: `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-[#4F46E5]">
              Let's Connect
            </h2>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                Looking for a dedicated full-stack developer to join your team?
              </p>
              <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                I'm actively seeking opportunities to contribute and grow with innovative companies.
              </p>
            </div>
          </div>
          
          <div className="w-full max-w-lg px-4 sm:px-0">
            {/* Contact Buttons */}
            <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
              {/* Email Button */}
              <div className="w-full transform hover:scale-[1.02] transition-transform duration-300">
                <a
                  href={emailLinks.gmail}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 sm:py-5 px-6 sm:px-8 bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl font-medium"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  Send me a message
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
                <a
                  href="https://github.com/sunkesulaavijaykumarr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 bg-slate-800 hover:bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-slate-300 hover:text-white transform hover:scale-110 active:scale-95"
                  title="GitHub"
                >
                  <Github className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
                <a
                  href="https://linkedin.com/in/sunkesulaavijaykumarr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 bg-slate-800 hover:bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-slate-300 hover:text-white transform hover:scale-110 active:scale-95"
                  title="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
                <a
                  href="https://twitter.com/sunkesulaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 bg-slate-800 hover:bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-slate-300 hover:text-white transform hover:scale-110 active:scale-95"
                  title="X (Twitter)"
                >
                  <Twitter className="w-6 h-6 sm:w-7 sm:h-7" />
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