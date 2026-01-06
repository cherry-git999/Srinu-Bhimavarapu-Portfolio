import { motion } from 'framer-motion';
import { Briefcase, Award, BookOpen, Calendar } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const experiences = [
  {
    type: 'internship',
    title: 'Frontend Developer Intern',
    company: 'CodSoft',
    location: 'Remote',
    duration: 'Sep 2024 - Oct 2024',
    description: [
      'Developed responsive web projects including a portfolio website, landing page, and calculator using HTML, CSS, and JavaScript',
      'Implemented interactive features and optimized UI for usability and performance',
      'Utilized Git/GitHub for version control and followed structured development workflows',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'Git'],
  },
  // {
  //   type: 'internship',
  //   title: 'Research Intern - Signal Processing',
  //   company: 'Research Institute',
  //   location: 'City, Country',
  //   duration: 'December 2023 - February 2024',
  //   description: [
  //     'Implemented DSP algorithms for audio processing applications',
  //     'Conducted research on adaptive filtering techniques',
  //     'Published findings in departmental research symposium',
  //     'Achieved 40% improvement in noise reduction algorithms',
  //   ],
  //   skills: ['MATLAB', 'DSP', 'Python', 'Research'],
  // },
];

const certifications = [
  {
    title: 'Embedded Systems - Shape The World',
    issuer: 'UT Austin via edX',
    date: 'July 2024',
    credentialId: 'ABC123XYZ',
    skills: ['ARM Cortex-M', 'Real-time OS', 'IoT'],
  },
  {
    title: 'Machine Learning for Signal Processing',
    issuer: 'NPTEL',
    date: 'April 2024',
    credentialId: 'NPTEL24CS456',
    skills: ['ML', 'Signal Processing', 'Python'],
  },
  {
    title: 'VLSI Design Fundamentals',
    issuer: 'Coursera',
    date: 'January 2024',
    credentialId: 'COUR789DEF',
    skills: ['VLSI', 'Verilog', 'Digital Design'],
  },
  {
    title: 'Internet of Things',
    issuer: 'NPTEL',
    date: 'September 2023',
    credentialId: 'NPTEL23EC789',
    skills: ['IoT', 'Protocols', 'Cloud'],
  },
];

const workshops = [
  {
    title: 'Aviation 4.O - Flying into the Future',
    organizer: 'Codeiam Club, Andhra University',
    date: 'Sep 2025',
    description: 'A powerful workshop on the future of aviation technology, covering advancements in autonomous flight systems, AI integration, and sustainable aviation solutions.',
  },
  {
    title: 'Ureka',
    organizer: 'IIT Bombay, E-Cell',
    date: 'Aug 2025',
    description: 'A dynamic workshop focused on entrepreneurship, innovation, and startup culture, featuring talks, networking, and hands-on activities.',
  },
  {
    title: 'Research To Innovation Workshop',
    organizer: 'Research Innovation, Andhra University',
    date: 'Oct 2025',
    description: 'An engaging workshop that bridges the gap between academic research and practical innovation, encouraging participants to transform ideas into viable solutions.',
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-gray-50 dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Experience & Learning
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey, certifications, and continuous learning experiences
          </p>
        </motion.div>

        {/* Internships Timeline */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Briefcase className="w-6 h-6 text-primary-500" />
            <h3 className="text-2xl font-bold">Internships</h3>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 md:pl-12"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-blue-500" />
                
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-0 top-2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-card transform -translate-x-[7px]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                />

                {/* Content Card */}
                <motion.div
                  className="bg-white dark:bg-dark-bg rounded-xl p-6 border border-gray-200 dark:border-dark-border hover:shadow-lg transition-shadow"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
                      <p className="text-primary-500 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{exp.location}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="text-primary-500 mt-1">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-500 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Award className="w-6 h-6 text-primary-500" />
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-dark-bg rounded-xl p-6 border border-gray-200 dark:border-dark-border hover:border-primary-500 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1 group-hover:text-primary-500 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                  </div>
                  <Award className="w-8 h-8 text-primary-500/20 group-hover:text-primary-500 transition-colors" />
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">ID: {cert.credentialId}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Workshops & Events */}
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <BookOpen className="w-6 h-6 text-primary-500" />
            <h3 className="text-2xl font-bold">Workshops & Events</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-dark-bg rounded-xl p-6 border border-gray-200 dark:border-dark-border hover:shadow-lg transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="font-bold mb-2">{workshop.title}</h4>
                <p className="text-sm text-primary-500 mb-2">{workshop.organizer}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{workshop.date}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{workshop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
