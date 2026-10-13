import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, BookOpen, Star, GraduationCap, Shield } from 'lucide-react';
import { founder } from '@/data/team';
import { contactConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'About Us - Kasat Virtual College of Education',
  description: 'Learn about Kasat Virtual College of Education (KVCE) – Educating Since 1999, our founder Kasat Sir, and our educational mission.',
};

const fourFeatures = [
  { icon: BookOpen, title: 'Flexible Learning for Everyone' },
  { icon: Star, title: 'Quality Education & Guidance' },
  { icon: GraduationCap, title: 'Wide Range of Specialisations' },
  { icon: Shield, title: 'Dedicated Student Support' },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Breadcrumb / Title Bar */}
      <div className="bg-[#101F49] py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-gray-400 mb-2" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-gray-500">/</li>
              <li className="text-white">About Us</li>
            </ol>
          </nav>
          <h1 className="text-white text-2xl lg:text-3xl font-bold">About Us</h1>
        </div>
      </div>

      {/* ── TOP SECTION (Matches Mockup Screen 2) ─────────────────────────── */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left text */}
            <div>
              <h2 className="text-[#101F49] text-3xl sm:text-4xl font-extrabold mb-1 leading-tight">
                About Kasat Virtual
              </h2>
              <h2 className="text-[#101F49] text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">
                College of Education
              </h2>
              <p className="text-[#A20D65] font-bold text-sm tracking-wide mb-6">
                Educating Since 1999
              </p>
              <p className="text-[#26324A] text-sm sm:text-base leading-relaxed mb-4">
                Kasat Virtual College of Education (KVCE) has been a pioneer in providing quality, flexible and career-focused online education since 1999. Our mission is to make higher education accessible to every learner, regardless of their location or background.
              </p>
              <p className="text-[#667085] text-xs sm:text-sm leading-relaxed">
                With a legacy spanning over two and a half decades, KVCE brings together top UGC recognised universities, expert faculty, and comprehensive academic support to guide students toward successful careers.
              </p>
            </div>

            {/* Right Campus Building Photo */}
            <div className="relative h-72 sm:h-80 lg:h-[380px] rounded-xl overflow-hidden border border-[#E3E5EC] shadow-md bg-gray-100">
              <Image
                src="/images/campus/about-classroom.jpg"
                alt="Kasat Virtual College of Education Campus Building"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 FEATURES CARDS (Matches Mockup Screen 2) ──────────────────────── */}
      <section className="bg-[#F7F7FA] py-8 border-t border-b border-[#E3E5EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {fourFeatures.map((f) => (
              <div
                key={f.title}
                className="bg-white border border-[#E3E5EC] rounded-lg p-5 text-center shadow-sm flex flex-col items-center justify-center hover:shadow hover:border-[#A20D65] transition-all duration-200 min-h-[110px]"
              >
                <div className="w-10 h-10 rounded-full bg-[#FFF0F7] flex items-center justify-center mb-3">
                  <f.icon size={20} className="text-[#A20D65]" />
                </div>
                <h3 className="text-[#101F49] font-bold text-xs sm:text-sm leading-snug">
                  {f.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR FOUNDER (Matches Mockup Screen 2) ───────────────────────────── */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#101F49] text-2xl lg:text-3xl font-extrabold mb-8">
            Our Founder
          </h2>

          <div className="bg-[#F7F7FA] border border-[#E3E5EC] rounded-xl p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Founder Photo */}
              <div className="lg:col-span-3 flex justify-center">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-xl overflow-hidden border-2 border-[#E3E5EC] shadow-md bg-white">
                  <Image
                    src={founder.photo}
                    alt={`${founder.name} - Founder`}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Bio Details */}
              <div className="lg:col-span-5 text-center lg:text-left">
                <h3 className="text-[#101F49] text-2xl font-black mb-1">{founder.name}</h3>
                <p className="text-[#A20D65] font-bold text-sm mb-4">{founder.designation}</p>
                <p className="text-[#26324A] text-sm leading-relaxed">
                  A visionary educationist with a passion for making quality education accessible to everyone. Under his guidance, KVCE has grown into a trusted name in online higher education since 1999.
                </p>
              </div>

              {/* Contact Information Column with Pink Round Icons */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#E3E5EC] pt-6 lg:pt-0 lg:pl-8 space-y-4">
                {/* Phone numbers */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#A20D65] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Phone size={18} />
                  </div>
                  <div>
                    <a href={`tel:${contactConfig.phone1}`} className="block text-xs sm:text-sm font-semibold text-[#101F49] hover:text-[#A20D65]">
                      {contactConfig.phone1Display}
                    </a>
                    <a href={`tel:${contactConfig.phone2}`} className="block text-xs sm:text-sm font-semibold text-[#101F49] hover:text-[#A20D65]">
                      {contactConfig.phone2Display}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#A20D65] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-xs sm:text-sm font-semibold text-[#101F49]">
                      Palghar, Virar, Bhayandar
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#A20D65] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Mail size={18} />
                  </div>
                  <div>
                    <a href={`mailto:${contactConfig.email}`} className="block text-xs sm:text-sm font-semibold text-[#101F49] hover:text-[#A20D65]">
                      {contactConfig.email}
                    </a>
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
