'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react';
import { getWhatsAppUrl, siteConfig } from '@/lib/site-config';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/courses', label: 'Courses' },
  { href: '/universities', label: 'Universities' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[#E3E5EC] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Kasat Virtual College of Education - Home">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 shrink-0">
              <Image
                src="/images/branding/kvce-logo.jpg"
                alt="KVCE Logo"
                fill
                className="object-contain rounded-full"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-[#101F49] font-bold text-sm lg:text-base leading-tight">
                Kasat Virtual College
              </div>
              <div className="text-[#101F49] font-bold text-sm lg:text-base leading-tight">
                of Education
              </div>
              <div className="text-[#A20D65] text-xs font-medium">
                Educating Since 1999
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#26324A] hover:text-[#A20D65] font-medium text-sm transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A20D65] group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
          </nav>

          {/* WhatsApp CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-btn"
              className="flex items-center gap-2 bg-[#A20D65] hover:bg-[#650D50] text-white px-4 py-2.5 rounded text-sm font-semibold transition-colors duration-200"
            >
              <MessageCircle size={16} />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#101F49] hover:text-[#A20D65] transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#E3E5EC] bg-white shadow-lg" id="mobile-nav">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-[#26324A] hover:text-[#A20D65] hover:bg-[#F7F7FA] rounded font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#E3E5EC]">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-whatsapp-btn"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#A20D65] hover:bg-[#650D50] text-white px-4 py-3 rounded text-sm font-semibold transition-colors duration-200 w-full"
              >
                <MessageCircle size={16} />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
