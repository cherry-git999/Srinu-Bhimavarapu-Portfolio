import { motion } from 'framer-motion';
import { GraduationCap, Target } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const educationData = {
  degree: 'B.Tech in Electronics & Communication Engineering',
  university: 'Andhra University College of Engineering',
  year: '2024 - Present',
  cgpa: '7.6/10',
};

const interests = [
  'RTL Design',
  'VLSI Design & Verification',
  'Verification Methodologies',
  'System on Chip (SoC)',
  'FPGA Prototyping',
  'Communication Systems',
];

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Learn more about my background, education, and what drives my passion for electronics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image & Stats */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500/20 to-blue-500/20 backdrop-blur-lg border border-primary-500/20">
              {/* Profile image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/S3.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border-4 border-primary-500/30 rounded-lg rotate-45" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-4 border-blue-500/30 rounded-full" />
            </div>

            {/* Stats Cards */} 
            {/* <div className="grid grid-cols-2 gap-4 mt-6">
              <motion.div
                className="p-4 bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-gradient">+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </motion.div>
              
              <motion.div
                className="p-4 bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-gradient">4</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
              </motion.div>
            </div> */}
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Introduction */}
            <div>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I am a second-year Electronics and Communication Engineering student with strong hands-on experience in Digital Logic Design and RTL development using Verilog and SystemVerilog. 
                My academic training and projects have built a solid foundation in synchronous digital design, FSM-based architectures, and on-chip bus protocols.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
               I have worked extensively with UART, SPI, APB, AXI-Lite, AXI-Stream, and AXI4-Full protocols, and gained practical experience in RTL design, simulation, and debugging using Xilinx ISE, Vivado, and EDA Playground.
                I am highly interested in SoC and VLSI design roles, where I can contribute to reliable, high-performance hardware systems and continue developing industry-relevant RTL and verification skills.
              </p>
            </div>

            {/* Education Card */}
            <motion.div
              className="p-6 bg-gradient-to-br from-primary-500/10 to-blue-500/10 rounded-xl border border-primary-500/20"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-500/20 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{educationData.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{educationData.university}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{educationData.year}</span>
                    <span className="px-3 py-1 bg-primary-500 text-white text-sm rounded-full">
                      CGPA: {educationData.cgpa}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Career Interests */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Target className="w-5 h-5 text-primary-500" />
                <h3 className="text-xl font-semibold">Career Interests</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span className="text-sm">{interest}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
