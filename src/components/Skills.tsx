import React, { useState, useEffect } from 'react';
import '../styles/skills.css';
import {
  Code2,
  Database,
  Globe,
  Cloud,
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
  Network,
  Lock
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
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition(e.currentTarget.scrollLeft);
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
      title: 'DevOps & Cloud',
      icon: <Cloud size={24} />,
      color: 'purple',
      subCategories: [
        {
          title: 'Cloud Platforms',
          skills: [
            { 
              name: 'AWS', 
              level: 85, 
              icon: <Cloud size={20} />, 
              color: 'from-orange-500 to-orange-600',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
            },
            { 
              name: 'Docker', 
              level: 90, 
              icon: <Box size={20} />, 
              color: 'from-blue-500 to-blue-600',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
            },
            { 
              name: 'Kubernetes', 
              level: 80, 
              icon: <Box size={20} />, 
              color: 'from-blue-600 to-blue-700',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'
            }
          ]
        },
        {
          title: 'CI/CD & Automation',
          skills: [
            { 
              name: 'GitHub Actions', 
              level: 90, 
              icon: <GitBranch size={20} />, 
              color: 'from-gray-600 to-gray-700',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
            },
            { 
              name: 'Jenkins', 
              level: 85, 
              icon: <Settings size={20} />, 
              color: 'from-red-500 to-red-600',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg'
            },
            { 
              name: 'Terraform', 
              level: 80, 
              icon: <Cloud size={20} />, 
              color: 'from-purple-500 to-purple-600',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg'
            }
          ]
        },
        {
          title: 'Monitoring & Logging',
          skills: [
            { 
              name: 'Prometheus', 
              level: 85, 
              icon: <TestTube size={20} />, 
              color: 'from-orange-500 to-orange-600',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg'
            },
            { 
              name: 'Grafana', 
              level: 85, 
              icon: <Network size={20} />, 
              color: 'from-yellow-500 to-yellow-600',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg'
            },
            { 
              name: 'ELK Stack', 
              level: 80, 
              icon: <Database size={20} />, 
              color: 'from-teal-500 to-teal-600',
              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg'
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
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-slate-900" id="skills">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
            Technical <span className="text-blue-500">Skills</span>
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-blue-500 mx-auto rounded-full mb-4 sm:mb-5 md:mb-6"></div>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-4 sm:mb-5 md:mb-6">
            A comprehensive overview of my technical expertise and proficiency in various technologies.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 mb-6 sm:mb-8 md:mb-10">
          {categories.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(category.title)}
              className={`px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg text-xs sm:text-sm md:text-base flex items-center gap-1 sm:gap-1.5 md:gap-2 transition-all ${
                activeCategory === category.title
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {React.cloneElement(category.icon as React.ReactElement, { 
                size: isMobile ? 14 : 20 
              })}
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Horizontal Scroll */}
        <div 
          className="relative w-full overflow-x-auto hide-scrollbar smooth-scroll"
          onScroll={handleScroll}
        >
          <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 pb-6 px-3 sm:px-4">
            {activeSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex-none w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px]"
              >
                <div className="bg-slate-800/50 p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 h-full skill-card">
                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-slate-700/50 p-1.5 sm:p-2 md:p-2.5 flex items-center justify-center">
                      {skill.logo ? (
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      ) : (
                        React.cloneElement(skill.icon as React.ReactElement, { 
                          size: isMobile ? 16 : 20 
                        })
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1.5 sm:mb-2 truncate">
                        {skill.name}
                      </h3>
                      <div className="w-full bg-slate-700 rounded-full h-1.5 sm:h-2">
                        <div
                          className={`h-full rounded-full ${skill.color}`}
                          style={{
                            width: `${skill.level}%`,
                            transition: 'width 1s ease-in-out'
                          }}
                        ></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs sm:text-sm text-slate-400 truncate">
                          {skill.subCategory}
                        </span>
                        <span className="text-xs sm:text-sm text-slate-400 ml-2">
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

        {/* Scroll Progress Indicator */}
        <div className="flex justify-center mt-4">
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-blue-500/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 rounded-full transition-all duration-300"
              style={{
                width: `${(scrollPosition / ((activeSkills.length - 1) * (isMobile ? 270 : 330))) * 100}%`
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;