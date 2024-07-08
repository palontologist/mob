"use client"
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <iframe
          id="JotFormIFrame-241793708388067"
          title="Form"
          onLoad={() => window.parent.scrollTo(0, 0)}
          allowTransparency={true}
          allow="geolocation; microphone; camera; fullscreen"
          src="https://form.jotform.com/241793708388067"
          frameBorder="0"
          className="w-full h-96 border-none"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;