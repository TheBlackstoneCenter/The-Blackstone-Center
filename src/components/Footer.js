import Link from 'next/link';
import { SITE_NAME, MAIN_NAV_LINKS } from '@/utils/constants';

/**
 * Site-wide footer for The Blackstone Center.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-navy text-white/80 py-10 mt-auto">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand column */}
          <div>
            <h3 className="font-serif text-white text-lg mb-3">{SITE_NAME}</h3>
            <p className="text-sm leading-relaxed text-white/60">
              Dedicated to scholarship, research, and publication in theology,
              history, and culture.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-2">
              {MAIN_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <p className="text-sm text-white/60">
              For inquiries, please use the contact form on our website.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/40">
          &copy; {currentYear} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
