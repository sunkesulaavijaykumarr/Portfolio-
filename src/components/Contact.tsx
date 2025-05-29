import React, { useState } from 'react';
import { Mail, Youtube, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-20 bg-slate-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg">
            Let's discuss opportunities and build something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
          <div className="lg:col-span-3 bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                    value={formData.name}
                        onChange={handleChange}
                        required
                    className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Enter your name"
                      />
                    </div>
                    <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                    value={formData.email}
                        onChange={handleChange}
                        required
                    className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Enter your email"
                      />
                </div>
                    </div>
                    
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-slate-300 mb-2">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Enter your phone number"
                  />
                </div>
                    <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject*
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                    value={formData.subject}
                        onChange={handleChange}
                        required
                    className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Enter your subject"
                      />
                </div>
                    </div>
                    
                    <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                  value={formData.message}
                        onChange={handleChange}
                        required
                  rows={4}
                  className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white resize-none"
                  placeholder="Enter your message"
                ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                className="w-full px-6 py-3 bg-[#4F46E5] text-white rounded-lg hover:bg-[#4338CA] transition-colors font-medium text-base"
                    >
                Submit
                    </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 bg-[#4F46E5] p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6" />
                <a href="mailto:sunkesulaavijaykumarr@gmail.com" className="hover:underline">
                  sunkesulaavijaykumarr@gmail.com
                </a>
              </div>

              <div className="pt-6 mt-6 border-t border-indigo-400">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-indigo-600 rounded-full transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-indigo-600 rounded-full transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://youtube.com/@yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-indigo-600 rounded-full transition-colors"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;