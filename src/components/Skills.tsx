import React, { useState, useEffect, useRef } from 'react';
import '../styles/skills.css';
import {
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Shield,
  Cpu,
  GitBranch,
  Palette,
  Box,
  Smartphone,
  Layers,
  Settings,
  Wrench,
  TestTube,
  Lock,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: JSX.Element;
  color: string;
  logo: string;
}

interface SkillSubCategory {
  title: string;
  skills: Skill[];
}

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  color: string;
  subCategories: SkillSubCategory[];
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend Development');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust this value to control scroll distance
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: <Layout size={24} />,
      color: 'blue',
      subCategories: [
        {
          title: 'Core Technologies',
          skills: [
            { 
              name: 'HTML5', 
              level: 95, 
              icon: <Code2 size={20} />, 
              color: 'from-orange-500 to-orange-600',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
            },
            { 
              name: 'CSS3', 
              level: 90, 
              icon: <Code2 size={20} />, 
              color: 'from-blue-500 to-blue-600',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
            },
            { 
              name: 'JavaScript', 
              level: 90, 
              icon: <Code2 size={20} />, 
              color: 'from-yellow-500 to-yellow-600',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
            },
            { 
              name: 'TypeScript', 
              level: 85, 
              icon: <Code2 size={20} />, 
              color: 'from-blue-500 to-blue-600',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
            }
          ]
        },
        {
          title: 'Frameworks & Libraries',
          skills: [
            { 
              name: 'React.js', 
              level: 95, 
              icon: <Code2 size={20} />, 
              color: 'from-cyan-500 to-cyan-600',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
            },
            { 
              name: 'Next.js', 
              level: 90, 
              icon: <Globe size={20} />, 
              color: 'from-gray-600 to-gray-700',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
            },
            { 
              name: 'Vue.js', 
              level: 85, 
              icon: <Code2 size={20} />, 
              color: 'from-green-500 to-green-600',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
            }
          ]
        },
        {
          title: 'Styling & UI',
          skills: [
            { 
              name: 'Tailwind CSS', 
              level: 95, 
              icon: <Palette size={20} />, 
              color: 'from-teal-500 to-teal-600',
              logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
            },
            { 
              name: 'Material UI', 
              level: 90, 
              icon: <Box size={20} />, 
              color: 'from-blue-400 to-blue-500',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'
            },
            { 
              name: 'Responsive Design', 
              level: 95, 
              icon: <Smartphone size={20} />, 
              color: 'from-purple-500 to-purple-600',
              logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtZGV2aWNlcy0yIj48cGF0aCBkPSJNMyA3aDEydjEwSDNWN1oiLz48cGF0aCBkPSJNMTcgMTJoNHY2aC00di02WiIvPjxwYXRoIGQ9Ik03IDEyaDRNOSAxMnYyIi8+PC9zdmc+'
            }
          ]
        }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server size={24} />,
      color: 'green',
      subCategories: [
        {
          title: 'Core Languages',
          skills: [
            { 
              name: 'Node.js', 
              level: 90, 
              icon: <Server size={20} />, 
              color: 'from-green-500 to-green-600',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
            },
            { 
              name: 'Python', 
              level: 85, 
              icon: <Code2 size={20} />, 
              color: 'from-blue-500 to-blue-600',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
            },
            { 
              name: 'Java', 
              level: 80, 
              icon: <Cpu size={20} />, 
              color: 'from-red-500 to-red-600',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
            }
          ]
        },
        {
          title: 'Databases',
          skills: [
            { 
              name: 'MongoDB', 
              level: 90, 
              icon: <Database size={20} />, 
              color: 'from-green-600 to-green-700',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
            },
            { 
              name: 'PostgreSQL', 
              level: 85, 
              icon: <Database size={20} />, 
              color: 'from-blue-600 to-blue-700',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
            },
            { 
              name: 'Redis', 
              level: 80, 
              icon: <Database size={20} />, 
              color: 'from-red-600 to-red-700',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
            }
          ]
        },
        {
          title: 'API Development',
          skills: [
            { 
              name: 'REST APIs', 
              level: 95, 
              icon: <Globe size={20} />, 
              color: 'from-purple-500 to-purple-600',
              logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNNSAyaDEwbDQgNHYxMkg1VjJ6Ii8+PHBhdGggZD0iTTMgNmgxMGw0IDR2MTJIM1Y2eiIvPjxwYXRoIGQ9Ik0xMCAxMGw0IDRNMTQgMTBsLTQgNCIvPjwvc3ZnPg=='
            },
            { 
              name: 'GraphQL', 
              level: 85, 
              icon: <Layers size={20} />, 
              color: 'from-pink-500 to-pink-600',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
            },
            { 
              name: 'WebSocket', 
              level: 80, 
              icon: <Settings size={20} />, 
              color: 'from-indigo-500 to-indigo-600',
              logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNNSAyaDEwbDQgNHYxMkg1VjJ6Ii8+PHBhdGggZD0iTTMgNmgxMGw0IDR2MTJIM1Y2eiIvPjxwYXRoIGQ9Ik0xMCAxMGw0IDRNMTQgMTBsLTQgNCIvPjwvc3ZnPg=='
            }
          ]
        }
      ]
    },
    {
      title: 'Other Skills',
      icon: <Wrench size={24} />,
      color: 'amber',
      subCategories: [
        {
          title: 'Version Control',
          skills: [
            { 
              name: 'Git', 
              level: 95, 
              icon: <GitBranch size={20} />, 
              color: 'from-orange-500 to-orange-600',
              logo: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg'
            },
            { 
              name: 'GitHub', 
              level: 90, 
              icon: <GitBranch size={20} />, 
              color: 'from-gray-600 to-gray-700',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
            },
            { 
              name: 'GitLab', 
              level: 85, 
              icon: <GitBranch size={20} />, 
              color: 'from-orange-600 to-orange-700',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg'
            }
          ]
        },
        {
          title: 'Testing',
          skills: [
            { 
              name: 'Jest', 
              level: 90, 
              icon: <TestTube size={20} />, 
              color: 'from-red-500 to-red-600',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg'
            },
            { 
              name: 'Cypress', 
              level: 85, 
              icon: <TestTube size={20} />, 
              color: 'from-green-500 to-green-600',
              logo: 'https://raw.githubusercontent.com/cypress-io/cypress-icons/master/src/logo/cypress-io-logo-round.svg'
            },
            { 
              name: 'React Testing Library', 
              level: 90, 
              icon: <TestTube size={20} />, 
              color: 'from-pink-500 to-pink-600',
              logo: 'https://testing-library.com/img/octopus-128x128.png'
            }
          ]
        },
        {
          title: 'Security & Performance',
          skills: [
            { 
              name: 'Web Security', 
              level: 85, 
              icon: <Shield size={20} />, 
              color: 'from-red-500 to-red-600',
              logo: 'https://www.svgrepo.com/show/424993/security.svg'
            },
            { 
              name: 'OAuth/JWT', 
              level: 90, 
              icon: <Lock size={20} />, 
              color: 'from-blue-500 to-blue-600',
              logo: 'https://jwt.io/img/pic_logo.svg'
            },
            { 
              name: 'Performance Optimization', 
              level: 85, 
              icon: <Settings size={20} />, 
              color: 'from-green-500 to-green-600',
              logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTMgMTBhMyAzIDAgMSAwLTQgMyAzIDMgMCAwIDAgNC0zeiIvPjxwYXRoIGQ9Ik0xOC40IDEwYTguNCA4LjQgMCAwIDAtMTYuOCAwIDguNCA4LjQgMCAwIDAgMTYuOCAweiIvPjxwYXRoIGQ9Ik0yMiAxMGExMiAxMiAwIDAgMC0yNCAwIDEyIDEyIDAgMCAwIDI0IDB6Ii8+PC9zdmc+'
            }
          ]
        }
      ]
    }
  ];

  // Get unique categories
  const categories = skillCategories.map(cat => ({
    title: cat.title,
    icon: cat.icon
  }));

  // Get skills for active category
  const activeSkills = skillCategories
    .find(category => category.title === activeCategory)
    ?.subCategories.flatMap(subCategory =>
      subCategory.skills.map(skill => ({
        ...skill,
        category: activeCategory,
        subCategory: subCategory.title
      }))
    ) || [];

  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center bg-slate-900 relative" id="skills">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-[#4F46E5]">
            Technical Skills
          </h2>
          <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Expertise in modern web technologies and development practices
          </p>
        </div>

        {/* Skills Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12">
          {categories.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(category.title)}
              className={`px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base flex items-center gap-2 transition-all ${
                activeCategory === category.title
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:scale-102'
              }`}
            >
              {React.cloneElement(category.icon as React.ReactElement, { 
                size: isMobile ? 16 : 20 
              })}
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Cards */}
        <div className="relative max-w-[1440px] mx-auto">
          {/* Desktop View - Horizontal Scroll with Arrows */}
          <div className="hidden md:block">
            <button
              onClick={() => handleScroll('left')}
              className="absolute -left-2 sm:left-0 top-1/2 transform -translate-y-1/2 z-10 bg-slate-800/90 hover:bg-slate-700 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="overflow-x-auto smooth-scroll hide-scrollbar" ref={scrollContainerRef}>
              <div className="flex gap-6 pb-6 px-4">
                {activeSkills.map((skill, index) => (
                  <div
                    key={`${skill.name}-${index}`}
                    className="w-[300px] flex-shrink-0"
                  >
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 h-full skill-card">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-slate-700/50 p-2.5 flex items-center justify-center">
                          {skill.logo ? (
                            <img
                              src={skill.logo}
                              alt={skill.name}
                              className="w-full h-full object-contain"
                              loading="lazy"
                            />
                          ) : (
                            React.cloneElement(skill.icon as React.ReactElement, { size: 20 })
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold mb-2 truncate">
                            {skill.name}
                          </h3>
                          <div className="w-full bg-slate-700 rounded-full h-2">
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${skill.color} animate-skillProgress`}
                              style={{
                                width: `${skill.level}%`,
                                '--progress': `${skill.level}%`
                              } as React.CSSProperties}
                            ></div>
                          </div>
                          <div className="flex justify-between mt-2">
                            <span className="text-sm text-slate-400 truncate">
                              {skill.subCategory}
                            </span>
                            <span className="text-sm text-slate-400 ml-2">
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleScroll('right')}
              className="absolute -right-2 sm:right-0 top-1/2 transform -translate-y-1/2 z-10 bg-slate-800/90 hover:bg-slate-700 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Mobile View - 2 Column Grid */}
          <div className="md:hidden grid grid-cols-2 gap-3">
            {activeSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-slate-700/80 p-2 flex items-center justify-center">
                    {skill.logo ? (
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      React.cloneElement(skill.icon as React.ReactElement, { size: 16 })
                    )}
                  </div>
                  <div className="w-full text-center">
                    <h3 className="text-sm font-semibold truncate mb-1.5">
                      {skill.name}
                    </h3>
                    <div className="w-full bg-slate-700/90 rounded-full h-1.5">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} animate-skillProgress`}
                        style={{
                          width: `${skill.level}%`,
                          '--progress': `${skill.level}%`
                        } as React.CSSProperties}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-1.5">
                      <span className="text-[10px] text-slate-400">
                        {skill.subCategory}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;