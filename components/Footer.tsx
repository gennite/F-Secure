import React from 'react';
import { COMPANY_NAME, COMPANY_ADDRESS, PHONE_NUMBER, SUPPORT_EMAIL, SOCIAL_LINKS, NAV_ITEMS } from '../constants';
import SocialMediaLinks from './SocialMediaLinks';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const telLink = `tel:${PHONE_NUMBER.replace(/\s/g, '')}`;
  const mailtoLink = `mailto:${SUPPORT_EMAIL}`;

  return (
    <footer className="bg-darkbg text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-4">{COMPANY_NAME}</h3>
          <p className="text-gray-300">{COMPANY_ADDRESS}</p>
          <a href={telLink} className="block text-primary hover:text-white mt-2 transition-colors duration-300">
            {PHONE_NUMBER}
          </a>
          <a href={mailtoLink} className="block text-primary hover:text-white transition-colors duration-300">
            {SUPPORT_EMAIL}
          </a>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="text-gray-300 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Services Overview */}
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-4">Our Services</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Installation Support</li>
            <li>Login & Account Recovery</li>
            <li>Subscription Management</li>
            <li>Billing & Payment Issues</li>
            <li>Technical Troubleshooting</li>
          </ul>
        </div>

        {/* Social Media & Call to Action */}
        <div className="col-span-1 flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
          <SocialMediaLinks className="mb-6" iconClass="text-3xl" />
          <p className="text-center md:text-left text-gray-300 mb-2">Need immediate help?</p>
          <a
            href={telLink}
            className="bg-primary text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap"
          >
            Call {PHONE_NUMBER}
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        &copy; {currentYear} {COMPANY_NAME}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;