import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from '@/components/icons/SocialIcons';
import { contactConfig, getWhatsAppUrl } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact Us - Kasat Virtual College of Education',
  description: "We're here to help you with your course admission, queries and guidance. Reach out to us through phone, WhatsApp, or visit our office.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-[#101F49] py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-gray-400 mb-3" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-gray-500">/</li>
              <li className="text-white">Contact</li>
            </ol>
          </nav>
          <h1 className="text-white text-3xl lg:text-4xl font-bold">Get in Touch</h1>
          <p className="text-gray-300 mt-2 text-sm max-w-2xl">
            We&apos;re here to help you with your course admission, queries and guidance. Reach out to us through any of the following channels.
          </p>
        </div>
      </div>

      <section className="bg-[#F7F7FA] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left Column: Direct channels (Matches Mockup Screen 6) */}
            <div className="space-y-6">
              {/* Call Us */}
              <div className="bg-white border border-[#E3E5EC] rounded-lg p-6 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFF0F7] flex items-center justify-center shrink-0">
                  <Phone size={22} className="text-[#A20D65]" />
                </div>
                <div>
                  <h2 className="text-[#101F49] font-bold text-base mb-1">Call Us</h2>
                  <div className="space-y-1">
                    <a
                      href={`tel:${contactConfig.phone1}`}
                      id="contact-phone-1"
                      className="block text-[#101F49] hover:text-[#A20D65] font-semibold text-sm transition-colors"
                    >
                      {contactConfig.phone1Display}
                    </a>
                    <a
                      href={`tel:${contactConfig.phone2}`}
                      id="contact-phone-2"
                      className="block text-[#101F49] hover:text-[#A20D65] font-semibold text-sm transition-colors"
                    >
                      {contactConfig.phone2Display}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp for Instant Support */}
              <div className="bg-white border border-[#E3E5EC] rounded-lg p-6 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFF0F7] flex items-center justify-center shrink-0">
                  <MessageCircle size={22} className="text-[#A20D65]" />
                </div>
                <div className="flex-1">
                  <h2 className="text-[#101F49] font-bold text-base mb-1">WhatsApp for Instant Support</h2>
                  <p className="text-gray-500 text-xs mb-4">Click the button to chat with us on WhatsApp</p>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-chat-whatsapp-btn"
                    className="inline-flex items-center gap-2 bg-[#A20D65] hover:bg-[#650D50] text-white px-6 py-2.5 rounded font-semibold text-sm transition-colors duration-200"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>

              {/* Email Us */}
              <div className="bg-white border border-[#E3E5EC] rounded-lg p-6 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFF0F7] flex items-center justify-center shrink-0">
                  <Mail size={22} className="text-[#A20D65]" />
                </div>
                <div>
                  <h2 className="text-[#101F49] font-bold text-base mb-1">Email Us</h2>
                  <a
                    href={`mailto:${contactConfig.email}`}
                    id="contact-email-link"
                    className="text-[#A20D65] hover:underline font-semibold text-sm"
                  >
                    {contactConfig.email}
                  </a>
                </div>
              </div>

              {/* Visit Our Office */}
              <div className="bg-white border border-[#E3E5EC] rounded-lg p-6 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFF0F7] flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-[#A20D65]" />
                </div>
                <div>
                  <h2 className="text-[#101F49] font-bold text-base mb-1">Visit Our Office</h2>
                  <p className="text-gray-700 text-sm font-medium">Palghar, Virar, Bhayandar</p>
                </div>
              </div>

              {/* Follow Us */}
              <div className="bg-white border border-[#E3E5EC] rounded-lg p-6 shadow-sm">
                <h2 className="text-[#101F49] font-bold text-base mb-3">Follow Us</h2>
                <div className="flex items-center gap-3">
                  <a
                    href={contactConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Kasat Virtual College of Education on Facebook"
                    className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 hover:scale-105 transition-all shadow-sm"
                  >
                    <FacebookIcon size={20} />
                  </a>
                  <a
                    href={contactConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Kasat Virtual College of Education on Instagram"
                    className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center hover:opacity-90 hover:scale-105 transition-all shadow-sm"
                  >
                    <InstagramIcon size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Scan to WhatsApp & Map (Matches Mockup Screen 6) */}
            <div className="space-y-6">
              {/* Scan to WhatsApp Card */}
              <div className="bg-white border border-[#E3E5EC] rounded-lg p-6 shadow-sm text-center">
                <div className="bg-[#A20D65] text-white py-2 px-4 rounded font-bold text-sm mb-6 inline-block">
                  Scan to WhatsApp
                </div>

                <div className="flex flex-col items-center justify-center">
                  {/* Clean WhatsApp QR Code Representation */}
                  <div className="relative p-4 bg-white border-2 border-gray-200 rounded-xl shadow-inner mb-4">
                    <svg
                      width="180"
                      height="180"
                      viewBox="0 0 180 180"
                      className="mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Stylized QR Matrix Pattern */}
                      <rect width="180" height="180" fill="#ffffff" />
                      {/* Top-Left Finder */}
                      <rect x="10" y="10" width="46" height="46" fill="#101F49" rx="4" />
                      <rect x="18" y="18" width="30" height="30" fill="#ffffff" rx="2" />
                      <rect x="24" y="24" width="18" height="18" fill="#101F49" rx="2" />
                      {/* Top-Right Finder */}
                      <rect x="124" y="10" width="46" height="46" fill="#101F49" rx="4" />
                      <rect x="132" y="18" width="30" height="30" fill="#ffffff" rx="2" />
                      <rect x="138" y="24" width="18" height="18" fill="#101F49" rx="2" />
                      {/* Bottom-Left Finder */}
                      <rect x="10" y="124" width="46" height="46" fill="#101F49" rx="4" />
                      <rect x="18" y="132" width="30" height="30" fill="#ffffff" rx="2" />
                      <rect x="24" y="138" width="18" height="18" fill="#101F49" rx="2" />
                      {/* Data Dots Grid */}
                      <rect x="66" y="14" width="8" height="8" fill="#101F49" />
                      <rect x="84" y="14" width="8" height="8" fill="#101F49" />
                      <rect x="102" y="14" width="8" height="8" fill="#101F49" />
                      <rect x="66" y="32" width="8" height="8" fill="#101F49" />
                      <rect x="84" y="32" width="8" height="8" fill="#101F49" />
                      <rect x="102" y="32" width="8" height="8" fill="#101F49" />
                      <rect x="66" y="50" width="8" height="8" fill="#101F49" />
                      <rect x="84" y="50" width="8" height="8" fill="#101F49" />
                      <rect x="14" y="66" width="8" height="8" fill="#101F49" />
                      <rect x="32" y="66" width="8" height="8" fill="#101F49" />
                      <rect x="50" y="66" width="8" height="8" fill="#101F49" />
                      <rect x="124" y="66" width="8" height="8" fill="#101F49" />
                      <rect x="142" y="66" width="8" height="8" fill="#101F49" />
                      <rect x="160" y="66" width="8" height="8" fill="#101F49" />
                      <rect x="14" y="84" width="8" height="8" fill="#101F49" />
                      <rect x="32" y="84" width="8" height="8" fill="#101F49" />
                      <rect x="142" y="84" width="8" height="8" fill="#101F49" />
                      <rect x="160" y="84" width="8" height="8" fill="#101F49" />
                      <rect x="14" y="102" width="8" height="8" fill="#101F49" />
                      <rect x="32" y="102" width="8" height="8" fill="#101F49" />
                      <rect x="50" y="102" width="8" height="8" fill="#101F49" />
                      <rect x="124" y="102" width="8" height="8" fill="#101F49" />
                      <rect x="142" y="102" width="8" height="8" fill="#101F49" />
                      <rect x="160" y="102" width="8" height="8" fill="#101F49" />
                      <rect x="66" y="124" width="8" height="8" fill="#101F49" />
                      <rect x="84" y="124" width="8" height="8" fill="#101F49" />
                      <rect x="102" y="124" width="8" height="8" fill="#101F49" />
                      <rect x="66" y="142" width="8" height="8" fill="#101F49" />
                      <rect x="84" y="142" width="8" height="8" fill="#101F49" />
                      <rect x="102" y="142" width="8" height="8" fill="#101F49" />
                      <rect x="66" y="160" width="8" height="8" fill="#101F49" />
                      <rect x="84" y="160" width="8" height="8" fill="#101F49" />
                      <rect x="102" y="160" width="8" height="8" fill="#101F49" />
                      <rect x="124" y="124" width="8" height="8" fill="#101F49" />
                      <rect x="142" y="142" width="8" height="8" fill="#101F49" />
                      <rect x="160" y="160" width="8" height="8" fill="#101F49" />

                      {/* Center WhatsApp Icon Badge */}
                      <circle cx="90" cy="90" r="22" fill="#25D366" />
                      <path
                        d="M90 77C82.8 77 77 82.8 77 90C77 92.5 77.7 94.8 78.9 96.8L77.5 102.5L83.4 101.1C85.3 102.2 87.6 102.8 90 102.8C97.2 102.8 103 97 103 90C103 82.8 97.2 77 90 77ZM96.5 94.2C96.2 95 95 95.6 94.3 95.7C93.8 95.8 93.1 95.8 91.2 95C88.2 93.8 86.2 90.6 86.1 90.4C85.9 90.2 84.8 88.7 84.8 87.2C84.8 85.7 85.6 85 85.9 84.7C86.2 84.4 86.6 84.3 87 84.3C87.1 84.3 87.3 84.3 87.4 84.3C87.8 84.3 88 84.4 88.2 84.9C88.5 85.6 89.2 87.2 89.3 87.4C89.4 87.6 89.4 87.8 89.3 88C89.2 88.2 89.1 88.3 88.9 88.5C88.7 88.7 88.6 88.8 88.4 89C88.2 89.2 88 89.4 88.2 89.8C88.5 90.2 89.3 91.5 90.5 92.6C92.1 94 93.3 94.4 93.7 94.6C94.1 94.8 94.3 94.7 94.5 94.5C94.8 94.2 95.3 93.6 95.6 93.2C95.8 92.9 96.1 92.9 96.4 93C96.7 93.1 98.4 94 98.7 94.1C99 94.3 99.2 94.4 99.3 94.5C99.4 94.7 99.4 95.4 99.1 96.2L96.5 94.2Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500 font-medium">Scan to start a WhatsApp chat instantly</p>
                </div>
              </div>

              {/* Map Card (Matches Mockup Screen 6) */}
              <div className="bg-white border border-[#E3E5EC] rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-64 w-full bg-[#E5E7EB]">
                  <iframe
                    title="Kasat Virtual College of Education Map Location"
                    src="https://maps.google.com/maps?q=Palghar%20Maharashtra&t=&z=11&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                  {/* Floating map banner matching Mockup */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm border border-[#E3E5EC] rounded-md p-3 shadow-md flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#A20D65] text-white flex items-center justify-center shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-[#101F49]">Kasat Virtual College of Education</h3>
                      <p className="text-[11px] text-gray-500">Palghar, Virar, Bhayandar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
