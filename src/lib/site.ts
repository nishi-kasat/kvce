export const CONTACT = {
  name: "Kasat Virtual College of Education",
  short: "KVCE",
  phone: "+91 97657 97123",
  phoneRaw: "919765797123",
  email: "admissions@kasatvce.in",
  location: "Palghar, Maharashtra",
} as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About KVCE", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Career Guidance", to: "/career-guidance" },
  { label: "Admissions", to: "/admissions" },
  { label: "Success Stories", to: "/success-stories" },
  { label: "Contact", to: "/contact" },
] as const;

export const PROGRAM_OPTIONS = [
  "Online Bachelor's Degree",
  "Online Master's Degree",
  "B.Ed / D.El.Ed",
  "LL.B / LL.M",
  "Professional Certification",
  "Not sure yet",
] as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${CONTACT.phoneRaw}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailtoLink(subject: string, body: string) {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

export type ProgramCategory = {
  id: string;
  label: string;
  courses: { name: string; duration: string; eligibility: string }[];
};

export const PROGRAMS: ProgramCategory[] = [
  {
    id: "online-degrees",
    label: "Online Degrees",
    courses: [
      { name: "Bachelor of Arts (BA)", duration: "3 Years", eligibility: "10+2 in any stream" },
      { name: "Bachelor of Commerce (B.Com)", duration: "3 Years", eligibility: "10+2 (Commerce preferred)" },
      { name: "Bachelor of Business Administration (BBA)", duration: "3 Years", eligibility: "10+2 in any stream" },
      { name: "Bachelor of Computer Applications (BCA)", duration: "3 Years", eligibility: "10+2 with Mathematics" },
    ],
  },
  {
    id: "postgraduate",
    label: "Postgraduate Degrees",
    courses: [
      { name: "Master of Arts (MA)", duration: "2 Years", eligibility: "Graduation in any discipline" },
      { name: "Master of Commerce (M.Com)", duration: "2 Years", eligibility: "B.Com or equivalent" },
      { name: "Master of Business Administration (MBA)", duration: "2 Years", eligibility: "Graduation in any stream" },
      { name: "Master of Computer Applications (MCA)", duration: "2 Years", eligibility: "Graduation with Mathematics" },
    ],
  },
  {
    id: "education",
    label: "Education Programs",
    courses: [
      { name: "Bachelor of Education (B.Ed)", duration: "2 Years", eligibility: "Graduation with 50%" },
      { name: "Diploma in Elementary Education (D.El.Ed)", duration: "2 Years", eligibility: "10+2 with 50%" },
      { name: "Master of Education (M.Ed)", duration: "2 Years", eligibility: "B.Ed with 50%" },
      { name: "Certificate in Teaching", duration: "6 Months", eligibility: "10+2 pass" },
    ],
  },
  {
    id: "law",
    label: "Law Programs",
    courses: [
      { name: "Bachelor of Laws (LL.B)", duration: "3 Years", eligibility: "Graduation in any stream" },
      { name: "Integrated BA LL.B", duration: "5 Years", eligibility: "10+2 with 45%" },
      { name: "Master of Laws (LL.M)", duration: "2 Years", eligibility: "LL.B degree" },
      { name: "Diploma in Cyber Law", duration: "1 Year", eligibility: "Graduation in any stream" },
    ],
  },
  {
    id: "certifications",
    label: "Professional Certifications",
    courses: [
      { name: "Digital Marketing Certification", duration: "4 Months", eligibility: "Open to all" },
      { name: "Data Analytics Certification", duration: "6 Months", eligibility: "Basic computer skills" },
      { name: "Human Resource Management", duration: "3 Months", eligibility: "Open to all" },
      { name: "Financial Accounting & Tally", duration: "3 Months", eligibility: "Open to all" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Now: HR Manager",
    program: "Online MBA",
    rating: 5,
    quote:
      "KVCE helped me complete my MBA while working full-time. The counseling was honest and the support team was always available. I got promoted within a year.",
  },
  {
    name: "Rahul Deshmukh",
    role: "Now: Primary School Teacher",
    program: "B.Ed",
    rating: 5,
    quote:
      "I was confused about which education degree to choose. KVCE's counselors guided me perfectly and the admission process was completely stress-free.",
  },
  {
    name: "Aisha Khan",
    role: "Returned to education after 8 years",
    program: "Online BA",
    rating: 5,
    quote:
      "As a homemaker, I thought college was behind me. KVCE made flexible learning possible and treated me with so much respect throughout my journey.",
  },
  {
    name: "Vikram Patil",
    role: "Career Changer → IT Analyst",
    program: "BCA + Data Analytics",
    rating: 5,
    quote:
      "The personalised pathway from BCA to a data analytics certification changed my career completely. Worth every rupee and minute invested.",
  },
];
