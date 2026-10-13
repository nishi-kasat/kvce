import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Globe, MessageCircle, Share2, Camera, Play, Briefcase } from 'lucide-react';
import { contactConfig, getWhatsAppUrl, siteConfig } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="bg-[#101F49] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 shrink-0 bg-white rounded-full">
                <Image
                  src="/images/branding/kvce-logo.jpg"
                  alt="KVCE Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-tight">Kasat Virtual College</div>
                <div className="text-white font-bold text-sm leading-tight">of Education</div>
                <div className="text-[#A20D65] text-xs font-medium">Educating Since 1999</div>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Providing quality, flexible, and career-focused online education since 1999. Our mission is to make higher education accessible to every learner.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href={contactConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 bg-white/10 hover:bg-[#A20D65] rounded flex items-center justify-center transition-colors">
                <Share2 size={14} />
              </a>
              <a href={contactConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 bg-white/10 hover:bg-[#A20D65] rounded flex items-center justify-center transition-colors">
                <Camera size={14} />
              </a>
              <a href={contactConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-8 h-8 bg-white/10 hover:bg-[#A20D65] rounded flex items-center justify-center transition-colors">
                <Play size={14} />
              </a>
              <a href={contactConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 bg-white/10 hover:bg-[#A20D65] rounded flex items-center justify-center transition-colors">
                <Briefcase size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/courses', label: 'Our Courses' },
                { href: '/universities', label: 'University Partners' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/privacy-policy', label: 'Privacy Policy' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#A20D65] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Programmes</h3>
            <ul className="space-y-2">
              {[
                { href: '/courses?category=education', label: 'Education (B.Ed., M.Ed.)' },
                { href: '/courses?category=management', label: 'Management (BBA, MBA)' },
                { href: '/courses?category=computer-applications', label: 'Computer Applications' },
                { href: '/courses?category=arts', label: 'Arts & Humanities' },
                { href: '/courses?category=commerce', label: 'Commerce' },
                { href: '/courses?category=science', label: 'Science' },
                { href: '/courses?category=law', label: 'Law (LLB, LLM)' },
                { href: '/courses?category=vocational', label: 'Vocational Courses' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#A20D65] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${contactConfig.phone1}`} className="flex items-start gap-2 text-gray-300 hover:text-white text-sm transition-colors">
                  <Phone size={15} className="mt-0.5 text-[#A20D65] shrink-0" />
                  {contactConfig.phone1Display}
                </a>
              </li>
              <li>
                <a href={`tel:${contactConfig.phone2}`} className="flex items-start gap-2 text-gray-300 hover:text-white text-sm transition-colors">
                  <Phone size={15} className="mt-0.5 text-[#A20D65] shrink-0" />
                  {contactConfig.phone2Display}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactConfig.email}`} className="flex items-start gap-2 text-gray-300 hover:text-white text-sm transition-colors">
                  <Mail size={15} className="mt-0.5 text-[#A20D65] shrink-0" />
                  {contactConfig.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-gray-300 text-sm">
                  <MapPin size={15} className="mt-0.5 text-[#A20D65] shrink-0" />
                  {contactConfig.addressShort}
                </div>
              </li>
              <li>
                <a href={contactConfig.website} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-gray-300 hover:text-white text-sm transition-colors">
                  <Globe size={15} className="mt-0.5 text-[#A20D65] shrink-0" />
                  kasatvce.in
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-whatsapp-btn"
                  className="flex items-center gap-2 bg-[#A20D65] hover:bg-[#650D50] text-white px-4 py-2.5 rounded text-sm font-semibold transition-colors duration-200"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-400 text-xs text-center sm:text-left">
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs">
            UGC Recognised Degrees | Online Education Since 1999
          </p>
        </div>
      </div>
    </footer>
  );
}
