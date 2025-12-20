import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { COMPANY_NAME, NAV_ITEMS, PHONE_NUMBER } from '../constants';
import SocialMediaLinks from './SocialMediaLinks';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const telLink = `tel:${PHONE_NUMBER.replace(/\s/g, '')}`;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return React.createElement(
    'header',
    { className: 'bg-darkbg text-white shadow-lg sticky top-0 z-50' },
    React.createElement(
      'div',
      { className: 'container mx-auto px-4 py-4 flex items-center justify-between' },
      /* Logo and Brand Name */
      React.createElement(
        NavLink,
        { to: '/', className: 'text-xl font-bold flex items-center group' },
        React.createElement('img', {
          src: 'https://picsum.photos/50/50?random=10',
          alt: 'F-Secure Logo',
          className: 'h-8 w-8 mr-2 rounded-full group-hover:rotate-6 transition-transform duration-300',
        }),
        React.createElement('span', { className: 'hover:text-primary transition-colors duration-300' }, COMPANY_NAME),
      ),

      /* Desktop Navigation */
      React.createElement(
        'nav',
        { className: 'hidden md:flex space-x-6' },
        NAV_ITEMS.map((item) =>
          React.createElement(NavLink, {
            key: item.name,
            to: item.path,
            className: ({ isActive }) =>
              `font-semibold hover:text-primary transition-colors duration-300 ${isActive ? 'text-primary' : ''}`,
          }, item.name)
        )
      ),

      /* Phone Number & Social Links (Desktop) */
      React.createElement(
        'div',
        { className: 'hidden md:flex items-center space-x-6' },
        React.createElement(
          'a',
          {
            href: telLink,
            className: 'text-primary font-bold hover:text-white transition-colors duration-300',
          },
          PHONE_NUMBER
        ),
        React.createElement(SocialMediaLinks, null)
      ),

      /* Mobile Menu Button */
      React.createElement(
        'div',
        { className: 'md:hidden flex items-center' },
        React.createElement(
          'a',
          {
            href: telLink,
            className: 'text-primary font-bold mr-4 text-lg hover:text-white transition-colors duration-300',
            'aria-label': `Call ${PHONE_NUMBER}`,
          },
          'Call Now'
        ),
        React.createElement(
          'button',
          { onClick: toggleMenu, className: 'focus:outline-none text-white' },
          React.createElement(
            'svg',
            {
              className: 'w-8 h-8',
              fill: 'none',
              stroke: 'currentColor',
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            isOpen
              ? React.createElement('path', {
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: '2',
                  d: 'M6 18L18 6M6 6l12 12',
                })
              : React.createElement('path', {
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: '2',
                  d: 'M4 6h16M4 12h16m-7 6h7',
                })
          )
        )
      )
    ),

    /* Mobile Navigation */
    isOpen &&
      React.createElement(
        'div',
        { className: 'md:hidden bg-darkbg pb-4' },
        React.createElement(
          'nav',
          { className: 'flex flex-col items-center space-y-4 px-4' },
          NAV_ITEMS.map((item) =>
            React.createElement(NavLink, {
              key: item.name,
              to: item.path,
              onClick: toggleMenu,
              className: ({ isActive }) =>
                `block text-lg font-semibold hover:text-primary transition-colors duration-300 ${isActive ? 'text-primary' : ''}`,
            }, item.name)
          ),
          React.createElement(
            'div',
            { className: 'flex justify-center space-x-6 mt-4 pt-4 border-t border-gray-700' },
            React.createElement(SocialMediaLinks, { iconClass: 'text-2xl' })
          )
        )
      )
  );
};

export default Header;