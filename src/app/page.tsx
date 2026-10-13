import Link from 'next/link';
import Image from 'next/image';
import {
  GraduationCap, Building2, TrendingUp, Laptop, Globe, DollarSign, Users, Award,
  MessageCircle, ArrowRight, CheckCircle2, BookOpen, Star, Shield, Clock,
} from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/site-config';
import { universities } from '@/data/universities';
import { courses, courseCategories } from '@/data/courses';
import { UniversityLogoBadge } from '@/components/universities/UniversityCard';

const benefits = [
  { icon: Laptop, label: 'Online Lectures', desc: 'Access lectures anytime, anywhere' },
  { icon: Globe, label: 'Study from Anywhere', desc: 'Learn at your own pace' },
  { icon: DollarSign, label: 'Affordable Fees', desc: 'Quality education at low cost' },
  { icon: Users, label: 'Expert Faculty', desc: 'Learn from experienced educators' },
  { icon: Award, label: 'UGC Recognized Degrees', desc: 'Nationally recognised qualifications' },
];

const trustFeatures = [
  { icon: BookOpen, title: 'Flexible Learning for Everyone', desc: 'Study at your own pace with recorded lectures and flexible schedules designed for working professionals and students alike.' },
  { icon: Star, title: 'Quality Education & Guidance', desc: 'Expert faculty with years of academic experience ensure you receive high-quality instruction and personalised academic support.' },
  { icon: GraduationCap, title: 'Wide Range of Specialisations', desc: 'Choose from 100+ career-focused specialisations across Education, Management, Science, Arts, Law, and many more disciplines.' },
  { icon: Shield, title: 'Dedicated Student Support', desc: 'Our student support team is available to assist you through your entire journey — from admission to graduation.' },
];

const homeCoursePreview = [
  { category: 'Education', label: 'Education', programmes: ['E.C.C.Ed.', 'D.Ed.', 'B.Ed.', 'M.Ed.'], href: '/courses?category=education', image: '/images/courses/teachers-education-profession.jpg' },
  { category: 'Commerce', label: 'Commerce', programmes: ['B.Com. – General', 'B.Com. – Accounting & Finance', 'M.Com.', 'Auditing and Taxation', 'Accounting', 'Economics & Finance'], href: '/courses?category=commerce', image: '/images/courses/accountants-finance-profession.jpg' },
  { category: 'Science', label: 'Science', programmes: ['B.Sc. – PCM', 'B.Sc. – Biotechnology', 'Chemistry', 'Diversity', 'Travel & Tourism', 'Service Marketing', 'Hospitality & Management'], href: '/courses?category=science', image: '/images/courses/scientists-profession.jpg' },
  { category: 'Management', label: 'Management', programmes: ['BBA – General', 'Hospital Management', 'Logistics & Supply Chain', 'Digital Marketing Management', 'Event Management', 'Finance Management', 'Hotel Management', 'Human Resource Management', 'International Business', 'Operations Management', 'Project Management', 'Retail and Sales Management'], href: '/courses?category=management', image: '/images/courses/managers-executives-profession.jpg' },
  { category: 'Computer Applications', label: 'Computer Applications', programmes: ['BCA', 'Cyber Security & Risk', 'AI & Machine Learning', 'Data Science & Big Data Analytics', 'DBMS', 'Data Analytics', 'MCA and more specialisations on BCA'], href: '/courses?category=computer-applications', image: '/images/courses/software-engineers-profession.jpg' },
  { category: 'Law', label: 'Law', programmes: ['B.S.L. LL.B.', 'LL.B. (3 Years)', 'LL.M.', 'LLM'], href: '/courses?category=law', image: '/images/courses/lawyers-profession.jpg' },
  { category: 'Diplomas', label: 'Diplomas', programmes: ['Computer Applications', 'Business Administration', 'Languages', 'Social Sciences'], href: '/courses?category=diplomas', image: '/images/courses/technicians-diploma-profession.jpg' },
  { category: 'PG Diplomas', label: 'PG Diplomas', programmes: ['Computer Application', 'Business Administration', 'Transport', 'Social Sciences'], href: '/courses?category=pg-diplomas', image: '/images/courses/specialists-pgdiploma-profession.jpg' },
];

const previewUniversities = universities.slice(0, 12);

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="bg-[#F7F7FA] py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <p className="text-[#A20D65] text-xs font-semibold tracking-widest uppercase mb-3">
                UGC RECOGNISED | FLEXIBLE LEARNING | CAREER FOCUSED
              </p>
              <h1 className="text-[#101F49] text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Build Your Future with{' '}
                <span className="text-[#A20D65]">Quality Online Education</span>
              </h1>
              <p className="text-[#26324A] text-lg mb-6">
                Explore 100+ Career-Focused Specialisations in Online Degrees
              </p>

              {/* Feature indicators */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white border border-[#E3E5EC] rounded px-3 py-2 shadow-sm">
                  <GraduationCap size={20} className="text-[#A20D65]" />
                  <div>
                    <div className="text-[#101F49] font-bold text-sm">100+</div>
                    <div className="text-[#667085] text-xs">Specialisations</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white border border-[#E3E5EC] rounded px-3 py-2 shadow-sm">
                  <Building2 size={20} className="text-[#A20D65]" />
                  <div>
                    <div className="text-[#101F49] font-bold text-sm">Top University</div>
                    <div className="text-[#667085] text-xs">Affiliations</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white border border-[#E3E5EC] rounded px-3 py-2 shadow-sm">
                  <TrendingUp size={20} className="text-[#A20D65]" />
                  <div>
                    <div className="text-[#101F49] font-bold text-sm">Career Growth</div>
                    <div className="text-[#667085] text-xs">&amp; Opportunities</div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/courses"
                  id="hero-explore-courses"
                  className="flex items-center justify-center gap-2 bg-[#A20D65] hover:bg-[#650D50] text-white px-6 py-3 rounded font-semibold text-sm transition-colors duration-200"
                >
                  Explore Courses
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-whatsapp-btn"
                  className="flex items-center justify-center gap-2 bg-white border-2 border-[#A20D65] text-[#A20D65] hover:bg-[#A20D65] hover:text-white px-6 py-3 rounded font-semibold text-sm transition-colors duration-200"
                >
                  <MessageCircle size={16} />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>

            {/* Right – image */}
            <div className="relative">
              <div className="relative h-72 sm:h-96 lg:h-[460px] w-full rounded-lg overflow-hidden border border-[#E3E5EC] shadow-lg">
                <Image
                  src="/images/campus/hero-campus.jpg"
                  alt="Kasat Virtual College of Education campus"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Overlay badge */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-[#E3E5EC] rounded-lg px-4 py-3 shadow-lg">
                <div className="text-[#101F49] font-bold text-lg">Educating</div>
                <div className="text-[#A20D65] font-bold text-sm">Since 1999</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS STRIP ────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-[#E3E5EC] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {benefits.map((b) => (
              <div key={b.label} className="flex flex-col items-center text-center gap-2 py-2">
                <div className="w-10 h-10 bg-[#FFF0F7] rounded-full flex items-center justify-center">
                  <b.icon size={20} className="text-[#A20D65]" />
                </div>
                <div className="text-[#101F49] font-semibold text-sm">{b.label}</div>
                <div className="text-[#667085] text-xs">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UNIVERSITY PARTNERS ───────────────────────────────────────────────── */}
      <section className="bg-[#F7F7FA] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-[#101F49] text-2xl lg:text-3xl font-bold mb-2">Our University Partners</h2>
            <p className="text-[#667085] text-sm">We are associated with reputed and UGC recognised universities across India</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {previewUniversities.map((uni) => (
              <div
                key={uni.id}
                className="bg-white border border-[#E3E5EC] rounded-lg p-3 flex flex-col items-center justify-center min-h-[90px] text-center hover:border-[#A20D65] hover:shadow-sm transition-all duration-200"
              >
                <UniversityLogoBadge id={uni.id} name={uni.name} shortName={uni.shortName} state={uni.state} type={uni.type} />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/universities"
              id="home-view-universities"
              className="inline-flex items-center gap-2 border border-[#A20D65] text-[#A20D65] hover:bg-[#A20D65] hover:text-white px-5 py-2.5 rounded font-semibold text-sm transition-colors duration-200"
            >
              View All Universities
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── POPULAR COURSES ───────────────────────────────────────────────────── */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-[#101F49] text-2xl lg:text-3xl font-bold mb-2">Our Courses</h2>
            <p className="text-[#667085] text-sm">Explore 100+ career-focused specialisations in Online Degrees</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {homeCoursePreview.map((cat) => (
              <div
                key={cat.category}
                className="bg-white border border-[#E3E5EC] rounded-lg overflow-hidden hover:shadow-md hover:border-[#A20D65] transition-all duration-200 flex flex-col"
              >
                <div className="relative h-36 bg-[#F7F7FA]">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#101F49]/60 flex items-center justify-center">
                    <h3 className="text-white font-bold text-base text-center px-2">{cat.label}</h3>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <ul className="space-y-1 flex-1">
                    {cat.programmes.slice(0, 5).map((prog) => (
                      <li key={prog} className="text-[#26324A] text-xs flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#A20D65] mt-1.5 shrink-0" />
                        {prog}
                      </li>
                    ))}
                    {cat.programmes.length > 5 && (
                      <li className="text-[#667085] text-xs">+{cat.programmes.length - 5} more</li>
                    )}
                  </ul>
                  <Link
                    href={cat.href}
                    className="mt-3 text-[#A20D65] hover:text-[#650D50] text-xs font-semibold flex items-center gap-1 transition-colors"
                  >
                    View Courses <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/courses"
              id="home-view-all-courses"
              className="inline-flex items-center gap-2 bg-[#A20D65] hover:bg-[#650D50] text-white px-6 py-3 rounded font-semibold text-sm transition-colors duration-200"
            >
              View All Courses
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST / FEATURES ──────────────────────────────────────────────────── */}
      <section className="bg-[#F7F7FA] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[#101F49] text-2xl lg:text-3xl font-bold mb-2">
              Why Choose <span className="text-[#A20D65]">KVCE?</span>
            </h2>
            <p className="text-[#667085] text-sm">Your trusted partner for quality online higher education</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustFeatures.map((f) => (
              <div key={f.title} className="bg-white border border-[#E3E5EC] rounded-lg p-5 hover:shadow-md hover:border-[#A20D65] transition-all duration-200">
                <div className="w-10 h-10 bg-[#FFF0F7] rounded flex items-center justify-center mb-3">
                  <f.icon size={20} className="text-[#A20D65]" />
                </div>
                <h3 className="text-[#101F49] font-semibold text-sm mb-2">{f.title}</h3>
                <p className="text-[#667085] text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENQUIRY CTA STRIP ─────────────────────────────────────────────────── */}
      <section className="bg-[#101F49] py-10 lg:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-2xl lg:text-3xl font-bold mb-3">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-gray-300 text-sm mb-6">
            Connect with our team on WhatsApp for instant guidance on admissions and courses.
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-whatsapp-btn"
            className="inline-flex items-center gap-2 bg-[#A20D65] hover:bg-[#650D50] text-white px-8 py-4 rounded font-bold text-base transition-colors duration-200"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp →
          </a>
        </div>
      </section>
    </>
  );
}
