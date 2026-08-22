// Arabic labels for the values the filter dropdowns and the "at a glance"
// panels are built from. These are labels only — the underlying values stay
// the English strings, because that is what entries are actually filtered and
// sorted on. Translating the value itself would mean translating every
// comparison in the app too.

export const categories = {
  'Architecture & Built Environment': 'العمارة والبيئة العمرانية',
  'Arts & Humanities': 'الآداب والعلوم الإنسانية',
  Business: 'إدارة الأعمال',
  Education: 'التربية والتعليم',
  Engineering: 'الهندسة',
  Health: 'العلوم الصحية',
  Law: 'القانون',
  'Natural Sciences': 'العلوم الطبيعية',
  STEM: 'العلوم والتكنولوجيا',
  'Social Sciences': 'العلوم الاجتماعية',
}

export const fields = {
  'Arts & Culture': 'الفنون والثقافة',
  Business: 'الأعمال',
  Communication: 'الإعلام والاتصال',
  Design: 'التصميم',
  Education: 'التعليم',
  Engineering: 'الهندسة',
  Health: 'الصحة',
  Law: 'القانون',
  'Public Sector': 'القطاع العام',
  Research: 'البحث العلمي',
  Science: 'العلوم',
  'Social Impact': 'العمل الاجتماعي',
  Technology: 'التكنولوجيا',
}

export const routes = {
  Abroad: 'في الخارج',
  'Egypt or abroad': 'في مصر أو الخارج',
  'In Egypt': 'في مصر',
}

export const activityTypes = {
  Volunteering: 'التطوع',
  'Clubs & Societies': 'الأندية والجمعيات',
  Competitions: 'المسابقات',
  Leadership: 'القيادة',
  'Work Experience': 'الخبرة العملية',
  'Creative & Arts': 'الفنون والإبداع',
  'Sports & Wellbeing': 'الرياضة والصحة',
}

export const workshopCategories = {
  'Soft Skills': 'المهارات الشخصية',
  'Microsoft Skills': 'مهارات مايكروسوفت',
  'Technical Learning': 'التعلم التقني',
  'Creative & Entertainment': 'الإبداع والترفيه',
}

export const scholarshipTypes = {
  'Study in Egypt': 'الدراسة في مصر',
  'Study abroad': 'الدراسة في الخارج',
}

export const scholarshipLevels = {
  Undergraduate: 'البكالوريوس',
  'All levels': 'كل المستويات',
  "Master's": 'الماجستير',
  "Master's & PhD": 'الماجستير والدكتوراه',
  'Undergraduate & postgraduate': 'البكالوريوس والدراسات العليا',
}

export const resourceTypes = {
  Course: 'مقرر',
  Reference: 'مرجع',
  'Study skill': 'مهارة مذاكرة',
  Tool: 'أداة',
  Funding: 'تمويل',
}

export const outlooks = {
  'Growing fast': 'نمو سريع',
  Growing: 'في نمو',
  Stable: 'مستقر',
  Competitive: 'تنافسي',
  Variable: 'متغير',
}

export const mathIntensity = {
  'Very high': 'عالية جدًا',
  High: 'عالية',
  'Medium–High': 'متوسطة إلى عالية',
  Medium: 'متوسطة',
  'Low–Medium': 'منخفضة إلى متوسطة',
  Low: 'منخفضة',
  'None–Low': 'لا تُذكر إلى منخفضة',
  None: 'لا تُذكر',
  'Low (Medium for logic)': 'منخفضة (متوسطة في المنطق)',
}

// Roadmap step kinds — the timeline labels on a career page.
export const roadmapStages = {
  school: 'المدرسة',
  study: 'الدراسة',
  build: 'التطبيق',
  gate: 'مطلوب',
  work: 'العمل',
  grow: 'التطور',
}

const facets = {
  categories,
  fields,
  routes,
  activityTypes,
  workshopCategories,
  scholarshipTypes,
  scholarshipLevels,
  resourceTypes,
  outlooks,
  mathIntensity,
  roadmapStages,
}

export default facets
