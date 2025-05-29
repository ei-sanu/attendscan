import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, BookOpen } from 'lucide-react';

const AboutPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="page-title">About Us</h1>

      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="card">
          <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
          <p className="text-gray-300 mb-4">
            At AttendScan, we are dedicated to simplifying the attendance tracking process for events, organizations, and educational institutions. 
            Our mission is to provide a seamless, secure, and efficient way to verify participants and record attendance using QR code technology.
          </p>
          <p className="text-gray-300">
            We believe that technology should make everyday tasks easier, not more complicated. That's why we've created a straightforward solution 
            that eliminates the need for paper sign-in sheets, reduces administrative burden, and ensures accurate attendance records.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-semibold mb-6">Core Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div className="card" variants={itemVariants}>
            <div className="bg-[#A020F022] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Shield className="text-[#A020F0] h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Security</h3>
            <p className="text-gray-400">
              We prioritize the security of your data and ensure that verification processes are protected with appropriate measures.
            </p>
          </motion.div>
          
          <motion.div className="card" variants={itemVariants}>
            <div className="bg-[#A020F022] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Award className="text-[#A020F0] h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-400">
              We strive for excellence in every aspect of our service, from the user interface to the backend processes.
            </p>
          </motion.div>
          
          <motion.div className="card" variants={itemVariants}>
            <div className="bg-[#A020F022] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <BookOpen className="text-[#A020F0] h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-400">
              We continuously explore new technologies and methodologies to enhance our attendance tracking solution.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="card">
          <h2 className="text-2xl font-semibold mb-6">How It All Started</h2>
          <p className="text-gray-300 mb-4">
            AttendScan was born out of a simple realization: traditional attendance tracking methods are inefficient and prone to errors. 
            Our founder, who had experienced the frustrations of managing attendance for large events, envisioned a system that would 
            leverage modern technology to streamline the process.
          </p>
          <p className="text-gray-300 mb-4">
            What began as a small project to solve a specific problem has evolved into a comprehensive attendance management solution 
            used by organizations of all sizes. Our journey has been guided by feedback from users who have helped shape the features 
            and functionality of AttendScan.
          </p>
          <p className="text-gray-300">
            Today, we continue to refine our platform, adding new capabilities while maintaining the simplicity and efficiency 
            that our users value.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="card bg-gradient-to-br from-[#1e1e2d] to-[#2a2a3d]">
          <h2 className="text-2xl font-semibold mb-6">Join Us On Our Journey</h2>
          <p className="text-gray-300 mb-6">
            We're excited about the future of attendance management and would love for you to be a part of it. Whether you're an event organizer, 
            educational institution, or business looking to streamline your attendance tracking, AttendScan is here to help.
          </p>
          <div className="flex justify-center">
            <a href="/contact" className="btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;