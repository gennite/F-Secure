import React from 'react';
import { NavLink } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import SEO from '../components/SEO';
import { BLOG_SEO, BLOG_POSTS, PHONE_NUMBER } from '../constants';

const Blog: React.FC = () => {
  return (
    <>
      <SEO data={BLOG_SEO} />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          F-Secure Support Blog
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto mb-16">
          Discover helpful guides, troubleshooting tips, and expert insights to make the most of your F-Secure products. Find solutions to common issues and enhance your digital security knowledge.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img className="w-full h-48 object-cover" src={post.imageUrl} alt={post.shortTitle} />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  <NavLink to={`/blog/${post.slug}`} className="hover:text-primary transition-colors duration-300">
                    {post.shortTitle}
                  </NavLink>
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  By {post.author} on {post.date}
                </p>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {post.metaDescription}
                </p>
                <NavLink to={`/blog/${post.slug}`} className="text-primary hover:underline font-semibold">
                  Read More &rarr;
                </NavLink>
              </div>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Still Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Our blog covers many topics, but for personalized assistance, our support team is always ready to help.
          </p>
          <CallToAction className="bg-white inline-block px-8 py-6" isLarge={false} />
        </section>
      </div>
    </>
  );
};

export default Blog;