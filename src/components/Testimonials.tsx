import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'John Anderson',
      position: 'Product Manager',
      company: 'TechCorp',
      content: 'An exceptional front-end developer with extraordinary attention to detail. Not only did they deliver a pixel-perfect implementation of our designs, but they also suggested improvements that significantly enhanced user experience. Working with them was both seamless and rewarding.',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Williams',
      position: 'Creative Director',
      company: 'DesignStudio',
      content: 'Working with this developer was a game-changer for our project. Their ability to transform our complex design requirements into flawless, responsive interfaces exceeded our expectations. They have a rare combination of technical expertise and creative problem-solving skills.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5
    },
    {
      id: 3,
      name: 'Michael Thompson',
      position: 'CTO',
      company: 'StartupLaunch',
      content: 'I\'ve worked with many developers over my 15-year career, but few have demonstrated the level of commitment, skill, and adaptability that I experienced with this professional. They consistently delivered high-quality code on time and were always ready to tackle new challenges.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4
    }
  ];
  
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isAutoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoplay, testimonials.length]);
  
  const handlePrev = () => {
    setIsAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const handleNext = () => {
    setIsAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const handleDotClick = (index: number) => {
    setIsAutoplay(false);
    setActiveIndex(index);
  };

  return (
    <section className="py-24 bg-slate-900" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Testimonials</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-300">
            Here's what clients and colleagues say about working with me.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Large quote icon */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-slate-800 opacity-20">
            <Quote size={120} />
          </div>
          
          {/* Testimonial carousel */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-slate-800 rounded-xl p-8 md:p-10 border border-slate-700 shadow-xl relative">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-500/20">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div>
                        <div className="flex mb-4">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg 
                              key={i} 
                              className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-500' : 'text-slate-600'}`} 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <blockquote className="text-slate-300 text-lg mb-6 relative">
                          <span className="text-blue-500 text-2xl absolute -top-2 -left-4">"</span>
                          {testimonial.content}
                          <span className="text-blue-500 text-2xl">"</span>
                        </blockquote>
                        <div>
                          <h4 className="text-xl font-bold">{testimonial.name}</h4>
                          <p className="text-slate-400">{testimonial.position} at {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-blue-500' : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;