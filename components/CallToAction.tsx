import React from 'react';
import { PHONE_NUMBER } from '../constants';

interface CallToActionProps {
  className?: string;
  isLarge?: boolean;
}

const CallToAction: React.FC<CallToActionProps> = ({ className = '', isLarge = false }) => {
  const displayPhoneNumber = PHONE_NUMBER;
  const telLink = `tel:${PHONE_NUMBER.replace(/\s/g, '')}`;

  return (
    <div className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-md ${className}`}>
      <p className={`font-semibold text-center ${isLarge ? 'text-xl md:text-3xl' : 'text-lg md:text-xl'} text-gray-900 mb-2`}>
        Need Immediate Assistance?
      </p>
      <a
        href={telLink}
        className={`block text-primary hover:text-blue-700 font-bold ${isLarge ? 'text-3xl md:text-5xl' : 'text-2xl md:text-4xl'} mb-4`}
      >
        {displayPhoneNumber}
      </a>
      <a
        href={telLink}
        className={`bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg ${isLarge ? 'text-lg md:text-xl' : 'text-base md:text-lg'}`}
      >
        Call for Help Now
      </a>
    </div>
  );
};

export default CallToAction;