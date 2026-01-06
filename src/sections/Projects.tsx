import { motion } from 'framer-motion';
import { Github, ExternalLink, Zap } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const projects = [
  {
    title: 'IoT-Based Smart Home Automation System',
    description: 'A comprehensive home automation solution using ESP32 and cloud integration for remote monitoring and control.',
    problem: 'Manual control of home appliances leads to energy wastage and lack of remote access',
    solution: 'Developed an IoT system with mobile app integration for real-time monitoring and control',
    outcome: '30% reduction in energy consumption and seamless remote access from anywhere',
    technologies: ['ESP32', 'MQTT', 'Firebase', 'Flutter', 'Sensors'],
    github: 'https://github.com/yourusername/smart-home',
    demo: 'https://demo-link.com',
    image: 'gradient-1',
  },
  {
    title: 'FPGA-Based Digital Signal Processor',
    description: 'Implementation of real-time audio filtering and processing algorithms on FPGA hardware.',
    problem: 'Need for high-speed, low-latency signal processing for audio applications',
    solution: 'Designed and implemented FIR/IIR filters in Verilog with optimized pipeline architecture',
    outcome: 'Achieved <1ms latency with 48kHz sampling rate and multiple filter stages',
    technologies: ['Verilog', 'FPGA', 'Xilinx Vivado', 'DSP', 'MATLAB'],
    github: 'https://github.com/yourusername/fpga-dsp',
    demo: null,
    image: 'gradient-2',
  },
  {
    title: 'Wireless Sensor Network for Environmental Monitoring',
    description: 'Distributed sensor network for real-time environmental data collection and analysis.',
    problem: 'Difficult to monitor environmental parameters across large geographical areas',
    solution: 'Built a mesh network of sensor nodes with data aggregation and visualization',
    outcome: 'Successfully monitored 50+ parameters across 2km range with 99% uptime',
    technologies: ['Arduino', 'LoRa', 'Python', 'Flask', 'PostgreSQL'],
    github: 'https://github.com/yourusername/wsn-monitor',
    demo: 'https://demo-link.com',
    image: 'gradient-3',
  },
  {
    title: 'ECG Signal Processing & Arrhythmia Detection',
    description: 'Machine learning-based system for automated ECG analysis and heart condition detection.',
    problem: 'Manual ECG analysis is time-consuming and requires expert knowledge',
    solution: 'Developed ML model for automated ECG feature extraction and classification',
    outcome: '95% accuracy in detecting common arrhythmias with real-time processing',
    technologies: ['Python', 'TensorFlow', 'Signal Processing', 'Arduino', 'AD8232'],
    github: 'https://github.com/yourusername/ecg-detection',
    demo: null,
    image: 'gradient-4',
  },
  {
    title: 'Voice-Controlled Robotic Arm',
    description: 'Speech recognition enabled robotic arm for pick-and-place operations.',
    problem: 'Manual control of robotic arms requires constant human attention',
    solution: 'Integrated speech recognition with servo control for hands-free operation',
    outcome: 'Achieved 90% voice command accuracy with 5-axis movement precision',
    technologies: ['Raspberry Pi', 'Python', 'Speech Recognition', 'Servos', '3D Printing'],
    github: 'https://github.com/yourusername/voice-robot',
    demo: 'https://demo-link.com',
    image: 'gradient-5',
  },
  {
    title: 'Smart Energy Meter with Theft Detection',
    description: 'Advanced energy monitoring system with anomaly detection and cloud reporting.',
    problem: 'Traditional energy meters lack theft detection and real-time monitoring',
    solution: 'Designed smart meter with current sensing, tampering alerts, and IoT connectivity',
    outcome: 'Reduced energy theft by 40% with instant notification system',
    technologies: ['ESP8266', 'ACS712', 'ThingSpeak', 'Mobile App', 'Alert System'],
    github: 'https://github.com/yourusername/smart-meter',
    demo: null,
    image: 'gradient-6',
  },
];

const gradients = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-green-500 to-emerald-500',
  'from-orange-500 to-red-500',
  'from-indigo-500 to-blue-500',
  'from-yellow-500 to-orange-500',
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating problem-solving skills and practical implementation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group bg-white dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-200 dark:border-dark-border hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Project Image/Gradient */}
              <div className={`h-48 bg-gradient-to-br ${gradients[index % gradients.length]} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-white/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap className="w-24 h-24" />
                  </motion.div>
                </div>
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-6 h-6 text-white" />
                  </motion.a>
                  
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Problem-Solution-Outcome */}
                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-xs font-semibold text-red-500 uppercase">Problem:</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{project.problem}</p>
                  </div>
                  
                  <div>
                    <span className="text-xs font-semibold text-blue-500 uppercase">Solution:</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{project.solution}</p>
                  </div>
                  
                  <div>
                    <span className="text-xs font-semibold text-green-500 uppercase">Outcome:</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{project.outcome}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-primary-500/10 text-primary-500 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
