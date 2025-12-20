import React from 'react';
import CallToAction from '../components/CallToAction';
import SEO from '../components/SEO';
import { CONTACT_SEO, COMPANY_ADDRESS, PHONE_NUMBER, SUPPORT_EMAIL } from '../constants';

const Contact: React.FC = () => {
  const telLink = `tel:${PHONE_NUMBER.replace(/\s/g, '')}`;
  const mailtoLink = `mailto:${SUPPORT_EMAIL}`;

  // Placeholder for form submission logic
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you shortly.');
    // In a real application, you would send this data to a backend API
  };

  return (
    <>
      <SEO data={CONTACT_SEO} />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          Contact F-Secure Customer Support
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto mb-16">
          We're here to help you resolve any F-Secure related issues quickly and efficiently. Choose the contact method that works best for you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us an Inquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Regarding my F-Secure installation"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Please describe your issue in detail..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300 w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details & Call to Action */}
          <div className="flex flex-col space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Call Our Support Line</h2>
              <p className="text-lg text-gray-700 mb-4">
                For immediate assistance with any F-Secure product issue, our expert team is ready to help.
              </p>
              <CallToAction className="bg-gray-50 inline-block px-8 py-6" isLarge={true} />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Other Ways to Connect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
                  <p className="text-gray-700">
                    For non-urgent inquiries or detailed support requests, feel free to email us:
                  </p>
                  <a
                    href={mailtoLink}
                    className="block text-primary hover:text-blue-700 font-bold mt-2"
                  >
                    {SUPPORT_EMAIL}
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Address</h3>
                  <p className="text-gray-700">Visit us at our office (by appointment only):</p>
                  <p className="font-semibold text-gray-800 mt-2">{COMPANY_ADDRESS}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;