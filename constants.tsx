import React from 'react';
import { NavItem, SocialLink, BlogPost, ServiceItem, FAQItem, SeoData } from './types';

// Icons for social media
const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return React.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      ...props,
    },
    React.createElement('path', {
      d: 'M12 2C6.477 2 2 6.477 2 12c0 5.016 3.655 9.177 8.441 9.914V14.12h-2.905V12h2.905v-2.12c0-2.887 1.761-4.47 4.346-4.47 1.246 0 2.316.091 2.628.132v2.872h-1.704c-1.348 0-1.61.64-1.61 1.579V12h3.218l-.519 2.12h-2.699v7.794C18.345 21.177 22 17.016 22 12c0-5.523-4.477-10-10-10z',
    }),
  );
};

const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return React.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      ...props,
    },
    React.createElement('path', {
      d: 'M22.46 6c-.77.34-1.6.56-2.46.69.88-.53 1.56-1.37 1.88-2.37-.82.49-1.74.84-2.72 1.02C18.23 4.3 17.11 4 15.97 4c-2.36 0-4.29 1.93-4.29 4.3 0 .34.04.67.11.98-3.57-.18-6.73-1.89-8.85-4.49-.37.64-.58 1.38-.58 2.17 0 1.49.76 2.81 1.92 3.59-.7-.02-1.35-.21-1.92-.53v.05c0 2.09 1.48 3.83 3.44 4.22-.36.1-.74.15-1.13.15-.28 0-.55-.03-.82-.08.55 1.71 2.14 2.95 4.02 2.98-1.47 1.15-3.32 1.83-5.33 1.83-.35 0-.69-.02-1.03-.06 1.9 1.22 4.15 1.92 6.6 1.92 7.92 0 12.27-6.57 12.27-12.28 0-.19-.01-.38-.01-.56.84-.6 1.57-1.36 2.14-2.22z',
    }),
  );
};

const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return React.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      ...props,
    },
    React.createElement('rect', {
      width: '24',
      height: '24',
      rx: '4.8',
      ry: '4.8',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
    }),
    React.createElement('circle', {
      cx: '12',
      cy: '12',
      r: '5',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
    }),
    React.createElement('circle', { cx: '17.5', cy: '6.5', r: '1.5' }),
  );
};

// General Company Information
export const COMPANY_NAME = 'F-Secure Customer Support';
export const PHONE_NUMBER = '+1 (510)-370-1986';
export const SUPPORT_EMAIL = 'support@fsecure.com';
export const COMPANY_ADDRESS = '123 Support Lane, Tech City, CA 90210, USA';

// Navigation Items
export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact Us', path: '/contact' },
];

// Social Media Links
export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Facebook', url: 'https://facebook.com/fsecure', icon: React.createElement(FacebookIcon) },
  { name: 'Twitter', url: 'https://twitter.com/fsecure', icon: React.createElement(TwitterIcon) },
  { name: 'Instagram', url: 'https://instagram.com/fsecure', icon: React.createElement(InstagramIcon) },
];

// Placeholder Blog Posts
export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'installation-guide-fsecure',
    title: `F-Secure Installation Guide: Quick Steps for Seamless Setup - Call +1 (510)-370-1986`,
    shortTitle: 'F-Secure Installation Guide',
    metaDescription: 'A comprehensive guide to installing F-Secure products. Follow these quick steps for a seamless setup. For further assistance, call +1 (510)-370-1986.',
    keywords: 'F-Secure installation, setup guide, install F-Secure, antivirus setup, +1 (510)-370-1986',
    date: '2023-10-26',
    author: 'F-Secure Support Team',
    imageUrl: 'https://picsum.photos/800/400?random=1',
    content: [
      `Welcome to your ultimate guide for installing F-Secure products! Whether you're setting up F-Secure SAFE, TOTAL, or any other security solution, this guide will walk you through the process step-by-step. Our goal is to make your installation as smooth as possible, ensuring you get the protection you need without any hassle.`,
      `Before you begin, make sure your computer meets the system requirements for your specific F-Secure product. It’s also a good idea to uninstall any other antivirus software to prevent conflicts.`,
      `**Step 1: Download the Installer**`,
      `Log in to your My F-Secure account. If you don't have an account, you'll need to create one using the email address associated with your subscription. Once logged in, navigate to the 'Add device' section and select the appropriate platform (Windows, Mac, Android, iOS). Download the installer file to your computer.`,
      `**Step 2: Run the Installer**`,
      `Locate the downloaded file (usually in your 'Downloads' folder) and double-click it to start the installation. You might be prompted to allow the application to make changes to your device; click 'Yes' to proceed.`,
      `**Step 3: Follow On-Screen Instructions**`,
      `The F-Secure installer will guide you through the remaining steps. This typically involves accepting the End-User License Agreement, selecting an installation location (if prompted), and allowing the software to install necessary components. The installation process usually takes a few minutes, depending on your system's speed.`,
      `**Step 4: Activate Your Subscription**`,
      `After the installation is complete, the F-Secure application will open automatically. It will prompt you to log in to your My F-Secure account to activate your subscription. Enter your credentials, and your product should be activated. If you face any issues, our support team at +1 (510)-370-1986 is ready to help!`,
      `**Step 5: Update and Scan**`,
      `Once activated, F-Secure will automatically download the latest virus definitions. It's recommended to run a full system scan after installation to ensure your system is clean from any pre-existing threats.`,
      `And that's it! Your F-Secure product is now installed and protecting your device. If you encountered any difficulties at any point, don't hesitate to reach out to our expert support team at **+1 (510)-370-1986**. We're here to ensure your security experience is flawless.`,
    ],
  },
  {
    id: '2',
    slug: 'troubleshooting-fsecure-login',
    title: `Troubleshooting F-Secure Login Issues: Get Access Now - Call +1 (510)-370-1986`,
    shortTitle: 'Troubleshooting F-Secure Login',
    metaDescription: 'Experiencing F-Secure login problems? Learn common fixes for forgotten passwords, account lockouts, and more. Call +1 (510)-370-1986 for immediate help.',
    keywords: 'F-Secure login issue, login problem, forgotten password F-Secure, account lockout, +1 (510)-370-1986',
    date: '2023-11-01',
    author: 'F-Secure Support Team',
    imageUrl: 'https://picsum.photos/800/400?random=2',
    content: [
      `Having trouble logging into your My F-Secure account or the F-Secure application? Don't worry, it's a common issue, and we're here to help you get back online. This guide covers the most frequent login problems and provides solutions. If these steps don't resolve your issue, our dedicated support team is just a call away at **+1 (510)-370-1986**.`,
      `**1. Forgotten Password**`,
      `This is by far the most common reason for login failures.`,
      `*   **Solution:** On the My F-Secure login page, click on "Forgot password?". Enter the email address associated with your account, and follow the instructions sent to your email to reset your password. Remember to check your spam/junk folder if you don't receive the email within a few minutes.`,
      `**2. Incorrect Email Address**`,
      `Sometimes, we simply type the wrong email or use an old one.`,
      `*   **Solution:** Double-check the email address you are using. Make sure there are no typos, extra spaces, or incorrect domains (e.g., '.com' instead of '.net'). Try logging in with any other email addresses you might have used to register for F-Secure.`,
      `**3. Account Lockout**`,
      `Repeated failed login attempts can temporarily lock your account for security reasons.`,
      `*   **Solution:** Wait for a few minutes (usually 15-30 minutes) and try again. Ensure you are using the correct credentials. If the problem persists, try resetting your password as described in point 1.`,
      `**4. Browser Issues (Cache & Cookies)**`,
      `Corrupted browser cache or cookies can interfere with login processes.`,
      `*   **Solution:** Clear your browser's cache and cookies. Try logging in again. If that doesn't work, try using a different web browser or access My F-Secure in incognito/private mode.`,
      `**5. Internet Connection Problems**`,
      `A stable internet connection is essential for accessing online services.`,
      `*   **Solution:** Verify your internet connection is working correctly. Try opening other websites to confirm. If your connection is unstable, try restarting your router/modem.`,
      `If you've gone through these steps and are still unable to log in, please don't hesitate to contact our expert support specialists. Call us directly at **+1 (510)-370-1986** for personalized assistance. We're available to help you regain access to your F-Secure account swiftly.`,
    ],
  },
  {
    id: '3',
    slug: 'fsecure-subscription-renewal',
    title: `F-Secure Subscription Renewal: Manage Your Protection - Call +1 (510)-370-1986`,
    shortTitle: 'F-Secure Subscription Renewal',
    metaDescription: 'Manage your F-Secure subscription renewal easily. Find out how to renew, update payment details, and avoid service interruptions. For help, call +1 (510)-370-1986.',
    keywords: 'F-Secure renewal, subscription management, update payment, F-Secure expired, renew antivirus, +1 (510)-370-1986',
    date: '2023-11-08',
    author: 'F-Secure Support Team',
    imageUrl: 'https://picsum.photos/800/400?random=3',
    content: [
      `Keeping your F-Secure protection active is crucial for staying safe online. This guide will help you understand and manage your F-Secure subscription renewal, update payment methods, and ensure uninterrupted security. Should you face any challenges, our support team is ready to assist you at **+1 (510)-370-1986**.`,
      `**Understanding Automatic Renewal**`,
      `Most F-Secure subscriptions are set to renew automatically by default. This ensures continuous protection without any gaps. You'll typically receive email notifications before your subscription is due to renew, reminding you of the upcoming charge.`,
      `**How to Check Your Renewal Status and Date**`,
      `1.  **Log in to My F-Secure:** Go to my.f-secure.com and log in with your account credentials.`,
      `2.  **Navigate to Subscriptions:** Once logged in, you should see an overview of your subscriptions. Here you can view your product, the number of protected devices, and the renewal date.`,
      `**Updating Payment Information**`,
      `If your credit card has expired or you wish to use a different payment method for renewal:`,
      `1.  **Access Payment Details:** In your My F-Secure account, look for a section related to 'Subscription', 'Billing', or 'Payment Details'.`,
      `2.  **Edit/Add Payment Method:** You will find options to edit your existing credit card information or add a new one. Ensure all details are correct and save the changes. Updating your payment details well before the renewal date prevents any service interruption.`,
      `**Manual Renewal (If Automatic Renewal is Off)**`,
      `If you've turned off automatic renewal or it failed due to an issue:`,
      `1.  **Purchase a New Subscription:** You can purchase a new subscription directly from the F-Secure website or through your My F-Secure account.`,
      `2.  **Activate New Key:** If you receive a new subscription key, you'll need to enter it into your F-Secure product or My F-Secure account to activate the new term.`,
      `**Troubleshooting Renewal Issues**`,
      `*   **Payment Failure:** If your automatic renewal failed, check your payment method in My F-Secure. Ensure funds are available and try updating the payment details.`,
      `*   **Expired Protection:** If your protection has expired, your devices are vulnerable. Renew immediately!`,
      `For any questions regarding your subscription, payment, or renewal, our friendly customer support team is here to help. Call **+1 (510)-370-1986** for expert assistance. We'll make sure your F-Secure protection stays up-to-date and your devices remain secure.`,
    ],
  },
];

// Service Items
export const SERVICE_ITEMS: ServiceItem[] = [
  {
    title: 'Installation Assistance',
    description: 'Expert help with installing F-Secure software on any device. We ensure a smooth and error-free setup process.',
    icon: React.createElement(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        className: 'h-8 w-8 text-primary',
        fill: 'none',
        viewBox: '0 0 24 24',
        stroke: 'currentColor',
        strokeWidth: '2',
      },
      React.createElement('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        d: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
      }),
    ),
  },
  {
    title: 'Reactivation Support',
    description: 'Guide you through the reactivation process of your F-Secure products after reinstallation or system changes.',
    icon: React.createElement(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        className: 'h-8 w-8 text-primary',
        fill: 'none',
        viewBox: '0 0 24 24',
        stroke: 'currentColor',
        strokeWidth: '2',
      },
      React.createElement('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        d: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004 12c0 1.577.492 3.07 1.383 4.316m5.242-1.892a.75.75 0 01.996.166l.034.041.002.002.006.007.01.012a.75.75 0 01-.166.996l-.041.034-.002.002-.007.006-.012.01-.2.162a.75.75 0 01-.65-.176l-.04-.031a.75.75 0 01-.166-.996l.034-.041.002-.002.006-.007.01-.012.2-.162a.75.75 0 01.65-.176l.04-.031m.034-.041a.75.75 0 01.996.166l.034.041.002.002.006.007.01.012a.75.75 0 01-.166.996l-.041.034-.002.002-.007.006-.012.01-.2.162a.75.75 0 01-.65-.176l-.04-.031a.75.75 0 01-.166-.996l.034-.041.002-.002.006-.007.01-.012.2-.162a.75.75 0 01.65-.176l.04-.031m.034-.041a.75.75 0 01.996.166l.034.041.002.002.006.007.01.012a.75.75 0 01-.166.996l-.041.034-.002.002-.007.006-.012.01-.2.162a.75.75 0 01-.65-.176l-.04-.031a.75.75 0 01-.166-.996l.034-.041.002-.002.006-.007.01-.012.2-.162a.75.75 0 01.65-.176l.04-.031m.034-.041a.75.75 0 01.996.166l.034.041.002.002.006.007.01.012a.75.75 0 01-.166.996l-.041.034-.002.002-.007.006-.012.01-.2.162a.75.75 0 01-.65-.176l-.04-.031a.75.75 0 01-.166-.996l.034-.041.002-.002.006-.007.01-.012.2-.162a.75.75 0 01.65-.176l.04-.031m-1.782-3.642a8.001 8.001 0 0011.085-3.048c.891-1.246 1.383-2.739 1.383-4.316h-.582V4m-22 8c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z',
      }),
    ),
  },
  {
    title: 'Login & Account Issues',
    description: 'Resolving forgotten passwords, account lockouts, and other login-related difficulties quickly and securely.',
    icon: React.createElement(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        className: 'h-8 w-8 text-primary',
        fill: 'none',
        viewBox: '0 0 24 24',
        stroke: 'currentColor',
        strokeWidth: '2',
      },
      React.createElement('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        d: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      }),
    ),
  },
  {
    title: 'Subscription & Renewal',
    description: 'Assistance with subscription renewals, upgrades, cancellations, and management of your F-Secure products.',
    icon: React.createElement(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        className: 'h-8 w-8 text-primary',
        fill: 'none',
        viewBox: '0 0 24 24',
        stroke: 'currentColor',
        strokeWidth: '2',
      },
      React.createElement('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      }),
    ),
  },
  {
    title: 'Credit Card & Billing',
    description: 'Secure support for updating credit card information, resolving billing discrepancies, and payment issues.',
    icon: React.createElement(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        className: 'h-8 w-8 text-primary',
        fill: 'none',
        viewBox: '0 0 24 24',
        stroke: 'currentColor',
        strokeWidth: '2',
      },
      React.createElement('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        d: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
      }),
    ),
  },
  {
    title: 'General Technical Support',
    description: 'Comprehensive help for any F-Secure related technical issue, from performance concerns to error messages.',
    icon: React.createElement(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        className: 'h-8 w-8 text-primary',
        fill: 'none',
        viewBox: '0 0 24 24',
        stroke: 'currentColor',
        strokeWidth: '2',
      },
      React.createElement('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        d: 'M8 9l3 3m0 0l3-3m-3 3v9m-3-3h6m-9-9h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z',
      }),
    ),
  },
];

// FAQ Items
export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How do I install F-Secure SAFE on my new device?',
    answer: 'You can install F-Secure SAFE by logging into your My F-Secure account, selecting "Add device", and following the on-screen instructions. If you encounter any issues, please call us at ' + PHONE_NUMBER + '.',
  },
  {
    question: 'I forgot my My F-Secure account password. What should I do?',
    answer: 'On the My F-Secure login page, click on "Forgot password?". Enter your registered email address, and you will receive instructions to reset your password. For immediate assistance, dial ' + PHONE_NUMBER + '.',
  },
  {
    question: 'My F-Secure subscription is about to expire. How do I renew it?',
    answer: 'Most subscriptions renew automatically. You can check your renewal status and update payment details in your My F-Secure account under the "Subscription" or "Billing" section. Contact us at ' + PHONE_NUMBER + ' for help with renewals.',
  },
  {
    question: 'How can I update my credit card details for F-Secure subscription?',
    answer: 'Log in to your My F-Secure account, navigate to "Subscription" or "Payment Details", and you will find options to update your credit card information. Ensure the new details are saved correctly. If you need assistance, call ' + PHONE_NUMBER + '.',
  },
  {
    question: 'I am experiencing an error during F-Secure software update. Can you help?',
    answer: 'Absolutely! Our technical support team can troubleshoot update errors. Please provide us with the error message and any relevant details when you call us at ' + PHONE_NUMBER + '.',
  },
  {
    question: 'What information do I need to have ready when I call customer support?',
    answer: 'To help us assist you faster, please have your F-Secure product key, your My F-Secure account email, and a brief description of your issue ready when you call ' + PHONE_NUMBER + '.',
  },
  {
    question: 'Can I cancel my F-Secure subscription?',
    answer: 'Yes, you can manage your subscription settings, including cancellation, through your My F-Secure account. For detailed guidance or if you face any issues, our support team at ' + PHONE_NUMBER + ' can walk you through the process.',
  },
];

// SEO Data for Main Pages (placeholders - ideally this would be dynamic)
export const HOME_SEO: SeoData = {
  title: 'F-Secure Customer Support: Fast & Reliable Help | ' + PHONE_NUMBER,
  description: 'F-Secure provides fast and reliable customer support for installation, login issues, subscription renewals, and more. Get expert assistance by calling ' + PHONE_NUMBER + '.',
  keywords: 'F-Secure support, F-Secure customer service, installation help, login issues, subscription renewal, antivirus support, ' + PHONE_NUMBER,
};

export const ABOUT_SEO: SeoData = {
  title: 'About F-Secure Customer Support: Our Mission & Values | ' + PHONE_NUMBER,
  description: 'Learn about F-Secure Customer Support, our mission to provide top-notch service, and our commitment to resolving your technical issues promptly. Contact us at ' + PHONE_NUMBER + '.',
  keywords: 'About F-Secure, F-Secure mission, customer-first, support values, technical assistance, ' + PHONE_NUMBER,
};

export const SERVICES_SEO: SeoData = {
  title: 'F-Secure Support Services: Installation, Login, Renewal & More | ' + PHONE_NUMBER,
  description: 'Explore the comprehensive support services offered by F-Secure, including help with installation, reactivation, login problems, subscription management, and credit card updates. Call ' + PHONE_NUMBER + '.',
  keywords: 'F-Secure services, technical support, installation support, reactivation help, login assistance, subscription help, billing support, ' + PHONE_NUMBER,
};

export const BLOG_SEO: SeoData = {
  title: 'F-Secure Blog: Tips, Guides & Troubleshooting | ' + PHONE_NUMBER,
  description: 'Read the latest F-Secure blog posts for helpful tips, detailed guides, and troubleshooting solutions for common product issues. Get expert advice and call ' + PHONE_NUMBER + ' for personalized support.',
  keywords: 'F-Secure blog, tech tips, troubleshooting F-Secure, security guides, F-Secure articles, ' + PHONE_NUMBER,
};

export const FAQ_SEO: SeoData = {
  title: 'F-Secure FAQ: Frequently Asked Questions & Answers | ' + PHONE_NUMBER,
  description: 'Find answers to frequently asked questions about F-Secure products, installations, subscriptions, and common technical issues. For more help, contact our support at ' + PHONE_NUMBER + '.',
  keywords: 'F-Secure FAQ, common questions, F-Secure help, troubleshooting, installation FAQ, renewal FAQ, ' + PHONE_NUMBER,
};

export const CONTACT_SEO: SeoData = {
  title: 'Contact F-Secure Customer Support: Get In Touch | ' + PHONE_NUMBER,
  description: 'Contact F-Secure Customer Support for quick assistance with your technical issues. Reach us via phone at ' + PHONE_NUMBER + ' or through our online inquiry form.',
  keywords: 'Contact F-Secure, F-Secure phone number, customer support, technical assistance, inquiry form, ' + PHONE_NUMBER,
};