// Add React import to resolve 'Cannot find namespace React' errors for React.ReactNode types.
import React from 'react';

export interface SeoData {
  title: string;
  description: string;
  keywords: string;
}

export interface NavItem {
  name: string;
  path: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  metaDescription: string;
  keywords: string;
  date: string;
  author: string;
  imageUrl: string;
  content: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}