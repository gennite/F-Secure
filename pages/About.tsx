import React from 'react';
import CallToAction from '../components/CallToAction';
import SEO from '../components/SEO';
import { ABOUT_SEO, COMPANY_NAME, PHONE_NUMBER } from '../constants';

const About: React.FC = () => {
  return (
    <>
      <SEO data={ABOUT_SEO} />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          About {COMPANY_NAME}
        </h1>

        {/* Section 1: Our Mission */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://picsum.photos/600/400?random=8"
                alt="Our Mission"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission: Your Seamless Security Experience</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At {COMPANY_NAME}, our mission is simple: to empower F-Secure users with unparalleled technical support, ensuring their digital lives remain secure, uninterrupted, and hassle-free. We understand that navigating software installations, subscription management, and troubleshooting can be daunting. That's why we've assembled a team of dedicated experts committed to providing clear, concise, and effective solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                We strive to be more than just a support line; we aim to be your trusted partner in digital security, always ready to lend a helping hand.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Our Values */}
        <section className="bg-gray-50 py-16 px-6 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002.944 12c0 2.893 1.146 5.617 3.04 7.618m0 0C7.617 20.854 10.341 22 12 22s4.383-1.146 6.04-3.04m-8.618-8.618l.89.89m-1.414 1.414l-.89-.89m-.89.89l.89-.89m1.414-1.414l-.89.89M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliability</h3>
              <p className="text-gray-600">You can count on us for consistent and trustworthy support every time.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Efficiency</h3>
              <p className="text-gray-600">We work swiftly to diagnose and resolve your issues, minimizing your downtime.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 10a6 6 0 00-12 0v5a2 2 0 002 2h8a2 2 0 002-2v-5zM12 2a4 4 0 00-4 4v2a4 4 0 008 0V6a4 4 0 00-4-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Empathy</h3>
              <p className="text-gray-600">Our support is delivered with understanding, patience, and a friendly attitude.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Our Team */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://picsum.photos/600/400?random=9"
                alt="Our Expert Team"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Expert Support Team</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Behind every successful resolution is our team of highly trained and passionate technical support specialists. Each member is rigorously trained on all F-Secure products and stays updated with the latest security advancements. We're not just problem-solvers; we're educators, here to guide you through your concerns and provide you with the knowledge to manage your security effectively.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                We believe in a customer-first approach, ensuring that every interaction is respectful, helpful, and ultimately, resolves your issue.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need Help Now?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Our dedicated team is ready to assist you with any F-Secure related issue. Get in touch for reliable and efficient support.
          </p>
          <CallToAction className="bg-white inline-block px-8 py-6" isLarge={false} />
        </section>
      </div>
    </>
  );
};

export default About;