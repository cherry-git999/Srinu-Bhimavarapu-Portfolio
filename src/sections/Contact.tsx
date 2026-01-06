import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin,Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import SectionWrapper from '../components/SectionWrapper';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'srinubhimavarapu090@gmail.com',
    href: 'mailto:srinubhimavarapu090@gmail.com',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9502756232',
    href: 'tel:+919502756232',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Visakhapatnam, India',
    href: null,
    color: 'from-blue-500 to-cyan-500',
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Srinu-bhimavarapu',
    color: 'hover:text-gray-900 dark:hover:text-white',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/srinu-bhimavarapu-49b75b314/',
    color: 'hover:text-blue-600',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:srinubhimavarapu090@gmail.com',
    color: 'hover:text-red-500',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Send email using EmailJS
    emailjs
      .send(
        'service_dm1rx5f', 
        'template_7ayl3dk',
        {
          from_name: formData.name,
          to_name: 'Srinu Bhimavarapu',
          from_email: formData.email,
          to_email: 'srinubhimavarapu090@gmail.com',
          subject: formData.subject,
          message: formData.message,
        },
        'nBoP8xG2F1q3h6sia'
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setFormData({ name: '', email: '', subject: '', message: '' });

          setTimeout(() => {
            setSubmitSuccess(false);
          }, 5000);
        },
        (error) => {
          setIsSubmitting(false);
          console.error('EmailJS Error:', error);
          alert('Oops! Something went wrong. Please try again or email me directly.');
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-gray-50 dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Open to projects, collaborations, and opportunities. Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        className="flex items-center space-x-4 p-4 bg-white dark:bg-dark-bg rounded-xl border border-gray-200 dark:border-dark-border hover:border-primary-500 transition-all group"
                      >
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} text-white`}>
                          <info.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                          <p className="font-medium group-hover:text-primary-500 transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-4 p-4 bg-white dark:bg-dark-bg rounded-xl border border-gray-200 dark:border-dark-border">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} text-white`}>
                          <info.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                          <p className="font-medium">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-white dark:bg-dark-bg rounded-xl border border-gray-200 dark:border-dark-border transition-all ${social.color}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-bg rounded-2xl p-8 border border-gray-200 dark:border-dark-border">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              {submitSuccess && (
                <motion.div
                  className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              <div className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-dark-card border ${
                      errors.name ? 'border-red-500' : 'border-gray-300 dark:border-dark-border'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-dark-card border ${
                      errors.email ? 'border-red-500' : 'border-gray-300 dark:border-dark-border'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-dark-card border ${
                      errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-dark-border'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors`}
                    placeholder="Project Collaboration"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-dark-card border ${
                      errors.message ? 'border-red-500' : 'border-gray-300 dark:border-dark-border'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors resize-none`}
                    placeholder="Tell me about your project or idea..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary-500 text-white rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
