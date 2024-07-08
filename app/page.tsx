"use client"
import React, { useState, useEffect } from 'react';
import Modal from './Modal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '';
    script.async = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleGetStartedClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Impact report Generator</h1>
        <p className="text-lg mb-4">
          frontforumfocus is a tool that assists businesses in identifying sustainability metrics and helps individuals amplify their impacts through the SDGs.
        </p>
        <button
          onClick={handleGetStartedClick}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Get Started
        </button>
      </header>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}