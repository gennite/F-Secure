import React, { useState } from 'react';
import CallToAction from '../components/CallToAction';
import SEO from '../components/SEO';
import { FAQ_SEO, FAQ_ITEMS, PHONE_NUMBER } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEO data={FAQ_SEO} />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto mb-16">
          Find quick answers to common questions about F-Secure installations, login issues, subscriptions, billing, and general technical support.
        </p>

        <section className="max-w-3xl mx-auto space-y-4 mb-16">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-6 text-left text-lg font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none"
                onClick={() => toggleAnswer(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{item.question}</span>
                <span>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : 'text-gray-500'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-6 text-gray-700 bg-gray-50 border-t border-gray-100 animate-fadeIn"
                >
                  <p className="mt-4">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Still Have Questions? We're Here to Help!
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            If you couldn't find the answer you were looking for, our expert support team is available to provide personalized assistance.
          </p>
          <CallToAction className="bg-white inline-block px-8 py-6" isLarge={false} />
        </section>
      </div>
    </>
  );
};

export default FAQ;