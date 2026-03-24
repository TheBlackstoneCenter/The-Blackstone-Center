/**
 * Site-wide constants for The Blackstone Center
 */

export const SITE_NAME = 'The Blackstone Center';
export const SITE_DESCRIPTION =
  'The William E. Blackstone Center — dedicated to scholarship, research, and publication in the fields of theology, history, and culture.';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

/** Primary navigation links for The Blackstone Center */
export const MAIN_NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Publications', href: '/publications' },
  { label: 'Blog', href: '/blog' },
  { label: 'Beauty for Ashes', href: '/beauty-for-ashes' },
];

/** About sub-navigation */
export const ABOUT_NAV_LINKS = [
  { label: 'William E. Blackstone', href: '/about/william-e-blackstone' },
  { label: 'The Blackstone Forest', href: '/about/blackstone-forest' },
  { label: 'The Center', href: '/about/the-center' },
  { label: 'About Us', href: '/about/about-us' },
  { label: 'Paul W. Rood', href: '/about/paul-rood' },
  { label: 'Judith Mendelson Rood', href: '/about/judith-rood' },
];

/** Beauty for Ashes sub-navigation */
export const BEAUTY_FOR_ASHES_NAV_LINKS = [
  { label: 'Home', href: '/beauty-for-ashes' },
  { label: 'About the Book', href: '/beauty-for-ashes/about' },
  { label: 'Photos', href: '/beauty-for-ashes/photos' },
  { label: 'Endorsements', href: '/beauty-for-ashes/endorsements' },
  { label: 'Reviews', href: '/beauty-for-ashes/reviews' },
  { label: 'Table of Contents', href: '/beauty-for-ashes/table-of-contents' },
  { label: 'Excerpt', href: '/beauty-for-ashes/excerpt' },
  { label: 'About the Author', href: '/beauty-for-ashes/about-the-author' },
  { label: 'Blog', href: '/beauty-for-ashes/blog' },
  { label: 'Contact the Author', href: '/beauty-for-ashes/contact' },
];

/** Brand colors (mirrors tailwind.config.js for use in JS) */
export const COLORS = {
  primaryGreen: '#4a7c59',
  cream: '#f5f1e8',
  white: '#ffffff',
  darkNavy: '#1a2f4a',
  gold: '#d4a574',
};
