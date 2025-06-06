import React from 'react';
import { Github } from 'lucide-react';

const OpenSource = () => {
  return (
    <section className="py-12 bg-slate-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-8 md:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">GitHub Profile</h3>
              <p className="text-slate-400 mb-4">
                Check out my personal projects and coding journey on GitHub. Currently working on building my portfolio of projects.
              </p>
            </div>
            
            <a 
              href="https://github.com/sunkesulaavijaykumarr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-300 font-medium flex items-center"
            >
              <Github size={20} className="mr-2" />
              <span>View My GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;