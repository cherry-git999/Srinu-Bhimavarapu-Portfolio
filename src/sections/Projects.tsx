import { motion } from 'framer-motion';
import { Github} from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const projects = [
  {
    title: 'AXI-Lite to APB Bridge (RTL Design)',
    description: 'Designed a SystemVerilog-based bridge to translate AXI-Lite transactions into APB protocol-compliant transfers for SoC peripheral integration',
    problem: 'Direct communication between AXI-Lite masters and low-power APB peripherals is not natively supported in SoC designs.',
    solution: 'Designed and implemented an AXI-Lite to APB bridge in SystemVerilog, handling protocol translation, address decoding, handshaking, and response generation.',
    outcome: 'Enabled seamless integration of APB peripherals into AXI-based systems with protocol-compliant, reliable data transfers.',
    technologies: ['SystemVerilog', 'AXI Lite', 'RTL Simulation & Debugging', 'Xilinx Vivado'],
    github: 'https://github.com/yourusername/smart-home',
    image: '/APB.jpeg',
  },
  {
    title: 'AXI4-Full Slave Controller',
    description: ' Implemented an AXI4-Full slave supporting burst read/write operations with proper channel synchronization and address handling.',
    problem: 'High-throughput memory-mapped systems require burst-based data transfers with efficient bandwidth utilization.',
    solution: 'Developed an AXI4-Full slave RTL module supporting burst read/write transactions, address alignment, and channel synchronization.',
    outcome: 'Achieved correct burst handling and improved data throughput, validated through simulation and testbench verification.',
    technologies: ['SystemVerilog', 'FPGA', 'Xilinx Vivado', 'Functional Simulation','Testbench Development'],
    github: 'https://github.com/yourusername/fpga-dsp',
    image: '/AXI.jpeg',
  },
  {
    title: 'Traffic Signal Controller (FSM)',
    description: 'Developed an FSM-based traffic signal controller in Verilog with timed state transitions and safe signal sequencing.',
    problem: 'Fixed-logic traffic control systems lack structured timing control and scalability.',
    solution: 'Designed a finite state machine (FSM)-based traffic signal controller using Verilog, implementing timed state transitions and safe signal sequencing.',
    outcome: 'Produced a deterministic, scalable traffic control design with clear state behavior, verified via simulation.',
    technologies: ['Verilog','Xilinx ISE', 'Functional Simulation Design','Testbench Development'],
    github: 'https://github.com/Srinu-bhimavarapu/verilog-projects.git',
    image: '/fsm.jpeg',
  },
  // {
  //   title: 'ECG Signal Processing & Arrhythmia Detection',
  //   description: 'Machine learning-based system for automated ECG analysis and heart condition detection.',
  //   problem: 'Manual ECG analysis is time-consuming and requires expert knowledge',
  //   solution: 'Developed ML model for automated ECG feature extraction and classification',
  //   outcome: '95% accuracy in detecting common arrhythmias with real-time processing',
  //   technologies: ['Python', 'TensorFlow', 'Signal Processing', 'Arduino', 'AD8232'],
  //   github: 'https://github.com/yourusername/ecg-detection',
  //   image: '/project4.jpg',
  // },
  // {
  //   title: 'Voice-Controlled Robotic Arm',
  //   description: 'Speech recognition enabled robotic arm for pick-and-place operations.',
  //   problem: 'Manual control of robotic arms requires constant human attention',
  //   solution: 'Integrated speech recognition with servo control for hands-free operation',
  //   outcome: 'Achieved 90% voice command accuracy with 5-axis movement precision',
  //   technologies: ['Raspberry Pi', 'Python', 'Speech Recognition', 'Servos', '3D Printing'],
  //   github: 'https://github.com/yourusername/voice-robot',
  //   image: '/project5.jpg',
  // },
  // {
  //   title: 'Smart Energy Meter with Theft Detection',
  //   description: 'Advanced energy monitoring system with anomaly detection and cloud reporting.',
  //   problem: 'Traditional energy meters lack theft detection and real-time monitoring',
  //   solution: 'Designed smart meter with current sensing, tampering alerts, and IoT connectivity',
  //   outcome: 'Reduced energy theft by 40% with instant notification system',
  //   technologies: ['ESP8266', 'ACS712', 'ThingSpeak', 'Mobile App', 'Alert System'],
  //   github: 'https://github.com/yourusername/smart-meter',
  //   image: '/project6.jpg',
  // },
];

// const gradients = [
//   'from-blue-500 to-cyan-500',
//   'from-purple-500 to-pink-500',
//   'from-green-500 to-emerald-500',
//   'from-orange-500 to-red-500',
//   'from-indigo-500 to-blue-500',
//   'from-yellow-500 to-orange-500',
// ];

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-3 sm:mb-4 px-4">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-6">
            A showcase of my technical projects demonstrating problem-solving skills and practical implementation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
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
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden bg-gray-200 dark:bg-gray-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                
                {/* GitHub Link - Always Visible */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 p-2.5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5 text-gray-800 dark:text-white" />
                </motion.a>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                  {project.description}
                </p>

                {/* Problem-Solution-Outcome */}
                <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
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
            href="https://github.com/Srinu-bhimavarapu"
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
