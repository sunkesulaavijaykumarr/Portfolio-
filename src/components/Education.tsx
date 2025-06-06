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
      years: '2018 - 2019',
      degree: 'Board of Secondary Education ANDHRA PRADESH',
      institution: 'AKSHARA HIGH SCHOOL',
      description: 'Strong foundation in Math and Science',
      achievements: [
        'Consistent academic excellence in Mathematics and Science',
        'Regular participant in classroom activities and assignments',
      ],
      logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      years: '2019 - 2021',
      degree: 'Board of Intermediate Education, Andhra Pradesh',
      institution: 'Narayana Junior College',
      description: 'Intermediate Education (MPC) - Mathematics, Physics, and Chemistry',
      achievements: [
        'Consistent academic excellence in Mathematics, Physics, and Chemistry',
      ],
      logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'bg-teal-500'
    },
    {
      id: 3,
      years: '2021 - 2025',
      degree: 'Bachelor of Technology, Electronics and Communication Engineering',
      institution: 'Koneru Lakshmaiah University',
      description: 'Possess experience in full stack development and familiarity with VLSI and RTL design concepts. Actively expanding skills in AI (artificial intelligence), committed to enhancing problem-solving abilities and exploring innovative technologies.',
      achievements: [
        'Possess experience in full stack development and familiarity with VLSI and RTL design concepts.',
        'Actively expanding skills in AI (artificial intelligence), committed to enhancing problem-solving abilities and exploring innovative technologies.',
      ],
      logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'bg-teal-500'
    }
  ];
  
  const certificateData: Certificate[] = [
    {
      id: 1,
      date: 'Nov 2022',
      name: 'Full Stack Web Development',
      issuer: 'Bootcamp With CODEHELP',
      link: 'https://ik.imagekit.io/0q5aygovy/1725355189715-certificate.png?updatedAt=1748428148080',
      icon: <FileText size={16} className="text-amber-500" />
    },
    {
      id: 2,
      date: 'Dec 2023',
      name: 'Advanced React and Redux',
      issuer: 'Udemy',
      link: '#',
      icon: <FileText size={16} className="text-blue-500" />
    },
    // {
    //   id: 3,
    //   date: 'Aug 2023',
    //   name: 'TypeScript Professional',
    //   issuer: 'Codecademy',
    //   link: '#',
    //   icon: <FileText size={16} className="text-teal-500" />
    // },
    // {
    //   id: 4,
    //   date: 'Mar 2023',
    //   name: 'UI/UX Design Masterclass',
    //   issuer: 'Interaction Design Foundation',
    //   link: '#',
    //   icon: <FileText size={16} className="text-purple-500" />
    // },
  ];

  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center bg-slate-900 relative" id="education">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-[#4F46E5]">
            Educational Journey
          </h2>
          <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            My academic background and continuous learning path
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex p-1 rounded-lg bg-slate-800">
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-md transition-all ${
                activeTab === 'education'
                  ? 'bg-blue-600 text-white shadow-md scale-105'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <GraduationCap size={18} className="mr-2" />
              <span>Education</span>
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`flex items-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-md transition-all ${
                activeTab === 'certificates'
                  ? 'bg-blue-600 text-white shadow-md scale-105'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <Award size={18} className="mr-2" />
              <span>Certificates</span>
            </button>
          </div>
        </div>
        
        {/* Education Timeline */}
        {activeTab === 'education' && (
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-700"></div>
              
              {educationData.map((item, index) => (
                <div key={item.id} className="relative z-10 mb-8 sm:mb-10 md:mb-12">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900"></div>
                  
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                    <div className="bg-slate-800/50 p-4 sm:p-6 md:p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-lg transform hover:scale-[1.02]">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className={`p-2 sm:p-3 rounded-lg ${item.color} bg-opacity-10`}>
                            <GraduationCap size={24} className={item.color.replace('bg-', 'text-')} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-medium text-blue-500">{item.years}</span>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-1">{item.degree}</h3>
                          <p className="text-slate-400 mt-1">{item.institution}</p>
                          <p className="text-slate-300 mt-4">{item.description}</p>
                          {item.achievements && (
                            <div className="mt-4">
                              <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider text-slate-400">Key Achievements</h4>
                              <ul className="space-y-2">
                                {item.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className={`${item.color.replace('bg-', 'text-')} mt-1.5`}>•</span>
                                    <span className="text-slate-300 flex-1">{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
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
                <div key={cert.id} className="bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden group transform hover:scale-[1.02]">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 sm:p-3 bg-slate-700/50 rounded-lg">
                          {cert.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg group-hover:text-blue-400 transition-colors">{cert.name}</h3>
                          <p className="text-slate-400">{cert.issuer}</p>
                        </div>
                      </div>
                      <span className="bg-slate-700/50 text-slate-300 px-2 py-1 text-xs rounded">{cert.date}</span>
                    </div>
                    <div className="flex justify-end mt-4">
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400 flex items-center text-sm font-medium group"
                      >
                        <span className="mr-1">View Certificate</span>
                        <ExternalLink size={14} className="transform group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 sm:mt-10 md:mt-12 text-center">
              <div className="inline-flex items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                <Book size={20} className="text-blue-500 mr-2" />
                <span className="text-slate-300">Always learning and expanding my skill set</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;