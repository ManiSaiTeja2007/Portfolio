// src/utils/projectsData.ts
import type { Project, ProjectCategory } from '@/types/project';

export const projectCategories: ProjectCategory[] = [
  {
    id: 'react',
    name: 'React & Web Tooling',
    color: 'text-cyan-600 dark:text-cyan-400',
    description: 'Local-first web applications, comparison engines, and interactive developer interfaces',
    projects: [
      {
        id: 'manisaitejabejjala-portfolio',
        title: 'ManiSaiTejaBejjalaPortfolio - Hardware-Informed Portfolio',
        description: 'A professional, high-performance developer portfolio website highlighting the unique intersection of low-level systems thinking and modern web development.',
        shortDescription: 'Systems-informed developer portfolio showing hardware and software synergy',
        problem: 'Standard developer portfolios look generic and fail to highlight how an ECE background (understanding hardware registers and memory) benefits frontend performance and layout optimization.',
        solution: 'Built a lightweight, responsive React 19 SPA utilizing Tailwind CSS for styling and Framer Motion for stable, layout-shift-free animations. Integrated dynamic GitHub stat displays and a metric tracker.',
        impact: 'Achieved a perfect 100/100 Lighthouse performance rating with a page load time of under 1.2s and zero Cumulative Layout Shift (CLS).',
        imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
        fallbackImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
        liveUrl: 'https://manisaitejabejjala-portfolio.vercel.app/',
        githubUrl: 'https://github.com/ManiSaiTeja2007/ManiSaiTejaBejjalaPortfolio',
        projectUrl: '/projects/react/manisaitejabejjala-portfolio',
        technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion', 'Zustand'],
        tags: [
          { id: 'react', name: 'React', color: '#61dafb' },
          { id: 'typescript', name: 'TypeScript', color: '#3178c6' },
          { id: 'portfolio', name: 'Portfolio', color: '#4caf50' },
        ],
        category: 'react',
        featured: true,
        featuredOrder: 1,
        challenges: [
          'Configuring smooth Framer Motion transitions without creating layout shifts (CLS)',
          'Optimizing Tailwind utility classes and bundle size for instant page load',
          'Creating responsive custom layouts compatible with dark and light themes'
        ],
        learnings: [
          'Advanced React 19 hooks and layout effects',
          'Responsive design principles using Tailwind grid and flexbox',
          'Techniques to achieve perfect Lighthouse audits'
        ],
        metrics: [
          { label: 'Page Load', value: '< 1.2s', improvement: '90th percentile speed' },
          { label: 'Lighthouse Score', value: '100/100', improvement: 'Perfect score' },
          { label: 'Layout Shift (CLS)', value: '0.0', improvement: 'Completely stable rendering' }
        ]
      },
      {
        id: 'diffchecker',
        title: 'DiffChecker - Multi-Format Client-Side Difference Engine',
        description: 'A highly optimized, Monaco-powered browser application for computing and rendering visual differences across text inputs, files, folders, PDFs, and images completely on the client side.',
        shortDescription: 'Client-side Monaco-powered text, image, PDF, and folder comparison tool',
        problem: 'Uploading proprietary code, document files, or images to online diff checkers exposes sensitive company IP and results in latency overhead.',
        solution: 'Built a local-first, zero-network-egress SPA that loads the Monaco editor compiler and executes custom AST/line-by-line diff engines. Implemented PDF rendering layouts and structural directory-tree difference algorithms.',
        impact: 'Guarantees 100% data privacy with local processing, supports comparisons of up to 10MB text blocks instantly at 60fps, and tracks comparison histories using localStorage.',
        imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&w=800&q=80',
        fallbackImage: 'https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&w=800&q=80',
        liveUrl: 'https://manisaitejabejjala-diffchecker.vercel.app/',
        githubUrl: 'https://github.com/ManiSaiTeja2007/DiffChecker',
        projectUrl: '/projects/react/diffchecker',
        technologies: ['TypeScript', 'Vite', 'Monaco Editor', 'PDFJS', 'Canvas API'],
        tags: [
          { id: 'typescript', name: 'TypeScript', color: '#3178c6' },
          { id: 'monaco', name: 'Monaco', color: '#00bc70' },
          { id: 'privacy', name: 'Local-First', color: '#2196f3' },
        ],
        category: 'react',
        featured: true,
        featuredOrder: 2,
        challenges: [
          'Integrating complex Monaco editor layout calls inside dynamic sidebar collapses without triggering flickering',
          'Parsing binary PDF text streams and mapping layout segments onto side-by-side comparison frames',
          'Designing a clean folder-tree comparison algorithm to show deleted, modified, and added nodes'
        ],
        learnings: [
          'Monaco editor compiler options and layout management',
          'Dynamic CSS variables and themes injection',
          'Client-side binary file analysis and memory safety'
        ],
        metrics: [
          { label: 'Data Egress', value: '0.0 (Local)', improvement: '100% private processing' },
          { label: 'Max File Size', value: '10 MB', improvement: 'Smooth line-by-line comparison' },
          { label: 'Render Latency', value: '< 50ms', improvement: 'Fast ast mapping algorithms' }
        ]
      }
    ],
  },
  {
    id: 'go',
    name: 'Go & Systems',
    color: 'text-blue-600 dark:text-blue-400',
    description: 'High-performance backend systems, proxy gateways, and servers built in Go',
    projects: [
      {
        id: 'aeroproxy',
        title: 'AeroProxy - L7 Reverse Proxy, Load Balancer & Edge Gateway',
        description: 'An enterprise-grade Layer-7 Reverse Proxy, Load Balancer, and Distributed Edge Gateway built in Go, featuring EWMA predictive routing, stateful circuit breaking, and gossip-protocol cluster state sync.',
        shortDescription: 'High-performance L7 reverse proxy & edge gateway in Go',
        problem: 'Traditional load balancers rely on static round-robin or simple random routing, which fails to optimize backend usage in systems with variable response times.',
        solution: 'Built a Go reverse proxy with Exponentially Weighted Moving Average (EWMA) predictive latency routing, stateful circuit breaking, and distributed consensus via memberlist gossip.',
        impact: 'Reduces average service latency by 28% under high load, automatically isolates failing nodes within 100ms, and scales rate limit synchronization across 10+ cluster nodes.',
        imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
        fallbackImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
        githubUrl: 'https://github.com/ManiSaiTeja2007/AeroProxy',
        projectUrl: '/projects/go/aeroproxy',
        technologies: ['Go', 'Prometheus', 'memberlist', 'Gossip Protocol', 'EWMA', 'Makefile'],
        tags: [
          { id: 'go', name: 'Go', color: '#00ADD8' },
          { id: 'systems', name: 'Systems Programming', color: '#4a5568' },
          { id: 'proxy', name: 'Reverse Proxy', color: '#e53e3e' },
        ],
        category: 'go',
        featured: true,
        featuredOrder: 3,
        challenges: [
          'Synchronizing cluster block-states dynamically without blocking fast-path network requests',
          'Implementing locks and memory-safe atomic states for latency metrics collection',
          'Simulating high concurrency loads to test circuit breaker transition periods'
        ],
        learnings: [
          'Gossip protocol state syncing and memberlist integrations',
          'Low-level network socket handling and reverse proxy transport in Go',
          'Prometheus metrics instrumentation and exporter configuration'
        ],
        metrics: [
          { label: 'Node Isolation Speed', value: '< 100ms', improvement: 'Fast circuit breaker transition' },
          { label: 'Latency Reduction', value: '28%', improvement: 'Under high load scenarios' },
          { label: 'Monitored Ports', value: '8080, 9090, 7946', improvement: 'Clean network structure' }
        ]
      }
    ],
  },
  {
    id: 'android',
    name: 'Android & Edge AI',
    color: 'text-green-600 dark:text-green-400',
    description: 'Local mobile OCR pipelines, computer vision, and Android applications',
    projects: [
      {
        id: 'nutriguard',
        title: 'NutriGuard - Edge AI Deterministic Food Packaging Semantic Platform',
        description: 'An advanced Android mobile application executing local Edge AI, zoning OCR, and semantic understanding pipelines to audit food ingredient safety and highlight allergen traces.',
        shortDescription: 'Edge AI deterministic food packaging semantic audit app',
        problem: 'Ingredients on food packaging are often printed in small, cluttered font with complex chemical names, making allergen scanning slow and unreliable.',
        solution: 'Developed a Kotlin/Java Android app using Google ML Kit OCR, structured zone extraction, and local offline semantic dictionary matching to highlight unsafe additives instantly.',
        impact: 'Classifies ingredients with 94.2% precision, processes camera frame audits locally in under 350ms, and operates completely offline to protect user privacy.',
        imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
        fallbackImage: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
        githubUrl: 'https://github.com/ManiSaiTeja2007/NutriGuard',
        projectUrl: '/projects/android/nutriguard',
        technologies: ['Kotlin', 'Android SDK', 'Google ML Kit', 'TinyML', 'Gradle', 'JUnit'],
        tags: [
          { id: 'android', name: 'Android', color: '#3ddc84' },
          { id: 'ocr', name: 'OCR', color: '#00bc70' },
          { id: 'ai', name: 'Edge AI', color: '#ff9800' },
        ],
        category: 'android',
        featured: true,
        featuredOrder: 4,
        challenges: [
          'Refining text classification bounds under irregular surface warp (cylindrical bottles)',
          'Designing a low-overhead local dictionary matching database running on threads',
          'Maintaining comprehensive Android instrumented test coverage (AVD & real devices)'
        ],
        learnings: [
          'Zoning algorithm design for raw text layout recovery',
          'Automated project governance frameworks (Project State Package tracking)',
          'Android CameraX API integration and low-latency image analysis'
        ],
        metrics: [
          { label: 'Zoning Precision', value: '94.2%', improvement: 'Accurate text layout retrieval' },
          { label: 'Execution Latency', value: '< 350ms', improvement: 'Local edge thread processing' },
          { label: 'Governance Status', value: '🟢 Verified', improvement: 'Fully automated PSP compliance' }
        ]
      }
    ],
  },
  {
    id: 'python',
    name: 'Python & Data Analytics',
    color: 'text-yellow-600 dark:text-yellow-400',
    description: 'Data analytics, physics orbital models, machine learning, and automation scripting',
    projects: [
      {
        id: 'space-debris-tracker',
        title: 'SpaceDebrisTracker - Orbit Propagation & Collision Risk Simulator',
        description: 'A physics-informed space debris tracking system combining Julia circular orbit simulations with Python SGP4 reference propagations to track satellite and debris paths.',
        shortDescription: 'Orbit simulation and telemetry analysis system in Python & Julia',
        problem: 'Tracking thousands of space debris nodes in Low Earth Orbit (LEO) requires solving complex differential orbital equations with high precision and low runtime latency.',
        solution: 'Developed a hybrid pipeline executing core Keplerian physics and noise perturbation models in Julia, retrieving TLE data from CelesTrak, and propagating orbits using python-sgp4 with 3D visualizations.',
        impact: 'Propagates orbits with noise bounds (sigma position/velocity variances) and generates 3D interactive plots for space catalog orbits.',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
        fallbackImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
        githubUrl: 'https://github.com/ManiSaiTeja2007/space-debris-tracker',
        projectUrl: '/projects/python/space-debris-tracker',
        technologies: ['Julia', 'Python', 'SGP4', 'Plotly', 'CelesTrak API', 'Keplerian Physics'],
        tags: [
          { id: 'julia', name: 'Julia', color: '#96ceb4' },
          { id: 'python', name: 'Python', color: '#3776ab' },
          { id: 'physics', name: 'Physics-Informed', color: '#4caf50' },
        ],
        category: 'python',
        featured: true,
        featuredOrder: 5,
        challenges: [
          'Resolving ECI vs ECEF coordinate conversions across Julia and Python modules',
          'Simulating orbit propagation noise without accumulating double-precision rounding drift'
        ],
        learnings: [
          'Keplerian orbital dynamics and SGP4 propagation specifications',
          'Cross-language process communication and shell orchestration'
        ],
        metrics: [
          { label: 'Orbit Solver Speed', value: '< 1ms / step', improvement: 'Fast mathematical solvers' },
          { label: 'Reference Target', value: 'ISS SGP4', improvement: 'Validated against CelesTrak data' },
          { label: 'Coordinate System', value: 'ECI & ECEF', improvement: 'Stable coordinate mapping' }
        ]
      },
      {
        id: 'churn-predictor',
        title: 'ChurnPredictor - Customer Telemetry Analytics & Forecasting System',
        description: 'A modular customer churn analytics and forecasting platform running machine learning training models (Random Forest) to evaluate retention risks and generate detailed feature importances and partial dependency plots.',
        shortDescription: 'Customer retention prediction model with 17+ analytics visualizations',
        problem: 'Businesses suffer from unexpected user churn without clear visibility into the predictive factors (like support calls or payment delay).',
        solution: 'Built a modular Python pipeline that preprocesses raw datasets, trains a Random Forest classifier with 98% precision on 64k+ rows, generates 17 analytics plots, and exposes a Flask API.',
        impact: 'Accurately predicts user churn with 98% precision and identifies primary churn indicators (usage frequency, tenure, support calls) in seconds.',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        fallbackImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        githubUrl: 'https://github.com/ManiSaiTeja2007/ChurnPredictor',
        projectUrl: '/projects/python/churn-predictor',
        technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Flask', 'React', 'Matplotlib'],
        tags: [
          { id: 'ml', name: 'Machine Learning', color: '#f37626' },
          { id: 'analytics', name: 'Data Visualizations', color: '#a855f7' },
          { id: 'prediction', name: 'Predictive Analytics', color: '#00bc70' },
        ],
        category: 'python',
        featured: true,
        featuredOrder: 6,
        challenges: [
          'Handling high-cardinality nominal values and scaling skewed features without causing leakage',
          'Creating Partial Dependency Plots (PDPs) for multi-feature correlations efficiently'
        ],
        learnings: [
          'Machine learning feature engineering and model evaluation metrics',
          'Exploratory Data Analysis and distribution curves generation',
          'Model serialization (pickle) and REST API deployment'
        ],
        metrics: [
          { label: 'Model Precision', value: '98%', improvement: 'Random Forest classifier' },
          { label: 'Dataset Size', value: '64.3K rows', improvement: 'High volume sample testing' },
          { label: 'Plots Generated', value: '17 visuals', improvement: 'Detailed partial dependency maps' }
        ]
      },
      {
        id: 'epoch-gemini-docs',
        title: 'Gemini Documentation Generator - Multi-Agent Docstrings & README Platform',
        description: 'A production-grade documentation automation platform powered by Google Gemini AI. Features dual specialized AI agents (Docstring Agent and README Agent) to analyze codebase structure, generate Google-style docstrings, and tree-mapped project READMEs.',
        shortDescription: 'Multi-agent AI platform generating docstrings & README files',
        problem: 'Writing docstrings and READMEs is tedious and often skipped, leading to poor codebase maintenance and stale documentation.',
        solution: 'Built an automated pipeline utilizing LangChain and Google Gemini 2.5 Flash. Traverses codebases, parses AST trees, builds visual directory maps, and caches results.',
        impact: 'Won the AI Tooling Category at the Nasiko Labs Hackathon. Traverses up to 500 files and generates visual markdown code trees instantly.',
        imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&w=800&q=80',
        fallbackImage: 'https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&w=800&q=80',
        githubUrl: 'https://github.com/ManiSaiTeja2007/Epoch_ManiSaiTeja_Nasiko',
        projectUrl: '/projects/python/epoch-gemini-docs',
        technologies: ['Python', 'FastAPI', 'Google Gemini 2.5 Flash', 'LangChain', 'AST Parsing', 'Jinja2'],
        tags: [
          { id: 'python', name: 'Python', color: '#3776ab' },
          { id: 'llm', name: 'Gemini AI', color: '#8e75b2' },
          { id: 'hackathon', name: 'Winner', color: '#ffd700' },
        ],
        category: 'python',
        featured: false,
        featuredOrder: 7,
        challenges: [
          'Handling complex nested AST structures in large codebases without token limits overflow',
          'Implementing multi-file parsing limits, safety constraints (ZIP bomb prevention), and LRU cache',
          'Prompt engineering for consistent Google-style docstring outputs'
        ],
        learnings: [
          'Multi-agent prompts engineering and chaining with LangChain',
          'Abstract Syntax Tree (AST) parsing in Python for syntax analysis',
          'FastAPI integration for high-performance file uploads'
        ],
        metrics: [
          { label: 'Hackathon Result', value: 'Winner', improvement: 'AI Tooling Category' },
          { label: 'File Capacity', value: '500 files', improvement: 'Robust local parser' },
          { label: 'Upload Max', value: '50 MB', improvement: 'Fast async decompression' }
        ]
      },
      {
        id: 'file-to-folder-converter',
        title: 'Markdown ↔ Project Generator',
        description: 'A versatile Python automation tool that performs bidirectional conversions between Markdown specifications (containing file trees and code blocks) and actual project folders.',
        shortDescription: 'Bidirectional Markdown tree to structured project generator',
        problem: 'Iterating between design specs (written in Markdown) and codebases is manual and prone to sync errors when folders are scaffolded.',
        solution: 'Developed a bidirectional parser that reads ASCII trees and files to generate directory hierarchies, and vice-versa, respecting .gitignore rules.',
        impact: 'Allows scaffolding full repositories from structured project specs in seconds with automated reports and zip archiving.',
        imageUrl: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80',
        fallbackImage: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80',
        githubUrl: 'https://github.com/ManiSaiTeja2007/fileTofolderConverter',
        projectUrl: '/projects/python/file-to-folder-converter',
        technologies: ['Python 3.12', 'markdown-it-py', 'Pathlib', 'CLI Automation'],
        tags: [
          { id: 'python', name: 'Python', color: '#3776ab' },
          { id: 'automation', name: 'Automation', color: '#4caf50' },
          { id: 'scaffolding', name: 'Scaffolding', color: '#9c27b0' },
        ],
        category: 'python',
        featured: false,
        featuredOrder: 8,
        challenges: [
          'Handling edge cases with unassigned code blocks and recovery hints',
          'Escaping and parsing nested markdown code fences (fences inside fences)',
          'Ensuring exact round-trip folder reproducibility'
        ],
        learnings: [
          'Markdown tokenizer trees parsing and AST structures',
          'Standard library Pathlib manipulation and CLI option flags',
          'File permissions and cross-platform path conversions'
        ],
        metrics: [
          { label: 'Scaffold Time', value: '< 50ms', improvement: 'Near instantaneous setup' },
          { label: 'Validation', value: 'Strict Mode', improvement: 'Fails early on errors' },
          { label: 'Supported Python', value: '3.12+', improvement: 'Modern syntax features' }
        ]
      }
    ]
  }
];

// Helper functions
export const getProjectById = (id: string): Project | undefined => {
  // First try to find in all projects
  for (const category of projectCategories) {
    const project = category.projects.find((p: Project) => p.id === id);
    if (project) return project;
  }

  // If not found, try case-insensitive search
  for (const category of projectCategories) {
    const project = category.projects.find((p: Project) =>
      p.id.toLowerCase() === id.toLowerCase()
    );
    if (project) return project;
  }

  return undefined;
};

export const findProjectByPartialId = (partialId: string): Project | undefined => {
  for (const category of projectCategories) {
    const project = category.projects.find((p: Project) =>
      p.id.includes(partialId) || partialId.includes(p.id)
    );
    if (project) return project;
  }

  return undefined;
};

export const getAllProjects = (): Project[] => {
  return projectCategories.flatMap(category => category.projects);
};

export const getFeaturedProjects = (): Project[] => {
  return getAllProjects()
    .filter((project: Project) => project.featured)
    .sort((a: Project, b: Project) => (a.featuredOrder || 99) - (b.featuredOrder || 99));
};

export const getProjectsByCategory = (categoryId: string): Project[] => {
  const category = projectCategories.find(cat => cat.id === categoryId);
  return category ? category.projects : [];
};

export const getCategoryById = (categoryId: string): ProjectCategory | undefined => {
  return projectCategories.find(cat => cat.id === categoryId);
};

export const getCategories = (): ProjectCategory[] => {
  return projectCategories;
};

// Get projects by tier (for strategic display)
export const getTieredProjects = () => {
  const allProjects = getAllProjects();

  return {
    // Tier 1: Complex Systems (show architecture thinking)
    complex: allProjects.filter((p: Project) =>
      ['aeroproxy', 'nutriguard'].includes(p.id)
    ),

    // Tier 2: UI/UX Focus (show design sensibility)
    ui: allProjects.filter((p: Project) =>
      ['manisaitejabejjala-portfolio', 'diffchecker'].includes(p.id)
    ),

    // Tier 3: Hardware/IoT (show unique blend)
    hardware: allProjects.filter((p: Project) =>
      ['nutriguard'].includes(p.id)
    ),

    // Tier 4: Algorithms & Performance (show optimization)
    algorithms: allProjects.filter((p: Project) =>
      ['aeroproxy', 'space-debris-tracker', 'churn-predictor', 'epoch-gemini-docs', 'file-to-folder-converter'].includes(p.id)
    ),
  };
};

// Get project metrics summary for quick stats
export const getPortfolioMetrics = () => {
  const projects = getAllProjects();

  return {
    totalProjects: projects.length,
    featuredProjects: projects.filter((p: Project) => p.featured).length,
    totalTechnologies: new Set(projects.flatMap(p => p.technologies)).size,
    categories: projectCategories.length,
    estimatedImpact: projects.reduce((sum: number, p: Project) => {
      const impact = p.metrics?.[1]?.improvement || '';
      const match = impact.match(/(\d+)%/);
      return sum + (match ? parseInt(match[1]) : 0);
    }, 0),
  };
};

// For search functionality
export const searchProjects = (query: string): Project[] => {
  const searchTerm = query.toLowerCase();
  return getAllProjects().filter((project: Project) =>
    project.title.toLowerCase().includes(searchTerm) ||
    project.description.toLowerCase().includes(searchTerm) ||
    project.shortDescription?.toLowerCase().includes(searchTerm) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchTerm)) ||
    project.tags.some(tag => tag.name.toLowerCase().includes(searchTerm))
  );
};

// For filtering by technology
export const getProjectsByTechnology = (technology: string): Project[] => {
  return getAllProjects().filter((project: Project) =>
    project.technologies.some(tech =>
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

// Get related projects (for detail pages)
export const getRelatedProjects = (projectId: string, limit: number = 3): Project[] => {
  const project = getProjectById(projectId);
  if (!project) return [];

  // Find projects with similar technologies or categories
  const related = getAllProjects()
    .filter((p: Project) =>
      p.id !== projectId &&
      (p.category === project.category ||
        p.technologies.some(tech => project.technologies.includes(tech)))
    )
    .slice(0, limit);

  return related;
};

// Featured projects (main showcase)
export const featuredProjects = getFeaturedProjects();

// All projects for the all projects page
export const allProjects = getAllProjects();
