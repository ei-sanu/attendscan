import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { QrCode, UserCheck, Database, ShieldCheck, Users } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <QrCode size={28} className="text-[#A020F0]" />,
      title: 'QR Code Attendance',
      description: 'Generate and scan QR codes for quick and easy attendance tracking.'
    },
    {
      icon: <UserCheck size={28} className="text-[#A020F0]" />,
      title: 'Secure Verification',
      description: 'Verify participants securely using password protection.'
    },
    {
      icon: <Database size={28} className="text-[#A020F0]" />,
      title: 'Google Sheets Integration',
      description: 'Automatically update attendance records in Google Sheets.'
    },
    {
      icon: <ShieldCheck size={28} className="text-[#A020F0]" />,
      title: 'Data Security',
      description: 'Keep attendance data secure and prevent duplicate entries.'
    }
  ];

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
    <div>
      <section className="relative py-8 md:py-16 lg:py-24 px-4 md:px-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#A020F033] to-transparent opacity-30 z-0 rounded-3xl" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#A020F0] leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Streamline Attendance Tracking with QR Codes
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 mb-8 md:mb-10 px-4 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A simple, secure way to verify participants and track attendance using QR code technology.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/participant" className="btn-primary">
              <Users size={20} />
              <span>I'm a Participant</span>
            </Link>
            <Link to="/volunteer" className="btn-primary bg-opacity-20 hover:bg-opacity-30 border border-[#A020F0]">
              <QrCode size={20} />
              <span>I'm a Volunteer</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-0">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How It Works</h2>
          <div className="h-1 w-24 bg-[#A020F0] mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-gradient-to-b from-[#A020F0] to-transparent hidden md:block"></div>
          
          <div className="relative z-10 space-y-8 md:space-y-16">
            <motion.div 
              className="flex flex-col md:flex-row items-center gap-8 md:gap-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="md:w-1/2 p-6 md:pr-12 order-2 md:order-1">
                <div className="card h-full">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#A020F0]">Participant Registration</h3>
                  <p className="text-gray-300">
                    Participants enter their registration number and the verification password to generate a unique QR code that represents their identity.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center order-1 md:order-2">
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-[#1e1e2d] border-2 border-[#A020F0] shadow-lg shadow-[#A020F044]">
                  <span className="text-xl md:text-2xl font-bold">1</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col md:flex-row items-center gap-8 md:gap-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-[#1e1e2d] border-2 border-[#A020F0] shadow-lg shadow-[#A020F044]">
                  <span className="text-xl md:text-2xl font-bold">2</span>
                </div>
              </div>
              <div className="md:w-1/2 p-6 md:pl-12">
                <div className="card h-full">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#A020F0]">QR Code Generation</h3>
                  <p className="text-gray-300">
                    Once verified, a QR code is generated for the participant. This code can be saved, printed, or shown on screen for scanning.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col md:flex-row items-center gap-8 md:gap-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="md:w-1/2 p-6 md:pr-12 order-2 md:order-1">
                <div className="card h-full">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#A020F0]">Volunteer Scanning</h3>
                  <p className="text-gray-300">
                    Volunteers use the scanning page to capture the QR code using their device camera, instantly recording the attendance.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center order-1 md:order-2">
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-[#1e1e2d] border-2 border-[#A020F0] shadow-lg shadow-[#A020F044]">
                  <span className="text-xl md:text-2xl font-bold">3</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col md:flex-row items-center gap-8 md:gap-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-[#1e1e2d] border-2 border-[#A020F0] shadow-lg shadow-[#A020F044]">
                  <span className="text-xl md:text-2xl font-bold">4</span>
                </div>
              </div>
              <div className="md:w-1/2 p-6 md:pl-12">
                <div className="card h-full">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#A020F0]">Attendance Recording</h3>
                  <p className="text-gray-300">
                    Attendance data is automatically sent to Google Sheets, updating records in real-time with registration numbers, timestamps, and attendance status.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-0">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Key Features</h2>
          <div className="h-1 w-24 bg-[#A020F0] mx-auto rounded-full"></div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="card hover:shadow-xl hover:shadow-[#A020F022] transition-all duration-300"
              variants={itemVariants}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-0">
        <div className="card bg-gradient-to-br from-[#1e1e2d] to-[#2a2a3d] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-[#A020F0] rounded-full filter blur-3xl opacity-10 -mr-16 -mt-16"></div>
          <div className="relative z-10 p-6 md:p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Get Started?</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              Join the modern way of tracking attendance with our QR code-based system. Simple, secure, and efficient.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/participant" className="btn-primary">
                <Users size={20} />
                <span>Participant Login</span>
              </Link>
              <Link to="/volunteer" className="btn-primary bg-opacity-20 hover:bg-opacity-30 border border-[#A020F0]">
                <QrCode size={20} />
                <span>Volunteer Access</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;