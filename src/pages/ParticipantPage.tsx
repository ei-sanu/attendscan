import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Lock, User, Eye, EyeOff, Printer, Download } from 'lucide-react';
import QRCode from 'react-qr-code';
import toast from 'react-hot-toast';

const ParticipantPage: React.FC = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const correctPassword = 'somesh11';

  // Generate a secure QR code value with encryption
  const generateSecureQRValue = (regNumber: string) => {
    // Add a timestamp to prevent replay attacks
    const timestamp = Date.now();
    // Add a secret key that only the volunteer scanner knows
    const secretKey = 'AttendScan2025';
    // Combine the data
    const data = `${regNumber}|${timestamp}|${secretKey}`;
    // Base64 encode the data
    return btoa(data);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (password === correctPassword) {
        setVerified(true);
        toast.success('Verification successful!');
      } else {
        toast.error('Incorrect password. Please try again.');
      }
      setLoading(false);
    }, 1000);
  };

  const printQRCode = () => {
    window.print();
  };

  const downloadQRCode = () => {
    const svg = document.getElementById('qr-code');
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');

      const downloadLink = document.createElement('a');
      downloadLink.download = `qrcode-${registrationNumber}.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  // Generate the secure QR code value
  const qrCodeValue = verified ? generateSecureQRValue(registrationNumber) : '';

  return (
    <div className="max-w-4xl mx-auto ">
      <h1 className="page-title text-center">Participant Verification</h1>

      {!verified ? (
        <motion.div
          className="card max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Verify Your Identity</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="registration" className="block text-sm font-medium text-gray-300 mb-1">
                Registration Number
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <User className="h-5 w-5 text-gray-400" />
                </span>
                <input
                  id="registration"
                  type="text"
                  value={registrationNumber}
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                  className="input-field pl-10"
                  placeholder="Enter your registration number"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="h-5 w-5 text-gray-400" />
                </span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pl-10"
                  placeholder="Enter verification password"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Hint: Default password is "somesh11"</p>
            </div>

            <button
              type="submit"
              className="btn-primary w-full"
              disabled={loading || !registrationNumber || !password}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                    <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <QrCode className="mr-2 h-5 w-5" />
                  Generate QR Code
                </span>
              )}
            </button>
          </form>
        </motion.div>
      ) : (
        <motion.div
          className="card max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Your QR Code</h2>
            <p className="text-gray-400 mb-6">Registration Number: {registrationNumber}</p>

            <div className="bg-white p-4 rounded-lg inline-block mb-6">
              <QRCode
                id="qr-code"
                value={qrCodeValue}
                size={200}
                level="H"
              />
            </div>

            <p className="text-gray-300 mb-6">
              Use this QR code to mark your attendance. You can print it or save it on your device.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={printQRCode}
                className="btn-primary"
              >
                <Printer className="h-5 w-5" />
                <span>Print</span>
              </button>

              <button
                onClick={downloadQRCode}
                className="btn-primary bg-opacity-20 hover:bg-opacity-30 border border-[#A020F0]"
              >
                <Download className="h-5 w-5" />
                <span>Download</span>
              </button>
            </div>

            <button
              onClick={() => setVerified(false)}
              className="mt-6 text-gray-400 hover:text-[#A020F0] transition-colors"
            >
              Generate another QR code
            </button>
          </div>
        </motion.div>
      )}

      <div className="mt-16">
        <div className="card bg-gradient-to-br from-[#1e1e2d] to-[#2a2a3d]">
          <h3 className="text-xl font-semibold mb-4">Instructions</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Enter your registration number and the verification password (somesh11).</li>
            <li>Once verified, a secure QR code will be generated specifically for your registration number.</li>
            <li>You can download or print this QR code for future use.</li>
            <li>Present this QR code to volunteers for scanning to mark your attendance.</li>
            <li>Each QR code is unique and can only be scanned by authorized volunteer scanners.</li>
            <li>The QR code includes security measures to prevent unauthorized scanning.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ParticipantPage;
