import React from 'react';
import { NavLink } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import SEO from '../components/SEO';
import { HOME_SEO, PHONE_NUMBER, SERVICE_ITEMS } from '../constants';

const Home: React.FC = () => {
  return (
    <>
      <SEO data={HOME_SEO} />
      <div className="min-h-[calc(100vh-160px)]"> {/* Adjust based on Header/Footer height */}
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32 text-center relative overflow-hidden">
          {/* Background shapes for visual interest */}
          <div className="absolute inset-0 z-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="#ffffff" fillOpacity="0.1" d="M0,192L80,192C160,192,320,192,480,186.7C640,181,800,171,960,176C1120,181,1280,203,1360,213.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
              <path fill="#ffffff" fillOpacity="0.05" d="M0,256L80,240C160,224,320,192,480,186.7C640,181,800,203,960,213.3C1120,224,1280,224,1360,224L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Your F-Secure Issues? <br className="hidden sm:inline" /> Solved.
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Dedicated customer support for seamless installation, login, renewals, and all technical assistance for your F-Secure products.
            </p>
            <CallToAction className="bg-white text-gray-800 inline-block px-8 py-6" isLarge={true} />
            <p className="mt-8 text-lg font-semibold">
              Or explore our services below to find specific help.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              How We Can Help You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICE_ITEMS.slice(0, 3).map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <NavLink
                to="/services"
                className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300 text-lg"
              >
                View All Services
              </NavLink>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Trust F-Secure Customer Support?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At F-Secure Customer Support, we prioritize your peace of mind. Our team of certified experts is dedicated to providing swift, effective, and friendly assistance for all your F-Secure product needs. From complex installations to billing inquiries, we're here to ensure your digital security is always seamless.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                <li><span className="font-semibold">Expert Technicians:</span> Certified professionals ready to assist.</li>
                <li><span className="font-semibold">Fast Resolution:</span> Quick solutions to get you back on track.</li>
                <li><span className="font-semibold">24/7 Availability:</span> Help is just a call away, anytime.</li>
                <li><span className="font-semibold">Customer-First Approach:</span> Your satisfaction is our priority.</li>
              </ul>
              <NavLink
                to="/about"
                className="bg-darkbg text-white font-bold py-3 px-8 rounded-full hover:bg-gray-700 transition-colors duration-300 text-lg"
              >
                Learn More About Us
              </NavLink>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://picsum.photos/600/400?random=4"
                alt="Customer Support"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Featured Blog Posts (mini-section) */}
        <section className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Latest from Our Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Using placeholder images for blog posts */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img className="w-full h-48 object-cover" src="https://picsum.photos/600/300?random=5" alt="Blog Post 1" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <NavLink to="/blog/installation-guide-fsecure" className="hover:text-primary transition-colors duration-300">
                      Seamless F-Secure Installation
                    </NavLink>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">October 26, 2023</p>
                  <p className="text-gray-700 mb-4">
                    Learn the quick and easy steps to install your F-Secure product without a hitch.
                  </p>
                  <NavLink to="/blog/installation-guide-fsecure" className="text-primary hover:underline font-semibold">
                    Read More &rarr;
                  </NavLink>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img className="w-full h-48 object-cover" src="https://picsum.photos/600/300?random=6" alt="Blog Post 2" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <NavLink to="/blog/troubleshooting-fsecure-login" className="hover:text-primary transition-colors duration-300">
                      Fixing F-Secure Login Issues
                    </NavLink>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">November 1, 2023</p>
                  <p className="text-gray-700 mb-4">
                    Troubleshoot common login problems and get back into your account swiftly.
                  </p>
                  <NavLink to="/blog/troubleshooting-fsecure-login" className="text-primary hover:underline font-semibold">
                    Read More &rarr;
                  </NavLink>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img className="w-full h-48 object-cover" src="https://picsum.photos/600/300?random=7" alt="Blog Post 3" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <NavLink to="/blog/fsecure-subscription-renewal" className="hover:text-primary transition-colors duration-300">
                      Managing F-Secure Renewals
                    </NavLink>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">November 8, 2023</p>
                  <p className="text-gray-700 mb-4">
                    Keep your F-Secure protection active by understanding subscription renewals.
                  </p>
                  <NavLink to="/blog/fsecure-subscription-renewal" className="text-primary hover:underline font-semibold">
                    Read More &rarr;
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <NavLink
                to="/blog"
                className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300 text-lg"
              >
                Explore All Blog Posts
              </NavLink>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="py-16 md:py-24 bg-primary text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Expert F-Secure Support?
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Don't let technical issues slow you down. Our friendly and knowledgeable team is ready to provide the assistance you need, right when you need it.
            </p>
            <CallToAction className="bg-white text-gray-800 inline-block px-8 py-6" isLarge={true} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;