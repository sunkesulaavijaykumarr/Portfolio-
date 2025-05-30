import { Code2, Book, Users, Lightbulb, Target, Coffee } from 'lucide-react';

const About = () => {
  const qualities = [
    {
      icon: <Book className="w-6 h-6" />,
      title: 'Recent Graduate',
      description: 'B.Tech in Electronics and Communication Engineering from KL University, eager to start my professional journey.'
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Eager Learner',
      description: 'Actively learning new technologies and keeping up with industry trends.'
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Passionate Programmer',
      description: 'Dedicated to writing clean, maintainable code and learning modern development practices.'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Problem Solver',
      description: 'Analytical thinker with a passion for solving technical challenges through innovative solutions.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Player',
      description: 'Strong collaborative skills developed through academic projects and team activities.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Goal-Oriented',
      description: 'Focused on continuous improvement and achieving excellence in software development.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            A 2025 graduate from KL University with a B.Tech degree in Electronics and Communication Engineering. 
            Passionate about both hardware and software development, eager to apply my technical and interpersonal skills in a professional environment.
          </p>
          {/* <p className="text-lg text-slate-300 leading-relaxed">
            Through my academic journey, I've developed a strong foundation in programming and problem-solving, 
            with a particular interest in full-stack development and modern web technologies.
          </p> */}
        </div>

        {/* Qualities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                {quality.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                {quality.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {quality.description}
              </p>
            </div>
          ))}
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-50"></div>
      </div>
    </section>
  );
};

export default About;