import React, { useEffect } from 'react';
import { SeoData } from '../types';

interface SEOProps {
  data: SeoData;
}

const SEO: React.FC<SEOProps> = ({ data }) => {
  useEffect(() => {
    // Update the document title
    document.title = data.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', data.description);

    // Update meta keywords (though less impactful for modern SEO, still good practice)
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', data.keywords);

    // Clean up if component unmounts (though unlikely in an SPA where this might be global)
    return () => {
      // Potentially reset to a default title or remove dynamic metas
      // For a persistent SPA, often the last SEO update persists until next page load
    };
  }, [data]); // Rerun effect if data changes

  return null; // This component doesn't render anything visible
};

export default SEO;
