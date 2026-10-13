'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ArrowRight, X, BookOpen, CheckCircle2 } from 'lucide-react';
import { courses, courseCategories, searchCourses, getCoursesByCategory } from '@/data/courses';

const mockupCategoryCards = [
  {
    id: 'arts',
    label: 'Arts',
    degree: 'B.A.',
    image: '/images/courses/artists-finearts-profession.jpg',
    specialisations: [
      'General', 'English', 'Hindi', 'History', 'Politics', 'Sociology',
      'Geography', 'Economics', 'Mass Communication', 'Public Administration',
      'Journalism', 'Fashion', 'Fine Arts'
    ],
    targetSlug: 'ba',
  },
  {
    id: 'commerce',
    label: 'Commerce',
    degree: 'B.Com.',
    image: '/images/courses/accountants-finance-profession.jpg',
    specialisations: [
      'General', 'Auditing & Taxation', 'Advanced Cost & Management Accounting',
      'Accounting', 'Fintech', 'Economics & Finance'
    ],
    targetSlug: 'bcom',
  },
  {
    id: 'science',
    label: 'Science',
    degree: 'B.Sc. & M.Sc.',
    image: '/images/courses/scientists-profession.jpg',
    specialisations: [
      'B.Sc: PCM, CBZ, Information & Technology, Chemistry, Travel & Tourism',
      'Service Marketing, Hospitality & Management',
      'M.Sc: Mathematics, Physics, Chemistry, Information & Technology'
    ],
    targetSlug: 'bsc',
  },
  {
    id: 'management',
    label: 'Management',
    degree: 'BBA & MBA',
    image: '/images/courses/managers-executives-profession.jpg',
    specialisations: [
      'General', 'Hospital Management', 'Aviation Management', 'Logistics & Supply Chain',
      'Digital Marketing', 'Event Management', 'Finance Management', 'Hotel Management',
      'Human Resource Management', 'International Business', 'Logistics Management',
      'Marketing Management', 'Retail & Sales', 'Tourism & Hospitality Management'
    ],
    targetSlug: 'bba',
  },
  {
    id: 'computer-applications',
    label: 'Computer Applications',
    degree: 'BCA & MCA',
    image: '/images/courses/software-engineers-profession.jpg',
    specialisations: [
      'Cyber Security & Ethical Hacking', 'Data Science & Big Data Analytics',
      'Artificial Intelligence & Machine Learning', 'Cloud Computing',
      'Game Development', 'Multimedia & Animation',
      'MCA: Same specialisations as BCA'
    ],
    targetSlug: 'bca',
  },
  {
    id: 'law',
    label: 'Law',
    degree: 'LL.B. & LL.M.',
    image: '/images/courses/lawyers-profession.jpg',
    specialisations: [
      'LL.B. (3 Years)', 'LL.B. (5 Years)', 'LL.M. (Master of Laws)'
    ],
    targetSlug: 'llb',
  },
  {
    id: 'diplomas',
    label: 'Diplomas',
    degree: 'Diploma Programmes',
    image: '/images/courses/technicians-diploma-profession.jpg',
    specialisations: [
      'Computer Application', 'Business Administration', 'Languages', 'Social Sciences'
    ],
    targetSlug: 'diploma-computer-applications',
  },
  {
    id: 'pg-diplomas',
    label: 'PG Diplomas',
    degree: 'Postgraduate Diplomas',
    image: '/images/courses/specialists-pgdiploma-profession.jpg',
    specialisations: [
      'Computer Application', 'Business Administration', 'Transport', 'Social Sciences'
    ],
    targetSlug: 'pgd-computer-applications',
  },
];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'overview' | 'all'>('overview');

  // Read URL params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category');
    if (cat) {
      setActiveCategory(cat);
      setViewMode('all');
    }
  }, []);

  const filteredCourses = useMemo(() => {
    let result = searchQuery ? searchCourses(searchQuery) : courses;
    if (activeCategory !== 'all') {
      result = result.filter((c) => c.category === activeCategory);
    }
    return result;
  }, [searchQuery, activeCategory]);

  const showMockupOverview = activeCategory === 'all' && !searchQuery && viewMode === 'overview';

  return (
    <>
      {/* Page Header */}
      <div className="bg-[#101F49] py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-gray-400 mb-3" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-gray-500">/</li>
              <li className="text-white">Courses</li>
            </ol>
          </nav>
          <h1 className="text-white text-3xl lg:text-4xl font-bold">Our Courses</h1>
          <p className="text-gray-300 mt-2 text-sm">Explore 100+ career-focused specialisations in Online Degrees</p>
        </div>
      </div>

      <div className="bg-[#F7F7FA] min-h-screen py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search bar */}
          <div className="bg-white border border-[#E3E5EC] rounded-lg p-4 mb-6 shadow-sm">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#667085]" />
              <input
                id="course-search"
                type="text"
                placeholder="Search courses, programmes, specialisations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 border border-[#E3E5EC] rounded text-sm text-[#26324A] placeholder:text-[#667085] focus:outline-none focus:border-[#A20D65] focus:ring-1 focus:ring-[#A20D65]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#667085] hover:text-[#A20D65]"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills (Matches Mockup Screen 3) */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              <button
                id="filter-all"
                onClick={() => {
                  setActiveCategory('all');
                  setViewMode('overview');
                }}
                className={`px-4 py-2 rounded text-xs font-semibold border transition-colors duration-200 ${
                  activeCategory === 'all'
                    ? 'bg-[#A20D65] text-white border-[#A20D65]'
                    : 'bg-white text-[#26324A] border-[#E3E5EC] hover:border-[#A20D65] hover:text-[#A20D65]'
                }`}
              >
                All Courses
              </button>
              {[
                { id: 'arts', label: 'Arts' },
                { id: 'commerce', label: 'Commerce' },
                { id: 'science', label: 'Science' },
                { id: 'management', label: 'Management' },
                { id: 'computer-applications', label: 'Computer Applications' },
                { id: 'law', label: 'Law' },
                { id: 'diplomas', label: 'Diplomas' },
                { id: 'pg-diplomas', label: 'PG Diplomas' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  id={`filter-${cat.id}`}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setViewMode('all');
                  }}
                  className={`px-4 py-2 rounded text-xs font-semibold border transition-colors duration-200 ${
                    activeCategory === cat.id
                      ? 'bg-[#A20D65] text-white border-[#A20D65]'
                      : 'bg-white text-[#26324A] border-[#E3E5EC] hover:border-[#A20D65] hover:text-[#A20D65]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Toggle View mode */}
            {activeCategory === 'all' && !searchQuery && (
              <div className="flex items-center gap-2 text-xs">
                <button
                  onClick={() => setViewMode('overview')}
                  className={`px-3 py-1.5 rounded font-medium border ${
                    viewMode === 'overview'
                      ? 'bg-[#101F49] text-white border-[#101F49]'
                      : 'bg-white text-gray-600 border-gray-300'
                  }`}
                >
                  Categories View
                </button>
                <button
                  onClick={() => setViewMode('all')}
                  className={`px-3 py-1.5 rounded font-medium border ${
                    viewMode === 'all'
                      ? 'bg-[#101F49] text-white border-[#101F49]'
                      : 'bg-white text-gray-600 border-gray-300'
                  }`}
                >
                  All Programmes ({courses.length})
                </button>
              </div>
            )}
          </div>

          {/* Mockup Screen 3: Category Overview Cards Grid */}
          {showMockupOverview ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockupCategoryCards.map((cat) => (
                <div
                  key={cat.id}
                  className="bg-white border border-[#E3E5EC] rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-[#A20D65] transition-all duration-200 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-44 bg-gray-100">
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#A20D65]" />
                        <h2 className="text-[#101F49] font-bold text-base">{cat.label}</h2>
                      </div>
                      <div className="text-xs font-semibold text-[#A20D65] mb-3">{cat.degree}</div>

                      {/* Specialisations */}
                      <ul className="space-y-1 text-xs text-[#667085] mb-5">
                        {cat.specialisations.slice(0, 6).map((spec) => (
                          <li key={spec} className="flex items-start gap-1.5">
                            <span className="text-[#A20D65] font-bold text-[10px] leading-tight">•</span>
                            <span className="line-clamp-1">{spec}</span>
                          </li>
                        ))}
                        {cat.specialisations.length > 6 && (
                          <li className="text-[11px] text-[#A20D65] font-semibold italic">
                            +{cat.specialisations.length - 6} more specialisations
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* View Courses Button matching Mockup */}
                    <Link
                      href={`/courses/${cat.targetSlug}`}
                      className="w-full flex items-center justify-center gap-2 bg-[#A20D65] hover:bg-[#650D50] text-white text-xs font-semibold py-2.5 px-4 rounded transition-colors duration-200"
                    >
                      View Courses →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Granular individual courses list */
            <div>
              <p className="text-[#667085] text-xs mb-4">
                {filteredCourses.length} programme{filteredCourses.length !== 1 ? 's' : ''} found
                {activeCategory !== 'all' && ` in ${courseCategories.find(c => c.id === activeCategory)?.label}`}
                {searchQuery && ` for "${searchQuery}"`}
              </p>

              {filteredCourses.length === 0 ? (
                <div className="bg-white border border-[#E3E5EC] rounded-lg p-12 text-center">
                  <p className="text-[#667085] text-sm mb-3">No courses found matching your search.</p>
                  <button
                    onClick={() => { setSearchQuery(''); setActiveCategory('all'); setViewMode('overview'); }}
                    className="text-[#A20D65] text-sm font-semibold hover:underline"
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredCourses.map((course) => (
                    <Link
                      key={course.id}
                      href={`/courses/${course.slug}`}
                      id={`course-card-${course.id}`}
                      className="bg-white border border-[#E3E5EC] rounded-lg overflow-hidden hover:shadow-md hover:border-[#A20D65] transition-all duration-200 flex flex-col group"
                    >
                      <div className="relative h-36 bg-[#F7F7FA]">
                        <div className="absolute inset-0 bg-[#101F49]/40 group-hover:bg-[#A20D65]/40 transition-colors duration-200 z-10 flex items-end p-3">
                          <span className="text-white text-[11px] font-medium bg-[#A20D65] px-2 py-0.5 rounded uppercase tracking-wide">
                            {courseCategories.find(c => c.id === course.category)?.label || course.category}
                          </span>
                        </div>
                        {course.image && (
                          <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>

                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-[#101F49] font-bold text-sm mb-1 leading-tight group-hover:text-[#A20D65] transition-colors">
                            {course.title}
                          </h3>
                          <p className="text-[#667085] text-xs mb-3 line-clamp-2">{course.qualification}</p>

                          {course.specialisations && course.specialisations.length > 0 && (
                            <ul className="space-y-0.5 mb-3">
                              {course.specialisations.slice(0, 3).map((s) => (
                                <li key={s} className="text-[#667085] text-xs flex items-start gap-1">
                                  <span className="w-1 h-1 rounded-full bg-[#A20D65] mt-1.5 shrink-0" />
                                  <span className="line-clamp-1">{s}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#A20D65]">
                          <span>View Details</span>
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
