import React from 'react';
import CallToAction from '../components/CallToAction';
import SEO from '../components/SEO';
import { SERVICES_SEO, SERVICE_ITEMS, PHONE_NUMBER } from '../constants';

const Services: React.FC = () => {
  return (
    <>
      <SEO data={SERVICES_SEO} />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          Our Comprehensive Support Services
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto mb-16">
          At F-Secure Customer Support, we offer a wide range of services designed to address every aspect of your F-Secure product experience. Our expert team is here to provide fast, reliable, and friendly assistance.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICE_ITEMS.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="flex justify-center mb-4 text-primary">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </section>

        {/* Testimonials or Assurance Section */}
        <section className="bg-blue-50 py-12 px-6 rounded-lg shadow-md text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Committed to Your Digital Peace of Mind
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            Our certified technicians are not just solving problems; they're ensuring your F-Secure protection runs smoothly, keeping your digital life secure and worry-free. Experience the difference of dedicated support.
          </p>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready for Fast and Reliable Support?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Don't hesitate to reach out for any F-Secure related issue. Our team is standing by to provide the expert help you deserve.
          </p>
          <CallToAction className="bg-white inline-block px-8 py-6" isLarge={false} />
        </section>
      </div>
    </>
  );
};

export default Services;