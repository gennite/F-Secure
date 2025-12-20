import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import SEO from '../components/SEO';
import { BLOG_POSTS, PHONE_NUMBER, HOME_SEO } from '../constants'; // Import HOME_SEO for fallback

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState(BLOG_POSTS.find(p => p.slug === slug));

  useEffect(() => {
    // Attempt to find the post on initial load or slug change
    const foundPost = BLOG_POSTS.find(p => p.slug === slug);
    if (foundPost) {
      setPost(foundPost);
    } else {
      // If post not found, redirect to blog or home
      navigate('/blog');
    }
  }, [slug, navigate]);

  if (!post) {
    // This state should ideally be brief as useEffect will redirect
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Loading or Redirecting...</h1>
      </div>
    );
  }

  // Use specific SEO data for the blog post, or fallback if none is defined (shouldn't happen with our constants)
  const postSEO = {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
  };

  return (
    <>
      <SEO data={postSEO} />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <article className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {post.shortTitle}
          </h1>
          <p className="text-gray-600 text-sm mb-4 border-b pb-4">
            By <span className="font-semibold">{post.author}</span> on <span className="font-semibold">{post.date}</span>
          </p>

          <img
            src={post.imageUrl}
            alt={post.shortTitle}
            className="w-full h-auto rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
            {post.content.map((paragraph, index) => (
              <p key={index} className="mb-6" dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need more help with F-Secure?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              If this article didn't quite solve your issue, our expert support team is ready to provide personalized assistance.
            </p>
            <CallToAction className="bg-gray-50 inline-block px-8 py-6" isLarge={false} />
          </div>
        </article>

        {/* Back to blog link */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center text-primary hover:text-blue-700 transition-colors duration-300 font-semibold text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Blog Posts
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogPost;