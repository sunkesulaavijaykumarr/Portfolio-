import { Sparkles, Brain, Code2, Rocket, Clock, Star, Calendar, BookOpen } from 'lucide-react';

const Projects = () => {
  // Calculate dates for the 10-day timeline
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(startDate.getDate() + 10);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          <div className="space-y-4">
            <p className="text-lg text-slate-300 leading-relaxed">
              Currently learning and exploring AI tools to enhance project development capabilities.
            </p>
            <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20 inline-block">
              <div className="flex items-center gap-2 text-blue-400">
                <BookOpen size={20} />
                <span>Learning Phase: AI Development Tools & Integration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Project Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Rocket size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">First Project Coming Soon</h3>
                <div className="flex items-center gap-2 text-slate-400 mt-1">
                  <Calendar size={16} />
                  <span>Expected: {formatDate(endDate)}</span>
                </div>
              </div>
            </div>
            <p className="text-slate-300 mb-4">
              The first project will showcase the integration of AI capabilities with modern web technologies.
              Currently in active development and scheduled to be completed within 10 days.
            </p>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-300">Progress</span>
                <span className="text-blue-400">In Development</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full w-[30%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Development Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500">
              <Brain size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Learning Phase</h3>
            <p className="text-slate-300">
              Currently mastering AI development tools and best practices to create more intelligent and efficient solutions.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 text-purple-500">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality Focus</h3>
            <p className="text-slate-300">
              Taking time to ensure each project meets high standards of code quality and user experience.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4 text-teal-500">
              <Code2 size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Project Pipeline</h3>
            <p className="text-slate-300">
              Building a strong foundation with AI tools before launching a series of innovative projects.
            </p>
          </div>
        </div>

        {/* Project Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/30 rounded-xl border border-slate-700 p-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Clock size={24} className="text-blue-500" />
              <h3 className="text-2xl font-semibold">10-Day Development Timeline</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Star size={16} className="text-blue-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Initial Setup & Planning</h4>
                  <p className="text-slate-300">
                    <span className="text-blue-400">{formatDate(startDate)}</span> - Project structure setup and feature planning
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Code2 size={16} className="text-purple-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Core Development</h4>
                  <p className="text-slate-300">
                    <span className="text-purple-400">{formatDate(new Date(startDate.getTime() + 5 * 24 * 60 * 60 * 1000))}</span> - Implementation of main features
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <Rocket size={16} className="text-teal-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Project Launch</h4>
                  <p className="text-slate-300">
                    <span className="text-teal-400">{formatDate(endDate)}</span> - Final testing and deployment
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-400 italic">
              "Currently in the learning phase with AI tools. Projects will be released once a strong foundation is established."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;