import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Clock, GraduationCap, Monitor, CheckCircle2, Award, ChevronRight } from 'lucide-react';
import { courses, courseCategories, getCoursesByCategory } from '@/data/courses';
import { getCourseWhatsAppUrl } from '@/lib/site-config';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return { title: 'Course Not Found' };
  return {
    title: `${course.title} - Kasat Virtual College of Education`,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const categoryInfo = courseCategories.find((c) => c.id === course.category);
  const siblingCourses = getCoursesByCategory(course.category);

  return (
    <div className="bg-[#F7F7FA] min-h-screen py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb matching Mockup Screen 4 */}
        <nav className="text-xs text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li>
              <Link href="/" className="text-[#A20D65] hover:underline font-medium">Home</Link>
            </li>
            <li className="text-gray-400">&gt;</li>
            <li>
              <Link href="/courses" className="text-[#A20D65] hover:underline font-medium">Courses</Link>
            </li>
            <li className="text-gray-400">&gt;</li>
            <li>
              <Link href={`/courses?category=${course.category}`} className="text-[#A20D65] hover:underline font-medium">
                {categoryInfo?.label || 'Courses'}
              </Link>
            </li>
            <li className="text-gray-400">&gt;</li>
            <li className="text-gray-800 font-semibold">{course.shortTitle || course.title}</li>
          </ol>
        </nav>

        {/* 2-Column Layout matching Mockup Screen 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Left Column: Category Sidebar */}
          <aside className="lg:col-span-1 bg-white border border-[#E3E5EC] rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#A20D65] text-white px-4 py-3 font-bold text-sm tracking-wide">
              {categoryInfo?.label} Courses
            </div>
            <nav className="divide-y divide-[#E3E5EC]">
              {siblingCourses.map((sibling) => {
                const isActive = sibling.slug === course.slug;
                return (
                  <Link
                    key={sibling.id}
                    href={`/courses/${sibling.slug}`}
                    className={`block px-4 py-3 text-xs font-semibold transition-colors duration-150 ${
                      isActive
                        ? 'bg-[#A20D65] text-white font-bold'
                        : 'text-[#26324A] hover:bg-[#FFF0F7] hover:text-[#A20D65]'
                    }`}
                  >
                    {sibling.shortTitle || sibling.title}
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* Right Area: Course Details */}
          <main className="lg:col-span-3 bg-white border border-[#E3E5EC] rounded-lg shadow-sm p-6 sm:p-8">
            <h1 className="text-[#101F49] text-2xl sm:text-3xl font-bold mb-3">
              {course.title}
            </h1>
            <p className="text-[#667085] text-sm leading-relaxed mb-8">
              {course.description}
            </p>

            {/* Two Sub-columns matching Mockup Screen 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Left Sub-column: Specialisations */}
              <div>
                <h2 className="text-[#101F49] font-bold text-base mb-4 border-b pb-2 border-gray-100">
                  Specialisations
                </h2>
                {course.specialisations && course.specialisations.length > 0 ? (
                  <ul className="space-y-2">
                    {course.specialisations.map((spec) => (
                      <li key={spec} className="flex items-start gap-2 text-xs sm:text-sm text-[#26324A]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A20D65] mt-2 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                ) : course.subjects && course.subjects.length > 0 ? (
                  <ul className="space-y-2">
                    {course.subjects.map((subj) => (
                      <li key={subj} className="flex items-start gap-2 text-xs sm:text-sm text-[#26324A]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A20D65] mt-2 shrink-0" />
                        <span>{subj}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-gray-500 italic">
                    Comprehensive career curriculum tailored to academic excellence.
                  </p>
                )}
              </div>

              {/* Right Sub-column: Key Information Cards */}
              <div className="space-y-3">
                {/* Duration */}
                <div className="flex items-center gap-3 bg-[#F7F7FA] border border-[#E3E5EC] rounded-lg p-3.5">
                  <div className="w-9 h-9 rounded bg-[#FFF0F7] flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#A20D65]" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#667085] uppercase tracking-wider font-semibold">Duration</span>
                    <span className="block text-sm font-bold text-[#101F49]">
                      {course.duration || 'Flexible'}
                    </span>
                  </div>
                </div>

                {/* Eligibility */}
                <div className="flex items-center gap-3 bg-[#F7F7FA] border border-[#E3E5EC] rounded-lg p-3.5">
                  <div className="w-9 h-9 rounded bg-[#FFF0F7] flex items-center justify-center shrink-0">
                    <GraduationCap size={18} className="text-[#A20D65]" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#667085] uppercase tracking-wider font-semibold">Eligibility</span>
                    <span className="block text-sm font-bold text-[#101F49]">
                      {course.eligibility || 'As per University Norms'}
                    </span>
                  </div>
                </div>

                {/* Learning Mode */}
                <div className="flex items-center gap-3 bg-[#F7F7FA] border border-[#E3E5EC] rounded-lg p-3.5">
                  <div className="w-9 h-9 rounded bg-[#FFF0F7] flex items-center justify-center shrink-0">
                    <Monitor size={18} className="text-[#A20D65]" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#667085] uppercase tracking-wider font-semibold">Learning Mode</span>
                    <span className="block text-sm font-bold text-[#101F49]">
                      {course.mode || '100% Online'}
                    </span>
                  </div>
                </div>

                {/* UGC Recognized */}
                <div className="flex items-center gap-3 bg-[#F7F7FA] border border-[#E3E5EC] rounded-lg p-3.5">
                  <div className="w-9 h-9 rounded bg-[#FFF0F7] flex items-center justify-center shrink-0">
                    <Award size={18} className="text-[#A20D65]" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#667085] uppercase tracking-wider font-semibold">UGC Recognized</span>
                    <span className="block text-sm font-bold text-[#101F49]">Yes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Button matching Mockup Screen 4 */}
            <div className="pt-4 border-t border-[#E3E5EC]">
              <a
                href={getCourseWhatsAppUrl(course.title)}
                target="_blank"
                rel="noopener noreferrer"
                id={`enquire-${course.id}`}
                className="inline-flex items-center justify-center gap-2 bg-[#A20D65] hover:bg-[#650D50] text-white px-8 py-3.5 rounded font-semibold text-sm transition-colors duration-200 shadow-sm"
              >
                <MessageCircle size={18} />
                Enquire on WhatsApp →
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
