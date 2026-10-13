import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#F7F7FA] px-4">
      <div className="text-center max-w-md">
        <div className="text-[#A20D65] text-8xl font-bold mb-4">404</div>
        <h1 className="text-[#101F49] text-2xl font-bold mb-3">Page Not Found</h1>
        <p className="text-[#667085] text-sm mb-6">
          The page you are looking for could not be found. It may have been moved or does not exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-[#A20D65] hover:bg-[#650D50] text-white px-5 py-3 rounded font-semibold text-sm transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/courses"
            className="flex items-center justify-center gap-2 border border-[#A20D65] text-[#A20D65] hover:bg-[#A20D65] hover:text-white px-5 py-3 rounded font-semibold text-sm transition-colors"
          >
            Browse Courses <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
