import { Heart, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
];

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-dark-card border-t border-gray-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Srinu Bhimavarapu</h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
              ECE student specializing in embedded systems design,
              IoT solutions, and digital signal processing.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 rounded-lg bg-gray-200 dark:bg-dark-bg hover:bg-primary-500 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Built With</h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 sm:px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-500 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 dark:border-dark-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-center">
              Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 mx-1 text-red-500 fill-current" /> by ECE Student
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
