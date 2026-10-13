import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig, contactConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Kasat Virtual College of Education (KVCE) website.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-[#101F49] py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-gray-400 mb-3" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-gray-500">/</li>
              <li className="text-white">Privacy Policy</li>
            </ol>
          </nav>
          <h1 className="text-white text-3xl lg:text-4xl font-bold">Privacy Policy</h1>
          <p className="text-gray-300 mt-2 text-sm">Last updated: October 2026</p>
        </div>
      </div>

      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-sm max-w-none">
            <div className="space-y-8 text-[#26324A]">
              <div>
                <h2 className="text-[#101F49] text-xl font-bold mb-3">1. Introduction</h2>
                <p className="text-sm leading-relaxed text-[#667085]">
                  {siteConfig.name} ("{siteConfig.shortName}") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website at <a href={siteConfig.url} className="text-[#A20D65] hover:underline">{siteConfig.url}</a> or contact us for educational enquiries.
                </p>
              </div>

              <div>
                <h2 className="text-[#101F49] text-xl font-bold mb-3">2. Information We Collect</h2>
                <p className="text-sm leading-relaxed text-[#667085] mb-2">We may collect the following information when you contact us:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-[#667085]">
                  <li>Name and contact details (phone number, email) when you enquire via WhatsApp or email</li>
                  <li>Programme interests and enquiry information you share with us</li>
                  <li>Basic website analytics data (page visits, referral sources) through anonymised tools</li>
                </ul>
              </div>

              <div>
                <h2 className="text-[#101F49] text-xl font-bold mb-3">3. How We Use Your Information</h2>
                <p className="text-sm leading-relaxed text-[#667085] mb-2">We use the information you provide to:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-[#667085]">
                  <li>Respond to your course and admission enquiries</li>
                  <li>Provide guidance on suitable programmes and universities</li>
                  <li>Send relevant information about courses and admissions (only when requested)</li>
                  <li>Improve our website and services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-[#101F49] text-xl font-bold mb-3">4. WhatsApp Communications</h2>
                <p className="text-sm leading-relaxed text-[#667085]">
                  When you initiate contact through WhatsApp, your messages are subject to WhatsApp's own Privacy Policy in addition to ours. We use WhatsApp solely for educational enquiry and admission guidance purposes. We do not share your WhatsApp details with third parties without your consent.
                </p>
              </div>

              <div>
                <h2 className="text-[#101F49] text-xl font-bold mb-3">5. Data Sharing</h2>
                <p className="text-sm leading-relaxed text-[#667085]">
                  We do not sell, rent, or trade your personal information to third parties. We may share limited information with our partner universities strictly for the purpose of admission processing, and only with your explicit consent.
                </p>
              </div>

              <div>
                <h2 className="text-[#101F49] text-xl font-bold mb-3">6. Data Security</h2>
                <p className="text-sm leading-relaxed text-[#667085]">
                  We take reasonable precautions to protect your information. However, no method of internet transmission or electronic storage is completely secure. We encourage you to contact us only through our official channels listed on this website.
                </p>
              </div>

              <div>
                <h2 className="text-[#101F49] text-xl font-bold mb-3">7. External Links</h2>
                <p className="text-sm leading-relaxed text-[#667085]">
                  Our website may contain links to partner university websites and social media platforms. We are not responsible for the privacy practices of those external sites. We encourage you to review their individual privacy policies.
                </p>
              </div>

              <div>
                <h2 className="text-[#101F49] text-xl font-bold mb-3">8. Your Rights</h2>
                <p className="text-sm leading-relaxed text-[#667085]">
                  You have the right to request access to, correction of, or deletion of personal information we hold about you. To exercise these rights, please contact us at <a href={`mailto:${contactConfig.email}`} className="text-[#A20D65] hover:underline">{contactConfig.email}</a>.
                </p>
              </div>

              <div>
                <h2 className="text-[#101F49] text-xl font-bold mb-3">9. Changes to This Policy</h2>
                <p className="text-sm leading-relaxed text-[#667085]">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page. We encourage you to review this policy periodically.
                </p>
              </div>

              <div>
                <h2 className="text-[#101F49] text-xl font-bold mb-3">10. Contact Us</h2>
                <p className="text-sm leading-relaxed text-[#667085]">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-[#F7F7FA] border border-[#E3E5EC] rounded p-4 mt-3 space-y-1">
                  <p className="text-sm text-[#26324A] font-semibold">{siteConfig.name}</p>
                  <p className="text-sm text-[#667085]">{contactConfig.address}</p>
                  <p className="text-sm text-[#667085]">Email: <a href={`mailto:${contactConfig.email}`} className="text-[#A20D65]">{contactConfig.email}</a></p>
                  <p className="text-sm text-[#667085]">Phone: {contactConfig.phone1Display}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
