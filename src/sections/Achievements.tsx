import { motion } from 'framer-motion';
import { Trophy, Award, Users } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const achievements = [
  {
    icon: Trophy,
    title: 'Smart India Hackathon (SIH) 2025 – Internal Round | Top 4 Team',
    description: 'Developed a Live Bus Tracking System for rural areas, securing a Top 4 position in the institute-level SIH evaluation.',
    date: '2025',
    category: 'Hackathon',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Spark Nation National Level Hackathon',
    description: 'Successfully organized and managed a campus-level hackathon, coordinating participants, mentors, and event execution.',
    date: '2025',
    category: 'Hackathon Organizer',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Award,
    title: 'TechExpo',
    description: 'Supported event organization, participant coordination, and on-ground execution of the departmental technical expo.',
    date: '2025',
    category: 'Event Organizer',
    color: 'from-indigo-500 to-blue-500',
  },
];

// const publications = [
//   {
//     title: 'IoT-Based Real-Time Air Quality Monitoring System',
//     authors: 'Your Name, Co-Author 1, Co-Author 2',
//     publication: 'International Conference on Electronics and Communication (ICEC 2024)',
//     date: 'March 2024',
//     abstract: 'Presented a novel approach for distributed air quality monitoring using LoRa network...',
//   },
//   {
//     title: 'Machine Learning Approach for ECG Arrhythmia Detection',
//     authors: 'Your Name, Guide Name',
//     publication: 'National Symposium on Biomedical Engineering',
//     date: 'December 2023',
//     abstract: 'Developed and validated ML model achieving 95% accuracy in detecting cardiac abnormalities...',
//   },
// ];

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" className="bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-3 sm:mb-4 px-4">
            Achievements & Recognition
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-6">
            Awards, competitions, leadership roles, and research contributions
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 px-4 sm:px-0">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="group relative bg-white dark:bg-dark-card rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-dark-border overflow-hidden hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />

              {/* Icon */}
              <motion.div
                className={`inline-flex p-2.5 sm:p-3 rounded-xl bg-gradient-to-br ${achievement.color} mb-3 sm:mb-4`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <achievement.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>

              {/* Category Badge */}
              <span className="inline-block px-2.5 sm:px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-dark-bg text-gray-600 dark:text-gray-400 rounded-full mb-2 sm:mb-3">
                {achievement.category}
              </span>

              {/* Content */}
              <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-primary-500 transition-colors">
                {achievement.title}
              </h3>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {achievement.description}
              </p>

              {/* Date */}
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                {achievement.date}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publications/Research */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <FileText className="w-6 h-6 text-primary-500" />
            <h3 className="text-2xl font-bold">Publications & Research</h3>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-primary-500/5 to-blue-500/5 dark:from-primary-500/10 dark:to-blue-500/10 rounded-xl p-6 border border-primary-500/20 hover:border-primary-500/40 transition-all"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ x: 10 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary-500" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-2">{pub.title}</h4>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span className="font-medium">Authors:</span> {pub.authors}
                    </p>
                    
                    <p className="text-sm text-primary-500 font-medium mb-2">
                      {pub.publication}
                    </p>
                    
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      {pub.abstract}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-400">{pub.date}</span>
                      <motion.button
                        className="px-4 py-2 text-sm font-medium text-primary-500 hover:bg-primary-500/10 rounded-lg transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Paper
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Stats Section */}
        {/* <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Awards Won', value: '8+', icon: Trophy },
            { label: 'Competitions', value: '12+', icon: Star },
            { label: 'Certifications', value: '15+', icon: Award },
            { label: 'Publications', value: '2', icon: FileText },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </SectionWrapper>
  );
}
