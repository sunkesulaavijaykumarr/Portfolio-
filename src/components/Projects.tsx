import React, { useState } from 'react';
import { Github, ExternalLink, Code2, Users, Star, GitFork } from 'lucide-react';

type ProjectCategory = 'frontend' | 'fullstack' | 'mobile' | 'other';
type FilterType = 'all' | ProjectCategory;

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  stats: {
    stars: number;
    forks: number;
    contributors: number;
  };
  category: ProjectCategory;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB. Features include user authentication, product management, cart functionality, and payment integration.',
      image: '/projects/ecommerce.jpg',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'TypeScript'],
      githubLink: 'https://github.com/username/ecommerce',
      demoLink: 'https://ecommerce-demo.com',
      stats: {
        stars: 120,
        forks: 45,
        contributors: 8
      },
      category: 'fullstack'
    },
    {
      title: 'AI Image Generator',
      description: "An AI-powered image generation app using OpenAI's DALL-E API. Users can create, save, and share AI-generated artwork with the community.",
      image: '/projects/ai-image.jpg',
      technologies: ['React', 'OpenAI API', 'TailwindCSS', 'Firebase'],
      githubLink: 'https://github.com/username/ai-image',
      demoLink: 'https://ai-image-gen.com',
      stats: {
        stars: 89,
        forks: 23,
        contributors: 5
      },
      category: 'frontend'
    },
    {
      title: 'Task Management App',
      description: 'A mobile-first task management application with real-time updates, collaborative features, and offline support.',
      image: '/projects/task-app.jpg',
      technologies: ['React Native', 'Redux', 'Firebase', 'TypeScript'],
      githubLink: 'https://github.com/username/task-app',
      demoLink: 'https://task-app-demo.com',
      stats: {
        stars: 156,
        forks: 67,
        contributors: 12
      },
      category: 'mobile'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-slate-300 leading-relaxed">
            A collection of my most impactful projects, demonstrating my expertise
            in building scalable and innovative solutions.
          </p>
        </div>
          
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'frontend', 'fullstack', 'mobile', 'other'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter as FilterType)}
              className={`px-6 py-2 rounded-full border ${
                activeFilter === filter
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-500'
              } transition-all duration-300 capitalize`}
              >
              {filter}
              </button>
            ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-slate-700/50 text-slate-300 border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-slate-400">
                  <div className="flex items-center gap-1">
                    <Star size={16} />
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={16} />
                    <span>{project.stats.forks}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{project.stats.contributors}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white"
          >
            <Code2 size={20} />
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;