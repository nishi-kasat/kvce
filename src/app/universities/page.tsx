import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, GraduationCap, Award, Globe, MessageCircle, ArrowRight } from 'lucide-react';
import { universities } from '@/data/universities';
import { getWhatsAppUrl } from '@/lib/site-config';
import { UniversityLogoBadge } from '@/components/universities/UniversityCard';

export const metadata: Metadata = {
  title: 'Our University Partners',
  description: 'We are associated with reputed and UGC recognised universities across India to bring you quality education and wide career opportunities.',
};

const bottomFeatures = [
  { icon: Building2, label: 'UGC Recognized Universities', desc: 'All affiliated institutions hold valid UGC approvals' },
  { icon: GraduationCap, label: 'Wide Range of Specialisations', desc: '100+ industry-aligned degree and diploma specialisations' },
  { icon: Award, label: 'Trusted & Reputed Institutions', desc: 'Top tier NAAC accredited partner universities' },
  { icon: Globe, label: 'Better Career Opportunities', desc: 'Valid across government and private sectors worldwide' },
];

export default function UniversitiesPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-[#101F49] py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-gray-400 mb-3" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-gray-500">/</li>
              <li className="text-white">University Partners</li>
            </ol>
          </nav>
          <h1 className="text-white text-3xl lg:text-4xl font-bold">Our University Partners</h1>
          <p className="text-gray-300 mt-2 text-sm max-w-2xl">
            We are associated with reputed and UGC recognized universities across India to bring you quality education and wide career opportunities.
          </p>
        </div>
      </div>

      {/* Universities Grid */}
      <section className="bg-[#F7F7FA] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {universities.map((uni) => (
              <div
                key={uni.id}
                id={`university-${uni.id}`}
                className="bg-white border border-[#E3E5EC] rounded-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-md hover:border-[#A20D65] transition-all duration-200 min-h-[100px]"
              >
                <UniversityLogoBadge id={uni.id} name={uni.name} shortName={uni.shortName} state={uni.state} type={uni.type} />
              </div>
            ))}
            {/* and many more card */}
            <div className="bg-white/60 border border-dashed border-[#E3E5EC] rounded-lg p-4 flex flex-col items-center justify-center text-center min-h-[100px]">
              <span className="text-[#101F49] font-bold text-xs sm:text-sm">…and many more</span>
              <span className="text-gray-500 text-[11px] mt-1">UGC Recognised Universities</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Bottom Features Strip (Matches Mockup Screen 5) */}
      <section className="bg-white py-12 border-t border-b border-[#E3E5EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bottomFeatures.map((f) => (
              <div
                key={f.label}
                className="bg-[#F7F7FA] border border-[#E3E5EC] rounded-lg p-6 text-center hover:shadow-sm hover:border-[#A20D65] transition-all duration-200 flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-[#FFF0F7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <f.icon size={22} className="text-[#A20D65]" />
                </div>
                <h3 className="text-[#101F49] font-bold text-sm mb-2">{f.label}</h3>
                <p className="text-[#667085] text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Enquiry Banner */}
      <section className="bg-[#101F49] py-10 lg:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl font-bold mb-3">
            Find Your Ideal University Programme
          </h2>
          <p className="text-gray-300 text-sm mb-6">
            Our experienced academic counsellors will guide you in choosing the right university and specialisation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl('Hello, kindly provide me information about courses you offer.')}
              target="_blank"
              rel="noopener noreferrer"
              id="universities-whatsapp-btn"
              className="flex items-center gap-2 bg-[#A20D65] hover:bg-[#650D50] text-white px-8 py-3 rounded font-semibold text-sm transition-colors duration-200"
            >
              <MessageCircle size={16} />
              Enquire on WhatsApp →
            </a>
            <Link
              href="/courses"
              id="universities-view-courses"
              className="flex items-center gap-2 border border-white text-white hover:bg-white hover:text-[#101F49] px-8 py-3 rounded font-semibold text-sm transition-colors duration-200"
            >
              Browse All Courses <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
