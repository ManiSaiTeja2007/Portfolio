/**
 * Dynamic Academic Progress Calculator
 * Calculates ordinal year (1st, 2nd, 3rd, 4th), semester, and status dynamically
 * based on start year and graduation year. Single point of truth.
 */
export const calculateAcademicProgress = (startYear = 2024, graduationYear = 2028) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 0 = Jan, 8 = Sept, 11 = Dec

  // Academic year in Indian universities starts in June (Month 5).
  // If month >= June (5), we are in the first half of academic year (e.g. Sept 2026 -> 2026-2027 session).
  // If month < June, we are in the second half of academic year (e.g. Feb 2027 -> 2026-2027 session).
  const academicSessionStartYear = currentMonth >= 5 ? currentYear : currentYear - 1;
  const yearIndex = academicSessionStartYear - startYear + 1;

  const ordinals = ['1st', '2nd', '3rd', '4th', '5th'];
  const ordinalYear = ordinals[Math.max(0, Math.min(yearIndex - 1, 4))] || `${yearIndex}th`;

  // Semester calculation:
  // Odd semesters (1, 3, 5, 7) run from June to December (months 5 to 11)
  // Even semesters (2, 4, 6, 8) run from January to May (months 0 to 4)
  const isOddSemester = currentMonth >= 5;
  const semester = Math.max(1, (yearIndex - 1) * 2 + (isOddSemester ? 1 : 2));

  const isGraduated = currentYear > graduationYear || (currentYear === graduationYear && currentMonth >= 5);

  const yearLabel = isGraduated
    ? 'Graduate / Alumnus'
    : `${ordinalYear} Year (${startYear}-${graduationYear})`;

  const semesterLabel = isGraduated
    ? 'Alumnus'
    : `${ordinalYear} Year • ${semester}${semester === 1 ? 'st' : semester === 2 ? 'nd' : semester === 3 ? 'rd' : 'th'} Sem`;

  return {
    startYear,
    graduationYear,
    yearIndex,
    ordinalYear,
    semester,
    yearLabel,
    semesterLabel,
    isGraduated,
  };
};

export const currentAcademicProgress = calculateAcademicProgress(2024, 2028);

export const PERSONAL_INFO = {
  firstName: 'Mani Sai Teja',
  lastName: 'Bejjala',
  name: 'Mani Sai Teja Bejjala',
  fullName: 'Mani Sai Teja Bejjala',
  title: 'Data Analyst & Systems Engineer',
  description: `${currentAcademicProgress.ordinalYear} Year ECE student at IIIT Sri City bridging high-performance systems programming, data analytics, and physics-informed modeling with low-overhead interface design.`,
  email: 'manisaiteja2007@gmail.com',
  location: 'Chittoor, Andhra Pradesh, India',
  startYear: 2024,
  graduationYear: 2028,
  college: 'IIIT Sri City, Chittoor',
  collegeUrl: 'https://iiits.ac.in/',
  availability: 'Available for internships, projects, and collaborations',
};

// Academic Information
export const ACADEMIC_INFO = {
  degree: 'B.Tech in Electronics and Communication Engineering',
  year: currentAcademicProgress.yearLabel,
  semester: `${currentAcademicProgress.semester}th Semester`,
  ordinalYear: currentAcademicProgress.ordinalYear,
  progress: currentAcademicProgress,
  gpa: '7.1/10 CGPA (Current)',
  relevantCourses: [
    'Digital Electronics',
    'Computer Organization',
    'Data Structures & Algorithms',
    'Object Oriented Programming',
    'Signals and Systems',
    'Network Theory',
    'Microprocessors',
    'Probability & Random Processes',
  ],
  achievements: [
    'Winner of Nasiko Labs Hackathon (AI Tooling Category)',
    'Developing orbital physics-informed space debris tracking models',
    'Built custom distributed Go proxy routing engines',
  ],
};

// Social Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/manisaiteja2007',
  linkedin: 'https://www.linkedin.com/in/mani-sai-teja-bejjala',
  kaggle: 'https://www.kaggle.com/bejjalamanisaiteja',
  hashnode: 'https://hashnode.com/@ManiSaiTejaBejjala',
  discord: 'https://discord.com/users/manisaiteja7509',
  codepen: 'https://codepen.io/bejjala-mani-sai-teja',
  devto: 'https://dev.to/manisaiteja2007',
  twitter: 'https://twitter.com/manisaiteja_b',
  leetcode: 'https://leetcode.com/u/manisaiteja2007/',
};

// Site Configuration
export const SITE_CONFIG = {
  url: 'https://manisaitejabejjala-portfolio.vercel.app/',
  title: 'Mani Sai Teja Bejjala | Hardware-Informed Frontend Development',
  description: 'ECE student blending hardware understanding with modern web development. Exploring AI/ML, IoT, and full-stack development.',
  author: 'Mani Sai Teja Bejjala',
  keywords: ['Frontend Developer', 'ECE Student', 'React Developer', 'IoT', 'AI/ML', 'IIIT Sri City', 'Web Development'],
};

// Section IDs for navigation
export const SECTION_IDS = [
  'hero',
  'stats',
  'about',
  'value-propositions',
  'skills',
  'projects',
  'experience',
  'connect',
  'contact',
  'fun-fact',
];

// Colors
export const COLORS = {
  primary: '#4f46e5',
  secondary: '#14b8a6',
  accent: '#d69e2e',
  dark: '#0f172a',
  light: '#f8fafc',
};

// Tech Stack Categories
export const TECH_CATEGORIES = [
  'Data Analytics & ML',
  'Systems Programming',
  'Edge AI & IoT',
  'Databases & Querying',
  'Developer Tooling',
  'Programming Languages',
];

// Current Focus Areas
export const FOCUS_AREAS = [
  'Data Analytics & Physics-Informed Modeling',
  'High-Performance Systems & Routing in Go',
  'Edge AI & Mobile Processing in Kotlin',
  'Monaco-based Diff Verification Systems',
  'Orbits & Space Debris Telemetry Tracking',
];

// Goals
export const GOALS = [
  'Deploy production-ready distributed proxy gateways',
  'Publish orbital analysis research for satellite collision avoidance',
  'Validate edge machine learning inference pipelines',
  'Design high-speed UDP data streaming engines',
  'Master system design and high-volume data architecture',
];

// Availability Status
export const AVAILABILITY = {
  status: 'actively-seeking',
  types: ['Internships', 'Freelance Projects', 'Collaborations', 'Research Opportunities'],
  timeline: 'Summer 2026',
  location: 'Remote',
};

// GitHub Stats Configuration
export const GITHUB_CONFIG = {
  username: 'manisaiteja2007',
  theme: {
    light: 'default',
    dark: 'dracula',
  },
};

// Value Propositions Key Benefits
export const VALUE_PROPS_BENEFITS = [
  'Performance-Optimized Code',
  'System-Level Thinking',
  'Future-Proof Architecture',
  'Seamless Integration',
  'Hardware-Informed Design',
  'Clean TypeScript Code',
  'Edge AI Awareness',
  'Low-Latency First',
  'ECE-Backed Perspective',
  'Open-Source Contributor',
  'Cross-Platform Thinking',
  'Data-Driven Development',
];

// Fun Facts Configuration
export const FUN_FACTS = {
  quote: "I love blending my ECE background with frontend development, constantly experimenting with new tech stacks to create innovative projects that seamlessly bridge hardware and software!",
  paragraphs: [
    "When I'm not coding, you can find me exploring new IoT projects, contributing to open-source, or learning about the latest advancements in web technologies.",
    "I believe that the best solutions come from understanding both the hardware and software sides of technology."
  ],
};

