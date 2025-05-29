import React, { useState } from 'react';
import { GraduationCap, Book, Award, FileText, ExternalLink } from 'lucide-react';

interface Education {
  id: number;
  years: string;
  degree: string;
  institution: string;
  description: string;
  achievements?: string[];
  logo: string;
  color: string;
}

interface Certificate {
  id: number;
  date: string;
  name: string;
  issuer: string;
  link: string;
  icon: React.ReactNode;
}

const Education = () => {
  const [activeTab, setActiveTab] = useState('education'); // 'education' or 'certificates'
  
  const educationData: Education[] = [
    {
      id: 1,
      years: '2018 - 2022',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of California, Berkeley',
      description: 'Focused on web technologies, UI/UX design, and software engineering principles. Graduated with honors.',
      achievements: [
        'Dean\'s List for Academic Excellence (2019-2022)',
        'Senior Thesis: "Modern Web Architecture Patterns"',
        'Teaching Assistant for Web Development Course'
      ],
      logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      years: '2016 - 2018',
      degree: 'Associate Degree in Web Development',
      institution: 'Bay Area Community College',
      description: 'Foundational courses in web technologies, design principles, and programming fundamentals.',
      achievements: [
        'President of Student Web Developers Club',
        'Winner of Annual Hackathon 2017',
        'Internship at Local Tech Startup'
      ],
      logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'bg-teal-500'
    }
  ];
  
  const certificateData: Certificate[] = [
    {
      id: 1,
      date: 'Dec 2023',
      name: 'Advanced React and Redux',
      issuer: 'Udemy',
      link: '#',
      icon: <FileText size={16} className="text-blue-500" />
    },
    {
      id: 2,
      date: 'Aug 2023',
      name: 'TypeScript Professional',
      issuer: 'Codecademy',
      link: '#',
      icon: <FileText size={16} className="text-teal-500" />
    },
    {
      id: 3,
      date: 'Mar 2023',
      name: 'UI/UX Design Masterclass',
      issuer: 'Interaction Design Foundation',
      link: '#',
      icon: <FileText size={16} className="text-purple-500" />
    },
    {
      id: 4,
      date: 'Nov 2022',
      name: 'Full Stack Web Development',
      issuer: 'Bootcamp With CODEHELP',
      link: 'https://ik.imagekit.io/0q5aygovy/1725355189715-certificate.png?updatedAt=1748428148080',
      icon: <FileText size={16} className="text-amber-500" />
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative" id="education">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Educational Journey</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-300">
            My formal education and continuous learning path that has shaped my skills and expertise.
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-lg bg-slate-800">
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center px-4 py-2 rounded-md transition-all ${
                activeTab === 'education'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <GraduationCap size={18} className="mr-2" />
              <span>Education</span>
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`flex items-center px-4 py-2 rounded-md transition-all ${
                activeTab === 'certificates'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Award size={18} className="mr-2" />
              <span>Certificates</span>
            </button>
          </div>
        </div>
        
        {/* Education Timeline */}
        {activeTab === 'education' && (
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-slate-700 transform md:translate-x-px"></div>
              
              {/* Timeline items */}
              {educationData.map((item, index) => (
                <div key={item.id} className="relative z-10 mb-12">
                  <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-slate-800 border-4 border-slate-700 transform -translate-x-1/2 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    </div>
                    
                    {/* Content */}
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 md:pr-8' : 'md:pr-12 md:pl-8'} pl-12 md:pl-0`}>
                      <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 shadow-lg">
                        <div className="flex items-center mb-4">
                          <div className="flex-shrink-0 mr-4">
                            <div className={`p-2 rounded-lg ${item.color} bg-opacity-10`}>
                              <GraduationCap size={20} className={item.color.replace('bg-', 'text-')} />
                            </div>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-blue-500">{item.years}</span>
                            <h3 className="text-xl font-bold">{item.degree}</h3>
                            <p className="text-slate-400">{item.institution}</p>
                          </div>
                        </div>
                        <p className="text-slate-300 mb-4">{item.description}</p>
                        {item.achievements && (
                          <div className="mt-4">
                            <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider text-slate-400">Key Achievements</h4>
                            <ul className="space-y-1">
                              {item.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start">
                                  <span className={`${item.color.replace('bg-', 'text-')} mr-2 mt-1`}>•</span>
                                  <span className="text-slate-300">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Certificates */}
        {activeTab === 'certificates' && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificateData.map((cert) => (
                <div key={cert.id} className="bg-slate-800 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 shadow-lg overflow-hidden group">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <div className="mr-3 p-2 bg-slate-700 rounded-lg">
                          {cert.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg group-hover:text-blue-400 transition-colors">{cert.name}</h3>
                          <p className="text-slate-400">{cert.issuer}</p>
                        </div>
                      </div>
                      <span className="bg-slate-700 text-slate-300 px-2 py-1 text-xs rounded">{cert.date}</span>
                    </div>
                    <div className="flex justify-end mt-4">
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400 flex items-center text-sm font-medium"
                      >
                        <span className="mr-1">View Certificate</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="inline-flex items-center p-2 bg-slate-800 rounded-lg">
                <Book size={18} className="text-blue-500 mr-2" />
                <span className="text-slate-300">Always learning and expanding my skill set.</span>
              </div>
            </div>
          </div>
        )}
        
        {/* Continuous Learning */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20 p-6">
            <h3 className="text-xl font-bold mb-4 text-center">Continuous Learning Journey</h3>
            <p className="text-slate-300 text-center mb-6">
              I believe in lifelong learning and consistently invest time in expanding my knowledge and skills through various platforms.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-slate-800/60 p-4 rounded-lg">
                <span className="block text-2xl font-bold text-blue-500">50+</span>
                <span className="text-slate-400">Online Courses</span>
              </div>
              <div className="bg-slate-800/60 p-4 rounded-lg">
                <span className="block text-2xl font-bold text-teal-500">12</span>
                <span className="text-slate-400">Technical Books</span>
              </div>
              <div className="bg-slate-800/60 p-4 rounded-lg">
                <span className="block text-2xl font-bold text-purple-500">30+</span>
                <span className="text-slate-400">Workshops</span>
              </div>
              <div className="bg-slate-800/60 p-4 rounded-lg">
                <span className="block text-2xl font-bold text-amber-500">8</span>
                <span className="text-slate-400">Industry Conferences</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;