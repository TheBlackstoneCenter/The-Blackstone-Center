'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MAIN_NAV_LINKS, ABOUT_NAV_LINKS } from '@/utils/constants';

/**
 * Primary navigation bar for The Blackstone Center.
 * Includes an "About" dropdown and a mobile-friendly toggle.
 */
export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <nav aria-label="Main navigation">
      {/* Desktop navigation */}
      <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
        {MAIN_NAV_LINKS.map((link) => {
          if (link.label === 'About') {
            return (
              <li key={link.href} className="relative group">
                <button
                  className="text-white/90 hover:text-gold transition-colors font-medium flex items-center gap-1"
                  aria-expanded={aboutOpen}
                  onClick={() => setAboutOpen((prev) => !prev)}
                >
                  About
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* About dropdown */}
                <ul
                  className={`absolute left-0 top-full mt-2 bg-dark-navy border border-white/10 rounded shadow-lg min-w-56 z-50 ${
                    aboutOpen ? 'block' : 'hidden'
                  }`}
                >
                  {ABOUT_NAV_LINKS.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        className="block px-4 py-2 text-white/80 hover:text-gold hover:bg-white/5 transition-colors text-sm"
                        onClick={() => setAboutOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          }

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white/90 hover:text-gold transition-colors font-medium"
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile menu toggle */}
      <button
        className="md:hidden text-white p-2"
        aria-label="Toggle menu"
        onClick={() => setMobileOpen((prev) => !prev)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark-navy border-t border-white/10 z-50 shadow-lg">
          <ul className="list-none m-0 p-4 flex flex-col gap-2">
            {MAIN_NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-3 py-2 text-white/90 hover:text-gold transition-colors font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* About sub-links on mobile */}
            <li>
              <p className="px-3 pt-2 text-white/40 text-xs uppercase tracking-wider">About</p>
              <ul className="list-none m-0 p-0">
                {ABOUT_NAV_LINKS.map((sub) => (
                  <li key={sub.href}>
                    <Link
                      href={sub.href}
                      className="block px-6 py-1.5 text-white/70 hover:text-gold transition-colors text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
