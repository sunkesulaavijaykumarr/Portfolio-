import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: "blur(10px)",
        scale: 0.95
      }}
      transition={{ 
        duration: 0.8,
        ease: "easeInOut"
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Logo Container */}
        <div className="flex items-center gap-4">
          <Code2 className="w-12 h-12 sm:w-16 sm:h-16 text-[#4F46E5]" />
          <span className="text-3xl sm:text-4xl font-bold text-[#4F46E5]">VIJAYKUMAR</span>
        </div>

        {/* Loading Bar */}
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 1.2,
            ease: "easeInOut"
          }}
          className="h-1 w-64 sm:w-80 bg-gradient-to-r from-[#4F46E5] via-purple-500 to-pink-500 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 