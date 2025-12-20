import React from 'react';
import { SOCIAL_LINKS } from '../constants';

interface SocialMediaLinksProps {
  className?: string;
  iconClass?: string;
}

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({ className = '', iconClass = '' }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className={`text-white hover:text-accent transition-colors duration-300 ${iconClass}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;