import { motion } from 'framer-motion';
import { Cpu, Code, Wrench, CircuitBoard, Database } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const skillCategories = [
  {
    title: 'Core ECE',
    icon: CircuitBoard,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Analog Electronics', level: 85 },
      { name: 'Digital Electronics', level: 90 },
      { name: 'Signals & Systems', level: 80 },
      { name: 'Communication Systems', level: 75 },
      { name: 'Control Systems', level: 70 },
    ],
  },
  {
    title: 'Tools & Software',
    icon: Wrench,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'MATLAB', level: 85 },
      { name: 'Xilinx ISE', level: 95 },
      { name: 'EDA Playground', level: 90 },
      { name: 'Xilinx Vivado', level: 95 },
      { name: 'Multisim', level: 70 },
    ],
  },
  {
    title: 'Programming',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'AMBA Protocols', level: 95 },
      { name: 'SystemVerilog', level: 90 },
      { name: 'Verilog', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'C/C++', level: 70 },
      
    ],
  },
  // {
  //   title: 'Hardware Platforms',
  //   icon: Cpu,
  //   color: 'from-orange-500 to-red-500',
  //   skills: [
  //     { name: 'Arduino', level: 90 },
  //     { name: 'ESP32/ESP8266', level: 85 },
  //     { name: 'Raspberry Pi', level: 80 },
  //     { name: 'STM32', level: 70 },
  //     { name: 'Sensors & Actuators', level: 85 },
  //   ],
  // },
  {
    title: 'Additional Skills',
    icon: Database,
    color: 'from-indigo-500 to-blue-500',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Xilinx', level:95 },
      { name: 'Communication Skills', level: 85 },
      { name: 'Networking', level: 60 },
      { name: 'Web Development', level: 65 },
    ],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-gray-50 dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across various domains of electronics and software
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-white dark:bg-dark-bg rounded-2xl p-6 border border-gray-200 dark:border-dark-border hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-primary-500">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="h-2 bg-gray-200 dark:bg-dark-card rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Tags Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Oscilloscope', 'Function Generator', 'Logic Analyzer', 'FPGA',
              'DSP', 'RF Design', 'Power Electronics', 'Microcontrollers',
              'RTOS', 'I2C/SPI/UART', 'ADC/DAC', 'PWM', 'Docker', 'VS Code',
              'Jupyter', 'AutoCAD', 'Eagle PCB', '3D Printing'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-white dark:bg-dark-bg rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-border hover:border-primary-500 hover:text-primary-500 transition-colors cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
