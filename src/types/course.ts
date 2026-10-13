export interface Course {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  category: CourseCategory;
  qualification: string;
  description: string;
  specialisations?: string[];
  subjects?: string[];
  duration?: string;
  eligibility?: string;
  mode?: string;
  image?: string;
}

export type CourseCategory =
  | 'education'
  | 'physical-education'
  | 'arts'
  | 'commerce'
  | 'science'
  | 'computer-applications'
  | 'management'
  | 'law'
  | 'school-junior-college'
  | 'diplomas'
  | 'pg-diplomas'
  | 'vocational'
  | 'phd'
  | 'b-voc';

export interface CourseCategoryInfo {
  id: CourseCategory;
  label: string;
  icon: string;
  description: string;
}
