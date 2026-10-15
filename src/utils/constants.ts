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
  title: 'Robotics & Systems Engineer',
  description: `${currentAcademicProgress.ordinalYear} Year ECE student at IIIT Sri City specializing in robotics, embedded systems, autonomous control, and sensor fusion. Actively seeking Summer 2027 technical internships.`,
  email: 'manisaiteja2007@gmail.com',
  location: 'Chittoor, Andhra Pradesh, India',
  startYear: 2024,
  graduationYear: 2028,
  college: 'IIIT Sri City, Chittoor',
  collegeUrl: 'https://iiits.ac.in/',
  availability: 'Available for Summer 2027 Robotics & Systems Internships',
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
    'Robotics & Control Systems',
    'Embedded Systems & Microprocessors',
    'Signals and Systems',
    'Digital Electronics & VLSI',
    'Computer Organization',
    'Data Structures & Algorithms',
    'Probability & Random Processes',
    'Linear Control Theory',
  ],
  achievements: [
    'Winner of Nasiko Labs Hackathon (AI Tooling Category)',
    'Developing orbital physics-informed space debris tracking models',
    'Architecting autonomous robotics control loops and embedded sensor pipelines',
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
  title: 'Mani Sai Teja Bejjala | Robotics & Systems Engineer',
  description: 'ECE student at IIIT Sri City specializing in robotics, autonomous systems, embedded firmware, and edge AI. Seeking Summer 2027 internships.',
  author: 'Mani Sai Teja Bejjala',
  keywords: ['Robotics Engineer', 'Embedded Systems', 'ROS', 'Autonomous Systems', 'ECE Student', 'IIIT Sri City', 'Control Systems', 'Edge AI', 'C++'],
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

// Global Navigation Links (Single source of truth)
export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#connect', label: 'Connect' },
  { href: '#stats', label: 'Stats' },
  { href: '#contact', label: 'Contact' },
  { href: '#fun-fact', label: 'Fun Fact' },
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
  'Robotics & Autonomous Systems',
  'Embedded Systems & Microcontrollers',
  'Systems Programming (C/C++, Go)',
  'Edge AI & Computer Vision',
  'Data Analytics & Simulation',
  'Developer Tooling',
];

// Current Focus Areas
export const FOCUS_AREAS = [
  'Robotics Kinematics, Control & ROS Simulations',
  'Embedded Firmware & Real-Time Control in C/C++',
  'Sensor Fusion (LiDAR, IMU, Camera) & OpenCV Vision',
  'Orbital Dynamics & Space Debris Telemetry Simulation',
  'High-Performance Systems & Distributed Networking in Go',
];

// Goals
export const GOALS = [
  'Secure a Summer 2027 technical internship in Robotics or Systems Engineering',
  'Develop autonomous mobile robot (AMR) navigation and SLAM pipelines',
  'Implement real-time sensor fusion and motor control on embedded microcontrollers',
  'Publish orbital analysis research for satellite collision avoidance',
  'Master real-time operating systems (RTOS) and robust embedded design',
];

// Availability Status
export const AVAILABILITY = {
  status: 'actively-seeking',
  types: ['Robotics Internships', 'Embedded Systems Internships', 'Systems Engineering', 'Research Opportunities'],
  timeline: 'Summer 2027',
  location: 'On-site / Hybrid / Remote',
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
  'Robotics Kinematics & Control',
  'Embedded RTOS & Firmware',
  'Sensor Fusion (LiDAR, IMU, Camera)',
  'Real-Time Control Loops',
  'Low-Latency C/C++ Systems',
  'Edge AI & Computer Vision (OpenCV)',
  'Hardware-Software Integration',
  'Physics-Informed Modeling',
  'ECE-Backed Perspective',
  'Autonomous Systems Architecture',
  'High-Speed Telemetry Streaming',
  'Continuous Experimentation',
];

// Hero Configuration (Single source of truth)
export const HERO_CONFIG = {
  badgeText: 'Robotics & Embedded Systems',
  liveBadgeText: 'SUMMER 2027',
  greeting: "Hello, I'm",
  typingTexts: [
    'Robotics & Autonomous Systems',
    '3rd Year ECE @ IIIT Sri City',
    'Embedded Systems & Edge AI',
    'Seeking Summer 2027 Internship',
  ],
  descriptionLead: 'Engineering',
  descriptionHighlight1: 'autonomous robotics pipelines',
  descriptionMiddle: ',',
  descriptionHighlight2: 'embedded control loops',
  descriptionEnd: ', and low-latency systems. My ECE background combines hardware-level kinematics, sensor physics, and algorithmic intelligence — seeking technical internships for Summer 2027.',
  ctaProjects: 'View Projects',
  ctaContact: "Let's Connect",
  techPills: [
    { label: 'ROS / Robotics', color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30' },
    { label: 'C / C++', color: 'text-blue-400 bg-blue-500/10 border-blue-500/30' },
    { label: 'Embedded / STM32', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
    { label: 'OpenCV / Vision', color: 'text-teal-400 bg-teal-500/10 border-teal-500/30' },
    { label: 'Python', color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30' },
    { label: 'Go / Systems', color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' },
  ],
  terminalTitle: 'SYS_LOGIC_SIM v2.4 — GATE_EMULATOR',
};

// About Configuration (Single source of truth)
export const ABOUT_CONFIG = {
  badge: 'About Me',
  heading: 'Robotics & Systems Engineer',
  subtitle: 'Engineering autonomous robotics pipelines, embedded control loops, and physical telemetry simulations from hardware registers to intelligent software.',
  philosophyTitle: 'My Philosophy',
  philosophyParagraphs: [
    `I'm ${PERSONAL_INFO.name}, a 3rd-year B.Tech student majoring in ${ACADEMIC_INFO.degree} at ${PERSONAL_INFO.college}.`,
    'My ECE engineering background provides a unique systems & physics perspective. I understand that every robotic actuator, every IMU sensor packet, and every control loop is bound by physical clock cycles, motor torques, and logic gates on silicon.',
    'This awareness guides how I build autonomous systems and embedded architectures — ensuring control algorithms are mathematically rigorous, deterministic, and optimized for real-time responsiveness.',
  ],
  principlesHeading: 'My Engineering Principles',
  principlesSubtitle: 'Six core engineering values that guide how I build and scale technology systems.',
  tabs: {
    robotics: {
      id: 'robotics' as const,
      label: '[The Robotics Engineer]',
      shortLabel: '[Robotics]',
      heading: 'Robotics Kinematics & Control',
      description: 'Modeling robotic forward & inverse kinematics, ROS simulations, PID control loops, and autonomous path planning',
      sectionLabel: 'Relevant Core Coursework',
    },
    systems: {
      id: 'systems' as const,
      label: '[The Systems & Hardware Dev]',
      shortLabel: '[Systems]',
      heading: 'Embedded Systems & Firmware',
      description: 'Developing embedded C/C++ firmware, peripheral drivers (I2C/SPI/UART), FreeRTOS task scheduling, and distributed Go systems',
      sectionLabel: 'High-Performance Focus Areas',
    },
    edge: {
      id: 'edge' as const,
      label: '[Edge AI & Vision]',
      shortLabel: '[Edge AI]',
      heading: 'Edge AI & Computer Vision',
      description: 'Perception algorithms using OpenCV, sensor fusion (IMU/LiDAR), on-device edge ML models, and orbital kinematics simulation',
      sectionLabel: 'Engineering Methodologies',
      methodologies: [
        'Real-time visual perception and tracking pipelines via OpenCV',
        'Physics-informed orbital simulation & SGP4 telemetry propagation',
        'Sensor fusion and low-latency motor actuator feedback loops',
      ],
    },
  },
};

// Value Propositions Configuration (Single source of truth)
export const VALUE_PROPOSITIONS_CONFIG = {
  badge: 'Systems Value',
  heading: 'Where Silicon Meets Autonomous Motion',
  subtitle: 'My engineering perspective combines physical hardware constraints, control kinematics, and intelligent software to deliver exceptional technical depth.',
  cards: [
    {
      id: 'silicon-actuators',
      title: 'Silicon & Actuators → Physical Robotics',
      description: 'My ECE engineering background provides unique hardware insights. From low-level microcontrollers and motor drivers to real-time control loops, I design systems that reliably bridge electrical hardware with mechanical motion.',
      color: 'from-blue-600 to-cyan-500',
      iconType: 'cpu' as const,
      delay: 0.1,
    },
    {
      id: 'sensor-fusion',
      title: 'Sensor Fusion → Autonomous Perception',
      description: 'I approach robotics holistically. Combining IMU, LiDAR, and camera vision feeds via OpenCV and edge inference, I architect cohesive perceptual pipelines rather than isolated software silos.',
      color: 'from-purple-600 to-pink-500',
      iconType: 'layers' as const,
      delay: 0.2,
    },
    {
      id: 'low-latency',
      title: 'Low-Latency Systems → Deterministic Control',
      description: 'Robotics demands strict timing predictability. I engineer high-performance software in C++, Python, and Go, developing real-time control loops and telemetry streaming that perform under tight latency budgets.',
      color: 'from-green-600 to-emerald-500',
      iconType: 'trending' as const,
      delay: 0.3,
    },
  ],
};

// Experience Section Configuration (Single source of truth)
export const EXPERIENCE_CONFIG = {
  badge: 'My Journey So Far',
  heading: 'Learning & Growth Path',
  subtitle: 'Building a strong foundation in robotics control, embedded systems, physical computing, and algorithmic practice.',
  lookingAheadHeading: 'Looking Ahead',
  lookingAheadGoals: [
    {
      goal: 'Summer 2027 Robotics Internship',
      description: 'Apply ECE foundations, ROS simulations, and embedded control to real-world autonomous systems.',
      icon: '🤖',
      color: 'border-blue-200 dark:border-blue-800/40 hover:border-blue-400',
    },
    {
      goal: 'Autonomous Hardware Systems',
      description: 'Develop end-to-end robotics systems combining real-time control, SLAM, and computer vision.',
      icon: '⚙️',
      color: 'border-purple-200 dark:border-purple-800/40 hover:border-purple-400',
    },
    {
      goal: 'Open-Source Robotics & Systems',
      description: 'Contribute core features, embedded drivers, and telemetry simulation packages to the developer community.',
      icon: '🌟',
      color: 'border-amber-200 dark:border-amber-800/40 hover:border-amber-400',
    },
  ],
};

// Contact Section Configuration (Single source of truth)
export const CONTACT_CONFIG = {
  badge: "Let's Collaborate",
  heading: "Let's Build Something Amazing",
  subtitle: 'Have a robotics project in mind, seeking an intern, or want to discuss low-level systems? I’d love to connect.',
  collaborationPitch: {
    heading: 'Why Collaborate?',
    description: "You get an engineer who understands both embedded hardware constraints and autonomous robotics systems. Let's construct robust robotics algorithms, real-time sensor pipelines, and deterministic control architectures.",
  },
  statusFeedback: {
    successTitle: 'Message Dispatched!',
    successSubtitle: "Thank you for reaching out. I'll get back to you shortly.",
  },
};

// Connect Platforms Configuration (Single source of truth)
export const CONNECT_CONFIG = {
  badge: 'Community & Code',
  heading: 'Find Me Across the Web',
  subtitle: 'Explore my repositories, competitive programming journeys, and developer community presence.',
  platforms: [
    {
      name: 'GitHub',
      handle: '@manisaiteja2007',
      url: SOCIAL_LINKS.github,
      description: 'Open-source robotics tools, embedded systems, and physics simulators.',
      accentBg: 'bg-slate-800/40 hover:bg-slate-800/60',
      accentText: 'text-white',
      accentBorder: 'border-slate-700/60 hover:border-slate-500',
      stats: 'Repositories',
    },
    {
      name: 'LinkedIn',
      handle: 'in/mani-sai-teja-bejjala',
      url: SOCIAL_LINKS.linkedin,
      description: 'Professional updates, academic milestones, and engineering articles.',
      accentBg: 'bg-blue-950/40 hover:bg-blue-950/60',
      accentText: 'text-blue-400',
      accentBorder: 'border-blue-900/40 hover:border-blue-700/60',
      stats: 'Connections',
    },
    {
      name: 'LeetCode',
      handle: 'u/manisaiteja2007',
      url: SOCIAL_LINKS.leetcode,
      description: 'Competitive programming algorithms, problem solving, and data structures in C++.',
      accentBg: 'bg-amber-950/40 hover:bg-amber-950/60',
      accentText: 'text-amber-400',
      accentBorder: 'border-amber-900/40 hover:border-amber-700/60',
      stats: 'Problems Solved',
    },
    {
      name: 'Kaggle',
      handle: 'bejjalamanisaiteja',
      url: SOCIAL_LINKS.kaggle,
      description: 'Exploratory data analysis, ML models, and predictive notebooks.',
      accentBg: 'bg-cyan-950/40 hover:bg-cyan-950/60',
      accentText: 'text-cyan-400',
      accentBorder: 'border-cyan-900/40 hover:border-cyan-700/60',
      stats: 'Notebooks',
    },
    {
      name: 'Discord',
      handle: 'manisaiteja7509',
      url: SOCIAL_LINKS.discord,
      description: 'Community discussions on robotics, hardware hacking, and systems.',
      accentBg: 'bg-indigo-950/40 hover:bg-indigo-950/60',
      accentText: 'text-indigo-400',
      accentBorder: 'border-indigo-900/40 hover:border-indigo-700/60',
      stats: 'In Servers',
    },
    {
      name: 'CodePen',
      handle: 'bejjala-mani-sai-teja',
      url: SOCIAL_LINKS.codepen,
      description: 'Interactive telemetry concepts, UI experiments, and simulation canvases.',
      accentBg: 'bg-slate-800/40 hover:bg-slate-800/60',
      accentText: 'text-white',
      accentBorder: 'border-slate-700/60 hover:border-slate-500',
      stats: 'Pens',
    },
    {
      name: 'Dev.to',
      handle: '@manisaiteja2007',
      url: SOCIAL_LINKS.devto,
      description: 'Technical articles on robotics kinematics, embedded firmware, and systems programming.',
      accentBg: 'bg-slate-800/40 hover:bg-slate-800/60',
      accentText: 'text-slate-200',
      accentBorder: 'border-slate-700/60 hover:border-slate-500',
      stats: 'Posts',
    },
  ],
};

// Fun Facts Configuration (Single source of truth)
export const FUN_FACTS = {
  badge: 'Behind the Code',
  heading: 'Telemetry & Fun Facts',
  quote: "I love fusing my ECE hardware foundations with robotics and autonomous systems, developing algorithms that navigate the physical world with precision, speed, and mathematical rigor!",
  paragraphs: [
    "When I'm not coding, you can find me experimenting with microcontrollers, tuning PID control loops, exploring ROS robotics simulations, or diving into space orbital mechanics.",
    "I believe the most compelling engineering happens at the nexus of physical hardware constraints, sensor physics, and intelligent algorithmic control."
  ],
  terminalLines: [
    { prompt: '$', text: 'whoami', color: 'text-slate-300' },
    { prompt: '>', text: 'mani_sai_teja_bejjala :: Robotics_Engineer + Systems_Dev', color: 'text-emerald-400' },
    { prompt: '$', text: 'cat /etc/interests', color: 'text-slate-300' },
    { prompt: '>', text: '[Robotics, Autonomous_Systems, Embedded_Firmware, Orbital_Physics, Edge_AI]', color: 'text-cyan-400' },
    { prompt: '$', text: 'systemctl status curiosity.service', color: 'text-slate-300' },
    { prompt: '●', text: 'curiosity.service - Active (running) for 20 years, 3 months', color: 'text-emerald-400' },
  ],
};

// Projects Configuration (Single source of truth)
export const PROJECTS_CONFIG = {
  badge: 'Strategic Project Portfolio',
  heading: 'Building Solutions That Matter',
  subtitle: 'Each project showcases a unique technical challenge — organized to demonstrate depth across robotics, embedded hardware, edge AI, and telemetry systems.',
  emptyMessage: 'No projects in this category yet',
  emptySubtext: 'More coming soon — check back or view all projects',
  footerNote: 'Projects demonstrating technical breadth and systems thinking',
  footerAvailability: 'Available for Summer 2027 technical internships & discussions',
};

// Skills Configuration (Single source of truth)
export const SKILLS_CONFIG = {
  badge: 'Technical Toolkit',
  heading: 'Technologies I Work With',
  subtitlePrefix: '',
  subtitleSuffix: '+ technologies spanning robotics, embedded hardware, low-latency systems, and autonomous intelligence.',
};

// Stats Configuration (Single source of truth)
export const STATS_CONFIG = {
  badge: 'GitHub Live Console',
  heading: 'System Telemetry',
  subtitle: 'Real-time hardware & software activity dashboard logs from my public endpoints.',
};

// Footer Configuration (Single source of truth)
export const FOOTER_CONFIG = {
  bio: 'ECE student at IIIT Sri City bridging hardware intelligence with autonomous robotics and systems development. Building systems that matter — from silicon to telemetry.',
  statusTitle: 'Seeking Internships',
  statusTimeline: 'Available for Summer 2027',
};

