export const siteConfig = {
  name: 'Kasat Virtual College of Education',
  shortName: 'KVCE',
  tagline: 'Educating Since 1999',
  description: 'Kasat Virtual College of Education (KVCE) offers 100+ career-focused specialisations in online degrees, partnered with UGC recognised universities across India.',
  url: 'https://www.kasatvce.in',
  ogImage: '/images/branding/kvce-logo.jpg',
  since: '1999',
};

export const contactConfig = {
  phone1: '+919867260123',
  phone1Display: '+91 9867260123',
  phone2: '+919272797123',
  phone2Display: '+91 9272797123',
  whatsappNumber: '919765797123',
  whatsappDisplay: '+91 9765797123',
  email: 'info@kasatvce.in',
  website: 'https://www.kasatvce.in',
  address: 'Palghar, Virar, Bhayandar, Maharashtra, India',
  addressShort: 'Palghar, Virar, Bhayandar',
  social: {
    facebook: 'https://www.facebook.com/kasatvce',
    instagram: 'https://www.instagram.com/kasatvce',
  },
};

export function getWhatsAppUrl(message?: string): string {
  const defaultMessage = 'Hello Kasat Virtual College of Education, I would like to enquire about your courses and admission process.';
  const encoded = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encoded}`;
}

export function getCourseWhatsAppUrl(courseName: string): string {
  const message = `Hello Kasat Virtual College of Education, I would like to enquire about the ${courseName} programme and its admission process.`;
  return getWhatsAppUrl(message);
}
