import React from 'react'

const LoginModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
        <div className="bg-white rounded-lg shadow-lg p-12 w-full max-w-md z-10">
          {children}
        </div>
      </div>
    );
  };
  
  export default LoginModal;
