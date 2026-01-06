import { motion } from 'framer-motion';
import { Download, ArrowRight, Zap, Cpu, Radio, Waves, Circle, Box } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-dark-bg dark:via-dark-bg dark:to-dark-card"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      
      {/* Floating Circuit Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 text-primary-500/20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Cpu className="w-full h-full" />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-10 sm:right-20 w-10 h-10 sm:w-16 sm:h-16 text-blue-500/20"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <Radio className="w-full h-full" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-1/4 w-24 h-24 text-indigo-500/20"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 90, 180]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap className="w-full h-full" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/4 w-14 h-14 text-cyan-500/20"
          animate={{ 
            y: [0, 25, 0],
            x: [0, -15, 0],
            rotate: [0, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <Waves className="w-full h-full" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 right-32 w-12 h-12 text-purple-500/20"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <Circle className="w-full h-full" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-16 w-18 h-18 text-teal-500/20"
          animate={{ 
            y: [0, -25, 0],
            x: [0, 20, 0],
            rotate: [0, -90, -180]
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        >
          <Box className="w-full h-full" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-1/3 w-16 h-16 text-pink-500/20"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -360]
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        >
          <Cpu className="w-full h-full" />
        </motion.div>

        <motion.div
          className="absolute top-24 right-1/3 w-20 h-20 text-amber-500/20"
          animate={{ 
            y: [0, -18, 0],
            x: [0, 12, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        >
          <Radio className="w-full h-full" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            className="text-primary-500 font-medium mb-4 flex items-center justify-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block w-8 h-[2px] bg-primary-500" />
            <span>Hello, I'm</span>
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-gradient">Srinu Bhimavarapu</span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            className="text-base sm:text-lg md:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Electronics & Communication Engineering Student
          </motion.h2>

          {/* Tagline */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {['System on Chip', 'VLSI', 'RTL Designing', 'Verification'].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-2.5 sm:px-4 py-1.5 sm:py-2 bg-white/50 dark:bg-dark-card/50 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-border"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: 'rgb(14, 165, 233)' }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Passionate about designing and verifying cutting-edge SoC solutions. 
            Skilled in RTL design, verification methodologies, and FPGA prototyping. 
            Eager to contribute to innovative projects in the semiconductor industry.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-primary-500 text-white rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/30 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="/srinucv.pdf"
              download
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-dark-card text-gray-900 dark:text-white rounded-lg font-medium flex items-center justify-center space-x-2 border-2 border-gray-300 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-500 transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
