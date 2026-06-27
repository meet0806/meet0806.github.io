export const profile = {
  name: 'Meet Zalavadiya',
  shortName: 'Meet Z.',
  role: 'Software Engineer',
  tagline:
    'Software Engineer & M.S. Data Science candidate building scalable backend systems, event-driven services, and AI infrastructure.',
  summary:
    'Software Engineer pursuing an M.S. in Data Science with 3+ years of experience building scalable backend systems, cloud-native applications, and distributed services. I design microservices, event-driven architectures, and fault-tolerant systems using Python, Java, C++, Kafka, Kubernetes, and AWS. I love solving large-scale engineering problems, contributing to open source, and shipping reliable, customer-focused products.',
  email: 'zalavadiyameet0806@gmail.com',
  phone: '934-246-0503',
  github: 'meet0806',
  githubUrl: 'https://github.com/meet0806',
  linkedinUrl: 'https://linkedin.com/in/meet-zalavadiya',
}

export const education = [
  {
    school: 'Stony Brook University',
    location: 'Stony Brook, NY',
    degree: 'M.S. in Data Science',
    period: 'Aug 2024 – May 2026',
  },
  {
    school: 'University of Pune',
    location: 'Pune, India',
    degree: 'B.E. in Computer Engineering',
    period: 'Aug 2018 – May 2022',
  },
]

export interface Experience {
  company: string
  role: string
  location: string
  period: string
  points: string[]
}

export const experience: Experience[] = [
  {
    company: 'Work4Flow',
    role: 'Software Engineer Intern',
    location: 'Remote',
    period: 'Oct 2025 – May 2026',
    points: [
      'Built cloud-native microservices using Python, Kafka, AWS Lambda, DynamoDB, and Kubernetes supporting enterprise workflow automation.',
      'Designed scalable event-driven architectures for long-running workflows with retry mechanisms, state management, audit logging, and fault-tolerant execution.',
      'Developed distributed Kafka pipelines processing 100K+ events/day, improving throughput, resiliency, and system scalability.',
      'Implemented monitoring, structured logging, alerting, and production debugging, reducing incident resolution time by 35%.',
      'Participated in code reviews, CI/CD deployments, and Agile sprint planning across cross-functional engineering teams.',
    ],
  },
  {
    company: 'Genmark AI',
    role: 'Software Engineer Intern',
    location: 'Remote',
    period: 'Jul 2025 – Aug 2025',
    points: [
      'Built backend APIs using Python, TypeScript, PostgreSQL, Redis, Docker, Kubernetes, and GCP for AI-powered applications.',
      'Optimized database queries, caching strategies, and inter-service communication, reducing API latency from 1.2s to 350ms.',
      'Integrated AI-assisted development tools including GitHub Copilot and Claude to improve implementation speed, testing, and code quality.',
    ],
  },
  {
    company: 'Accenture',
    role: 'Application Development Associate',
    location: 'Pune, India',
    period: 'Aug 2022 – Aug 2024',
    points: [
      'Developed enterprise backend applications using Java, Python, SQL, Linux, and REST APIs supporting 50K+ daily transactions.',
      'Improved application scalability through query optimization, deployment automation, production troubleshooting, and performance tuning.',
      'Participated in code reviews, testing, CI/CD releases, and debugging production issues across distributed engineering teams.',
    ],
  },
]

export interface Project {
  title: string
  blurb: string
  points: string[]
  tech: string[]
  links: { label: string; href: string }[]
  live?: boolean
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'CSDS Jobs — Automated Job Application Platform',
    blurb:
      'A live platform that automatically discovers relevant Data Science & SWE roles and submits tailored applications end to end.',
    points: [
      'Automates job discovery, form-filling, and submission with a resilient scraping + automation pipeline.',
      'Uses LLMs to tailor resumes and cover letters per posting, tracking application status in a dashboard.',
      'Deployed as a full-stack web app with a React front end and a Python automation backend.',
    ],
    tech: ['Python', 'FastAPI', 'React', 'Playwright', 'PostgreSQL', 'LLMs'],
    links: [{ label: 'Live site', href: 'https://csdsjobs.duckdns.org' }],
    live: true,
    featured: true,
  },
  {
    title: 'Collab Canvas — Real-Time Multiplayer Whiteboard',
    blurb:
      'A production-oriented multiplayer whiteboard with conflict-free shared state, live cursors, and Rust/WASM rendering.',
    points: [
      'Conflict-free shared canvas via Yjs CRDTs with a y-websocket sync service and live multi-user cursor presence.',
      'Rendering isolated in a Web Worker with Rust/WebAssembly rasterization for pressure-aware strokes and bounding boxes.',
      'Per-user undo/redo, pan/zoom, and a room/session API designed to swap in-memory state for PostgreSQL/Redis.',
    ],
    tech: ['React', 'TypeScript', 'Rust', 'WebAssembly', 'Yjs', 'WebSockets'],
    links: [
      { label: 'Live site', href: 'https://collab-canvas-0w69.onrender.com/' },
      { label: 'GitHub', href: 'https://github.com/meet0806/collab-canvas' },
    ],
    live: true,
    featured: true,
  },
  {
    title: 'Graphite — Open-Source Contributions',
    blurb:
      'Merged contributions to Graphite (26k+ stars), an open-source vector graphics editor built in Rust + WebAssembly.',
    points: [
      'Fixed artboard labels not reappearing after closing the node graph and returning to the viewport (PR #3061).',
      'Added quick-measurement support to the Artboard tool for distances between artboard edges (PR #3102).',
      'Both PRs merged into master after maintainer review in a large production Rust/WASM codebase.',
    ],
    tech: ['Rust', 'WebAssembly', 'Open Source'],
    links: [
      { label: 'Repo', href: 'https://github.com/GraphiteEditor/Graphite' },
      { label: 'PR #3061', href: 'https://github.com/GraphiteEditor/Graphite/pull/3061' },
      { label: 'PR #3102', href: 'https://github.com/GraphiteEditor/Graphite/pull/3102' },
    ],
  },
]

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Languages',
    items: ['Python', 'C++', 'Java', 'TypeScript', 'JavaScript', 'Go', 'Rust', 'SQL'],
  },
  {
    group: 'AI / ML',
    items: [
      'PyTorch',
      'Hugging Face',
      'Transformers',
      'LLM Integration',
      'RAG',
      'Prompt Engineering',
      'Model Evaluation',
    ],
  },
  {
    group: 'Distributed Systems',
    items: [
      'Kafka',
      'Event-Driven Systems',
      'Concurrency',
      'Fault Tolerance',
      'Scalability',
      'Long-Running Workflows',
    ],
  },
  {
    group: 'Cloud & Infrastructure',
    items: ['AWS Lambda', 'AWS EKS', 'DynamoDB', 'GCP', 'Docker', 'Kubernetes', 'Linux'],
  },
  {
    group: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'DynamoDB', 'Redis', 'MongoDB', 'Elasticsearch'],
  },
  {
    group: 'Developer Tools',
    items: ['Git', 'GitHub Actions', 'GitLab CI/CD', 'Cursor', 'Claude', 'GitHub Copilot'],
  },
]
