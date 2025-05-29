import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const ContactPage: React.FC = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending....");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "9c4dbdf0-8c38-47a5-aab1-9e3b06b196db");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        toast.success('Message sent successfully!');
        event.currentTarget.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
        toast.error('Failed to send message');
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="page-title">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>

          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="input-field"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="input-field"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="input-field resize-none"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-primary w-full"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </span>
              )}
            </button>

            {result && (
              <div className="mt-4 text-center text-sm text-gray-300">
                {result}
              </div>
            )}
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="card mb-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#A020F022] p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-[#A020F0]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Address</h3>
                  <p className="text-gray-400">BH-1 Lovely Professional University </p>
                  <p className="text-gray-400">Phagwara, Punjab - 144411</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#A020F022] p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-[#A020F0]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Phone</h3>
                  <p className="text-gray-400">+91 7008450074</p>
                  <p className="text-gray-400">Mon-Fri, 9AM-6PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#A020F022] p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-[#A020F0]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <p className="text-gray-400">Use the Contact Form</p>
                  <p className="text-gray-400"></p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
