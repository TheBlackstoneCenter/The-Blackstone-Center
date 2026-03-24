import Link from 'next/link';
import Navigation from './Navigation';
import { SITE_NAME } from '@/utils/constants';

/**
 * Site-wide header with logo and navigation.
 * Place logo.png in public/images/ to display the logo.
 */
export default function Header() {
  return (
    <header className="bg-dark-navy text-white shadow-md">
      <div className="container-wide flex items-center justify-between py-4">
        {/* Logo / Site name */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          {/* Placeholder circle shown until logo.png is added to public/images/ */}
          <div className="w-12 h-12 flex-shrink-0 bg-primary-green rounded-full flex items-center justify-center text-white font-serif font-bold text-lg">
            B
          </div>
          <span className="text-xl font-serif tracking-wide">{SITE_NAME}</span>
        </Link>

        {/* Main navigation */}
        <Navigation />
      </div>
    </header>
  );
}
